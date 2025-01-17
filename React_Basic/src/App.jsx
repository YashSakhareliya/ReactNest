import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'
import LoginBtn from './components/loginBtn'
import LogoutBtn from './components/logoutBtn'



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
    return(
      <div>
        {isLoggedIn ? <LoginBtn /> : <LogoutBtn />}
      </div>
    )
}

export default App
