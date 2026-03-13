import './HowItWorks.css'

const steps = [
  {
    number: '01',
    title: 'Set Up Your Listing',
    description: 'We collect all the details about your property and can arrange professional photography. We then create an optimised listing with compelling content, perfect settings, and distribute it across all major booking platforms.',
    highlights: ['Professional photography', 'Listing creation & copywriting', 'Multi-platform distribution'],
  },
  {
    number: '02',
    title: 'We Manage Bookings',
    description: 'Once live, we handle all aspects of booking management — from pricing and calendar management to guest vetting, communication and check-in coordination. You\'ll receive bookings directly into your bank account.',
    highlights: ['Dynamic pricing setup', 'Guest screening & communication', 'Booking management across 40+ sites'],
  },
  {
    number: '03',
    title: 'You Earn More',
    description: 'With your calendar open and our management in place, you can relax while we maximise your returns. We handle cleaning, maintenance, check-ins and track everything through a real-time dashboard with monthly reports.',
    highlights: ['Cleaning & maintenance coordination', 'Monthly earnings reports', 'Client dashboard & app'],
  },
]

export default function HowItWorks() {
  return (
    <section className="hiw" id="how-it-works">
      <div className="hiw__bg-pattern"></div>
      <div className="container">
        <div className="hiw__header text-center">
          <span className="section-label">The Process</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Getting started with HelloGuest is simple. We make the process as straightforward
            as possible so your property starts earning quickly.
          </p>
        </div>

        <div className="hiw__steps">
          {steps.map((step, i) => (
            <div key={i} className="hiw__step">
              <div className="hiw__step-number-wrap">
                <span className="hiw__step-number">{step.number}</span>
                {i < steps.length - 1 && <div className="hiw__step-connector"></div>}
              </div>
              <div className="hiw__step-content">
                <h3 className="hiw__step-title">{step.title}</h3>
                <p className="hiw__step-desc">{step.description}</p>
                <ul className="hiw__step-highlights">
                  {step.highlights.map((h, j) => (
                    <li key={j} className="hiw__step-highlight">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hiw__step-visual">
                <div className="hiw__step-icon-wrap">
                  {i === 0 && (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  )}
                  {i === 1 && (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                    </svg>
                  )}
                  {i === 2 && (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
                    </svg>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hiw__cta text-center">
          <p className="hiw__cta-text">Ready to get started? We'll get your property live within days.</p>
          <a href="#contact" className="btn btn-primary">Start Earning More Today</a>
        </div>
      </div>
    </section>
  )
}
