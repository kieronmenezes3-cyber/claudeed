import './Services.css'

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 11c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
      </svg>
    ),
    title: 'Professional Photography',
    description: 'We arrange high-quality photography to showcase your property in the best possible light, maximising bookings.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
      </svg>
    ),
    title: 'Listing Creation & Optimisation',
    description: 'We create compelling listings across 40+ platforms, with SEO-optimised descriptions to rank higher in search results.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
      </svg>
    ),
    title: 'Guest Communication',
    description: 'We handle all guest messages 24/7, 365 days a year — ensuring prompt, professional responses that earn 5-star reviews.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/>
      </svg>
    ),
    title: 'Dynamic Pricing',
    description: 'Our seasonal pricing optimisation technology ensures your property is always priced competitively to maximise revenue.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    title: 'Cleaning Management',
    description: 'We manage local professional cleaning teams for fast, same-day turnarounds between guest stays — included in our fee.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
      </svg>
    ),
    title: 'Maintenance & Repairs',
    description: 'We coordinate all property maintenance and emergency repairs, keeping your property in perfect condition for guests.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
      </svg>
    ),
    title: 'Check-in & Check-out',
    description: 'We manage seamless key collection, guest check-ins and check-outs with thorough property inspections and inventory checks.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    ),
    title: 'Monthly Reports & Dashboard',
    description: 'Track your income, bookings, and occupancy rates in real-time through our client dashboard with detailed monthly reports.',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header text-center">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Everything Included in Our Service</h2>
          <p className="section-subtitle">
            Our full-service Airbnb management covers every aspect of running a successful holiday let.
            You sit back and earn — we handle everything else.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <div key={i} className="services__card">
              <div className="services__card-icon">{service.icon}</div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services__cta">
          <a href="#contact" className="btn btn-primary">Get a Free Valuation</a>
          <a href="#pricing" className="btn btn-outline-dark">See Our Pricing</a>
        </div>
      </div>
    </section>
  )
}
