import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
// import authorJSON from '../assets/author.json'
import aboutJSON from '../assets/about.json'
// import './scss/About.scss'
// import './scss/InfoPage.scss'
import { ContentRenderer } from '../components/ContentRenderer'

export default function About() {
  const location = useLocation()
  const navigate = useNavigate()
  const author = aboutJSON.About[0]
  const worldBuilding = aboutJSON.About[1]

  useEffect(() => {
    if (location.pathname === '/about' || location.pathname === '/about/') {
      navigate('/about/author', { replace: true })
    }
  }, [location.pathname, navigate])

  const isAuthor = location.pathname.includes('/about/author')
  const isWorldBuilding = location.pathname.includes('/about/worldbuilding')

  return (
    <main className="page books infoPage" id="aboutPage">
      <div className="contentHolder">
        {isAuthor && author && (
            <ContentRenderer content={author.contentSections[0]} />
          )}
        {isWorldBuilding && worldBuilding && (
            <ContentRenderer content={worldBuilding.contentSections[0]} />
          )}
        </div>
    </main>
  )
}