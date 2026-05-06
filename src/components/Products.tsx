import type { ReactNode } from 'react'

interface Product {
  pill: string
  live?: boolean
  num: string
  title: ReactNode
  body: string
  feats: string[]
  ctaLabel: string
}

const PRODUCTS: Product[] = [
  {
    pill: 'Available',
    live: true,
    num: 'PRD_01 · Sales',
    title: <>Alignify <span className="it">Sales</span></>,
    body: "Understand your prospect's personality, communication style, and buying drivers before you connect.",
    feats: ['Alignment scoring', 'Buyer signal', 'Outreach guidance', 'Objection playbooks'],
    ctaLabel: 'Get early access',
  },
  {
    pill: 'Coming soon',
    num: 'PRD_02 · Recruitment',
    title: <>Alignify <span className="it">Recruitment</span></>,
    body: 'Hire for structural fit, not just skill. Validate candidates against your culture blueprint.',
    feats: ['Candidate scoring', 'Culture fit screen', 'Interview prompts'],
    ctaLabel: 'Join waitlist',
  },
  {
    pill: 'Coming soon',
    num: 'PRD_03 · Mentor',
    title: <>Alignify <span className="it">Mentor</span></>,
    body: 'Match mentors and mentees by alignment — values, working style, growth trajectory.',
    feats: ['Mentor matching', 'Pathway maps', 'Health check-ins'],
    ctaLabel: 'Join waitlist',
  },
]

export default function Products() {
  return (
    <section className="section">
      <div className="frame">
        <div className="section-head">
          <span className="label">The Platform</span>
          <h2>Alignment for sales, hiring, and mentoring. <span className="it">Built on the same engine.</span></h2>
          <p>
            One alignment layer powering every conversation that drives revenue, hires, and growth — starting with Sales.
          </p>
        </div>
        <div className="products-grid">
          {PRODUCTS.map((p) => (
            <article key={p.num} className={`pcard${p.live ? ' live' : ''}`}>
              <span className="pcard-pill">{p.pill}</span>
              <div className="pcard-num">{p.num}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <ul className="pcard-feats">
                {p.feats.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <a href="#final-cta" className="pcard-cta">{p.ctaLabel}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
