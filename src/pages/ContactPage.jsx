import PageBanner from '../components/PageBanner'
import ContactSection from '../components/ContactSection'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { useScrollAnimations } from '../hooks/useScrollAnimations'

function ContactPage() {
  useRevealOnScroll()
  useScrollAnimations()

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Tell us about your legal concern and get a clear, confidential response."
      />
      <ContactSection />
    </>
  )
}

export default ContactPage
