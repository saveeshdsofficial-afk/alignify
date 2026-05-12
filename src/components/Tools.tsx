import type { ReactNode } from 'react'

interface Tool {
  icon: ReactNode
  title: ReactNode
  body: string
}

function I({ children }: { children: ReactNode }) {
  return <span className="it">{children}</span>
}

const TOOLS: Tool[] = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M3 18 L8 13 L12 15 L16 9 L21 12" />
        <circle cx="21" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
    title: <>Alignment <I>Scoring</I></>,
    body: 'DISC-powered 0–100 fit score for every prospect before you dial. No more gut-feel qualification.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M4 6 L20 6 L15 12 L15 19 L9 17 L9 12 Z" />
      </svg>
    ),
    title: <>Hit List <I>Builder</I></>,
    body: "Prioritised prospect queues refreshed daily. Your team dials the right people, in the right order.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 9 L21 9" />
        <path d="M7 14 L14 14" />
      </svg>
    ),
    title: <>Message <I>Composer</I></>,
    body: "Outreach crafted to each buyer's communication style — tone, structure, and hook aligned to their profile.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7 L12 12 L16 14" />
      </svg>
    ),
    title: <>Timing <I>Intelligence</I></>,
    body: 'Signal-driven guidance on when to reach out — not calendar-driven. Strike when the window is open.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9 L12 12 L15 9" />
        <line x1="12" y1="12" x2="12" y2="16" />
      </svg>
    ),
    title: <>Objection <I>Playbooks</I></>,
    body: '200+ buyer-matched reframes for every pushback. Confidence in every negotiation moment.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M3 12 L7 12 L9 7 L13 17 L15 12 L21 12" />
      </svg>
    ),
    title: <>Deal <I>Signals</I></>,
    body: "Live alignment shifts across your active pipeline. See momentum building — and risk arriving — before it's too late.",
  },
]

export default function Tools() {
  return (
    <section className="section">
      <div className="frame">
        <div className="section-head centered">
          <span className="label">Inside Alignify Sales</span>
          <h2 className="section-h">
            Precision tools for <span className="it">structured prospecting.</span>
          </h2>
          <p className="section-deck">
            Everything a sales professional needs to turn random cold calls into a targeted, high-probability hit list.
          </p>
        </div>
        <div className="tools-grid">
          {TOOLS.map((t, i) => (
            <div key={i} className="tool">
              <div className="tool-icon">{t.icon}</div>
              <h4>{t.title}</h4>
              <p>{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
