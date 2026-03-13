import './Pricing.css'

const included = [
  'Professional property photography',
  'Premium linens & towels (5-star hotel quality)',
  'Professional cleaning between every guest',
  'Listing on 40+ booking platforms',
  'Guest vetting & communication (24/7)',
  'Dynamic seasonal pricing optimisation',
  'Property inspections & inventory checks',
  'Maintenance & repair coordination',
  'Guest check-in & check-out management',
  'Monthly earnings reports',
  'Real-time client dashboard & app',
  'Dedicated account manager',
]

const notIncluded = [
  'Deep clean on first onboarding',
  'Replacement of missing inventory items',
  'Insurance (covered by Airbnb)',
]

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing__header text-center">
          <span className="section-label">Simple Pricing</span>
          <h2 className="section-title">Transparent Costs, No Hidden Fees</h2>
          <p className="section-subtitle">
            We charge a straightforward commission on your net rental income.
            No monthly retainer. No setup fees. No surprises.
          </p>
        </div>

        <div className="pricing__layout">
          <div className="pricing__card pricing__card--main">
            <div className="pricing__card-header">
              <div className="pricing__badge">Most Competitive Rate</div>
              <div className="pricing__rate">
                <span className="pricing__from">From</span>
                <span className="pricing__number">12%</span>
                <span className="pricing__unit">commission</span>
              </div>
              <p className="pricing__tagline">
                You keep up to <strong>88% of your rental income</strong>
              </p>
            </div>

            <div className="pricing__included">
              <h4 className="pricing__included-title">Everything Included:</h4>
              <ul className="pricing__list">
                {included.map((item, i) => (
                  <li key={i} className="pricing__list-item pricing__list-item--yes">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pricing__not-included">
              <h4 className="pricing__included-title pricing__included-title--grey">Possible Onboarding Costs:</h4>
              <ul className="pricing__list">
                {notIncluded.map((item, i) => (
                  <li key={i} className="pricing__list-item pricing__list-item--no">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pricing__card-footer">
              <a href="#contact" className="btn btn-primary pricing__btn">Get a Free Valuation</a>
              <a href="/airbnb-management-pricing/" className="pricing__link">See full pricing details →</a>
            </div>
          </div>

          <div className="pricing__sidebar">
            <div className="pricing__sidebar-card">
              <div className="pricing__sidebar-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93-2.67-1.14-5-4.43-5-7.93V7.18L12 5z"/>
                </svg>
              </div>
              <h4>No Lock-in Contract</h4>
              <p>No fixed-term contracts required. You can leave at any time (subject to honouring existing bookings).</p>
            </div>

            <div className="pricing__sidebar-card">
              <div className="pricing__sidebar-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                </svg>
              </div>
              <h4>Paid Monthly</h4>
              <p>Earnings paid directly into your bank account monthly, with full transparency on all bookings and income.</p>
            </div>

            <div className="pricing__sidebar-card">
              <div className="pricing__sidebar-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
              </div>
              <h4>60% Higher Yields</h4>
              <p>Our partners experience on average 60% higher yields year-on-year compared to self-managing their property.</p>
            </div>

            <div className="pricing__award">
              <div className="pricing__award-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="pricing__award-text">
                <strong>Airbnb Hosting Excellence Award</strong>
                <span>Northern Europe Professional Host Summit 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
