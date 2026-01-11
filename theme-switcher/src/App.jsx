import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'
import { useEffect } from 'react'

function App() {
  const [theme, setTheme] = useState('light')

  const lightTheme = () => {
      setTheme("light")
  }

  const darkTheme = () => {
      setTheme("dark")
  }

  useEffect(() => {
    console.log("initial state of theme "+theme)
  }, [])

  useEffect( () => {
    //Ammending the html query which specifies the mode as light or dark.
    //Look at the change in index.css to put the config for dark and light mode change
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(theme)
  }, [theme])

  const extraChange = () => {
    setTheme("dark");
  }

  return (
    <ThemeProvider value = {{theme, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeButton/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card/>
              </div>
              {/* Adding this button to check the sync of toggle button and theme value when changed elsewhere */}
              <button onClick={extraChange}>Change theme to dark here</button>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
