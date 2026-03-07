// import { useSearchParams } from 'react-router-dom';
import { useParams } from "react-router-dom";


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
    // const book = searchParams.get('book'); // returns "electronics"
   
    return (
      <main className="page books">
        <h2>{id}</h2>
        {/* <p>Explore books from the world of Brium.</p> */}
      </main>
    )
}