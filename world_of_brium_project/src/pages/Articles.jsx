import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Newsletter from './Newsletter'
import Blog from './Blog'
import './scss/Articles.scss'

export default function Articles() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/articles' || location.pathname === '/articles/') {
      navigate('/articles/newsletter', { replace: true })
    }
  }, [location.pathname, navigate])

  const isNewsletter = location.pathname.includes('/articles/newsletter')
  const isBlog = location.pathname.includes('/articles/blog')

  return (
    <>
      {isNewsletter && <Newsletter />}
      {isBlog && <Blog />}
    </>
  )
}
