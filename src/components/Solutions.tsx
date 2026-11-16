interface Solution {
  name: string
  body: string
}

const SOLUTIONS: Solution[] = [
  {
    name: 'The Customer Playbook',
    body: 'A playbook is created on your customer, what motivates them, their style, what drives them and how to communicate and connect. A customer questionnaire is completed and a sales playbook is created.',
  },
  {
    name: 'The Prospect Playbook',
    body: 'A prospect playbook is created on your prospect, their buying style, how you interact, pitch, use tone and connect.',
  },
  {
    name: 'Your Playbook',
    body: 'A personality profile is created on you, what motivates you, your style, what drives you. A questionnaire is completed.',
  },
]

interface Bundle {
  name: string
  tiers: { label: string; price: string }[]
}

const BUNDLES: Bundle[] = [
  {
    name: 'The Prospect Playbook',
    tiers: [
      { label: 'Single purchase', price: '$29' },
      { label: '10 pk', price: '$25 each' },
      { label: '25 pk', price: '$19 each' },
      { label: '50 pk', price: '$9 each' },
    ],
  },
  {
    name: 'The Customer Playbook',
    tiers: [
      { label: 'Single purchase', price: '$49' },
      { label: '10 pk', price: '$45 each' },
      { label: '25 pk', price: '$29 each' },
      { label: '50 pk', price: '$19 each' },
    ],
  },
  {
    name: 'Your Playbook',
    tiers: [
      { label: 'Single purchase', price: '$49' },
      { label: '10 pk', price: '$45 each' },
      { label: '25 pk', price: '$29 each' },
      { label: '50 pk', price: '$19 each' },
    ],
  },
]

export default function Solutions() {
  return (
    <section className="section solutions-section">
      <div className="frame">
        <div className="section-head centered">
          <span className="label">The Pricing</span>
          <h2 className="section-h">
            One Alignify engine – <span className="it">three sales playbooks.</span>
          </h2>
          <p className="section-deck">
            Your Playbook understands you. The Prospect Playbook understands your prospect and how to sell to them. The Customer Playbook understands existing customers and how to sell more to them.
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
              <span className="price-eyebrow">Subscription</span>
              <div className="price-row">
                <span className="price-big">$99</span>
                <span className="price-unit">unlimited users</span>
              </div>
              <span className="price-rider">Includes setup, portal access, support and maintenance-12 month subscription.</span>
            </div>
          </article>

          <div className="pricing-plus" aria-hidden="true">+</div>

          <article className="price-card dark bundle-card">
            <span className="price-eyebrow">Playbook bundles</span>
            <div className="bundle-grid">
              {BUNDLES.map((b) => (
                <div key={b.name} className="bundle-item">
                  <span className="bundle-name">{b.name}</span>
                  <ul className="bundle-tiers">
                    {b.tiers.map((t) => (
                      <li key={t.label}>
                        <span className="bundle-tier-label">{t.label}</span>
                        <span className="bundle-tier-price">
                          {t.price.replace(' each', '')}
                          {t.price.endsWith(' each') && <span className="bundle-tier-each"> each</span>}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <span className="price-rider bundle-note">
              Buy single playbooks or save with a 10, 25 or 50 pack. Prices are per playbook, and packs can be shared across multiple company users.
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
