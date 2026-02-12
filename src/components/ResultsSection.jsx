import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function ResultsSection({ caseStats }) {
  const sectionRef = useRef(null)
  const frameRef = useRef(null)
  const hasAnimatedRef = useRef(false)

  const parsedStats = useMemo(
    () =>
      caseStats.map((item) => {
        const match = item.value.match(/[\d.]+/)
        const target = match ? Number(match[0]) : 0
        const suffix = match ? item.value.replace(match[0], '') : item.value

        return { target, suffix }
      }),
    [caseStats],
  )

  const [counts, setCounts] = useState(() => parsedStats.map(() => 0))

  useEffect(() => {
    setCounts(parsedStats.map(() => 0))
    hasAnimatedRef.current = false
  }, [parsedStats])

  useEffect(() => {
    const section = sectionRef.current
    if (!section || hasAnimatedRef.current) {
      return
    }

    const easeOutCubic = (t) => 1 - (1 - t) ** 3
    const duration = 1600

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || hasAnimatedRef.current) {
            return
          }

          hasAnimatedRef.current = true
          const start = performance.now()

          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = easeOutCubic(progress)

            setCounts(parsedStats.map((stat) => Math.round(stat.target * eased)))

            if (progress < 1) {
              frameRef.current = requestAnimationFrame(animate)
            }
          }

          frameRef.current = requestAnimationFrame(animate)
          observer.disconnect()
        })
      },
      { threshold: 0.35 },
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [parsedStats])

  return (
    <section className="results reveal" id="case-results" ref={sectionRef}>
      <div className="results-overlay" />
      <div className="container results-grid">
        <div
          className="results-copy reveal reveal-left"
          style={{ '--reveal-delay': '100ms' }}
          data-scroll-speed="0.03"
        >
          <p className="kicker">Case Results</p>
          <h3>Trusted by Clients, Proven in Court</h3>
          <p>
            We combine strategy, preparation, and courtroom confidence to
            deliver strong legal outcomes across diverse case types.
          </p>
          <Link className="btn" to="/services">
            View Case Studies
          </Link>
        </div>

        <div className="results-cards scroll-float" data-scroll-speed="0.07">
          {caseStats.map((item, index) => (
            <article
              key={item.label}
              className="result-card reveal"
              style={{ '--reveal-delay': `${150 + index * 90}ms` }}
            >
              <h4>
                {counts[index]}
                {parsedStats[index].suffix}
              </h4>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResultsSection
