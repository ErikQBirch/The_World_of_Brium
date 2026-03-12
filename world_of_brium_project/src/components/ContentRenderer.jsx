import React from 'react';
import './scss//ContentRenderer.scss';
import { Link } from 'react-router-dom';
// import './scss/documents.scss';

// A generic renderer that takes an array of content objects and
// outputs corresponding React elements. The shape of each object is
// expected to include a `type` property (e.g. "p", "h1", "img")
// and the appropriate additional fields (`value`, `src`, `alt`, etc.).
// This keeps the markup for books, blogs, comments, etc. consistent
// and avoids repeating switch logic in every page component.
export const ContentRenderer = ({ items = [], sectionId }) => {
  if (!Array.isArray(items)) return null;

  // wrap everything in a <section> so callers can identify the block
  // by giving a meaningful id (e.g. "extended-summary"). If no
  // `sectionId` is provided, the element will still render but without
  // an id attribute.
  return (
    <section id={sectionId || undefined}>
      {items.map((item, index) => {
        const { type, value, src, alt, ...rest } = item;
        switch (type) {
          case 'h1':
            return <h1 key={index} {...rest}>{value}</h1>;
          case 'h2':
            return <h2 key={index} {...rest}>{value}</h2>;
          case 'h3':
            return <h3 key={index} {...rest}>{value}</h3>;
          case 'p':
            return <p key={index} {...rest}>{value}</p>;
          case 'img':
            return <figure key={index}><img key={index} src={src} alt={alt || ''} {...rest} /></figure>
          case "a":
            return <a key={index} href={item.href} {...rest}>{value}</a>;
          case "link":
            return <Link key={index} to={item.to} {...rest}>{value}</Link>;
          // add more cases as needed (ul, li, blockquote, etc.)
          default:
            return null;
        }
      })}
    </section>
  );
};