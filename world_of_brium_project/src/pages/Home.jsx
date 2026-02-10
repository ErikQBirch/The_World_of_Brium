import './scss/Home.scss';
import authorImg from '../assets/images/author.jpg';

export default function Home() {
  return (
    <main className="page home">
      <section id="home_banner">
        <article id="home_banner_filter" className='filter'>
          <h2>Home</h2>
          <p>Welcome to the world of Brium.</p>
        </article>
      </section>
      <section id="author_intro">
        <h3>Discover Brium</h3>
        <figure>
          <img src={authorImg} alt="author_img" />
        </figure>
        <p>Explore the rich lore, characters, and adventures that await you in Brium.</p>
      </section>
      <section id="signup">
        <h3>Stay Updated</h3>
        <p>Sign up for our newsletter to receive the latest news and updates about Brium.</p>
        
      </section>
    </main>
  )
}
