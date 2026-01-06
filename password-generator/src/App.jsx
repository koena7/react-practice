import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  // Let's set the required variables
  const [length, setLength] = useState(8);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef();

  const copyToClipboard = () => {
    passRef.current.select();
    window.navigator.clipboard.writeText(passRef.current.value);
  }

  // now we will use useCallback hook, as we need to generate password on different value changes but we also need to use caching and memoization.
  const passGenerator = useCallback(() => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(charactersAllowed) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    if(numbersAllowed) chars += "0123456789";

    let generatedPass = "";

    for(let i=1;i<=length;i++) {
      let randomIndex = Math.floor(Math.random()*chars.length+1);
      generatedPass += chars.charAt(randomIndex);
    }
    setPassword(generatedPass);
  }, [length, numbersAllowed, charactersAllowed, setPassword])

  useEffect(() => {
    passGenerator();
  }, [length, numbersAllowed, charactersAllowed, passGenerator])

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center py-10 px-20'>
        <div className='h-auto w-full p-5 text-center text-xl text-black m-5 px-10 bg-pink-300 rounded-2xl'>
          <div className='text-center text-3xl text-black mb-5'>Password generator</div>
          <div className='flex flex-row m-2 justify-center items-center'>
            <input 
              type="text" 
              readOnly 
              placeholder='password' 
              value={password} 
              ref={passRef}
              className="w-full outline-none bg-amber-50 rounded-l-full p-2 overflow-hidden"/>
              <button className="outline-none hover:bg-pink-500 transition bg-pink-600 py-2 px-5 rounded-r-full" onClick={copyToClipboard}>Copy</button>
          </div>
          <div className='flex flex-row m-2 justify-center items-center my-4'>
            <div className='p-2'>
              <input
                id='lengthInput'
                type='range'
                min='8'
                max='20'
                onChange={(e)=>setLength(e.target.value)}
                className='m-1'/>
              <label htmlFor='lengthInput' className='m-1'>Length: {length}</label>
            </div>

            <div className='p-2'>
              <input
                id='numbersAllowed'
                type='checkbox'
                onChange={(e) => setNumbersAllowed(e.target.checked)}
                className='m-1'/>
              <label htmlFor='numbersAllowed' className='m-1'>Numbers</label>
            </div>

            <div className='p-2'>
              <input
                id='charactersAllowed'
                type='checkbox'
                onChange={() => setCharactersAllowed((prev)=>!prev)}
                className='m-1'/>
              <label htmlFor='charactersAllowed' className='m-1'>Characters</label>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
