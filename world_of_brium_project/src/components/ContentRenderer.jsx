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
export const ContentRenderer = ({ content }) => {
  const [popup, setPopup] = React.useState(null);

  // choose which items actually get rendered.  For galleries we only
  // want image items (JSON currently uses type: 'img').
  const rendered =
    content && content.contentType === 'gallery'
      ? content.elementArray.filter(i => i.element === 'img')
      : content?.elementArray || [];

  // debug: make sure JSON is arriving
  // console.log('rendered content', content, rendered);

  if (!Array.isArray(rendered)) return null;

  console.log('rendered content', content, rendered);

  // Helper function to render items recursively
  const renderItems = (items, contentType) => {
    return items.map((item, index) => {
      const { element, value, src, alt, srcImg, ...rest } = item;

      console.log(item);
      console.log(element, value, src, alt, srcImg);

      switch (contentType) {
        case 'document':
          switch (element) {
            case 'h1':
              return <h1 key={index} {...rest}>{value}</h1>;
            case 'h2':
              return <h2 key={index} {...rest}>{value}</h2>;
            case 'h3':
              return <h3 key={index} {...rest}>{value}</h3>;
            case 'p':
              return <p key={index} {...rest}>{value}</p>;
            case 'img':
              return <figure key={index}><img src={`${import.meta.env.BASE_URL}${src.replace(/^\//,'')}`} alt={alt || ''} {...rest} /></figure>;
            case "a":
              return srcImg ? (
                <a key={index} href={item.href} {...rest}>
                  <img src={`${import.meta.env.BASE_URL}${srcImg.replace(/^\//,'')}`} alt={alt || ''} />
                </a>
              ) : (
                <a key={index} href={item.href} {...rest}>{value}</a>
              );
            case "link":
              return srcImg ? (
                <Link key={index} to={item.to} {...rest}>
                  <img src={`${import.meta.env.BASE_URL}${srcImg.replace(/^\//,'')}`} alt={alt || ''} />
                </Link>
              ) : (
                <Link key={index} to={item.to} {...rest}>{value}</Link>
              );
            case 'div':
              // Recursive rendering for div elements
              return (
                <div key={index} {...rest}>
                  {renderItems(value || [], contentType)}
                </div>
              );
            default:
              return null;
          }

        case 'gallery':
          // gallery-specific markup: thumbnail that opens popup
          return (
            <figure key={index} className="gallery-item">
              <img
                src={`${import.meta.env.BASE_URL}${item.src.replace(/^\//,'')}`}
                alt={item.alt || ''}
                {...rest}
                onClick={() => setPopup({ src: item.src, alt: item.alt })}
              />
            </figure>
          );

        // add other section types as needed
        default:
          // if no section is provided, treat it as a document
          return null;
      }
    });
  };

  // wrap everything in a <section> so callers can identify the block
  // by giving a meaningful id (e.g. "extended-summary"). If no
  // `sectionId` is provided, the element will still render but without
  // an id attribute.
  return (
    <section id={content.label || undefined}>
      {renderItems(rendered, content.contentType)}

      {/* popup overlay for gallery images */}
      {content.type === 'gallery' && popup && (
        <div className="image-popup" onClick={() => setPopup(null)}>
          <div className="inner">
            <button className="close" aria-label="close">×</button>
            <img src={`${import.meta.env.BASE_URL}${popup.src.replace(/^\//,'')}`} alt={popup.alt || ''} />
          </div>
        </div>
      )}
    </section>
  );
};