import './CtaBanner.css'

export default function CtaBanner() {
  return (
    <section className="cta-banner" id="contact">
      <div className="cta-banner__bg">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format&fit=crop"
          alt="Beautiful property"
          className="cta-banner__image"
        />
        <div className="cta-banner__overlay"></div>
      </div>
      <div className="container cta-banner__content">
        <div className="cta-banner__inner">
          <span className="cta-banner__badge">Free Valuation</span>
          <h2 className="cta-banner__title">
            Find Out How Much Your Property Could Earn
          </h2>
          <p className="cta-banner__subtitle">
            Get a free, no-obligation valuation and discover what your property could achieve
            with professional Airbnb management. We'll respond within 24 hours.
          </p>
          <div className="cta-banner__form">
            <input
              type="text"
              placeholder="Your postcode"
              className="cta-banner__input"
            />
            <a href="tel:02080898898" className="btn btn-primary cta-banner__btn">
              Get Free Valuation
            </a>
          </div>
          <div className="cta-banner__trust">
            <div className="cta-banner__trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              Free, no obligation
            </div>
            <div className="cta-banner__trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              Response within 24 hours
            </div>
            <div className="cta-banner__trust-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              No lock-in contract
            </div>
          </div>
          <div className="cta-banner__phone">
            <span>Or call us directly:</span>
            <a href="tel:02080898898" className="cta-banner__phone-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              0208 089 8898
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
