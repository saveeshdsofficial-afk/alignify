'use client'

import { useEffect, useState } from 'react'

// Fixed "Start free trial" button that scrolls to the sign-up form.
// It appears once the visitor scrolls past the hero and hides again while
// the form section (#cta) is on screen, so it never duplicates the form.
export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const cta = document.getElementById('cta')
    let scrolledPastHero = false
    let ctaInView = false

    const update = () => setVisible(scrolledPastHero && !ctaInView)

    const onScroll = () => {
      scrolledPastHero = window.scrollY > 500
      update()
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    let observer: IntersectionObserver | undefined
    if (cta) {
      observer = new IntersectionObserver(
        ([entry]) => {
          ctaInView = entry.isIntersecting
          update()
        },
        { rootMargin: '0px 0px -40% 0px' },
      )
      observer.observe(cta)
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer?.disconnect()
    }
  }, [])

  return (
    <a
      href="#cta"
      className={`floating-cta${visible ? ' is-visible' : ''}`}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      Start free trial
    </a>
  )
}
