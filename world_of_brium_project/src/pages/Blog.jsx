import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useParams } from "react-router-dom";
import blogsJSON from '../assets/blogs.json'; 
import { Link } from 'react-router-dom';
import './scss/Blogs.scss'
import { ContentRenderer } from "../components/ContentRenderer";
import ContentComingSoon from '../components/ContentComingSoon';

export default function Blog() {
  const navigate = useNavigate()
  const blogsArray = blogsJSON.Blogs;
  const [visibleLimit, setVisibleLimit] = useState(12);
  const [visibleBlogs, setVisibleBlogs] = useState(blogsArray?.slice(0, visibleLimit));
  console.log('blogsArray', blogsArray);

  const handleShowMore = () => {
    setVisibleLimit((currentLimit) => {
      const remainingBlogs = blogsArray.length - currentLimit;
      const nextLimit = currentLimit + Math.min(12, remainingBlogs);
      setVisibleBlogs(blogsArray.slice(0, nextLimit));
      return nextLimit;
    });
  };

  // Redirect to book detail if only 1 book exists
  useEffect(() => {
    if (blogsArray && blogsArray.length === 1) {
      navigate(`/blogs/${blogsArray[0].id}`, { replace: true })
    }
  }, [blogsArray, navigate])


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
              {blogsArray?.length === 0 ? (
                <ContentComingSoon />
              ) : (
              visibleBlogs
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
                ))
              )}
        </div>
        {blogsArray?.length > visibleLimit && (
          <button className="moreOrLess" onClick={handleShowMore}>
            Show More
          </button>
        )}
      </section>
    </main>
  )
}
