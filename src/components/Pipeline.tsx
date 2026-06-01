import type { CSSProperties } from 'react'

export default function Pipeline() {
  return (
    <section className="section section-alt" style={{ paddingTop: 60 }}>
      <div className="frame">
        <div className="section-head centered">
          <span className="label">The Sales Journey</span>
          <h2 className="section-h">
            Aligned at <span className="it">every stage.</span>
          </h2>
          <p className="section-deck">
            Three sales interaction points where alignment is the difference between new business won or a lost opportunity. Alignify embeds buyer insights into each one.
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
        <span className="label" style={{ color: 'var(--slate-soft)' }}>Prospecting</span>
      </div>
      <h4>
        Validate <span className="it">before</span> you dial.
      </h4>
      <p className="desc">
        Know your buyer. Every prospect&apos;s personality is understood and aligned to yours — how they buy, how they communicate, and how to sell to them. Aligned connections win more.
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
        <span className="label" style={{ color: 'var(--slate-soft)' }}>The Pitch</span>
      </div>
      <h4>
        A pitch that <span className="it">wins.</span>
      </h4>
      <p className="desc">
        Connect tone, structure, and buyer motivators to know how your buyer thinks. Alignify provides the insights ensuring you&apos;re prepared to win.
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
        <span className="label" style={{ color: 'var(--slate-soft)' }}>The Close</span>
      </div>
      <h4>
        Close <span className="it">to win.</span>
      </h4>
      <p className="desc">
        Address a real gap for a real buyer. Know your fit and the problem you&apos;re solving — know how to close and how to connect. Be forearmed and close to win.
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

