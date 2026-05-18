'use client'

import type { CSSProperties, MouseEvent, ReactNode } from 'react'

interface ProblemItem {
  num: string
  title: string
  body: string
  metric: string
  unit: string
  label: ReactNode
}

const PROBLEMS: ProblemItem[] = [
  {
    num: '01',
    title: 'Misalignment',
    body: 'Pitching the wrong message to the wrong buyer. Reps lean on instinct instead of structured signal — and prospects disengage before the value ever lands.',
    metric: '68',
    unit: '%',
    label: <>Calls lost to<br />poor buyer fit</>,
  },
  {
    num: '02',
    title: 'Inefficiency',
    body: 'Hours burned on unqualified prospects, mis-sequenced outreach, and handoffs with zero context. The pipeline fills with noise instead of signal.',
    metric: '31',
    unit: '%',
    label: <>Rep time spent<br />on dead leads</>,
  },
  {
    num: '03',
    title: 'Cost Implications',
    body: 'Every unqualified conversation carries a real cost — rep salary, tooling, leadership attention. Over a quarter, the revenue drag compounds significantly.',
    metric: '$42',
    unit: 'k',
    label: <>Avg quarterly<br />drag per rep</>,
  },
]

export default function Problem() {
  function handleMove(e: MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width) * 100
    const y = ((e.clientY - r.top) / r.height) * 100
    e.currentTarget.style.setProperty('--mx', `${x}%`)
    e.currentTarget.style.setProperty('--my', `${y}%`)
  }

  return (
    <section className="section problem-section" style={{ paddingTop: 0 }}>
      <div className="frame">
        <div className="section-head">
          <span className="label">The Problem</span>
          <h2 className="section-h">
            The cost of <span className="it">cold-calling.</span>
          </h2>
          <p className="section-deck">
            A lack of real understanding of your prospect doesn&apos;t just waste time and resources — <strong>it erodes revenue.</strong> Alignify ensures every validated prospect leads to an aligned, high-probability sales call.
          </p>
        </div>
        <div className="problem-grid">
          {PROBLEMS.map((p) => (
            <article
              key={p.num}
              className="glass prob-card"
              onMouseMove={handleMove}
              style={{ ['--mx' as string]: '50%', ['--my' as string]: '30%' } as CSSProperties}
            >
              <div className="prob-num">
                {p.num}
              </div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <div className="prob-metric">
                <div className="prob-metric-num">
                  {p.metric}<span className="u">{p.unit}</span>
                </div>
                <div className="prob-metric-lbl">{p.label}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
