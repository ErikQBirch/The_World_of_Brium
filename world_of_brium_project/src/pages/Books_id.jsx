import React, { lazy, Suspense, useEffect, useState, useRef, useMemo } from 'react';
import { useParams } from "react-router-dom";
// import booksJSON from '../assets/examples/books_two.json'; 
import './scss/Books_id.scss'


export default function Books() {
  const { id } = useParams();
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
        <BookComponent />
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
    <main className="page books" id="booksIdPage">

        
          <div className="contentHolder">
            {bookComponentElement}
          </div>

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
                {/* store links would go here */}
              </div>
            )}
          </div>
    
    </main>
  )
}
