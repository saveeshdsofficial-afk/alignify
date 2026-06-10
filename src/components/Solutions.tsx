interface Solution {
  name: string
  body: string
}

const SOLUTIONS: Solution[] = [
  {
    name: 'Buyer Personality Playbook',
    body: "A complete buyer personality playbook covering how to sell to this specific buyer — communication style, objection patterns, pricing response, closing technique, meeting structure, and follow-up cadence. Generated from each individual's personality profile.",
  },
  {
    name: 'PCCA Playbook',
    body: 'The PCCA playbook covers personality, compatibility, and complementary — delivering a full structural assessment with an overall alignment score and playbook.',
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
            One platform with two playbooks. Use the Personality Playbook for individual buyer insights, or step up to the full PCCA Playbook for deeper company and product fit.
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

        <div className="pricing-grid single">
          <article className="price-card teal">
            <span className="price-eyebrow">Monthly Subscription</span>
            <div className="price-row">
              <span className="price-big">$99</span>
              <span className="price-unit">/ month</span>
            </div>
            <span className="price-rider">Includes 5 personality profiles</span>
          </article>
        </div>

        <div className="impl-row">
          <span className="impl-pill">Implementation Fee</span>
          <div className="impl-items">
            <span className="impl-item">
              <strong>One-off</strong> $995.00
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
            No implementation fee · limited to the first 100 companies.
          </div>
        </div>
      </div>
    </section>
  )
}
