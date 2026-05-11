import type { CSSProperties } from 'react'

const SPEC = [
  { lyr: 'Layer 01', italic: 'Signal', rest: ' capture', vNum: '12', vRest: ' sources' },
  { lyr: 'Layer 02', italic: 'Pattern', rest: ' analysis', vNum: '3.2s', vRest: ' avg' },
  { lyr: 'Layer 03', italic: 'Fit', rest: ' scoring', vNum: '0–100', vRest: ' scale' },
  { lyr: 'Layer 04', italic: 'Coaching', rest: ' output', vNum: 'live', vRest: '' },
]

const BARS = [
  { label: 'Role fit', value: 88 },
  { label: 'Tech stack', value: 72 },
  { label: 'Hiring signal', value: 94 },
  { label: 'Buying intent', value: 81 },
]

export default function Engine() {
  return (
    <section className="engine section section-light" id="engine">
      <div className="frame engine-grid">
        <div className="engine-copy">
          <span className="label">The Engine</span>
          <h2 style={{ marginTop: 18 }}>
            Inside the <span className="it">alignment stack.</span>
          </h2>
          <p>
            Four processing layers turn a name in your CRM into a high-probability sales conversation. Signal flows up. Coaching flows down.
          </p>
          <ul className="engine-spec">
            {SPEC.map((s) => (
              <li key={s.lyr}>
                <span className="dot" />
                <span className="lyr">{s.lyr}</span>
                <span className="nm">
                  <span className="it">{s.italic}</span>
                  {s.rest}
                </span>
                <span className="v">
                  <span className="num">{s.vNum}</span>
                  {s.vRest}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="tower">
          <div className="tower-stage">
            {/* P1 — Signal */}
            <div className="tower-plate p1">
              <div className="tplate-head">
                <span className="tplate-tag">
                  <span className="num">L01</span>
                  Signal capture
                </span>
                <span className="tplate-status">Live</span>
              </div>
              <h5>Inputs</h5>
              <div className="tplate-body tplate-bars">
                {BARS.map((b) => (
                  <div key={b.label} className="tpb-row">
                    <span>{b.label}</span>
                    <span className="bar" style={{ ['--w' as string]: `${b.value}%` } as CSSProperties} />
                    <span className="v">{b.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* P2 — Pattern */}
            <div className="tower-plate p2">
              <div className="tplate-head">
                <span className="tplate-tag">
                  <span className="num">L02</span>
                  Pattern analysis
                </span>
                <span className="tplate-status">Live</span>
              </div>
              <h5>Buyer signal map</h5>
              <div className="tplate-body tplate-net">
                <svg viewBox="0 0 320 110" fill="none">
                  <g stroke="#3eccc4" strokeWidth="1" opacity="0.6">
                    <line x1="40" y1="20" x2="120" y2="55" />
                    <line x1="120" y1="55" x2="200" y2="30" />
                    <line x1="120" y1="55" x2="180" y2="85" />
                    <line x1="200" y1="30" x2="280" y2="60" />
                    <line x1="180" y1="85" x2="280" y2="60" />
                  </g>
                  <g fill="#3eccc4">
                    <circle cx="40" cy="20" r="4" />
                    <circle cx="200" cy="30" r="4" />
                    <circle cx="180" cy="85" r="4" />
                    <circle cx="280" cy="60" r="5" />
                  </g>
                  <circle cx="120" cy="55" r="7" fill="#3eccc4">
                    <animate attributeName="r" values="7;10;7" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
            </div>

            {/* P3 — Score */}
            <div className="tower-plate p3">
              <div className="tplate-head">
                <span className="tplate-tag">
                  <span className="num">L03</span>
                  Fit scoring
                </span>
                <span className="tplate-status">Validated</span>
              </div>
              <div className="tplate-body tplate-gauge-row">
                <div className="tplate-gauge">
                  <svg viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
                    <circle
                      cx="50" cy="50" r="42"
                      stroke="#3eccc4" strokeWidth="7"
                      strokeDasharray="263.9" strokeDashoffset="79.2" strokeLinecap="round"
                    />
                  </svg>
                  <div className="tplate-gauge-text">
                    <div className="tplate-gauge-num">94</div>
                    <div className="tplate-gauge-of">/ 100</div>
                  </div>
                </div>
                <div className="tplate-meta">
                  <div className="tpm-row"><span>Verdict</span><span className="v up">Proceed</span></div>
                  <div className="tpm-row"><span>Reply rate</span><span className="v">68%</span></div>
                  <div className="tpm-row"><span>Confidence</span><span className="v">High</span></div>
                </div>
              </div>
            </div>

            {/* P4 — Coaching */}
            <div className="tower-plate p4">
              <div className="tplate-head">
                <span className="tplate-tag">
                  <span className="num">L04</span>
                  Coaching
                </span>
                <span className="tplate-status">Ready</span>
              </div>
              <h5>For Sarah Chen · TechCorp</h5>
              <div className="tplate-body tplate-coach">
                <span className="tplate-coach-pill">Lead with</span>
                <p className="tplate-coach-text">
                  <strong>Metrics &amp; ROI.</strong> Skip small talk. Reference concrete outcomes in the first 60 seconds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
