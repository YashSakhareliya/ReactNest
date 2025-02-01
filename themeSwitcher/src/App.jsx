import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkMode = () => setThemeMode("dark")
  const lightMode = () => setThemeMode("light")

  // change in theme
  useEffect(()=>{
    document.querySelector('html').classList.remove("dark", "light")

    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, darkMode, lightMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* add toggle button */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
          {/* add a card */}
          <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
