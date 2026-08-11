import React from 'react'
import authorJSON from '../assets/author.json'
import './scss/Author.scss'
import { ContentRenderer } from '../components/ContentRenderer'

export default function Author() {
  const author = authorJSON.Author

  return (
    <main className="page books" id="authorPage">
      {author && (
        <div className="contentHolder">
          <ContentRenderer content={author.contentSections[0]} />
        </div>
      )}
    </main>
  )
}
