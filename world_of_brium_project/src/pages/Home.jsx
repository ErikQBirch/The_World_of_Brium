import './scss/Home.scss';
import authorImg from '../assets/images/author.jpg';
import sampleBook from '../assets/images/sample_book2.png';

export default function Home() {
  return (
    <main className="page home">
      <section id="home_banner">
        <article id="home_banner_filter" className='filter'>
          <div className="text-container">
            {/* <h2>Home</h2>
            <p>Welcome to the world of Brium.</p> */}
          </div>
          {/* <figure>
            <img src={sampleBook} alt="sample_book" />
          </figure> */}
        </article>
      </section>
      <section id="author_intro">
        <h3>Discover Brium</h3>
        <figure>
          <img src={authorImg} alt="author_img" />
        </figure>
        <p>Explore the rich lore, characters, and adventures that await you in Brium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quasi necessitatibus magnam, enim blanditiis libero. Veniam fuga voluptates nesciunt debitis, iure omnis doloribus obcaecati deserunt mollitia voluptatum id perspiciatis quod saepe corrupti. Totam, error voluptatem! Non quidem veritatis quibusdam, cupiditate modi consequuntur saepe maiores necessitatibus mollitia ipsam numquam odio eaque maxime animi sint quaerat nisi nesciunt aspernatur. Inventore, architecto exercitationem?</p>
      </section>
      <section id="signup">
        <h3>Stay Updated</h3>
        <p>Sign up for our newsletter to receive the latest news and updates about Brium.</p>
        
      </section>
    </main>
  )
}
