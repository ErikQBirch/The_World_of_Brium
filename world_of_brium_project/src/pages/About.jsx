import React from 'react';    
// import { useSearchParams } from 'react-router-dom';
// import { useParams } from "react-router-dom";
// import booksJSON from '../assets/books.json';
import authorJSON from '../assets/author.json';
import './scss/Books_id.scss'
import { ContentRenderer } from "../components/ContentRenderer";
 
  export default function About() {
    // const [searchParams] = useSearchParams();
    // const { id } = useParams();
    // const book = booksJSON.Books.find(book => book.id === id);
    
    const author = authorJSON.Author;
    console.log('author', author);
    
    return (
      <main className="page books" id="aboutPage">
          {author && (
            <div className="contentHolder">
              <ContentRenderer
                content={author.contentSections[0]}
              />
            </div>
          )}

      </main>
    )
}