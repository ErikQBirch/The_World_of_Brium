import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import About from './pages/About'
import Books from './pages/Books'
import Books_id from './pages/Books_id'
import Footer from './components/Footer'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Articles from './pages/Articles'
import Newsletter from './pages/Newsletter'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
  return (
    <Router basename='/The_World_of_Brium'>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<Books_id />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles/*" element={<Articles />} />
          <Route path="/blog" element={<Navigate to="/articles/blog" replace />} />
          <Route path="/newsletter" element={<Navigate to="/articles/newsletter" replace />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <section>
        <Footer />
      </section>
    </Router>
  )
}

export default App

//Are we going to work now?
