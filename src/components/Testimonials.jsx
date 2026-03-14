import { useState } from 'react'
import './Testimonials.css'

const reviews = [
  {
    name: 'James H.',
    location: 'London',
    rating: 5,
    date: 'December 2024',
    text: 'The best of the 3 short let agencies I have used by such a distance it is simply embarrassing. Their expertise across Airbnb and HMO is second to none and it\'s completely deserved. My earnings have gone up significantly.',
    property: '2-bed apartment, Kensington',
    avatar: 'JH',
  },
  {
    name: 'Sarah M.',
    location: 'Edinburgh',
    rating: 5,
    date: 'November 2024',
    text: 'KARM LIVING have managed my Edinburgh flat for over 2 years now. The communication is excellent, the cleaning is always immaculate, and the monthly earnings reports are detailed and transparent. Highly recommend.',
    property: '1-bed flat, Old Town Edinburgh',
    avatar: 'SM',
  },
  {
    name: 'David & Claire T.',
    location: 'Brighton',
    rating: 5,
    date: 'October 2024',
    text: 'We were nervous about putting our property on Airbnb but KARM LIVING made the whole process incredibly easy. They handled everything from the photography to guest communication. Our occupancy rate is consistently above 90%.',
    property: '3-bed house, Brighton',
    avatar: 'DT',
  },
  {
    name: 'Robert K.',
    location: 'Manchester',
    rating: 5,
    date: 'September 2024',
    text: 'Switched to KARM LIVING from a competitor 18 months ago and haven\'t looked back. The 12% commission is excellent value for the service provided. My income increased by over 40% in the first year alone.',
    property: 'Studio apartment, Manchester City Centre',
    avatar: 'RK',
  },
  {
    name: 'Emma W.',
    location: 'Oxford',
    rating: 5,
    date: 'August 2024',
    text: 'Fantastic service from start to finish. The team is responsive, professional, and genuinely care about maximising your returns. I particularly appreciate the 24/7 guest support — it removes all the stress of hosting.',
    property: '2-bed cottage, Oxford',
    avatar: 'EW',
  },
  {
    name: 'Michael P.',
    location: 'Bath',
    rating: 5,
    date: 'July 2024',
    text: 'After trying to self-manage for a year, I handed over to KARM LIVING and the difference is night and day. Professional photography, better pricing, more bookings. My property now earns what it always should have been.',
    property: '4-bed Georgian townhouse, Bath',
    avatar: 'MP',
  },
]

function StarRating({ rating }) {
  return (
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < rating ? '#FFB900' : '#e0e0e0'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const visibleCount = 3
  const maxIndex = reviews.length - visibleCount

  const visible = reviews.slice(activeIndex, activeIndex + visibleCount)

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials__header text-center">
          <span className="section-label">What Our Clients Say</span>
          <h2 className="section-title">95% of Our Reviews Are 4 or 5 Stars</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our property owners say about
            working with KARM LIVING.
          </p>
        </div>

        <div className="testimonials__summary">
          <div className="testimonials__summary-score">
            <span className="testimonials__score-num">4.9</span>
            <div className="testimonials__score-info">
              <StarRating rating={5} />
              <span>Based on 500+ reviews</span>
            </div>
          </div>
          <div className="testimonials__summary-stats">
            <div className="testimonials__bar-item">
              <span>5 stars</span>
              <div className="testimonials__bar-track">
                <div className="testimonials__bar-fill" style={{ width: '86%' }}></div>
              </div>
              <span>86%</span>
            </div>
            <div className="testimonials__bar-item">
              <span>4 stars</span>
              <div className="testimonials__bar-track">
                <div className="testimonials__bar-fill" style={{ width: '9%' }}></div>
              </div>
              <span>9%</span>
            </div>
            <div className="testimonials__bar-item">
              <span>3 stars</span>
              <div className="testimonials__bar-track">
                <div className="testimonials__bar-fill testimonials__bar-fill--low" style={{ width: '3%' }}></div>
              </div>
              <span>3%</span>
            </div>
            <div className="testimonials__bar-item">
              <span>1-2 stars</span>
              <div className="testimonials__bar-track">
                <div className="testimonials__bar-fill testimonials__bar-fill--low" style={{ width: '2%' }}></div>
              </div>
              <span>2%</span>
            </div>
          </div>
        </div>

        <div className="testimonials__grid">
          {visible.map((review, i) => (
            <div key={i} className="testimonials__card">
              <div className="testimonials__card-header">
                <div className="testimonials__avatar">{review.avatar}</div>
                <div className="testimonials__meta">
                  <span className="testimonials__name">{review.name}</span>
                  <span className="testimonials__location">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {review.location}
                  </span>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="testimonials__text">"{review.text}"</p>
              <div className="testimonials__card-footer">
                <span className="testimonials__property">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                  {review.property}
                </span>
                <span className="testimonials__date">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials__nav">
          <button
            className="testimonials__nav-btn"
            onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            aria-label="Previous reviews"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <div className="testimonials__dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot ${i === activeIndex ? 'testimonials__dot--active' : ''}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to review set ${i + 1}`}
              />
            ))}
          </div>
          <button
            className="testimonials__nav-btn"
            onClick={() => setActiveIndex(Math.min(maxIndex, activeIndex + 1))}
            disabled={activeIndex === maxIndex}
            aria-label="Next reviews"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
