import React, { useState } from 'react'
import NavBar from './components/NavBar'

const App = () => {
  const [darkMode ,setDarkMode] = useState(true)
  const [isOpen ,setIsOpen] = useState(false)

  const toggleMenu = ()=>{
    setIsOpen((prev)=>!prev)
  }
  const toggleTheme = ()=>{
    setDarkMode((prev)=>!prev)
  }
  return (
    <div className={`w-full h-full min-h-screen bg-white ${darkMode ? "dark" : ""}`} >
      <div className=' w-full h-full min-h-screen bg-white  ' >
        <div className='dark:bg-gradient-to-tr from-[#0235a3] via-[#030a1c] to-[#05174e]  '>
          <NavBar darkMode={darkMode} isOpen={isOpen} toggleMenu={toggleMenu} toggleTheme={toggleTheme} />
         
        </div>
      </div>

    </div>
  )
}

export default App