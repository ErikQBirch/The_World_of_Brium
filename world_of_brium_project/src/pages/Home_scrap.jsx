import './scss/Home.scss';
import DOMPurify from 'dompurify';
import authorImg from '../../public/images/author.jpg';
import sampleBook from '../../public/images/sample_book1.png';
import namesJSON from "./names.json";
import blogsJSON from "../assets/blogs.json";

const namesArray = namesJSON.Names;
const blogsArray = blogsJSON.Blogs;
// const blogArray = blogsJSON.Blogs;




export default function Home() {
  // console.log(namesArray)
  console.log(blogsArray);
  return (
    <main className="page home">
      <section id="home_banner">
        <article id="home_banner_filter" className='filter'>
          <div className="text-container">
            {/* <h2>Home</h2> */}
            <p>Welcome to the world of Brium.</p>
          </div>
          <figure>
            <img src={sampleBook} alt="sample_book" />
          </figure>
        </article>
      </section>
      <section id="author_intro">
        <h3>Who is</h3>
        <figure>
          <img src={authorImg} alt="author_img" />
        </figure>
        <p>Explore the rich lore, characters, and adventures that await you in Brium. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quasi necessitatibus magnam, enim blanditiis libero. Veniam fuga voluptates nesciunt debitis, iure omnis doloribus obcaecati deserunt mollitia voluptatum id perspiciatis quod saepe corrupti. Totam, error voluptatem! Non quidem veritatis quibusdam, cupiditate modi consequuntur saepe maiores necessitatibus mollitia ipsam numquam odio eaque maxime animi sint quaerat nisi nesciunt aspernatur. Inventore, architecto exercitationem?</p>
      </section>
      <section id="signup">
        <h3>Stay Updated</h3>
        <p>Sign up for our newsletter to receive the latest news and updates about Brium.</p>
      </section>
      <section>
        {namesArray.map((name) => (
          // <li key={name.id}>{name.h1}</li> //success<
          <article key={name.id}>
            <h1>{name.h1}</h1>
            {/* <img src={name.imgSrc}></img> */}
          </article>
          // <img key={blog.id} src={blog.src} alt={blog.alt}></img>
        ))}
      </section>
      <section>
        {blogsArray[0].Content.map((content, index) => {
          switch(content.type) {
            case "h1":
              return <h1 key={index}>{content.value}</h1>;
            case "h2":
              return <h2 key={index}>{content.value}</h2>;
            case "p":
              return <p key={index}>{content.value}</p>;
            case "img":
              return <img key={index} src={content.src} alt={content.alt} />;
            default:
              return null;
          }
        })}
      </section>
      <h1>HELLOW</h1>
      <article>
        {/* {blogArray.map((element, index) => {
          if (element.type )
        })} */}
      </article>
    </main>
  )
}
