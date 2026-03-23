import './scss/Home.scss';
// import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import authorImg from '/images/author.jpg';
import sampleBook from '/images/bookCovers/sample_book1.png';


export default function Home() {
  return (
    <main className="page home" id="homePage">
      <section id="home_banner">
        <article id="home_banner_filter" className='contentHolder'>
          <Link to="books/1">
            <div className="text-container">
              {/* <h2>Home</h2> */}
              <h1>Welcome to the <br/>World of Brium</h1>
            </div>
            <figure>
                <img src={sampleBook} alt="sample_book" />
                {/* <button>Explore the Books</button> */}
            </figure>
          </Link>
        </article>
      </section>
      <section id="author_intro">
        <div className="contentHolder">
          <figure>
            <Link to="/about">
              <img src={authorImg} alt="author_img" />
            </Link>
          </figure>
          <section>
            <h1>A Glimpse at <br/>Jeremy Cole</h1>
            <p>Explore the rich lore, characters, and adventures that await you in Brium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci harum amet deleniti provident, sed totam.</p>
            <button>
              <Link to="/author">Learn More</Link>
            </button>
          </section>
        </div>
      </section>
      <section id="signup">
        <h1>Stay Updated</h1>
        <p>Sign up for our newsletter to receive the latest news and updates about Brium.</p>
        <button>Sign Up</button>
      </section>
    </main>
  )
}
