import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import authorJSON from '../assets/author.json'
import './scss/About.scss'
import { ContentRenderer } from '../components/ContentRenderer'
import WordBuilding from './WorldBuilding'

export default function About() {
  const location = useLocation()
  const navigate = useNavigate()
  const author = authorJSON.Author

  useEffect(() => {
    if (location.pathname === '/about' || location.pathname === '/about/') {
      navigate('/about/author', { replace: true })
    }
  }, [location.pathname, navigate])

  const isAuthor = location.pathname.includes('/about/author')
  const isWorldBuilding = location.pathname.includes('/about/worldbuilding')

  return (
    <main className="page books" id="aboutPage">
      {isAuthor && author && (
        <div className="contentHolder">
          <ContentRenderer content={author.contentSections[0]} />
        </div>
      )}

      {isWorldBuilding && <WordBuilding />}
    </main>
  )
}