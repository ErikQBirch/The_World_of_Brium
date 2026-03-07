import './scss/Home.scss';
import DOMPurify from 'dompurify';
import authorImg from '../assets/images/author.jpg';
import sampleBook from '../assets/images/sample_book1.png';


export default function Home() {
  return (
    <main className="page home">
      <section id="home_banner">
        <article id="home_banner_filter" className='filter'>
          <div className="text-container">
            {/* <h2>Home</h2> */}
            <p>Welcome to the World of Brium.</p>
          </div>
          <figure>
            <img src={sampleBook} alt="sample_book" />
          </figure>
        </article>
      </section>
      <section id="author_intro">
        <figure>
          <img src={authorImg} alt="author_img" />
        </figure>
        <h1>A Glimpse at <br/>Jeremy Cole</h1>
        <p>Explore the rich lore, characters, and adventures that await you in Brium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci harum amet deleniti provident, sed totam.</p>
      </section>
      <section id="signup">
        <h1>Stay Updated</h1>
        <p>Sign up for our newsletter to receive the latest news and updates about Brium.</p>
        <button>Sign Up</button>
      </section>
    </main>
  )
}
