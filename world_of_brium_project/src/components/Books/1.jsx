import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/ContentComingSoon.scss'

export default function BooksComponent() {
  const imageGallery = [
    {
      src: `${import.meta.env.BASE_URL}${"/images/bookCovers/TheLegacyoftheLykai_cover.jpg"}`,
      alt: "The Legacy of the Lykai"
    },
    {
      src: `${import.meta.env.BASE_URL}${"/images/bookCovers/TheLegacyoftheLykai_cover.jpg"}`,
      alt: "The Legacy of the Lykai"
    },
    {
      src: `${import.meta.env.BASE_URL}${"/images/bookCovers/TheLegacyoftheLykai_cover.jpg"}`,
      alt: "The Legacy of the Lykai"
    },
    {
      src: `${import.meta.env.BASE_URL}${"/images/bookCovers/TheLegacyoftheLykai_cover.jpg"}`,
      alt: "The Legacy of the Lykai"
    },
    {
      src: `${import.meta.env.BASE_URL}${"/images/bookCovers/TheLegacyoftheLykai_cover.jpg"}`,
      alt: "The Legacy of the Lykai"
    },
    {
      src: `${import.meta.env.BASE_URL}${"/images/bookCovers/TheLegacyoftheLykai_cover.jpg"}`,
      alt: "The Legacy of the Lykai"
    },
        {
      src: `${import.meta.env.BASE_URL}${"/images/bookCovers/TheLegacyoftheLykai_cover.jpg"}`,
      alt: "The Legacy of the Lykai"
    },
    {
      src: `${import.meta.env.BASE_URL}${"/images/bookCovers/TheLegacyoftheLykai_cover.jpg"}`,
      alt: "The Legacy of the Lykai"
    },
    {
      src: `${import.meta.env.BASE_URL}${"/images/bookCovers/TheLegacyoftheLykai_cover.jpg"}`,
      alt: "The Legacy of the Lykai"
    },
    {
      src: `${import.meta.env.BASE_URL}${"/images/bookCovers/TheLegacyoftheLykai_cover.jpg"}`,
      alt: "The Legacy of the Lykai"
    },
    {
      src: `${import.meta.env.BASE_URL}${"/images/bookCovers/TheLegacyoftheLykai_cover.jpg"}`,
      alt: "The Legacy of the Lykai"
    },
    {
      src: `${import.meta.env.BASE_URL}${"/images/bookCovers/author.jpg"}`,
      alt: "The Legacy of the Lykai"
    }
  ];
  const [popup, setPopup] = React.useState(null);
  const [showAll, setShowAll] = React.useState(false);
  const galleryLimit = 8;

  const relatedBooks = [
    {
      src: `${import.meta.env.BASE_URL}${"/images/bookCovers/TheLegacyoftheLykai_cover.jpg"}`,
      alt: "The Legacy of the Lykai",
      title: "The Legacy of the Lykai"
    },
    {
      src: `${import.meta.env.BASE_URL}${"/images/bookCovers/author.jpg"}`,
      alt: "The Legacy of the Lykai",
      title: "Another Related Book! Yaaay!",
    },
    {
      src: `${import.meta.env.BASE_URL}${"/images/bookCovers/TheLegacyoftheLykai_cover.jpg"}`,
      alt: "The Legacy of the Lykai",
      title: "The Legacy of the Lykai"
    },
    {
      src: `${import.meta.env.BASE_URL}${"/images/bookCovers/author.jpg"}`,
      alt: "The Legacy of the Lykai",
      title: "Another Related Book",
    },
    {
      src: `${import.meta.env.BASE_URL}${"/images/bookCovers/TheLegacyoftheLykai_cover.jpg"}`,
      alt: "The Legacy of the Lykai",
      title: "The Legacy of the Lykai"
    },
    {
      src: `${import.meta.env.BASE_URL}${"/images/bookCovers/author.jpg"}`,
      alt: "The Legacy of the Lykai",
      title: "Another Related Book",
      author: "Another Author"
    },
    {
      src: `${import.meta.env.BASE_URL}${"/images/bookCovers/TheLegacyoftheLykai_cover.jpg"}`,
      alt: "The Legacy of the Lykai",
      title: "The Legacy of the Lykai"
    },
    {
      src: `${import.meta.env.BASE_URL}${"/images/bookCovers/author.jpg"}`,
      alt: "The Legacy of the Lykai",
      title: "Another Related Book",
    }
  ];


  return (
    <div className='contentHolder'>
      <section id="ExtendedSummary">
        <h1>The Legacy of the Lykai</h1>
        <figure>
          <img src={`${import.meta.env.BASE_URL}${"/images/bookCovers/TheLegacyoftheLykai_cover.jpg"}`} alt={"The Legacy of the Lykai"} />
        </figure>
        <h2>Summary</h2>
        <p>
          The Legacy of the Lykai is a thrilling fantasy novel that follows the journey of a young hero named Aric as he discovers his true heritage and battles against dark forces threatening his world. Set in a richly imagined universe filled with magic, mythical creatures, and ancient prophecies, the story explores themes of identity, courage, and the power of friendship. As Aric delves deeper into his past, he uncovers secrets that could change the fate of his people forever. With its captivating plot and well-developed characters, The Legacy of the Lykai is a must-read for fans of epic fantasy adventures.
          <br/><br/>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quasi, necessitatibus eum quidem consectetur ullam pariatur tempora nulla suscipit natus, cumque aperiam officia laboriosam blanditiis quis amet ducimus asperiores similique iste, doloremque aliquam inventore. Aspernatur assumenda, quidem magni architecto vitae corrupti voluptatum natus sit non in sed, vero rem distinctio. Nostrum error maxime distinctio, autem ducimus quo mollitia? Id odit quo corporis aut numquam fuga, dolorem, voluptate ipsum aliquid neque dignissimos adipisci dolor reprehenderit quod aperiam quidem sequi. Velit rerum consequuntur excepturi iure corrupti ullam eaque nemo sint, dolores beatae quae minus molestias suscipit cupiditate sunt fugit consectetur illo, accusantium libero vero. Ratione doloribus repellat et deleniti autem exercitationem quidem quaerat magnam cum voluptatem illo cumque incidunt, libero possimus aperiam ad doloremque, provident, aspernatur veniam dolorum? Eveniet, neque tempore aliquam, nostrum eaque omnis odio expedita saepe mollitia consectetur harum ipsam sequi placeat qui autem vero nulla impedit? Corrupti, cumque. Praesentium temporibus, quae, recusandae tempora perferendis, consectetur vitae eaque amet voluptatum minima quidem laborum. Nobis, facere, placeat tenetur provident officiis illum doloremque ex ratione, ipsum maxime consectetur! Nemo odit sed velit officia eligendi blanditiis quia dolor rerum incidunt atque maxime neque cupiditate voluptatibus laudantium omnis, eum vitae excepturi possimus nesciunt dolores explicabo sapiente numquam quaerat error! Exercitationem facilis officiis quis voluptates aliquam est reprehenderit molestias corporis cum corrupti? Animi repudiandae obcaecati numquam quo, nesciunt dolorum eius expedita dolor sapiente similique possimus sunt facilis. Tenetur, aspernatur doloribus quibusdam pariatur tempora cum dolorum molestias omnis vel similique consectetur soluta! Itaque officia hic quidem.
          <br/><br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nobis iste praesentium ipsam debitis sed assumenda, illo optio minima aut ipsum quasi iusto. Molestias explicabo optio, facilis ipsum ex laborum modi eos, magni at vel ullam, enim ducimus officia provident sapiente quas nulla dicta perspiciatis consequuntur ipsa eveniet quia sed? Natus vitae accusantium sint labore recusandae unde distinctio, qui rerum maxime quo iste consequatur ad maiores velit pariatur officiis incidunt deleniti ex aliquam quas. Aspernatur facilis a, excepturi officia reprehenderit incidunt quos libero commodi maxime enim, distinctio veritatis, perspiciatis sit? Illum maxime dignissimos, quo temporibus assumenda fugit consequatur eum sint praesentium odio laudantium voluptates iure ipsa quisquam quidem. Deserunt aspernatur nemo reiciendis ipsam tenetur recusandae consequatur culpa tempore distinctio esse nobis totam cupiditate provident soluta sequi, et iste quisquam similique! Consectetur cum praesentium amet neque ipsa debitis sed nihil reprehenderit adipisci voluptatibus, necessitatibus consequatur, asperiores at iste nobis quasi impedit?
        </p>
      </section>
      <section id="AuthorsComments">
        <h2>Author's Comments</h2>
        <p>
          The Legacy of the Lykai is a story that has been close to my heart for many years. It was inspired by my love for fantasy literature and my desire to create a world that readers could immerse themselves in. The characters and plot were developed over time, with many revisions and rewrites along the way. I wanted to explore themes of identity and self-discovery, as well as the importance of friendship and courage in the face of adversity. Writing this book was a labor of love, and I hope that readers will enjoy the journey as much as I enjoyed creating it.
          <br/><br/>
          I also want to thank my readers for their support and encouragement throughout the writing process. Your feedback and enthusiasm have been invaluable, and I am grateful for the opportunity to share this story with you. I hope that The Legacy of the Lykai will inspire you to embark on your own adventures and discover the magic that lies within you.
        </p>
      </section>
      <section id="ImageGallery">
        <h2>Image Gallery</h2>
        <div className="contentHolder_Gallery">
          {(showAll ? imageGallery : imageGallery.slice(0, galleryLimit)).map((image, index) => (
            <figure key={index} onClick={() => setPopup({ src: image.src, alt: image.alt })}>
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
        </div>
        {imageGallery.length > galleryLimit && (
          <button className="moreOrLess" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'View Less' : 'View More'}
          </button>
        )}
      </section>
      <section id="RelatedBooks">
        <h2>Related Books</h2>
        <div className="contentHolder_RelatedBooks">
          {relatedBooks.map((book, index) => (
            <figure key={index} className="relatedBook">
              <img src={book.src} alt={book.alt} />
              <span>{book.title}</span>
              {/* <h3>{book.title}</h3> */}
              {/* <p>{book.author}</p> */}
            </figure>
          ))}
        </div>
      </section>
      {popup && (
        <article className="image-popup" onClick={() => setPopup(null)}>
          <div className="inner">
            <button className="close" aria-label="close">×</button>
            <figure>
              <img src={popup.src} alt={popup.alt || ''} />
            </figure>
              
          </div>
        </article>
      )}
    </div>
  )
}
