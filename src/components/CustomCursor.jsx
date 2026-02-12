import { useEffect, useRef, useState } from 'react'

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label, summary'

function CustomCursor() {
  const wrapperRef = useRef(null)
  const ringRef = useRef(null)
  const dotRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const syncEnabled = () => {
      setEnabled(finePointer.matches && !reduceMotion.matches)
    }

    syncEnabled()
    finePointer.addEventListener('change', syncEnabled)
    reduceMotion.addEventListener('change', syncEnabled)

    return () => {
      finePointer.removeEventListener('change', syncEnabled)
      reduceMotion.removeEventListener('change', syncEnabled)
    }
  }, [])

  useEffect(() => {
    if (!enabled) {
      document.body.classList.remove('cursor-enhanced')
      return
    }

    const wrapper = wrapperRef.current
    const ring = ringRef.current
    const dot = dotRef.current

    if (!wrapper || !ring || !dot) {
      return
    }

    document.body.classList.add('cursor-enhanced')

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let rafId = 0

    const tick = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`
      rafId = window.requestAnimationFrame(tick)
    }

    const onPointerMove = (event) => {
      mouseX = event.clientX
      mouseY = event.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
      wrapper.classList.add('is-visible')
    }

    const onOver = (event) => {
      const interactive = event.target.closest(INTERACTIVE_SELECTOR)
      wrapper.classList.toggle('is-hover', Boolean(interactive))
    }

    const onDown = () => {
      wrapper.classList.add('is-down')
    }

    const onUp = () => {
      wrapper.classList.remove('is-down')
    }

    const onWindowLeave = (event) => {
      if (event.relatedTarget || event.toElement) {
        return
      }

      wrapper.classList.remove('is-visible', 'is-hover', 'is-down')
    }

    tick()

    window.addEventListener('mousemove', onPointerMove, { passive: true })
    document.addEventListener('mouseover', onOver)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseout', onWindowLeave)

    return () => {
      document.body.classList.remove('cursor-enhanced')
      window.cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onPointerMove)
      document.removeEventListener('mouseover', onOver)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseout', onWindowLeave)
    }
  }, [enabled])

  if (!enabled) {
    return null
  }

  return (
    <div className="custom-cursor" ref={wrapperRef} aria-hidden="true">
      <span className="cursor-ring" ref={ringRef} />
      <span className="cursor-dot" ref={dotRef} />
    </div>
  )
}

export default CustomCursor
