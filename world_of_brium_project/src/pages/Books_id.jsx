import React from 'react';
// import { useSearchParams } from 'react-router-dom';
import { useParams } from "react-router-dom";
import booksJSON from '../assets/books.json';
import './scss/Books_id.scss'
import { ContentRenderer } from "../components/ContentRenderer";
 
  export default function Books() {
    // const [searchParams] = useSearchParams();
    const { id } = useParams();
    const book = booksJSON.Books.find(book => book.id === id);


    return (
      <main className="page books" id="booksIdPage">
          {book && (
            <div className="contentHolder">
              <ContentRenderer
                content={book.contentSections[0]}
              />
              <ContentRenderer
                content={book.contentSections[1]}
              />
              <ContentRenderer
                content={book.contentSections[2]}
              />
              <ContentRenderer
                content={book.contentSections[3]}
              />
            </div>
          )}

      </main>
    )
}