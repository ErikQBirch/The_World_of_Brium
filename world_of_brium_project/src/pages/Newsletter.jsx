import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useParams } from "react-router-dom";
import newslettersJSON from '../assets/newsletters.json'; 
import { Link } from 'react-router-dom';
import './scss/Newsletters.scss'
import { ContentRenderer } from "../components/ContentRenderer";
import ContentComingSoon from '../components/ContentComingSoon';

export default function Newsletter() {
  const navigate = useNavigate()
  const newslettersArray = newslettersJSON.Newsletters;
  console.log('newslettersArray', newslettersArray);
  // const { id } = useParams();
  // const book = booksJSON.Books.find(book => book.id === id);

  // Redirect to book detail if only 1 book exists
  useEffect(() => {
    if (newslettersArray && newslettersArray.length === 1) {
      navigate(`/newsletters/${newslettersArray[0].id}`, { replace: true })
    }
  }, [newslettersArray, navigate])

  

  // if (!book) {
  //   return <main className="page books">Book not found</main>;
  // }

  // Filter seriesArray to only include series that have related books


  return (
    <main id="newslettersPage" className="page newsletters">
      <h1>Newsletters</h1>
      <section className="newslettersContent">
        <div className="newsletters-list">
          {newslettersArray?.length === 0 ? (
            <ContentComingSoon />
          ) : (
            newslettersArray.map(newsletter => (
              <Link to={`/newsletters/${newsletter.id}`} key={newsletter.id} className="newsletter-item">
                <figure>
                  <img src={`${import.meta.env.BASE_URL}${newsletter.bookThmbnail.replace(/^\//,'')}`} alt={newsletter.Headline} />
                </figure>
                <div className="contentHolder_info">
                  <h3>{newsletter.Headline}</h3>
                  <div>{newsletter.datePosted}</div>
                  <p>{newsletter.smallSummary?.length > 250 ? newsletter.smallSummary.substring(0, 250) + '...' : newsletter.smallSummary}</p>
                </div>
              </Link>
            ))
            
          )}
        </div>
      </section>
    </main>
  )
}
