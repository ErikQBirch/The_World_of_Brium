import React from 'react';
// import './scss/documents.scss';

// A generic renderer that takes an array of content objects and
// outputs corresponding React elements. The shape of each object is
// expected to include a `type` property (e.g. "p", "h1", "img")
// and the appropriate additional fields (`value`, `src`, `alt`, etc.).
// This keeps the markup for books, blogs, comments, etc. consistent
// and avoids repeating switch logic in every page component.
export const ContentRenderer = ({ items = [] }) => {
  if (!Array.isArray(items)) return null;

  return items.map((item, index) => {
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
        return <img key={index} src={src} alt={alt || ''} {...rest} />;
      // add more cases as needed (ul, li, blockquote, etc.)
      default:
        return null;
    }
  });
};