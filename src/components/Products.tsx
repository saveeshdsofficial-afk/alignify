import type { ReactNode } from 'react'

interface Product {
  pill: string
  live?: boolean
  id: string
  title: ReactNode
  body: string
  feats: string[]
  ctaLabel: string
}

const PRODUCTS: Product[] = [
  {
    pill: 'Available Now',
    live: true,
    id: 'PRD_01 · Sales',
    title: <>Alignify <span className="it">Sales</span></>,
    body: 'Know your prospect before you reach out. Validate fit, adapt your pitch, and turn cold calls into aligned, high-probability conversations.',
    feats: [
      'DISC alignment scoring',
      'Buyer personality signals',
      'Personalised outreach guidance',
      'Objection-handling playbooks',
      'CRM-native (Salesforce, HubSpot, Pipedrive)',
    ],
    ctaLabel: 'Request a Team Demo',
  },
  {
    pill: 'Coming Soon',
    id: 'PRD_02 · Recruitment',
    title: <>Alignify <span className="it">Recruitment</span></>,
    body: 'Hire for structural fit, not just skill. Validate candidates against your culture blueprint before the first interview.',
    feats: [
      'Candidate alignment scoring',
      'Culture-fit screening',
      'Structured interview prompts',
      'ATS integration',
    ],
    ctaLabel: 'Join the Waitlist',
  },
  {
    pill: 'Coming Soon',
    id: 'PRD_03 · Mentor',
    title: <>Alignify <span className="it">Mentor</span></>,
    body: 'Match mentors and mentees by alignment — values, working style, and growth trajectory. Pairings that actually stick.',
    feats: [
      'Mentor-mentee matching',
      'Growth pathway mapping',
      'Pairing health check-ins',
      'Progress tracking',
    ],
    ctaLabel: 'Join the Waitlist',
  },
]

export default function Products() {
  return (
    <section className="section" id="products">
      <div className="frame">
        <div className="section-head">
          <span className="label">The Platform</span>
          <h2 className="section-h">
            Three products. <span className="it">One alignment layer.</span>
          </h2>
          <p className="section-deck">
            Alignify brings structured intelligence to the conversations that drive revenue, hires, and growth — starting with Sales.
          </p>
        </div>
        <div className="products-grid">
          {PRODUCTS.map((p) => (
            <article key={p.id} className={`glass pcard${p.live ? ' live' : ''}`}>
              {p.live && (
                <>
                  <span className="corner tl" />
                  <span className="corner tr" />
                  <span className="corner bl" />
                  <span className="corner br" />
                </>
              )}
              <span className="pcard-pill">{p.pill}</span>
              <div className="pcard-id">{p.id}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <ul className="pcard-feats">
                {p.feats.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <a href="#cta" className="pcard-cta">{p.ctaLabel}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
