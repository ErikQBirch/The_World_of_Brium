// import { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import logoImg from '../../public/images/placeholder.jpg';
import './scss/Footer.scss'

export default function NavBar() {

  return (
    <footer className="footer"> 
      <h3>Footer</h3>
      <section className="footer-links">
        <p>&copy; 2026 The World of Brium. All rights reserved.</p>
      </section>
    </footer>
  )
}
