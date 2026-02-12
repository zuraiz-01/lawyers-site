import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProcessSection from '../components/ProcessSection'
import ServicesSection from '../components/ServicesSection'
import ResultsSection from '../components/ResultsSection'
import TeamSection from '../components/TeamSection'
import TestimonialsSection from '../components/TestimonialsSection'
import CtaSection from '../components/CtaSection'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { useScrollAnimations } from '../hooks/useScrollAnimations'
import {
  processSteps,
  serviceCards,
  caseStats,
  attorneyCards,
  testimonials,
} from '../data/siteData'

function HomePage() {
  useRevealOnScroll()
  useScrollAnimations()

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProcessSection processSteps={processSteps} />
      <ServicesSection serviceCards={serviceCards} />
      <ResultsSection caseStats={caseStats} />
      <TeamSection attorneyCards={attorneyCards} />
      <TestimonialsSection testimonials={testimonials} />
      <CtaSection />
    </>
  )
}

export default HomePage
