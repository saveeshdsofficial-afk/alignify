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
            One alignment engine – <span className="it">two playbooks.</span>
          </h2>
          <p className="section-deck">
            Your personality profile understands you; the Buyer playbook understands your prospect and how to sell to them.
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
              <span className="price-eyebrow">Monthly subscription</span>
              <div className="price-row">
                <span className="price-big">$9.90</span>
                <span className="price-unit">/ per user*</span>
              </div>
              <span className="price-rider">Includes your playbook, user setup, portal access.</span>
            </div>
          </article>

          <div className="pricing-plus" aria-hidden="true">+</div>

          <article className="price-card dark bundle-card">
            <span className="price-eyebrow">Buyer Playbook bundles</span>
            <div className="bundle-grid">
              <div className="bundle-item">
                <span className="bundle-name">10 pack</span>
                <span className="bundle-price">$299*</span>
              </div>
              <div className="bundle-item">
                <span className="bundle-name">25 pack</span>
                <span className="bundle-price">$675*</span>
              </div>
              <div className="bundle-item">
                <span className="bundle-name">75 pack</span>
                <span className="bundle-price">$1875*</span>
              </div>
            </div>
            <span className="price-rider bundle-note">
              *Buy the bundle that best suits you, each bundle can be used across multiple company users.
            </span>
          </article>
        </div>

        <div className="intro-offer">
          <div className="intro-offer-main">
            <div className="intro-eyebrow">
              <span className="label">Introductory Offer</span>
            </div>
            <div className="intro-body">
              6 months free subscription · Limited to the first 100 users.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
