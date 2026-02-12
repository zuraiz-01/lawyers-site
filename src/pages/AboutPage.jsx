import PageBanner from '../components/PageBanner'
import AboutSection from '../components/AboutSection'
import ProcessSection from '../components/ProcessSection'
import TeamSection from '../components/TeamSection'
import CtaSection from '../components/CtaSection'
import { processSteps, attorneyCards } from '../data/siteData'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { useScrollAnimations } from '../hooks/useScrollAnimations'

function AboutPage() {
  useRevealOnScroll()
  useScrollAnimations()

  return (
    <>
      <PageBanner
        title="About Our Firm"
        subtitle="A client-first legal team focused on strategy, ethics, and measurable legal outcomes."
      />
      <AboutSection />
      <ProcessSection processSteps={processSteps} />
      <TeamSection attorneyCards={attorneyCards} />
      <CtaSection />
    </>
  )
}

export default AboutPage
