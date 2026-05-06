'use client'

import type { CSSProperties, MouseEvent, ReactNode } from 'react'

interface SolutionItem {
  num: string
  title: string
  body: string
  metric: string
  unit: string
  label: ReactNode
}

const SOLUTIONS: SolutionItem[] = [
  {
    num: '01',
    title: 'Know your prospect in seconds.',
    body:
      'Have a buyer personality profile for every prospect, showing how they think, how they buy, and what motivates them.',
    metric: '94',
    unit: '',
    label: (
      <>
        Avg alignment<br />score
      </>
    ),
  },
  {
    num: '02',
    title: 'A sales pitch that connects.',
    body:
      'Every buyer responds to a different tone, structure, and hooks. Alignify tells you how.',
    metric: '3',
    unit: '×',
    label: (
      <>
        Faster<br />pitch time
      </>
    ),
  },
  {
    num: '03',
    title: 'Every objection, anticipated.',
    body:
      'Alignify maps the likely objections for each personality type and gives you the response that works for this specific buyer.',
    metric: '+50',
    unit: '%',
    label: (
      <>
        Win-rate<br />lift
      </>
    ),
  },
]

export default function Solution() {
  function handleMove(e: MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width) * 100
    const y = ((e.clientY - r.top) / r.height) * 100
    e.currentTarget.style.setProperty('--mx', `${x}%`)
    e.currentTarget.style.setProperty('--my', `${y}%`)
  }

  return (
    <section className="section section-light">
      <div className="frame">
        <div className="section-head">
          <span className="label">The Solution</span>
          <h2>
            Win <span className="it">more sales.</span>
          </h2>
          <p>
            Alignify replaces guesswork with signal — every prospect profiled, every pitch tuned, every objection anticipated. <strong>Walk into every call already aligned.</strong>
          </p>
        </div>
        <div className="solution-grid">
          {SOLUTIONS.map((s) => (
            <article
              key={s.num}
              className="solution-card"
              onMouseMove={handleMove}
              style={{ ['--mx' as string]: '50%', ['--my' as string]: '0%' } as CSSProperties}
            >
              <div className="sol-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="sol-metric">
                <div className="sol-metric-num">
                  {s.metric}
                  {s.unit && <span className="u">{s.unit}</span>}
                </div>
                <div className="sol-metric-lbl">{s.label}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
