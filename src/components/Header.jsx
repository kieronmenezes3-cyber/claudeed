import { useState, useEffect } from 'react'
import './Header.css'

const navLinks = [
  { label: 'Our Service', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Properties', href: '#locations' },
  { label: 'About Us', href: '#about' },
  { label: 'Blog', href: '#blog' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="/" className="header__logo">
          <span className="logo-hello">KARM</span>
          <span className="logo-guest"> LIVING Lettings </span>
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map(link => (
              <li key={link.label} className="nav-list__item">
                <a href={link.href} className="nav-list__link" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="header__cta-mobile">
            <a href="#contact" className="btn btn-primary">Get Free Valuation</a>
          </div>
        </nav>

        <div className="header__actions">
          <a href="tel:02080898898" className="header__phone">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            0208 089 8898
          </a>
          <a href="#contact" className="btn btn-primary header__cta-desktop">Get Free Valuation</a>
          <button
            className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
