// import { useSearchParams } from 'react-router-dom';
import { useParams } from "react-router-dom";
import booksJSON from '../assets/books.json';
import './scss/Books_id.scss'

//   return (
  //     <div>
  //       <h1>Showing results for {book}</h1>
  //       {/* Logic to load specific content based on 'book' */}
  //     </div>
  //   );
  // }
  
  export default function Books() {
    // const [searchParams] = useSearchParams();
    const { id } = useParams();
    const book = booksJSON.Books.find(book => book.id === id);
    console.log(book);
    // console.log(booksJSON.Books)

  


    // for (const book of booksJSON) {
    //   if (book.id === id) {
    //     console.log(book);
    //     break;
    //   }
    // }

    // booksJSON.forEach(element => {
    //   console.log(element)
    // });
    // const book = searchParams.get('book'); // returns "electronics"
   
    return (
      <main className="page books" id="booksIdPage">
          {book && (
            <div className="contentHolder">
              <h1>{book.Title}</h1>
              {/* <p>{book.description}</p> */}
              {book.ExtendedSummary.map((content, index) => {
                switch(content.type) {
                  case "h2":
                    return <h2 key={index}>{content.value}</h2>;
                  case "p":
                    return <p key={index}>{content.value}</p>;
                  default:
                    return null;
                }
              })}
            </div>
          )}
        {/* <p>Explore books from the world of Brium.</p> */}
      </main>
    )
}