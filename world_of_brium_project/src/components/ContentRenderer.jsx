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
  const [visibleLimit, setVisibleLimit] = React.useState(8);

  // choose which items actually get rendered.  For galleries we only
  // want image items (JSON currently uses type: 'img').


  const filtered = 
    content && content.contentType === 'gallery'
      ? content.elementArray.filter(i => i.element === 'img')
      : content?.elementArray || [];
      

  const rendered = content.contentType === 'gallery' ? filtered.slice(0, visibleLimit) : filtered;

  const handleShowMore = () => {
    setVisibleLimit((currentLimit) => {
      const remainingImages = filtered.length - currentLimit;
      return currentLimit + Math.min(8, remainingImages);
    });
  };

  // debug: make sure JSON is arriving
  // console.log('rendered content', content, rendered);

  if (!Array.isArray(rendered)) return null;

  // console.log('rendered content', content, rendered);

  // Helper function to render items recursively
  const renderItems = (items, contentType) => {
    return items.map((item, index) => {
      const { element, value, src, alt, srcImg, style, ...rest } = item;
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
                  onClick={(contentType==='gallery') ? () => setPopup({ item: item }) : undefined}/>
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
      {(() => {
        switch (content.contentType) {
          case 'gallery':
            return (
              <>
                <h2>Image Gallery</h2>
                <div className="contentHolder_Gallery">
                  {renderItems(rendered, content.contentType)}
                </div>
                {filtered.length > visibleLimit && (
                  <button className="showMore" onClick={handleShowMore}>
                    Show More
                  </button>
                )}
                { popup && (
                  <div className="image-popup" onClick={() => setPopup(null)}>
                    <div className="inner">
                      <button className="close" aria-label="close">×</button>
                      {popup.item ? renderItems([popup.item], content.contentType) : (
                        <img src={`${import.meta.env.BASE_URL}${popup.src.replace(/^\//,'')}`} alt={popup.alt || ''} />
                          )}
                    </div>
                  </div>
                )}
              </>
            );
          case 'carousel':
            return (
              <>
                <h2>Related Books</h2>
                <div className="contentHolder_RelatedBooks">
                  {renderItems(rendered, content.contentType)}
                </div>
              </>
            );
          default:
            return renderItems(rendered, content.contentType);
        }
      })()}
      
    
    </section>
  );
};