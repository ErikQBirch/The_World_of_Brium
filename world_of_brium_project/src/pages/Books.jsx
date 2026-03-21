import React from 'react';
// import { useParams } from "react-router-dom";
import booksJSON from '../assets/books.json'; 
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
    <main className="page books">
      <h2>Books</h2>
      <section>
        {filteredSeries.map((series, index) => (
          <section key={index} className="series">
            <h3>{series.name}</h3>
            {booksArray
              .filter(book => book.seriesID === series.id)
              .map(book => (
                <div key={book.id} className="book-summary">
                  <h3>{book.Title}</h3>
                  <figure>
                    <img src={`${import.meta.env.BASE_URL}${book.bookCover.replace(/^\//,'')}`} alt={book.Title} />
                  </figure>
                  {/* <p>{book.Brief_Summary}</p> */}
                </div>
              ))}
          </section>
        ))}
      </section>
    </main>
  )
}
