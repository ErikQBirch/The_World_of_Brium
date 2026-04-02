import React, { useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { useParams } from "react-router-dom";
import newsLettersJSON from '../assets/newsletters.json';
import './scss/Newsletters_id.scss'
import { ContentRenderer } from "../components/ContentRenderer";
 
  export default function Newsletters() {
    // const [searchParams] = useSearchParams();
    const { id } = useParams();
    
    // Scroll to top when page loads or id changes
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [id])
    
    console.log('id from params', id);
    console.log('newsLettersJSON', newsLettersJSON);
    console.log('newsLettersJSON.Newsletters', newsLettersJSON.Newsletters);
    const newsletter = newsLettersJSON.Newsletters.find(newsletter => newsletter.id === id);


    return (
      <main className="page newsletters" id="newslettersIdPage">
          {newsletter && (
            <div className="contentHolder">
              {newsletter.contentSections.map((section, index) => (
                <ContentRenderer key={section.id || index} content={section} />
              ))}
            </div>
          )}

      </main>
    )
}