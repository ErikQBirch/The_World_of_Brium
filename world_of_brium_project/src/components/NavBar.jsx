import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logoImg from '../../public/images/placeholder.jpg';
// import booksJSON from '../assets/books.json'; 
import booksJSON from '../assets/examples/books_two.json'; 
// import booksJSON from '../assets/examples/books_many.json'; 
import './scss/NavBar.scss'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isArticlesDropdownOpen, setIsArticlesDropdownOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleArticlesDropdown = () => {
    setIsArticlesDropdownOpen(!isArticlesDropdownOpen)
  }

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen)
    setIsArticlesDropdownOpen(false)
  }

  const closeDropdown = () => {
    setIsArticlesDropdownOpen(false)
  }

  const closeAboutDropdown = () => {
    setIsAboutDropdownOpen(false)
  }

  const handleBooksClick = (e) => {
    // Check if there's only 1 book
    if (booksJSON.Books && booksJSON.Books.length === 1) {
      e.preventDefault()
      setIsMenuOpen(false)
      navigate(`/books/${booksJSON.Books[0].id}`)
    } else {
      setIsMenuOpen(false)
    }
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
          <li><NavLink to="/books" className={({isActive}) => isActive ? 'active' : ''} onClick={handleBooksClick}>Books</NavLink></li>
          <li className="about-dropdown" onMouseEnter={() => setIsAboutDropdownOpen(true)} onMouseLeave={() => setIsAboutDropdownOpen(false)}>
            <button
              className="about-button"
              onClick={toggleAboutDropdown}
            >
              About
            </button>
            <ul className={`dropdown-menu ${isAboutDropdownOpen ? 'open' : ''}`}>
              <li><NavLink to="/author" className={({isActive}) => isActive ? 'active' : ''} onClick={() => { setIsMenuOpen(false); closeAboutDropdown(); }}>Author</NavLink></li>
              <li><NavLink to="/wordbuilding" className={({isActive}) => isActive ? 'active' : ''} onClick={() => { setIsMenuOpen(false); closeAboutDropdown(); }}>World Building</NavLink></li>
            </ul>
          </li>
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
