import { useState } from "react"


function App() {
  const [color , setColor] = useState('olive')

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      {/* this div is for possition fixing */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-12 px-2 ">
        {/* this div is content div contain buttons */}
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          onClick={()=>setColor('Red')}>
            Red</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          onClick={()=>setColor('green')}>
            Green</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "pink"}}
          onClick={()=>setColor('pink')}>
            Pink</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          onClick={()=>setColor('blue')}>
            Blue</button>

        </div>
      </div>
    </div>
  )
}

export default App
