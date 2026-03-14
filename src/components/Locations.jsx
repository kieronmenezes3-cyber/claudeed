import './Locations.css'

const properties = [
  {
    address: 'Oxford Road',
    area: 'Reading',
    beds: 1,
    type: 'House Share',
    price: '£525 pcm',
    status: 'Available Now',
    statusType: 'available',
    description: 'Good sized single bedroom, ideally located near retail park and town centre.',
  },
  {
    address: 'Crossland Road',
    area: 'Reading Town Centre',
    beds: 1,
    type: 'Room (Shared)',
    price: '£585 pcm',
    status: 'Available Now',
    statusType: 'available',
    description: 'Spacious double bedroom furnished to a good standard. Bills and wireless internet included.',
  },
  {
    address: 'Kings Road',
    area: 'Reading, Berkshire',
    beds: 1,
    type: 'House Share',
    price: '£625 pcm',
    status: 'Let',
    statusType: 'let',
    description: 'Newly redecorated large double bedroom with en-suite shower room.',
  },
  {
    address: 'Southampton Street',
    area: 'Reading',
    beds: 1,
    type: 'Bedsit',
    price: '£675 pcm',
    status: 'Under Offer',
    statusType: 'offer',
    description: 'Large bedsit in a 5-bedroom share, just a 10-minute walk to town centre.',
  },
  {
    address: 'Eldon Road',
    area: 'Reading',
    beds: 1,
    type: 'Apartment',
    price: '£1,050 pcm',
    status: 'Available Now',
    statusType: 'available',
    description: 'Newly redecorated and spacious lower ground floor flat, unfurnished.',
  },
  {
    address: 'Knossington Close',
    area: 'Lower Earley',
    beds: 1,
    type: 'Flat',
    price: '£1,150 pcm',
    status: 'Under Offer',
    statusType: 'offer',
    description: 'Ground floor flat near shopping complex and leisure facilities.',
  },
  {
    address: 'Crossland Road',
    area: 'Reading',
    beds: 1,
    type: 'Studio',
    price: '£1,200 pcm',
    status: 'Under Offer',
    statusType: 'offer',
    description: 'Spacious studio flat near Oracle Riverside. All bills included.',
  },
  {
    address: 'Kings Road',
    area: 'Reading',
    beds: 1,
    type: 'Apartment',
    price: '£1,300 pcm',
    status: 'Available Now',
    statusType: 'available',
    description: 'Exceptionally finished apartment with private gym, parking and concierge service.',
  },
]

const statusLabel = {
  available: 'Available Now',
  let: 'Let',
  offer: 'Under Offer',
}

export default function Locations() {
  return (
    <section className="locations" id="locations">
      <div className="container">
        <div className="locations__header text-center">
          <span className="section-label">Our Properties</span>
          <h2 className="section-title">Properties Available to Rent</h2>
          <p className="section-subtitle">
            Browse our current selection of managed properties across Reading and Berkshire.
            All properties are professionally managed by KARM LIVING.
          </p>
        </div>

        <div className="locations__grid">
          {properties.map((p, i) => (
            <div key={i} className="locations__card">
              <span className={`locations__status locations__status--${p.statusType}`}>
                {statusLabel[p.statusType]}
              </span>

              <div className="locations__card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>

              <h3 className="locations__card-name">{p.address}</h3>
              <p className="locations__card-area">{p.area}</p>

              <div className="locations__card-meta">
                <span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                  {p.beds} Bed · {p.type}
                </span>
              </div>

              <p className="locations__card-desc">{p.description}</p>

              <div className="locations__card-footer">
                <span className="locations__card-price">{p.price}</span>
                <a href="#contact" className="locations__card-link">Enquire →</a>
              </div>
            </div>
          ))}
        </div>

        <div className="locations__note text-center">
          <p>Interested in a property? <a href="#contact">Get in touch with us today →</a></p>
        </div>
      </div>
    </section>
  )
}
