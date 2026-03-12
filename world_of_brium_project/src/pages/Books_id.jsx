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
                sectionId="extended-summary"
                sectionType={book.Content.ExtendedSummary.type}
                items={book.Content.ExtendedSummary.elements}
              />
              <ContentRenderer
                sectionId="authors-comments"
                sectionType={book.Content.AuthorsComments.type}
                items={book.Content.AuthorsComments.elements}
              />
              <ContentRenderer
                sectionId="image-gallery"
                sectionType={book.Content.ImageGallery.type}
                items={book.Content.ImageGallery.elements}
              />
              <ContentRenderer
                sectionId="related-books"
                sectionType={book.Content.RelatedBooks.type}
                items={book.Content.RelatedBooks.elements}
              />
            </div>
          )}

      </main>
    )
}