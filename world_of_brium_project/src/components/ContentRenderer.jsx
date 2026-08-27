import React from 'react';
import { Link } from 'react-router-dom';
import './scss//ContentRenderer.scss';
// import './scss/documents.scss';

// A generic renderer that takes an array of content objects and
// outputs corresponding React elements. The shape of each object is
// expected to include a `type` property (e.g. "p", "h1", "img")
// and the appropriate additional fields (`value`, `src`, `alt`, etc.).
// This keeps the markup for books, blogs, comments, etc. consistent
// and avoids repeating switch logic in every page component.
export const ContentRenderer = ({ content }) => {
  const [popup, setPopup] = React.useState(null);
  const [showAll, setShowAll] = React.useState(false);

  // choose which items actually get rendered.  For galleries we only
  // want image items (JSON currently uses type: 'img').


  const filtered = 
    content && content.contentType === 'gallery'
      ? content.elementArray.filter(i => i.element === 'img')
      : content?.elementArray || [];
      

  const rendered = content.contentType === 'gallery' && !showAll ? filtered.slice(0, 8) : filtered;

  // debug: make sure JSON is arriving
  // console.log('rendered content', content, rendered);

  if (!Array.isArray(rendered)) return null;

  // console.log('rendered content', content, rendered);

  // Helper function to render items recursively
  const renderItems = (items, contentType) => {
    return items.map((item, index) => {
      const { element, value, src, alt, srcImg, style, ...rest } = item;

      // console.log(item);
      // console.log(element, value, src, alt, srcImg);



          switch (element) {
            case 'h1':
              return <h1 key={index} {...rest}>{value}</h1>;
            case 'h2':
              return <h2 key={index} {...rest}>{value}</h2>;
            case 'h3':
              return <h3 key={index} {...rest}>{value}</h3>;
            case 'p':
              return (
                <p key={index} {...rest}>
                  {value?.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < value.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              );
            case 'img':
              return (
              <figure
                key={index}
                style={
                  style
                    ? {
                        float: style.placement ? style.placement : undefined,
                        width: style.width ? `${style.width}px` : undefined,
                        margin: style.placement=="center" ? `2.5rem auto` : '2.5rem',
                      }
                    : undefined
                }
              >
                <img 
                  src={`${import.meta.env.BASE_URL}${src.replace(/^\//,'')}`} 
                  alt={alt || ''} 
                  {...rest} 
                  onClick={(contentType==='gallery') ? () => setPopup({ src: src, alt: alt }) : undefined}/>
               </figure>
              );
            case "a":
            case "link":
              return (
                <a
                  key={index}
                  href={item.href ? item.href : undefined}
                  to={item.to ? item.to : undefined}
                  {...rest}
                >
                  {srcImg ? (
                    <img src={`${import.meta.env.BASE_URL}${srcImg.replace(/^\//,'')}`} alt={alt || ''} />
                  ) : (
                    value
                  )}
                </a>
              );
            case 'div':
              // Recursive rendering for div elements
              console.log(value, contentType);
              return (
                <div key={index} {...rest}>
                  {renderItems(value || [], contentType)}
                </div>
              );
            default:
              return null;
          }

        
          // gallery-specific markup: thumbnail that opens popup

            
  

        // add other section types as needed

          // if no section is provided, treat it as a document

      
    });
  };

  // wrap everything in a <section> so callers can identify the block
  // by giving a meaningful id (e.g. "extended-summary"). If no
  // `sectionId` is provided, the element will still render but without
  // an id attribute.
  return (
    <section id={content.label || undefined}>
      {content.contentType === 'gallery' ? 
      <>
        <h2>Image Gallery</h2>
        <div className="contentHolder_Gallery">
          {renderItems(rendered, content.contentType)}
        </div> 
      </>
        : 
        renderItems(rendered, content.contentType)
      }
      
      {content.contentType === 'gallery' && filtered.length > 8 && (
        <button className="moreOrLess" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}

      {/* popup overlay for gallery images */}
      {content.contentType === 'gallery' && popup && (
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