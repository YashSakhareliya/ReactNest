import React, { useState, useContext} from 'react'
import UserContext from '../Context/userContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const {setUser} = useContext(UserContext);
    const handelSubmit = (e)=>{
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <input 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        type="text"
        placeholder='Enter username'
        />

        <br />
        
        <input 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        type="text"
        placeholder='Enter password'
        />

      <br />
      <button onClick={handelSubmit}>submit</button>
    </div>
  )
}

export default Login
