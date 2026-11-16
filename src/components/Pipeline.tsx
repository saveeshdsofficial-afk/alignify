import type { CSSProperties } from 'react'

export default function Pipeline() {
  return (
    <section className="section section-alt">
      <div className="frame">
        <div className="section-head centered">
          <span className="label">The Solution</span>
          <h2 className="section-h">
            Align every prospect <span className="it">and every customer.</span>
          </h2>
          <p className="section-deck">
            Alignify can make the difference between business won or lost – by providing prospect and customer sales insights in our sales playbooks you win more often.
          </p>
        </div>

        <div className="pipeline-grid">
          <ProspectingCell />
          <PitchCell />
          <CloseCell />
        </div>
      </div>
    </section>
  )
}

function ProspectingCell() {
  return (
    <div className="pipeline-cell">
      <div className="pipeline-step">
        <span className="label num">01</span>
        <span className="label" style={{ color: 'var(--slate-soft)' }}>The Prospect Playbook</span>
      </div>
      <h4>
        Know your buyer <span className="it">and win.</span>
      </h4>
      <p className="desc">
        Every prospect is known and understood before you start selling. How they buy, how they communicate, and how to sell to them. Aligned connections win more often.
      </p>
      <div className="cell-mini">
        <div className="mini-row"><span>Sarah Chen · VP Eng</span><span className="hi">94</span></div>
        <div className="mini-row"><span>Marcus Thorne · CPO</span><span className="hi">88</span></div>
        <div className="mini-row"><span>Rhea Nakamura · COO</span><span className="dim">76</span></div>
        <div className="mini-row"><span>Daniel Okafor · VP</span><span className="dim">62</span></div>
      </div>
    </div>
  )
}

function PitchCell() {
  const bars = [
    { label: 'Tone match', value: 92, suffix: '' },
    { label: 'Reply likely', value: 68, suffix: '%' },
    { label: 'Fit signal', value: 94, suffix: '' },
  ]
  return (
    <div className="pipeline-cell">
      <div className="pipeline-step">
        <span className="label num">02</span>
        <span className="label" style={{ color: 'var(--slate-soft)' }}>The Customer Playbook</span>
      </div>
      <h4>
        A pitch that <span className="it">wins more.</span>
      </h4>
      <p className="desc">
        Alignify allows you to understand your existing customers, we connect tone, structure, and customer motivators so you know how your customer thinks and acts. Alignify provides the insights so you can win more from existing customers.
      </p>
      <div className="cell-mini">
        <div className="mini-bar-wrap">
          {bars.map((b) => (
            <div key={b.label} className="mini-bar-row">
              <span>{b.label}</span>
              <span className="mini-bar" style={{ ['--w' as string]: `${b.value}%` } as CSSProperties} />
              <span className="hi">{b.value}{b.suffix}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CloseCell() {
  return (
    <div className="pipeline-cell">
      <div className="pipeline-step">
        <span className="label num">03</span>
        <span className="label" style={{ color: 'var(--slate-soft)' }}>Your Playbook</span>
      </div>
      <h4>
        Close <span className="it">to win.</span>
      </h4>
      <p className="desc">
        Alignify addresses how to identify any personality gaps, by understanding yourself you will know how to communicate, how to connect and how to close to win.
      </p>
      <div className="cell-mini">
        <div className="do-dont">
          <div className="dd-row do"><span className="marker">DO</span><span>Lead with metrics and ROI</span></div>
          <div className="dd-row do"><span className="marker">DO</span><span>Reference concrete outcomes</span></div>
          <div className="dd-row dont"><span className="marker">DON&apos;T</span><span>Open with a story or small talk</span></div>
          <div className="dd-row dont"><span className="marker">DON&apos;T</span><span>Push timeline in the first call</span></div>
        </div>
      </div>
    </div>
  )
}

