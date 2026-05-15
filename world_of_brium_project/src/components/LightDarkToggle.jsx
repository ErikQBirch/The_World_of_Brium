import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'
import {faLightbulb as lightBulb} from '@fortawesome/free-solid-svg-icons'
import {faLightbulb as darkBulb} from '@fortawesome/free-regular-svg-icons'
import './scss/LightDarkToggle.scss'



export default function LightDarkToggle() {
  const [darkMode, setDarkMode] = useState(false)
  
  useEffect(() => {
      document.documentElement.classList.toggle('dark-mode', darkMode)
    }, [darkMode])



  return (
      // <div className="theme-toggle-bar">
        <button className="LightDarkToggle-btn" onClick={() => setDarkMode(prev => !prev)}>
          {/* {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />} */}
          {darkMode ? <FontAwesomeIcon icon={lightBulb} /> : <FontAwesomeIcon icon={darkBulb} />}
        </button>
      // </div>
  )
}
