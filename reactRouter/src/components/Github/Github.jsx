import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/yashsakhareliya')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <div className='text-center text-3xl w-screen p-4 flex justify-center items-center bg-gray-600'>
      GitHub Followers: {data.followers}
    </div>
  )
}

export default Github
