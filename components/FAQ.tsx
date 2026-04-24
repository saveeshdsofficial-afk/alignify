import type { ReactNode } from 'react'

interface FAQItem {
  q: string
  a: ReactNode
  open?: boolean
}

const ITEMS: FAQItem[] = [
  {
    q: 'How is Alignify different from a regular sales intelligence tool?',
    a: (<>Standard tools tell you <em>what</em> a prospect does. Alignify tells you <em>how they think</em> — and whether the way you&apos;re about to sell will land with them. We quantify buyer fit before you spend a minute on outreach.</>),
    open: true,
  },
  {
    q: 'What is an "alignment score"?',
    a: `A 0–100 score that measures how well a specific prospect fits your ideal buyer profile and your rep's approach. It's built from structured signal: role fit, buying behaviour, communication style, and motivational drivers.`,
  },
  {
    q: 'Does Alignify integrate with our CRM?',
    a: 'Yes. Sales connects natively to Salesforce, HubSpot, Pipedrive, and Close. Scores and coaching notes sync directly onto the contact or deal record — no extra tabs.',
  },
  {
    q: 'How long until we see results?',
    a: 'Reps typically see lifts in reply rate within the first week. Meaningful conversion uplift shows up by week three, once the pipeline has turned over with aligned prospects.',
  },
  {
    q: 'What about Recruitment and Mentor?',
    a: 'Both are in private development. Join the waitlist from the products section and we\'ll reach out when each is ready for pilot customers.',
  },
]

export default function FAQ() {
  return (
    <section className="bg-canvas-soft py-28">
      <div className="mx-auto max-w-wrap px-7">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.6fr] md:gap-14">
          <div>
            <span className="mono-eyebrow">Common Questions</span>
            <h2 className="mt-3.5 font-display text-[clamp(30px,3.8vw,44px)] font-bold leading-[1.05] tracking-[-0.025em] text-graphite">
              Alignment <span className="text-teal">insights.</span>
            </h2>
            <p className="mt-3.5 text-[15px] leading-[1.55] text-ink-soft">
              Answers to what sales professionals ask us in the first call.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            {ITEMS.map((item, i) => (
              <details
                key={i}
                open={item.open}
                className="faq-item group rounded-xl border border-line bg-white transition-all open:border-teal open:shadow-[0_20px_40px_-20px_rgba(33,168,159,0.2)] hover:border-teal-pale"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-5 px-6 py-5 font-display text-[17px] font-semibold tracking-[-0.01em] text-graphite group-open:text-teal">
                  {item.q}
                </summary>
                <div className="px-6 pb-5 text-[14.5px] leading-[1.65] text-ink-soft">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
