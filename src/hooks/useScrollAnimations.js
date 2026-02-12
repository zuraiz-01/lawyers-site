import { useEffect } from 'react'

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

export function useScrollAnimations() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (reduceMotion.matches) {
      return undefined
    }

    const elements = Array.from(document.querySelectorAll('[data-scroll-speed]'))
    let rafId = 0

    const update = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      document.documentElement.style.setProperty(
        '--scroll-progress',
        String(clamp(progress, 0, 1)),
      )

      const viewportCenter = window.innerHeight / 2

      elements.forEach((element) => {
        const speed = Number(element.dataset.scrollSpeed || 0)
        if (!speed) {
          return
        }

        const rect = element.getBoundingClientRect()
        const elementCenter = rect.top + rect.height / 2
        const offset = elementCenter - viewportCenter
        const shift = clamp(-offset * speed, -70, 70)

        element.style.setProperty('--scroll-shift', `${shift.toFixed(2)}px`)
      })

      rafId = 0
    }

    const requestUpdate = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (rafId) {
        window.cancelAnimationFrame(rafId)
      }
      document.documentElement.style.setProperty('--scroll-progress', '0')
    }
  }, [])
}
