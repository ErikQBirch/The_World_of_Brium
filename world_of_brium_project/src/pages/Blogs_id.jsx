import React, { useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { useParams } from "react-router-dom";
import blogsJSON from '../assets/blogs.json';
import './scss/Blogs_id.scss'
import { ContentRenderer } from "../components/ContentRenderer";
 
  export default function Blogs() {
    // const [searchParams] = useSearchParams();
    const { id } = useParams();
    
    // Scroll to top when page loads or id changes
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [id])
  
    const blog = blogsJSON.Blogs.find(blog => blog.id === id);

    return (
      <main className="page blogs" id="blogsIdPage">
          {blog && (
            <div className="contentHolder">
              {blog.contentSections.map((section, index) => (
                <ContentRenderer key={section.id || index} content={section} />
              ))}
            </div>
          )}

      </main>
    )
}