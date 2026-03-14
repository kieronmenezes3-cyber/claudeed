import './Footer.css'

const serviceLinks = [
  'Airbnb Management',
  'Holiday Let Management',
  'Short-term Let Management',
  'Pricing & Fees',
  'How It Works',
  'Property Photography',
]

const locationLinks = [
  'London',
  'Edinburgh',
  'Manchester',
  'Brighton',
  'Bath',
  'Bristol',
  'Oxford',
  'Liverpool',
]

const companyLinks = [
  'About Us',
  'Blog',
  'Careers',
  'Press',
  'Contact Us',
  'Trustpilot Reviews',
]

const legalLinks = [
  'Privacy Policy',
  'Terms of Service',
  'Cookie Policy',
  'Sitemap',
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__top-inner">
          <div className="footer__brand">
            <a href="/" className="footer__logo">
              <span className="logo-hello">KARM</span>
              <span className="logo-guest-footer"> LIVING</span>
            </a>
            <p className="footer__tagline">
              The UK's leading full-service Airbnb management company. We handle everything
              so you can earn more with less effort.
            </p>
            <div className="footer__contact">
              <a href="tel:02080898898" className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                0208 089 8898
              </a>
              <a href="mailto:hello@karmliving.co.uk" className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                hello@karmliving.co.uk
              </a>
            </div>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Twitter/X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Our Services</h4>
            <ul className="footer__links-list">
              {serviceLinks.map(link => (
                <li key={link}>
                  <a href="#" className="footer__link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Locations</h4>
            <ul className="footer__links-list">
              {locationLinks.map(link => (
                <li key={link}>
                  <a href="#" className="footer__link">{link}</a>
                </li>
              ))}
              <li>
                <a href="#" className="footer__link footer__link--more">View all locations →</a>
              </li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4 className="footer__links-title">Company</h4>
            <ul className="footer__links-list">
              {companyLinks.map(link => (
                <li key={link}>
                  <a href="#" className="footer__link">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            © {new Date().getFullYear()} KARM LIVING Ltd. All rights reserved. Registered in England & Wales.
          </p>
          <div className="footer__legal">
            {legalLinks.map(link => (
              <a key={link} href="#" className="footer__legal-link">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
