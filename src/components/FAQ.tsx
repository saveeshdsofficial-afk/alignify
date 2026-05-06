interface QA {
  q: string
  a: string
  open?: boolean
}

const QAS: QA[] = [
  {
    q: 'How is Alignify different from a regular sales intelligence tool?',
    a: "Standard tools tell you what a prospect does. Alignify tells you how they think — and whether the way you're about to sell will land with them. We quantify buyer fit before you spend a minute on outreach.",
    open: true,
  },
  {
    q: 'What is an "alignment score"?',
    a: "A 0–100 score that measures how well a specific prospect fits your ideal buyer profile and your rep's approach. Built from structured signal: role fit, buying behaviour, communication style, and motivational drivers.",
  },
  {
    q: 'Does Alignify give me the tools to close deals?',
    a: 'Yes — Alignify gives you a personality profile on your buyer and identifies the tone, pitch, tactics, and exact moves that close them.',
  },
  {
    q: 'How long until we see results?',
    a: 'Reps typically see lifts in reply rate within the first week. Meaningful conversion uplift shows up by week three, once the pipeline has turned over with aligned prospects.',
  },
  {
    q: 'What about Recruitment and Mentor?',
    a: "Both are in private development. Join the waitlist from the products section and we'll reach out when each is ready for pilot customers.",
  },
]

export default function FAQ() {
  return (
    <section className="section" style={{ paddingTop: 60 }}>
      <div className="frame">
        <div className="faq-grid">
          <div className="faq-head">
            <span className="label">Common questions</span>
            <h2>Alignment <span className="it">insights.</span></h2>
            <p>Answers to what sales professionals ask us in the first call.</p>
          </div>
          <div className="faq-list">
            {QAS.map((f, i) => (
              <details key={i} className="qa" open={f.open}>
                <summary>
                  <span className="qn">Q.{String(i + 1).padStart(2, '0')}</span>
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
