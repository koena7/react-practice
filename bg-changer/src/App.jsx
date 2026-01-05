import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive");

  const changeColor = (newColor) => {
    setColor(newColor);
  }

  return (
    <>
      <div className="flex w-full h-screen justify-center items-end pb-5" style={{backgroundColor:color}}>
      {/* Another div to hold the buttons */}
      <div className="w-fit bg-amber-200 rounded-lg p-5 flex flex-wrap gap-2 justify-center">
        {/* Let's create the buttons */}
        <button className='rounded-lg bg-blue-400 p-2 hover:scale-110 transition' onClick={() => changeColor("#60a5fa")}>Blue</button>
        <button className='rounded-lg bg-pink-400 p-2 hover:scale-110 transition' onClick={() => changeColor("#f472b6")}>Pink</button>
        <button className='rounded-lg bg-green-400 p-2 hover:scale-110 transition' onClick={() => changeColor("#4ade80")}>Green</button>
        <button className='rounded-lg bg-yellow-400 p-2 hover:scale-110 transition' onClick={() => changeColor("#fbbf24")}>Yellow</button>
        <button className='rounded-lg bg-orange-400 p-2 hover:scale-110 transition' onClick={() => changeColor("#fb923c")}>Orange</button>
      </div>
      </div>
    </>
  )
}

export default App
