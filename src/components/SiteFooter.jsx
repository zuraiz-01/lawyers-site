import { Link } from 'react-router-dom'

function SiteFooter({ practiceLinks, quickLinks }) {
  return (
    <footer className="footer reveal" id="footer-contact">
      <div className="container footer-grid">
        <div className="reveal" style={{ '--reveal-delay': '80ms' }}>
          <div className="brand footer-brand">
            <span className="brand-mark">L</span>
            <div>
              <h1>LEXOVIA</h1>
              <p>Lawyers & Attorneys</p>
            </div>
          </div>
          <p className="footer-text">
            Practical legal guidance with integrity, confidentiality, and
            client-first representation.
          </p>
        </div>

        <div className="reveal" style={{ '--reveal-delay': '130ms' }}>
          <h4>Practice Areas</h4>
          <ul>
            {practiceLinks.map((item) => (
              <li key={item}>
                <a
                  href={`mailto:info@lexovia.com?subject=${encodeURIComponent(
                    `${item} Consultation`,
                  )}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal" style={{ '--reveal-delay': '180ms' }}>
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal" style={{ '--reveal-delay': '230ms' }}>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="tel:+1234567890">+123 456 7890</a>
            </li>
            <li>
              <a href="mailto:info@lexovia.com">info@lexovia.com</a>
            </li>
            <li>
              <a
                href="https://maps.google.com/?q=450+Lexington+Ave,+New+York,+NY+10017"
                target="_blank"
                rel="noreferrer"
              >
                450 Lexington Ave, New York
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2026 Zuraiz. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default SiteFooter
