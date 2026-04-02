import React, { useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { useParams } from "react-router-dom";
import booksJSON from '../assets/books.json';
import './scss/Books_id.scss'
import { ContentRenderer } from "../components/ContentRenderer";
 
  export default function Books() {
    // const [searchParams] = useSearchParams();
    const { id } = useParams();
    
    // Scroll to top when page loads or id changes
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [id])
    
    console.log('id from params', id);
    console.log('booksJSON', booksJSON);
    console.log('booksJSON.Books', booksJSON.Books);
    const book = booksJSON.Books.find(book => book.id === id);


    return (
      <main className="page books" id="booksIdPage">
          {book && (
            <div className="contentHolder">
              {book.contentSections.map((section, index) => (
                <ContentRenderer key={section.id || index} content={section} />
              ))}
            </div>
          )}

      </main>
    )
}