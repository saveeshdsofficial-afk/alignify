interface Solution {
  name: string
  body: string
}

const SOLUTIONS: Solution[] = [
  {
    name: 'Your Personality Profile',
    body: 'A personality profile is created on you, what motivates you, your style, what drives you. A questionnaire is completed.',
  },
  {
    name: 'The Buyer Playbook',
    body: 'A buyers playbook is created on your prospect or customer, their buying style, how you interact, pitch, use tone and connect.',
  },
]

export default function Solutions() {
  return (
    <section className="section solutions-section">
      <div className="frame">
        <div className="section-head centered">
          <span className="label">The Pricing</span>
          <h2 className="section-h">
            One alignment engine. <span className="it">Two playbooks, one price.</span>
          </h2>
          <p className="section-deck">
            Create your personality profile to understand yourself and the Buyer playbook to understand your prospect or customer.
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

        <div className="pricing-stack">
          <article className="price-card dark price-wide">
            <div className="price-wide-main">
              <span className="price-eyebrow">Alignify Subscription</span>
              <div className="price-row">
                <span className="price-big">$99</span>
                <span className="price-unit">/ month</span>
              </div>
              <span className="price-rider">
                Includes the &ldquo;your&rdquo; personality profile and 5 Buyer Playbooks per month — thereafter $19.95 per playbook.
              </span>
            </div>
          </article>
        </div>

        <div className="intro-offer">
          <span className="intro-corner tl" />
          <span className="intro-corner tr" />
          <span className="intro-corner bl" />
          <span className="intro-corner br" />
          <div className="intro-offer-main">
            <div className="intro-eyebrow">
              <span className="intro-star">★</span>
              <span className="label">Introductory Offer</span>
            </div>
            <div className="intro-body">
              1 month free subscription · Limited to the first 100 companies.
            </div>
          </div>
          <div className="pricing-cta">
            <a href="#cta" className="btn-glow">Try out for free</a>
          </div>
        </div>
      </div>
    </section>
  )
}
