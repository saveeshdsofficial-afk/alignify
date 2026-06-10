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
    title: 'Buyer misalignment',
    body: 'Pitching the wrong message to the wrong buyer results in lost sales. Without knowing how a prospect thinks, communicates, and makes buying decisions, sales are lost.',
    metric: '68',
    unit: '%',
    label: <>of sales calls<br />lost to poor fit</>,
  },
  {
    num: '02',
    title: 'Sales inefficiency',
    body: 'Hours burned on the wrong pitch to the wrong company wastes time and burns you out. Fill your pipeline with qualified opportunities, with Alignify.',
    metric: '31',
    unit: '%',
    label: <>Sales time spent<br />on dead leads</>,
  },
  {
    num: '03',
    title: 'Cost of a lost sale',
    body: 'Every lost sale opportunity carries a real cost — rep salary, leadership attention, and opportunity cost. With each lost sale, costs compound — reduce costs with Alignify.',
    metric: '$42',
    unit: 'k',
    label: <>Rep cost<br />per annum lost</>,
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
    <section className="section problem-section">
      <div className="frame">
        <div className="section-head centered">
          <span className="label">The Problem</span>
          <h2 className="section-h">
            Lost <span className="it">sales.</span>
          </h2>
          <p className="section-deck">
            Not understanding your prospect or customer wastes time and <strong>erodes revenue.</strong> Alignify ensures you know how the buyer and business thinks, communicates, and makes buying decisions — so you win more.
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
