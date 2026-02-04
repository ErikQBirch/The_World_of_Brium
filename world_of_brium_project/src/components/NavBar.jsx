import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './scss/NavBar.scss'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="nav">
      <div className="nav-container">
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <ul className={isMenuOpen ? 'nav-menu open' : 'nav-menu'}>
          <li><NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/books" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Books</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>About</NavLink></li>
          <li><NavLink to="/blog" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Blog</NavLink></li>
          <li><NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
