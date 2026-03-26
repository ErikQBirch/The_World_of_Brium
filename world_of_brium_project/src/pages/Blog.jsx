import React from 'react';
// import { useParams } from "react-router-dom";
import blogsJSON from '../assets/blogs.json'; 
import { Link } from 'react-router-dom';
import './scss/Blogs.scss'
import { ContentRenderer } from "../components/ContentRenderer";

export default function Blog() {
  const blogsArray = blogsJSON.Blogs;
  console.log('blogsArray', blogsArray);
  // const { id } = useParams();
  // const book = booksJSON.Books.find(book => book.id === id);

  // if (!book) {
  //   return <main className="page books">Book not found</main>;
  // }

  // Filter seriesArray to only include series that have related books


  return (
    <main id="blogsPage" className="page blogs">
      <h1>Blogs</h1>
      <section className="blogsContent">
            <div className="blogs-list">
              {blogsArray
                .map(blog => (
                  <Link to={`/blogs/${blog.id}`} key={blog.id} className="blog-item">
                    <figure>
                      <img src={`${import.meta.env.BASE_URL}${blog.Thumbnail.replace(/^\//,'')}`} alt={blog.Title} />
                    </figure>
                    <div className="contentHolder_info">
                      <h3>{blog.Title}</h3>
                      <div>{blog.Date}</div>
                      <p>{blog.Summary}</p>
                    </div>
                  </Link>
                ))}
        </div>
      </section>
    </main>
  )
}
