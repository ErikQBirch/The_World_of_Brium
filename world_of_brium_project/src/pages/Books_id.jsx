import React, { useEffect, useState, useRef } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { useParams } from "react-router-dom";
// import booksJSON from '../assets/books.json';
import booksJSON from '../assets/examples/books_two.json'; 
// import booksJSON from '../assets/examples/books_many.json'; 
import './scss/Books_id.scss'
import { ContentRenderer } from "../components/ContentRenderer";

  export default function Books() {
    // const [searchParams] = useSearchParams();
    const { id } = useParams();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownWrapperRef = useRef(null);
    
    // Scroll to top when page loads or id changes
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [id])

    // Add a page-level class so global elements (like the scroll button)
    // can be scoped to this page even if they're rendered outside the page
    useEffect(() => {
      document.documentElement.classList.add('books-page')
      return () => document.documentElement.classList.remove('books-page')
    }, [])

    useEffect(() => {
      const handleDocumentClick = (event) => {
        if (dropdownOpen && dropdownWrapperRef.current && !dropdownWrapperRef.current.contains(event.target)) {
          setDropdownOpen(false);
        }
      };

      document.addEventListener('click', handleDocumentClick);
      return () => document.removeEventListener('click', handleDocumentClick);
    }, [dropdownOpen]);
    
    console.log('id from params', id);
    console.log('booksJSON', booksJSON);
    console.log('booksJSON.Books', booksJSON.Books);
    const book = booksJSON.Books.find(book => book.id === id);

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };

    const closeDropdown = () => {
      setDropdownOpen(false);
    };

    return (
      <main className="page books" id="booksIdPage">
          {book && (
            <>
              <div className="contentHolder">
                {book.contentSections.map((section, index) => (
                  <ContentRenderer key={section.id || index} content={section} />
                ))}
              </div>

              {/* <a
                className="sticky-external-link"
                href={book.storeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Store
              </a> */}


              <div className="sticky-button-wrapper" ref={dropdownWrapperRef}>
                <button
                  className="sticky-external-link"
                  onClick={toggleDropdown}
                  aria-label="Open store links"
                >
                  Store
                </button>
                {dropdownOpen && (
                  <div className="store-dropdown">
                    {Object.entries(book.storeLinks).map(([store, url]) => (
                      <a
                        key={store}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeDropdown}
                      >
                        {store}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
      </main>
    )
}