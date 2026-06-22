interface Solution {
  name: string
  body: string
}

const SOLUTIONS: Solution[] = [
  {
    name: 'Buyer Personality Playbook',
    body: "A complete buyer personality playbook covering how to sell to this specific buyer – communication style, objection patterns, pricing response, closing technique, meeting structure, and follow-up cadence. Generated from each individual's personality profile.",
  },
  {
    name: 'PCCA Playbook',
    body: 'The PCCA playbook covers personality, compatibility, and complementary elements to ensure you have the right communication, understand product and solution fit, and identify and create value for both parties and provides an overall alignment score.',
  },
]

export default function Solutions() {
  return (
    <section className="section solutions-section">
      <div className="frame">
        <div className="section-head centered">
          <span className="label">The Alignify Solution and Pricing</span>
          <h2 className="section-h">
            Two playbooks. <span className="it">One alignment engine.</span>
          </h2>
          <p className="section-deck">
            One platform with two playbooks. Use the Personality Playbook for individual buyer insights, or use the PCCA Playbook for deeper company and product fit.
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

        <div className="pricing-stack">
          <div className="pricing-pair">
            <article className="price-card teal">
              <span className="price-eyebrow">Alignify Personality Playbook</span>
              <div className="price-row">
                <span className="price-big">$19.95</span>
                <span className="price-unit">/ playbook</span>
              </div>
              <span className="price-rider">per playbook</span>
            </article>
            <article className="price-card teal">
              <span className="price-eyebrow">Alignify PCCA Playbook</span>
              <div className="price-row">
                <span className="price-big">$39.95</span>
                <span className="price-unit">/ playbook</span>
              </div>
              <span className="price-rider">per playbook</span>
            </article>
          </div>
          <article className="price-card dark price-wide">
            <div className="price-wide-main">
              <span className="price-eyebrow">Alignify Subscription</span>
              <div className="price-row">
                <span className="price-big">$99</span>
                <span className="price-unit">/ month</span>
              </div>
            </div>
          </article>
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
            No implementation fee · 3 months free subscription · Limited to the first 50 companies.
          </div>
        </div>
      </div>
    </section>
  )
}
