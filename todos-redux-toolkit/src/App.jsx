import { useState } from 'react'
import './App.css'
import AddTodoForm from './components/AddTodoForm'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Welcome to todos with Redux toolkit</div>
      <AddTodoForm/>
      <Todos/>
    </>
  )
}

export default App
