import { useState } from 'react'

function ServicesSection({ serviceCards }) {
  const [visibleCount, setVisibleCount] = useState(4)
  const visibleServices = serviceCards.slice(0, visibleCount)
  const canLoadMore = visibleCount < serviceCards.length

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, serviceCards.length))
  }

  return (
    <section className="services reveal" id="services">
      <div className="container">
        <p className="kicker dark center reveal" style={{ '--reveal-delay': '50ms' }}>
          What We Do
        </p>
        <h3 className="section-title reveal" style={{ '--reveal-delay': '110ms' }}>
          Legal Services We Offer
        </h3>
        <div className="service-grid">
          {visibleServices.map((service, index) => (
            <article
              key={service.title}
              className={`service-card ${service.active ? 'active' : ''}`}
              style={{ '--reveal-delay': `${170 + index * 90}ms` }}
            >
              <span className="service-icon">O</span>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
              <a
                href={`mailto:info@lexovia.com?subject=${encodeURIComponent(
                  `${service.title} Consultation`,
                )}`}
              >
                Read More
              </a>
            </article>
          ))}
        </div>

        {canLoadMore && (
          <div className="services-load-wrap">
            <button className="btn services-load-btn" type="button" onClick={handleLoadMore}>
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default ServicesSection
