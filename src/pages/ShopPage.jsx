import PageBanner from '../components/PageBanner'
import ShopSection from '../components/ShopSection'
import CtaSection from '../components/CtaSection'
import { shopItems } from '../data/siteData'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { useScrollAnimations } from '../hooks/useScrollAnimations'

function ShopPage() {
  useRevealOnScroll()
  useScrollAnimations()

  return (
    <>
      <PageBanner
        title="Shop"
        subtitle="Curated legal templates and resources to speed up your legal preparation."
      />
      <ShopSection shopItems={shopItems} />
      <CtaSection />
    </>
  )
}

export default ShopPage
