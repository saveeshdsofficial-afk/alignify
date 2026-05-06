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
    body:
      "Pitching the same way to every buyer ignores how the prospect makes decisions. Reps lean on instinct instead of structured insights — Alignify delivers the competitive edge.",
    metric: '68',
    unit: '%',
    label: (
      <>
        Sales lost to<br />misalignment
      </>
    ),
  },
  {
    num: '02',
    title: 'Inefficiency',
    body:
      "Hours burn on prospects because the sales pitch isn't structured or aligned to the buyer's personality. Alignify changes that.",
    metric: '65',
    unit: '%',
    label: (
      <>
        Rep time on<br />lost deals
      </>
    ),
  },
  {
    num: '03',
    title: 'Lost Opportunity Cost',
    body:
      'Every misaligned conversation carries a cost — rep time, leadership attention, and eroded pipeline confidence add up across the year.',
    metric: '$65',
    unit: 'k',
    label: (
      <>
        Lost opportunity<br />cost (p.a.)
      </>
    ),
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
    <section className="section">
      <div className="frame">
        <div className="section-head">
          <span className="label">The Problem</span>
          <h2>The cost of <span className="it">cold-calling.</span></h2>
          <p>
            Misread the buyer and the deal is lost before it starts. <strong>Win more deals with Alignify</strong> — every conversation grounded in how your prospect actually thinks.
          </p>
        </div>
        <div className="problem-grid">
          {PROBLEMS.map((p) => (
            <article
              key={p.num}
              className="problem-card"
              onMouseMove={handleMove}
              style={{ ['--mx' as string]: '50%', ['--my' as string]: '0%' } as CSSProperties}
            >
              <div className="problem-num">{p.num}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <div className="problem-metric">
                <div className="problem-metric-num">
                  {p.metric}<span className="u">{p.unit}</span>
                </div>
                <div className="problem-metric-lbl">{p.label}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
