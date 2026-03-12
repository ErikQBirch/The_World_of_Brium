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

    // state for popup image
    const [popup, setPopup] = React.useState(null);

    // prepare gallery items with click handlers only when book is loaded
    const galleryItems = book
      ? book.Content.ImageGallery.elements.map((item) => ({
          ...item,
          onClick: () => setPopup({ src: item.src, alt: item.alt }),
        }))
      : [];

    return (
      <main className="page books" id="booksIdPage">
          {book && (
            <div className="contentHolder">
              <ContentRenderer sectionId="extended-summary" items={book.Content.ExtendedSummary.elements} />
              <ContentRenderer sectionId="authors-comments" items={book.Content.AuthorsComments.elements} />
              <ContentRenderer sectionId="image-gallery" items={galleryItems} />
              <ContentRenderer sectionId="related-books" items={book.Content.RelatedBooks.elements} />
            </div>
          )}

          {/* overlay popup for clicked images */}
          {popup && (
            <div className="image-popup" onClick={() => setPopup(null)}>
              <div className="inner">
                {/* <button className="close" aria-label="close">×</button> */}
                <img src={popup.src} alt={popup.alt || ''} />
              </div>
            </div>
          )}
      </main>
    )
}