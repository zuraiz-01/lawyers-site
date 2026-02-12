import { useState } from 'react'

function ShopSection({ shopItems }) {
  const [visibleCount, setVisibleCount] = useState(4)
  const visibleItems = shopItems.slice(0, visibleCount)
  const canLoadMore = visibleCount < shopItems.length

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, shopItems.length))
  }

  return (
    <section className="shop-section reveal" id="shop-list">
      <div className="container">
        <p className="kicker dark center reveal" style={{ '--reveal-delay': '40ms' }}>
          Legal Store
        </p>
        <h2 className="section-title reveal" style={{ '--reveal-delay': '90ms' }}>
          Legal Resources & Templates
        </h2>

        <div className="shop-grid">
          {visibleItems.map((item, index) => (
            <article
              key={item.name}
              className="shop-card reveal"
              style={{ '--reveal-delay': `${130 + index * 80}ms` }}
              data-scroll-speed={index % 2 === 0 ? '0.03' : '0.05'}
            >
              <p className="shop-category">{item.category}</p>
              <h3>{item.name}</h3>
              <div className="shop-card-bottom">
                <strong>{item.price}</strong>
                <a
                  href={`mailto:info@lexovia.com?subject=${encodeURIComponent(
                    `Purchase Request: ${item.name}`,
                  )}`}
                >
                  Get Template
                </a>
              </div>
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

export default ShopSection
