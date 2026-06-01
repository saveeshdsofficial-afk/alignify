interface QA {
  q: string
  a: string
  open?: boolean
}

const QAS: QA[] = [
  {
    q: 'How is Alignify different from a regular sales intelligence tool?',
    a: "Alignify profiles people — the salesperson and the prospect or customer. Alignify tells you how they think — their buying style, communication preferences, and the how. We also quantify buyer fit through company compatibility and how complementary your product or service is to the buyer, all before you spend a minute on outreach. Get a complete picture of whether the conversation is worth having, and exactly how to have it.",
    open: true,
  },
  {
    q: 'What is an alignment score?',
    a: "A 0–100 score measuring how well a specific prospect or customer fits with your personality and ideal buyer profile. Built from structured insights: personality approach, buying behaviour pattern, and communication style — all delivered in an easy-to-follow playbook.",
  },
  {
    q: 'Does Alignify integrate with our CRM?',
    a: 'Alignify is suitable for small teams or only enterprises, and integrates with your CRM to ensure easy customer management.',
  },
  {
    q: 'How long until we see measurable results?',
    a: 'Reply rate lift typically shows in the first week. Meaningful conversion uplift appears by week three. Most teams report a 30–70% lift in win ratio by end of quarter one.',
  },
  {
    q: 'What about Recruitment and Mentor?',
    a: "Both products are in private development. Customers who join Sales now get priority early access when each launches. Register your interest from the Products section and we'll notify you when pilot spots open.",
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
              Everything you need <span className="it">before the demo.</span>
            </h2>
            <p>Answers to what revenue leaders ask us before the first demo.</p>
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
