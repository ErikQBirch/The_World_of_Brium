import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logoImg from '../../public/images/placeholder.jpg';
import './scss/NavBar.scss'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isArticlesDropdownOpen, setIsArticlesDropdownOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleArticlesDropdown = () => {
    setIsArticlesDropdownOpen(!isArticlesDropdownOpen)
  }

  const closeDropdown = () => {
    setIsArticlesDropdownOpen(false)
  }

  return (
    <nav className="nav">
      <NavLink to="/" className="logo">
        <figure>
          <img src={logoImg} alt="The World of Brium" />
        </figure>
      </NavLink>
      <div className="nav-container">
        <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <ul className={isMenuOpen ? 'nav-menu open' : 'nav-menu'}>
          <li><NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/books" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Books</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>About</NavLink></li>
          <li className="articles-dropdown" onMouseEnter={() => setIsArticlesDropdownOpen(true)} onMouseLeave={() => setIsArticlesDropdownOpen(false)}>
            <button className="articles-button" onClick={toggleArticlesDropdown}>Articles</button>
            <ul className={`dropdown-menu ${isArticlesDropdownOpen ? 'open' : ''}`}>
              <li><NavLink to="/articles/newsletter" className={({isActive}) => isActive ? 'active' : ''} onClick={() => { setIsMenuOpen(false); closeDropdown(); }}>Newsletter</NavLink></li>
              <li><NavLink to="/articles/blog" className={({isActive}) => isActive ? 'active' : ''} onClick={() => { setIsMenuOpen(false); closeDropdown(); }}>Blog</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
