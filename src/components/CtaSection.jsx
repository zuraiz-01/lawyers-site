import { Link } from 'react-router-dom'

function CtaSection() {
  return (
    <section className="cta reveal" id="contact">
      <div className="container cta-box reveal" style={{ '--reveal-delay': '120ms' }}>
        <div>
          <p className="kicker dark">Free Case Review</p>
          <h3>Need Legal Assistance? Talk to Our Team Today</h3>
        </div>
        <Link className="btn" to="/contact">
          Book Consultation
        </Link>
      </div>
    </section>
  )
}

export default CtaSection
