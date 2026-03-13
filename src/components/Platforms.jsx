import './Platforms.css'

const platforms = [
  { name: 'Airbnb', color: '#FF5A5F' },
  { name: 'Booking.com', color: '#003580' },
  { name: 'Vrbo', color: '#1660A7' },
  { name: 'Tripadvisor', color: '#34E0A1' },
  { name: 'Expedia', color: '#003087' },
  { name: 'Homeaway', color: '#1B6AC9' },
  { name: 'Agoda', color: '#5383BD' },
  { name: 'Zoopla', color: '#8AC14B' },
  { name: 'Rightmove', color: '#00B0B9' },
  { name: 'Spotahome', color: '#F0702B' },
  { name: 'Homelike', color: '#2DBDE4' },
  { name: '+ 30 more', color: '#43464F' },
]

export default function Platforms() {
  return (
    <section className="platforms">
      <div className="container">
        <div className="platforms__header text-center">
          <span className="section-label">Maximum Exposure</span>
          <h2 className="section-title">Listed Across 40+ Booking Platforms</h2>
          <p className="section-subtitle">
            We advertise your property across all major booking sites to maximise visibility
            and occupancy. We selectively use the most suitable platforms for your property's
            location and requirements.
          </p>
        </div>
        <div className="platforms__grid">
          {platforms.map((platform, i) => (
            <div key={i} className="platforms__item">
              <div className="platforms__logo" style={{ '--platform-color': platform.color }}>
                <span className="platforms__logo-text">{platform.name}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="platforms__note text-center">
          We also create a dedicated direct booking page for your property to reduce platform fees.
        </p>
      </div>
    </section>
  )
}
