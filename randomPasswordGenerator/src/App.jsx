import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [specialChar, setSpecialChar] = useState(false)

  const passwordRef = useRef(null)

  const generatePassword = useCallback(()=>{
    console.log(length)
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(number){
      str+= "0123456789"
    }
    if (specialChar) str+= "-+*!@#$%^&*()_`~"
    console.log(str)
    
    for (let i=1; i<=length; i++){
      let charindex = Math.floor(Math.random()*str.length+1)
      let char = str.charAt(charindex)
      pass += char
    }
    setPassword(pass)
  },[length,specialChar,number, setPassword])

  const copyToClikboard = () => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    
  }

  useEffect(()=>{
    generatePassword()
  },
  [length,number,specialChar,generatePassword])

  return (
    
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
          <h1 className='text-white text-center my-3'>Password generator</h1>
          <div className='flex shadow overflow-hidden mb-4'>
            <input 
            type="text"
            value={password}
            className='w-full px-3 py-1 text-gray-700'
            readOnly
            ref={passwordRef}
             />

             <button className='px-3 py-1 bg-blue-500 text-white outline-none'
             onClick={copyToClikboard}
             >copy</button>
          </div>

          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
                />
              <label>Length: {length}</label>
            </div>
              <div className="flex items-center gap-x-1">
                <input
                type="checkbox"
                defaultChecked={number}
                id="numberInput"
                onChange={()=>{
                  setNumber((prev)=> !prev)
                }}
                />
                <label htmlFor="numberInput">Numbers</label>
              </div>
            <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                defaultChecked={specialChar}
                id="characterInput"
                onChange={()=>{
                  setSpecialChar(!specialChar)
                }}
                
            />
            <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
          

           
        </div>
        
          
        
       

  )
}

export default App
