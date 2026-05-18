'use client'

import { useEffect, useRef } from 'react'

export default function HeroSmoke() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const glow = glowRef.current
    const section = wrap?.parentElement
    if (!wrap || !glow || !section) return

    let raf = 0
    function onMove(e: MouseEvent) {
      const r = section!.getBoundingClientRect()
      const x = e.clientX - r.left
      const y = e.clientY - r.top
      if (x < 0 || y < 0 || x > r.width || y > r.height) {
        glow!.style.opacity = '0'
        return
      }
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        glow!.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
        glow!.style.opacity = '1'
      })
    }
    function onLeave() {
      glow!.style.opacity = '0'
    }

    section.addEventListener('mousemove', onMove)
    section.addEventListener('mouseleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      section.removeEventListener('mousemove', onMove)
      section.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div ref={wrapRef} className="hero-smoke-wrap" aria-hidden>
      <div ref={glowRef} className="hero-smoke" />
    </div>
  )
}
