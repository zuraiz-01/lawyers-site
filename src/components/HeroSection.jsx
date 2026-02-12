import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />
      <div className="container hero-grid">
        <div
          className="hero-copy reveal reveal-left"
          style={{ '--reveal-delay': '110ms' }}
          data-scroll-speed="0.04"
        >
          <p className="kicker">Your Legal Shield</p>
          <h2>
            Experienced
            <br />
            Attorneys, Trusted
            <br />
            Results
          </h2>
          <Link className="btn" to="/contact">
            Contact Us
          </Link>
        </div>
        <div
          className="hero-image-card reveal reveal-right"
          style={{ '--reveal-delay': '180ms' }}
          data-scroll-speed="0.09"
        >
          <img src="/images/hero-attorney.jpg" alt="Attorney portrait" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
