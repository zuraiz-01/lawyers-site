import { Link, Navigate, useParams } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import CtaSection from '../components/CtaSection'
import { practiceAreas } from '../data/siteData'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { useScrollAnimations } from '../hooks/useScrollAnimations'

function PracticeAreaPage() {
  const { slug } = useParams()

  const area = practiceAreas.find((item) => item.slug === slug)

  useRevealOnScroll()
  useScrollAnimations()

  if (!area) {
    return <Navigate to="/services" replace />
  }

  return (
    <>
      <PageBanner title={area.label} subtitle={area.short} />

      <section className="practice-detail reveal" id="practice-detail">
        <div className="container practice-grid">
          <div className="practice-panel reveal reveal-left" style={{ '--reveal-delay': '90ms' }}>
            <p className="kicker dark">Practice Overview</p>
            <h2>{area.label}</h2>
            <p>{area.overview}</p>

            <div className="practice-actions">
              <Link className="btn" to="/contact">
                Book Consultation
              </Link>
              <Link className="btn btn-outline" to="/services">
                Back to Services
              </Link>
            </div>
          </div>

          <aside className="practice-panel soft reveal reveal-right" style={{ '--reveal-delay': '140ms' }}>
            <h3>What We Handle</h3>
            <ul className="practice-points">
              {area.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="practice-contact-box">
              <p>Need immediate legal guidance?</p>
              <a href="tel:+1234567890">+123 456 7890</a>
            </div>
          </aside>
        </div>
      </section>

      <CtaSection />
    </>
  )
}

export default PracticeAreaPage
