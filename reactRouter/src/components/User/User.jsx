import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()

  return (
    <div className='text-center text-3xl w-screen p-80 flex justify-center items-center'>
      User:{userId}
    </div>
  )
}

export default User
