import type { ReactNode } from 'react'

interface Testimonial {
  logo: string
  quote: ReactNode
  initials: string
  avatarClass: 'a1' | 'a2' | 'a3'
  name: string
  role: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    logo: 'Innosystems',
    quote: <>&quot;Reply rates <span className="em">doubled</span> in the first month. Cold calls finally feel warm.&quot;</>,
    initials: 'SJ',
    avatarClass: 'a1',
    name: 'Sarah Jenkins',
    role: 'Head of Sales',
  },
  {
    logo: 'Quartix',
    quote: <>&quot;The first <span className="em">five minutes</span> of every call changed. We walk in already aligned.&quot;</>,
    initials: 'MT',
    avatarClass: 'a2',
    name: 'Marcus Thorne',
    role: 'VP Revenue',
  },
  {
    logo: 'Meridian',
    quote: <>&quot;Cut call-to-close time by <span className="em">30%</span>. Every meeting starts with real context.&quot;</>,
    initials: 'RN',
    avatarClass: 'a3',
    name: 'Rhea Nakamura',
    role: 'CRO',
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
    <section className="section">
      <div className="frame">
        <div className="section-head centered">
          <span className="label">From the field</span>
          <h2>Trusted by <span className="it">revenue leaders.</span></h2>
        </div>
        <div className="test-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="tcard">
              <div className="tcard-top">
                <div className="tcard-stars">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
                </div>
                <div className="tcard-logo">{t.logo}</div>
              </div>
              <p className="tquote">{t.quote}</p>
              <div className="tauthor">
                <div className={`tavatar ${t.avatarClass}`}>{t.initials}</div>
                <div>
                  <div className="tname">{t.name}</div>
                  <div className="trole">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
