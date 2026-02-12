import PageBanner from '../components/PageBanner'
import ServicesSection from '../components/ServicesSection'
import ResultsSection from '../components/ResultsSection'
import CtaSection from '../components/CtaSection'
import { serviceCards, caseStats } from '../data/siteData'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { useScrollAnimations } from '../hooks/useScrollAnimations'

function ServicesPage() {
  useRevealOnScroll()
  useScrollAnimations()

  return (
    <>
      <PageBanner
        title="Legal Services"
        subtitle="Specialized legal solutions for individuals, families, startups, and enterprises."
      />
      <ServicesSection serviceCards={serviceCards} />
      <ResultsSection caseStats={caseStats} />
      <CtaSection />
    </>
  )
}

export default ServicesPage
