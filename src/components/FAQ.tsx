interface QA {
  q: string
  a: string
  open?: boolean
}

const QAS: QA[] = [
  {
    q: 'How is Alignify different from other sales intelligence tools?',
    a: "Alignify profiles people — the salesperson and the prospect or customer. Alignify tells you how they think — their buying style, communication preferences, and the how. We also quantify buyer fit through company compatibility and how complementary your product or service is to the buyer, all before you spend a minute on outreach. Get a complete picture of whether the conversation is worth having, and exactly how to have it.",
    open: true,
  },
  {
    q: 'What is an alignment score?',
    a: "A 0–100 score measuring how well a specific prospect or customer fits with your personality and ideal buyer profile. Built from structured insights: personality approach, buying behaviour pattern, and communication style — all delivered in an easy-to-follow playbook with the 'how' to win.",
  },
  {
    q: 'Does Alignify work for small and large businesses, and does it integrate with our CRM?',
    a: 'Alignify is suitable from small teams to enterprise — any size business with a sales focus can use it, and it can integrate with your CRM.',
  },
  {
    q: 'How long until we see measurable results?',
    a: 'Prospecting rate lift typically shows in the first few weeks. Meaningful conversion uplift appears soon after. Most teams report a 30–70% lift in win ratio by end of quarter one.',
  },
]

export default function FAQ() {
  return (
    <section className="section section-alt faq-section">
      <div className="frame">
        <div className="faq-wrap">
          <div className="faq-head">
            <span className="label">Common Questions</span>
            <h2 className="section-h" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              Key questions <span className="it">answered.</span>
            </h2>
          </div>
          <div className="faq-list">
            {QAS.map((f, i) => (
              <details key={i} className="qa" open={f.open}>
                <summary>
                  <span className="qt">{f.q}</span>
                  <span className="qx">+</span>
                </summary>
                <div className="ans">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
