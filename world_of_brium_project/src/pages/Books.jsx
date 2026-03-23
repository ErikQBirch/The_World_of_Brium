import React from 'react';
// import { useParams } from "react-router-dom";
import booksJSON from '../assets/books.json'; 
import './scss/Books.scss'
import { ContentRenderer } from "../components/ContentRenderer";

export default function Books() {
  const booksArray = booksJSON.Books;
  const seriesArray = booksJSON.Series;
  console.log('booksArray', booksArray);
  console.log('seriesArray', seriesArray);
  // const { id } = useParams();
  // const book = booksJSON.Books.find(book => book.id === id);

  // if (!book) {
  //   return <main className="page books">Book not found</main>;
  // }

  // Filter seriesArray to only include series that have related books
  const filteredSeries = seriesArray.filter(series => 
    booksArray.some(book => book.seriesID === series.id)
  );

  return (
    <main id="booksPage" className="page books">
      <h1>Books</h1>
      <section className="booksContent">
        {filteredSeries.map((series, index) => (
          <div key={index} className="series">
            <h2>{series.name}</h2>
            <div className="books-list">
              {booksArray
                .filter(book => book.seriesID === series.id)
                .map(book => (
                  <article key={book.id} className="book-item">
                    <figure>
                      <img src={`${import.meta.env.BASE_URL}${book.bookCover.replace(/^\//,'')}`} alt={book.Title} />
                    </figure>
                    <h3>{book.Title}</h3>
                    {/* <p>{book.Brief_Summary}</p> */}
                  </article>
                ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
