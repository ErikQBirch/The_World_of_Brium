// import { useSearchParams } from 'react-router-dom';
import { useParams } from "react-router-dom";
import booksJSON from '../assets/books.json';
import './scss/Books_id.scss'
import { ContentRenderer } from "../components/ContentRenderer";

// export default function Books() {
  // const [searchParams] = useSearchParams();
  // const book = searchParams.get('book'); // returns "electronics"  

//   return (
  //     <div>
  //       <h1>Showing results for {book}</h1>
  //       {/* Logic to load specific content based on 'book' */}
  //     </div>s
  //   );
  // }
  
  export default function Books() {
    // const [searchParams] = useSearchParams();
    const { id } = useParams();
    const book = booksJSON.Books.find(book => book.id === id);
    console.log(book);
    // console.log(booksJSON.Books)
   
    return (
      <main className="page books" id="booksIdPage">
          {book && (
            <div className="contentHolder">
              <ContentRenderer items={book.Content.ExtendedSummary} />
              <ContentRenderer items={book.Content.AuthorsComments} />
              <ContentRenderer items={book.Content.ImageGallery} />
            </div>
          )}
        {/* <p>Explore books from the world of Brium.</p> */}
      </main>
    )
}