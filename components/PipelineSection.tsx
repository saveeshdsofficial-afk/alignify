import type { ReactNode } from 'react'

interface Prospect {
  initials: string
  name: string
  role: string
  score: number
  bg: string
}

const TODAYS_LIST: Prospect[] = [
  { initials: 'SC', name: 'Sarah Chen', role: 'VP Eng · TechCorp', score: 94, bg: 'linear-gradient(135deg,#d4a574,#c88a5a)' },
  { initials: 'MT', name: 'Marcus Thorne', role: 'CPO · Quartix', score: 88, bg: 'linear-gradient(135deg,#6b7388,#3a4460)' },
  { initials: 'RN', name: 'Rhea Nakamura', role: 'COO · Meridian', score: 82, bg: 'linear-gradient(135deg,#21a89f,#3eccc4)' },
  { initials: 'DO', name: 'Daniel Okafor', role: 'VP People · Latchwork', score: 76, bg: 'linear-gradient(135deg,#8b94aa,#6b7388)' },
]

export default function PipelineSection() {
  return (
    <section className="border-y border-line bg-canvas-soft py-28">
      <div className="mx-auto max-w-wrap px-7">
        <div className="mx-auto mb-14 max-w-[680px] text-center">
          <span className="mono-eyebrow">The Sales Journey</span>
          <h2 className="section-heading mt-3.5">
            Aligned at every <span className="text-teal">sales stage.</span>
          </h2>
          <p className="mx-auto mt-4 text-[17px] leading-[1.6] text-ink-soft">
            From first prospect to closed deal — structured intelligence in every conversation.
          </p>
        </div>

        <PipelineRow
          stage="Stage 01 · Prospecting"
          title="Validate every prospect in seconds."
          body="Score any prospect for alignment before you spend a minute on outreach. Stop wasting reps on low-probability calls."
          bullets={[
            'Instant fit scoring from public signal',
            'Prioritised hit lists, updated daily',
            'No more guesswork, no more wasted dials',
          ]}
          mock={<HitListMock prospects={TODAYS_LIST} />}
        />

        <PipelineRow
          reverse
          stage="Stage 02 · Outreach"
          title="Messages that actually land."
          body="Craft outreach tuned to how your buyer actually thinks. Tone, structure, hook — all aligned to their signal."
          bullets={[
            'Buyer-matched message templates',
            'Tone and structure recommendations',
            'Reply-rate predictions before you send',
          ]}
          mock={<OutreachMock />}
        />

        <PipelineRow
          stage="Stage 03 · Objection Handling"
          title="Every objection, anticipated."
          body={'Understand the motivation behind each "not now." Respond with the reframe that works for this specific buyer profile.'}
          bullets={[
            'Objection prediction from buyer signal',
            'Personality-matched responses',
            'Confidence in every negotiation moment',
          ]}
          mock={<ObjectionMock />}
          last
        />
      </div>
    </section>
  )
}

interface PipelineRowProps {
  stage: string
  title: string
  body: string
  bullets: string[]
  mock: ReactNode
  reverse?: boolean
  last?: boolean
}

function PipelineRow({ stage, title, body, bullets, mock, reverse, last }: PipelineRowProps) {
  return (
    <div
      className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-[60px] ${
        last ? '' : 'mb-16 md:mb-[100px]'
      }`}
    >
      <div className={reverse ? 'md:order-2' : ''}>
        <div className="mb-3.5 inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-teal">
          <span className="h-px w-6 bg-teal" />
          {stage}
        </div>
        <h3 className="mb-3.5 font-display text-[clamp(26px,3vw,36px)] font-bold leading-[1.15] tracking-[-0.02em] text-graphite">
          {title}
        </h3>
        <p className="mb-5 text-base leading-[1.6] text-ink-soft">{body}</p>
        <ul className="list-none space-y-0">
          {bullets.map((b) => (
            <li
              key={b}
              className="relative py-2 pl-7 text-[14.5px] font-medium text-graphite"
            >
              <span className="absolute left-0 top-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-teal text-[11px] font-bold text-white">
                ✓
              </span>
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className={reverse ? 'md:order-1' : ''}>{mock}</div>
    </div>
  )
}

function MockShell({ title, status, children }: { title: string; status: string; children: ReactNode }) {
  return (
    <div className="relative rounded-[14px] border border-line bg-white p-[22px] shadow-[0_30px_60px_-30px_rgba(30,38,53,0.15)]">
      <div className="mb-4 flex items-center justify-between border-b border-line pb-3.5">
        <div className="flex items-center gap-2 font-display text-sm font-bold text-graphite">
          <span className="h-2 w-2 rounded-full bg-teal" />
          {title}
        </div>
        <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-teal">{status}</div>
      </div>
      {children}
    </div>
  )
}

function HitListMock({ prospects }: { prospects: Prospect[] }) {
  return (
    <MockShell title="Today's hit list" status="Live">
      <div className="flex flex-col gap-2">
        {prospects.map((p) => (
          <div
            key={p.initials}
            className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg bg-canvas px-3 py-2.5 transition-colors hover:bg-teal-tint"
          >
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full font-display text-[11px] font-bold text-white"
              style={{ background: p.bg }}
            >
              {p.initials}
            </div>
            <div className="flex flex-col">
              <div className="text-[13px] font-semibold text-graphite">{p.name}</div>
              <div className="text-[11px] text-slate">{p.role}</div>
            </div>
            <div className="flex items-center gap-1.5 font-display text-sm font-bold text-teal">
              {p.score}
              <span className="h-[5px] w-[5px] rounded-full bg-teal" />
            </div>
          </div>
        ))}
      </div>
    </MockShell>
  )
}

function OutreachMock() {
  return (
    <MockShell title="Outreach composer" status="Aligned">
      <div className="mb-3 rounded-lg bg-canvas p-4 text-[13px] leading-[1.55] text-graphite">
        <span className="font-semibold text-teal">Sarah —</span>
        <br />
        <br />
        Noticed TechCorp just expanded into APAC. Our data shows eng leaders in similar expansions
        see{' '}
        <span className="rounded bg-teal/10 px-1.5 py-px font-mono text-xs text-teal">
          31% slower
        </span>{' '}
        first-deploy when cross-team alignment is informal.
        <br />
        <br />
        Worth a 15-min look at the numbers?
      </div>
      <div className="grid grid-cols-2 gap-2">
        <MsgInsight k="Tone match" value={<>Analytical · 92%</>} />
        <MsgInsight k="Reply likely" value="68%" />
      </div>
    </MockShell>
  )
}

function MsgInsight({ k, value }: { k: string; value: ReactNode }) {
  return (
    <div className="rounded-lg border border-line bg-white px-3 py-2.5">
      <div className="mb-1 text-[9px] font-bold uppercase tracking-[0.12em] text-slate">{k}</div>
      <div className="text-[11px] font-semibold text-graphite">
        <span className="text-teal">↑</span> {value}
      </div>
    </div>
  )
}

function ObjectionMock() {
  return (
    <MockShell title="Live coaching" status="Suggesting">
      <div className="mb-3 rounded-r-lg border-l-[3px] border-slate bg-canvas p-3 text-[13px] font-semibold text-graphite">
        &quot;We already have a solution for this.&quot;
      </div>
      <div className="rounded-r-lg border-l-[3px] border-teal bg-teal-tint p-3 text-[13px] text-graphite">
        <strong className="text-teal">Try:</strong> Sarah values proof. Ask what metric they track
        for it today — and whether the current tool moves that metric by the margin they need.
      </div>
    </MockShell>
  )
}
