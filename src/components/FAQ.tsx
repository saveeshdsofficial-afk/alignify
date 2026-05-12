interface QA {
  q: string
  a: string
  open?: boolean
}

const QAS: QA[] = [
  {
    q: 'How is Alignify different from a regular sales intelligence tool?',
    a: "Standard tools tell you what a prospect does — their company size, tech stack, intent signals. Alignify tells you how they think — their buying style, communication preferences, and the specific pitch that will land. We quantify buyer fit before you spend a minute on outreach, using DISC profiling at 85% accuracy.",
    open: true,
  },
  {
    q: 'What is an alignment score?',
    a: "A 0–100 score measuring how well a specific prospect fits your ideal buyer profile and your rep's approach. Built from structured signal: role fit, buying behaviour pattern, communication style, and DISC profile. Scores above 80 go directly to your hit list for outreach.",
  },
  {
    q: 'Does Alignify integrate with our CRM?',
    a: 'Yes — natively. Alignify connects to Salesforce, HubSpot, Pipedrive, and Close. Alignment scores, DISC profiles, and coaching notes sync directly onto the contact or deal record. Your reps see everything without leaving their CRM.',
  },
  {
    q: 'How long until we see measurable results?',
    a: 'Reply rate improvements typically show within the first week. Meaningful conversion uplift appears by week three once the pipeline has turned over with aligned prospects. Most teams report a 30–70% lift in win ratio by end of quarter one.',
  },
  {
    q: 'What about Recruitment and Mentor?',
    a: "Both products are in private development. Customers who join Sales now get priority early access when each launches. Register your interest from the Products section and we'll notify you when pilot spots open.",
  },
]

export default function FAQ() {
  return (
    <section className="section section-alt">
      <div className="frame">
        <div className="faq-wrap">
          <div className="faq-head">
            <span className="label">Common Questions</span>
            <h2 className="section-h" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              Alignment <span className="it">insights.</span>
            </h2>
            <p>Answers to what revenue leaders ask us before the first demo.</p>
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
