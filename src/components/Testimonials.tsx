import type { ReactNode } from 'react'

interface Testimonial {
  quote: ReactNode
  initials: string
  avClass: 'a1' | 'a2' | 'a3'
  name: string
  role: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: <>&quot;The first <span className="em">five minutes</span> of every call changed. We walk in aligned – every time.&quot;</>,
    initials: 'MT',
    avClass: 'a2',
    name: 'Marcus Thorne',
    role: 'VP Revenue · Quartix',
  },
  {
    quote: <>&quot;Cut our call-to-close time by <span className="em">30%.</span> Every meeting starts with real context and a clear play.&quot;</>,
    initials: 'RN',
    avClass: 'a3',
    name: 'Rhea Nakamura',
    role: 'CRO · Meridian Labs',
  },
  {
    quote: <>&quot;Replaced three tools and a spreadsheet. <span className="em">One source of truth</span> for our entire revenue pipeline.&quot;</>,
    initials: 'DO',
    avClass: 'a1',
    name: 'Daniel Okafor',
    role: 'VP Sales · Latchwork',
  },
]

function Star() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 1l2.09 4.26 4.7.68-3.4 3.31.8 4.68L8 11.77l-4.2 2.16.8-4.68-3.4-3.31 4.7-.68z" />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section className="section section-alt">
      <div className="frame">
        <div className="section-head centered">
          <span className="label">Evidence from the field</span>
          <h2 className="section-h">
            Trusted by <span className="it">revenue leaders.</span>
          </h2>
        </div>

        <div className="test-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="glass tcard">
              <div className="tcard-top">
                <div className="tcard-stars">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
                </div>
              </div>
              <p className="quote">{t.quote}</p>
              <div className="tcard-author">
                <div className={`tcard-av ${t.avClass}`}>{t.initials}</div>
                <div>
                  <div className="tcard-name">{t.name}</div>
                  <div className="tcard-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
