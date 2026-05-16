import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import './scss/Contact.scss'


// import './scss/LightDarkToggle.scss'

const EMAIL_ADDRESS = 'hello@example.com'
const contactMethods = [
  { name: 'Email', icon: faEnvelope, action: 'copy' },
  { name: 'Discord', icon: faDiscord, url: 'https://discord.com' },
  { name: 'YouTube', icon: faYoutube, url: 'https://youtube.com' }
]

export default function Contact() {
  const [hoveredItem, setHoveredItem] = useState(null)

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS)
      window.alert(`Copied ${EMAIL_ADDRESS} to clipboard!`)
    } catch (error) {
      console.error('Clipboard copy failed', error)
    }
  }

  return (
    <main className="page contact" id="contactIdPage">
      <div className="contentHolder">
        <h2>Contact</h2>
        <section id="ContactInfo">
          <ul>
            {contactMethods.map((method) => (
              <li onMouseEnter={() => setHoveredItem(method.name.toLowerCase())}
                  onMouseLeave={() => setHoveredItem(null)}>
                {method.url ? (
                  <a href={method.url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={method.icon} bounce={hoveredItem === method.name.toLowerCase()} />
                    <span>{method.name}</span>
                  </a>
                ) : (
                  <a href="#" onClick={copyEmailToClipboard}>
                    <FontAwesomeIcon icon={method.icon} bounce={hoveredItem === method.name.toLowerCase()} />
                    <span>{method.name}</span>
                  </a>
                )}
              </li>
          
                ))}
            {/* {contactMethods.map((method) => (
              {method.url ? (
                <li
                  key={method.name}
                  onClick={() => window.open(method.url, '_blank')}
                >
                  <FontAwesomeIcon icon={method.icon} />
                  <span>{method.name}</span>
                </li>
              ) : (
                <li
                  key={method.name}
                  onClick={method.action === 'copy' ? copyEmailToClipboard : undefined}
                  onMouseEnter={() => setHoveredItem(method.name.toLowerCase())}
                  onMouseLeave={() => setHoveredItem(null)}
              >
                <FontAwesomeIcon icon={method.icon} bounce={hoveredItem === method.name.toLowerCase()} />
                <span>{method.name}</span>
              </li>
            ))} */}
          </ul>
        </section>
      </div>
    </main>
  )}

  


        
