import React, { lazy, Suspense, useEffect, useState, useRef, useMemo } from 'react';
import { useParams } from "react-router-dom";
import booksJSON from '../assets/books.json'; 
import { ContentRenderer } from "../components/ContentRenderer";
import './scss/Books_id.scss'
import '../components/scss/infoPage.scss'


export default function Books() {
  const { id } = useParams();
  const book = booksJSON.Books.find(book => book.id === id)

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownWrapperRef = useRef(null);


  const BookComponent = lazy(() => {
    // Dynamically import the book component based on the id from the URL
    return import(`../components/Books/${id}.jsx`).catch(() => {
      console.error(`Failed to load book component for ID: ${id}`);
      return <div>Book not found</div>;
    });
  });

  const bookComponentElement = useMemo(() => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
      {book && (
        <div className="contentHolder">
          {book.contentSections.map((section, index) => (
            <ContentRenderer key={section.id || index} content={section} />
          ))}
        </div>
      )}
        
      </Suspense>
    );
  }, [id]);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (dropdownOpen && dropdownWrapperRef.current && !dropdownWrapperRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [dropdownOpen]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <main className="page books infoPage" id="booksIdPage">
      {bookComponentElement}
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
            <ul>
              {Object.entries(book?.storeLinks ?? {}).map(([storeName, storeUrl]) => (
                <li key={storeName}>
                  <a href={storeUrl} target="_blank" rel="noreferrer">
                    {storeName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    
    </main>
  )
}
