import './Locations.css'

const cities = [
  { name: 'London', description: 'From £2,500/month avg earnings', hot: true },
  { name: 'Edinburgh', description: 'From £1,700/month avg earnings', hot: true },
  { name: 'Manchester', description: 'From £1,400/month avg earnings', hot: false },
  { name: 'Brighton', description: 'From £1,600/month avg earnings', hot: true },
  { name: 'Bath', description: 'From £1,800/month avg earnings', hot: false },
  { name: 'Oxford', description: 'From £1,500/month avg earnings', hot: false },
  { name: 'Cambridge', description: 'From £1,400/month avg earnings', hot: false },
  { name: 'Liverpool', description: 'From £1,200/month avg earnings', hot: false },
  { name: 'Glasgow', description: 'From £1,300/month avg earnings', hot: false },
  { name: 'Bristol', description: 'From £1,400/month avg earnings', hot: false },
  { name: 'York', description: 'From £1,300/month avg earnings', hot: false },
  { name: 'Birmingham', description: 'From £1,100/month avg earnings', hot: false },
  { name: 'Leeds', description: 'From £1,200/month avg earnings', hot: false },
  { name: 'Cheshire', description: 'From £1,300/month avg earnings', hot: false },
  { name: 'Surrey', description: 'From £1,800/month avg earnings', hot: false },
  { name: 'Hampshire', description: 'From £1,400/month avg earnings', hot: false },
]

export default function Locations() {
  return (
    <section className="locations" id="locations">
      <div className="container">
        <div className="locations__header text-center">
          <span className="section-label">Nationwide Coverage</span>
          <h2 className="section-title">Airbnb Management Across the UK</h2>
          <p className="section-subtitle">
            We operate nationwide, managing hundreds of properties across the UK's most
            popular tourist destinations and cities.
          </p>
        </div>

        <div className="locations__grid">
          {cities.map((city, i) => (
            <a key={i} href={`#${city.name.toLowerCase()}`} className="locations__card">
              {city.hot && <span className="locations__hot">Popular</span>}
              <div className="locations__card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="locations__card-name">{city.name}</h3>
              <p className="locations__card-desc">{city.description}</p>
              <span className="locations__card-link">
                View service →
              </span>
            </a>
          ))}
        </div>

        <div className="locations__note text-center">
          <p>Don't see your city? We're expanding rapidly.
            <a href="#contact"> Get in touch to check coverage →</a>
          </p>
        </div>
      </div>
    </section>
  )
}
