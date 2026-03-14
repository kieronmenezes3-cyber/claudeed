import './WhyChooseUs.css'

const reasons = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
      </svg>
    ),
    title: 'Open 7 Days, 365 Days a Year',
    description: 'We\'re the only Airbnb management company open every single day of the year — including Christmas Day. Your guests always have support.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: 'Airbnb Hosting Excellence Award',
    description: 'We were awarded "Hosting Excellence" by Airbnb at the annual Northern Europe Professional Host Summit in 2024.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
      </svg>
    ),
    title: 'No Contract or Lock-in',
    description: 'There\'s no fixed-term contract, no lock-in period, and no notice period required. You\'re free to leave at any time.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
      </svg>
    ),
    title: '60% Higher Yields on Average',
    description: 'Our partners experience significantly higher yields year-on-year. We consistently outperform self-managed properties.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
      </svg>
    ),
    title: '40+ Booking Platforms',
    description: 'We list your property on all major booking sites including Airbnb, VRBO, Booking.com, Tripadvisor, and 40+ others.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </svg>
    ),
    title: 'Dedicated Account Manager',
    description: 'You\'ll have a dedicated account manager who knows your property inside out and is always on hand to help.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="why" id="why-choose-us">
      <div className="container">
        <div className="why__layout">
          <div className="why__left">
            <span className="section-label">Why KARM LIVING</span>
            <h2 className="section-title">KARM LIVING — Premium Airbnb Management</h2>
            <p className="section-subtitle" style={{ marginBottom: '32px' }}>
              We've been managing short-let properties since Airbnb first launched in the UK.
              Our experience, technology, and dedication set us apart from the competition.
            </p>
            <div className="why__stats">
              <div className="why__stat">
                <span className="why__stat-num">1,000+</span>
                <span className="why__stat-label">Properties Managed</span>
              </div>
              <div className="why__stat">
                <span className="why__stat-num">£2,500+</span>
                <span className="why__stat-label">Average Monthly Earnings</span>
              </div>
            </div>
            <a href="#contact" className="btn btn-primary">Get Started Today</a>
          </div>
          <div className="why__right">
            <div className="why__grid">
              {reasons.map((reason, i) => (
                <div key={i} className="why__card">
                  <div className="why__card-icon">{reason.icon}</div>
                  <div className="why__card-body">
                    <h4 className="why__card-title">{reason.title}</h4>
                    <p className="why__card-desc">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
