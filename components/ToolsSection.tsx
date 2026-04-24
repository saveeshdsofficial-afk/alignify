import type { ReactNode } from 'react'

interface Tool {
  title: string
  desc: string
  icon: ReactNode
}

const iconProps = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
}

const TOOLS: Tool[] = [
  {
    title: 'Alignment Scoring',
    desc: 'Every prospect scored 0–100 before you dial.',
    icon: (
      <svg {...iconProps}>
        <path d="M3 18 L8 13 L12 15 L16 9 L21 12" />
        <circle cx="21" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Hit List Builder',
    desc: 'Prioritised prospects, updated daily.',
    icon: (
      <svg {...iconProps}>
        <path d="M4 6 L20 6 L15 12 L15 19 L9 17 L9 12 Z" />
      </svg>
    ),
  },
  {
    title: 'Message Composer',
    desc: 'Outreach tuned to each buyer profile.',
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 9 L21 9" />
        <path d="M7 14 L14 14" />
      </svg>
    ),
  },
  {
    title: 'Timing Intelligence',
    desc: 'When — not just who — to reach out.',
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7 L12 12 L16 14" />
      </svg>
    ),
  },
  {
    title: 'Objection Playbooks',
    desc: 'The right reframe for every pushback.',
    icon: (
      <svg {...iconProps}>
        <path d="M4 4 L20 4 M4 4 L4 20 M4 20 L20 20 M20 4 L20 20" />
        <path d="M8 12 L11 15 L16 9" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Deal Signals',
    desc: 'Live alignment shifts across active deals.',
    icon: (
      <svg {...iconProps}>
        <path d="M3 12 L7 12 L9 7 L13 17 L15 12 L21 12" />
      </svg>
    ),
  },
]

export default function ToolsSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 text-white">
      <div
        className="pointer-events-none absolute right-[-10%] top-[-30%] h-full w-[60%]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(33,168,159,0.2) 0%, transparent 60%)',
        }}
      />
      <div className="relative z-[2] mx-auto max-w-wrap px-7">
        <div className="mx-auto mb-14 max-w-[680px] text-center">
          <span className="mono-eyebrow text-teal-bright">Inside Alignify for Sales</span>
          <h2 className="mt-3.5 font-display text-[clamp(32px,4.4vw,52px)] font-bold leading-[1.05] tracking-[-0.025em] text-white">
            Precision tools for{' '}
            <span className="text-teal-bright">structured prospecting.</span>
          </h2>
          <p className="mt-4 text-[17px] leading-[1.6] text-white/70">
            Everything a sales professional needs to turn random cold calls into a targeted,
            high-probability hit list.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {TOOLS.map((t) => (
            <article
              key={t.title}
              className="rounded-[14px] border border-white/10 bg-graphite-2 p-7 transition-all hover:-translate-y-0.5 hover:border-teal hover:bg-[#2f3950]"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[10px] border border-teal-bright/30 bg-teal-bright/15 text-teal-bright">
                {t.icon}
              </div>
              <h4 className="mb-2.5 font-display text-xl font-bold tracking-[-0.015em]">
                {t.title}
              </h4>
              <p className="text-sm leading-[1.55] text-white/65">{t.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
