import { NavLink } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  return (
    <nav className="nav">
      <ul>
        <li><NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/books" className={({isActive}) => isActive ? 'active' : ''}>Books</NavLink></li>
        <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink></li>
        <li><NavLink to="/blog" className={({isActive}) => isActive ? 'active' : ''}>Blog</NavLink></li>
        <li><NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink></li>
      </ul>
    </nav>
  )
}
