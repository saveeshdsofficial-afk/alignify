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
            Four moments where conversations either close or collapse. Alignify embeds structured intelligence into each one.
          </p>
        </div>

        <div className="pipeline-grid">
          <ProspectingCell />
          <OutreachCell />
          <DiscoveryCell />
          <NegotiationCell />
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
        Score every prospect for alignment before spending a minute on outreach. Stop wasting reps on low-probability calls.
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

function OutreachCell() {
  const bars = [
    { label: 'Tone match', value: 92, suffix: '' },
    { label: 'Reply likely', value: 68, suffix: '%' },
    { label: 'Fit signal', value: 94, suffix: '' },
  ]
  return (
    <div className="pipeline-cell">
      <div className="pipeline-step">
        <span className="label num">02</span>
        <span className="label" style={{ color: 'var(--slate-soft)' }}>Outreach</span>
      </div>
      <h4>
        Messages that <span className="it">land.</span>
      </h4>
      <p className="desc">
        Tone and structure tuned to how your buyer actually thinks. Predicted reply rate before you hit send.
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

function DiscoveryCell() {
  return (
    <div className="pipeline-cell">
      <div className="pipeline-step">
        <span className="label num">03</span>
        <span className="label" style={{ color: 'var(--slate-soft)' }}>Discovery</span>
      </div>
      <h4>
        <span className="it">Right foot</span> first.
      </h4>
      <p className="desc">
        Know the do&apos;s and don&apos;ts for each buyer profile before the meeting starts. Walk in with a prepared play.
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

function NegotiationCell() {
  return (
    <div className="pipeline-cell">
      <div className="pipeline-step">
        <span className="label num">04</span>
        <span className="label" style={{ color: 'var(--slate-soft)' }}>Negotiation</span>
      </div>
      <h4>
        Every objection, <span className="it">met.</span>
      </h4>
      <p className="desc">
        Understand the motivation behind each &quot;not now.&quot; Respond with the reframe that works for this specific buyer.
      </p>
      <div className="cell-mini">
        <div className="objection-block">
          <div className="obj-q">&quot;We already have a solution for this.&quot;</div>
          <div className="obj-a">
            <strong>Try:</strong> Ask what metric they track for it today — and whether the current tool moves that metric by the margin they need.
          </div>
        </div>
      </div>
    </div>
  )
}
