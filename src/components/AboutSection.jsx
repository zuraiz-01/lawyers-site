import { Link } from 'react-router-dom'

function AboutSection() {
  return (
    <section className="about reveal" id="about-us">
      <div className="container about-grid">
        <div
          className="about-collage reveal reveal-left"
          style={{ '--reveal-delay': '90ms' }}
          data-scroll-speed="0.07"
        >
          <img
            className="about-main"
            src="/images/about-gavel.jpg"
            alt="Court gavel"
            loading="lazy"
          />
          <img
            className="about-side"
            src="/images/about-lawyer.jpg"
            alt="Lawyer at desk"
            loading="lazy"
          />
        </div>

        <div
          className="about-copy reveal"
          style={{ '--reveal-delay': '160ms' }}
          data-scroll-speed="0.03"
        >
          <p className="kicker dark">Your Legal Shield</p>
          <h3>A Legacy Of Legal Excellence</h3>
          <p>
            Our team of experienced attorneys serves clients across corporate,
            family, and litigation matters with clarity and integrity.
          </p>
          <ul>
            <li>Committed to excellence in legal practice</li>
            <li>Ethical guidance with honest communication</li>
            <li>Strong case preparation and strategic planning</li>
            <li>Your needs remain our top priority</li>
          </ul>
          <Link className="btn" to="/about#our-team">
            More About
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
