interface Solution {
  name: string
  body: string
}

const SOLUTIONS: Solution[] = [
  {
    name: 'Buyer Personality Playbook',
    body: 'Full DISC-based playbook for how to sell to this specific buyer. Communication style, objection patterns, pricing response, closing technique, meeting structure, and follow-up cadence. Pure Personality output — assesses the individual and generates guidance from their psychological profile.',
  },
  {
    name: 'PCCA Playbook',
    body: "Personality drives communication style and tone. Compatibility introduces product and service context to maximise sales success and effort. Complementary drives connection to enhance the buyer's business. A personality and company-level structural assessment with an overall alignment score and playbook.",
  },
]

interface PriceCard {
  tone: 'dark' | 'teal'
  eyebrow: string
  price: string
  unit: string
  rider: string
}

const PRICES: PriceCard[] = [
  {
    tone: 'dark',
    eyebrow: 'Personality Playbook',
    price: '$49',
    unit: '/ month',
    rider: '+ $19.95 per profile',
  },
  {
    tone: 'teal',
    eyebrow: 'PCCA Playbook',
    price: '$99',
    unit: '/ month',
    rider: '+ $29.95 per profile',
  },
]

export default function Solutions() {
  return (
    <section className="section solutions-section">
      <div className="frame">
        <div className="section-head centered">
          <span className="label">Sales Solutions &amp; Pricing</span>
          <h2 className="section-h">
            Two playbooks. <span className="it">One alignment engine.</span>
          </h2>
          <p className="section-deck">
            Start with the individual buyer or step up to the full PCCA assessment across people, company, and product fit. Both deliver an actionable playbook to your reps.
          </p>
        </div>

        <div className="sol-grid">
          {SOLUTIONS.map((s) => (
            <article key={s.name} className="glass sol-card">
              <span className="sol-accent" />
              <h3>{s.name}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>

        <div className="sol-divider">
          <span className="label">Pricing</span>
        </div>

        <div className="pricing-grid">
          {PRICES.map((p) => (
            <article key={p.eyebrow} className={`price-card ${p.tone}`}>
              <span className="price-eyebrow">{p.eyebrow}</span>
              <div className="price-row">
                <span className="price-big">{p.price}</span>
                <span className="price-unit">{p.unit}</span>
              </div>
              <span className="price-rider">{p.rider}</span>
            </article>
          ))}
        </div>

        <div className="impl-row">
          <span className="impl-pill">Implementation Fee</span>
          <div className="impl-items">
            <span className="impl-item">
              <strong>Personality Playbook</strong> $995 one-off
            </span>
            <span className="impl-item">
              <strong>PCCA Playbook</strong> $1,995 one-off
            </span>
          </div>
        </div>

        <div className="intro-offer">
          <span className="intro-corner tl" />
          <span className="intro-corner tr" />
          <span className="intro-corner bl" />
          <span className="intro-corner br" />
          <div className="intro-eyebrow">
            <span className="intro-star">★</span>
            <span className="label">Introductory Offer</span>
          </div>
          <div className="intro-body">
            No implementation fee · 3 months free subscription · first 100 companies.
          </div>
        </div>
      </div>
    </section>
  )
}
