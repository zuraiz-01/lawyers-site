import PageBanner from '../components/PageBanner'
import BlogSection from '../components/BlogSection'
import CtaSection from '../components/CtaSection'
import { blogPosts } from '../data/siteData'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { useScrollAnimations } from '../hooks/useScrollAnimations'

function BlogPage() {
  useRevealOnScroll()
  useScrollAnimations()

  return (
    <>
      <PageBanner
        title="Blog"
        subtitle="Practical legal insights, case strategy tips, and latest compliance guidance."
      />
      <BlogSection blogPosts={blogPosts} />
      <CtaSection />
    </>
  )
}

export default BlogPage
