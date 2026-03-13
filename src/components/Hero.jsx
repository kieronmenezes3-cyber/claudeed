import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80&auto=format&fit=crop"
          alt="Beautiful property managed by HelloGuest"
          className="hero__image"
        />
      </div>
      <div className="container hero__content">
        <div className="hero__badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          Airbnb Hosting Excellence Award 2024
        </div>
        <h1 className="hero__title">
          Full Service Airbnb<br />
          <span className="hero__title-accent">Property Management</span>
        </h1>
        <p className="hero__subtitle">
          We handle everything — from listing creation and guest communication to cleaning
          and maintenance. All for just <strong>12% commission</strong>. No lock-in contracts.
        </p>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">94%</span>
            <span className="hero__stat-label">Average Occupancy Rate</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">95%</span>
            <span className="hero__stat-label">Positive Reviews</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">60%</span>
            <span className="hero__stat-label">Higher Yields</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">From 12%</span>
            <span className="hero__stat-label">Commission Only</span>
          </div>
        </div>

        <div className="hero__actions">
          <a href="#contact" className="btn btn-primary hero__btn-main">
            Get a Free Valuation
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#services" className="btn btn-outline hero__btn-secondary">
            How It Works
          </a>
        </div>

        <div className="hero__trust">
          <div className="hero__trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-accent)">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            No contract or lock-in
          </div>
          <div className="hero__trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-accent)">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Open 7 days, 365 days a year
          </div>
          <div className="hero__trust-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-accent)">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            40+ booking platforms
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-line"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
