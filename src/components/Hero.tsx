export default function Hero() {
  return (
    <section className="hero">
      <div className="frame hero-grid">
        <HeroCopy />
        <AlignmentEngine />
      </div>
    </section>
  )
}

function HeroCopy() {
  return (
    <div>
      <div className="hero-path">
        <span className="live-dot" />
        <span className="seg">alignify</span>
        <span className="sep">/</span>
        <span className="seg">platform</span>
        <span className="sep">/</span>
        <span className="seg active">sales-engine</span>
      </div>

      <h1 className="hero-title">
        Higher win ratios. <br />
        <span className="it">Confident sales calls.</span>
      </h1>

      <p className="hero-sub">
        Alignify is the alignment engine for B2B revenue teams. Profile every prospect, predict their buying style, and walk into{' '}
        <strong>every call ready to close.</strong>
      </p>

      <div className="hero-metrics">
        <MetricCell k="Win Ratio" big="+34" unit="%" delta="vs. baseline" />
        <MetricCell k="Sales Confidence" big="9.2" unit="/10" delta="Rep-reported" />
        <MetricCell k="Engine Accuracy" big="85" unit="%" delta="Validated DISC" />
      </div>

      <div className="hero-actions">
        <a href="#final-cta" className="btn-glow">Request a Team Demo</a>
        <a href="#final-cta" className="btn-ghost">Profile Your First Lead</a>
      </div>
    </div>
  )
}

function MetricCell({ k, big, unit, delta }: { k: string; big: string; unit: string; delta: string }) {
  return (
    <div className="hm-cell">
      <span className="hm-k">{k}</span>
      <div className="hm-v">
        <span className="accent">{big}</span>
        {unit}
      </div>
      <div className="hm-d">{delta}</div>
    </div>
  )
}

function AlignmentEngine() {
  return (
    <div className="engine-stage">
      <div className="ring-decor r1" />
      <div className="ring-decor r2" />
      <WheelOuter />
      <WheelQuadrants />
      <WheelInner />
      <RadarSweep />
      <Hub />
      <AccuracyBadge />
      <ConfidenceWidget />
      <WinRatioWidget />
      <CommWidget />
    </div>
  )
}

function WheelOuter() {
  const nodes: { cx: number; cy: number; begin: string }[] = [
    { cx: 0, cy: -160, begin: '0s' },
    { cx: 113.1, cy: -113.1, begin: '0.3s' },
    { cx: 160, cy: 0, begin: '0.6s' },
    { cx: 113.1, cy: 113.1, begin: '0.9s' },
    { cx: 0, cy: 160, begin: '1.2s' },
    { cx: -113.1, cy: 113.1, begin: '1.5s' },
    { cx: -160, cy: 0, begin: '1.8s' },
    { cx: -113.1, cy: -113.1, begin: '2.1s' },
  ]
  return (
    <div className="wheel-outer">
      <svg viewBox="-200 -200 400 400" fill="none">
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3eccc4" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#21a89f" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3eccc4" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        <circle cx="0" cy="0" r="180" stroke="url(#ringGrad)" strokeWidth="1.5" fill="none" />
        <circle cx="0" cy="0" r="170" stroke="rgba(62,204,196,0.15)" strokeWidth="0.8" fill="none" strokeDasharray="2 4" />

        <g stroke="#3eccc4" strokeWidth="1.5" opacity="0.7">
          <line x1="0" y1="-180" x2="0" y2="-168" />
          <line x1="127.3" y1="-127.3" x2="118.8" y2="-118.8" />
          <line x1="180" y1="0" x2="168" y2="0" />
          <line x1="127.3" y1="127.3" x2="118.8" y2="118.8" />
          <line x1="0" y1="180" x2="0" y2="168" />
          <line x1="-127.3" y1="127.3" x2="-118.8" y2="118.8" />
          <line x1="-180" y1="0" x2="-168" y2="0" />
          <line x1="-127.3" y1="-127.3" x2="-118.8" y2="-118.8" />
        </g>

        <g fontFamily="Inter, sans-serif" fontSize="13" fontWeight="700" fill="#3eccc4" letterSpacing="2">
          <text x="0" y="-188" textAnchor="middle">D</text>
          <text x="133" y="-128" textAnchor="middle">Di</text>
          <text x="194" y="5" textAnchor="middle">I</text>
          <text x="133" y="138" textAnchor="middle">iS</text>
          <text x="0" y="200" textAnchor="middle">S</text>
          <text x="-133" y="138" textAnchor="middle">SC</text>
          <text x="-194" y="5" textAnchor="middle">C</text>
          <text x="-133" y="-128" textAnchor="middle">CD</text>
        </g>

        <g fill="#3eccc4">
          {nodes.map((n) => (
            <circle key={n.begin} cx={n.cx} cy={n.cy} r="3">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" begin={n.begin} repeatCount="indefinite" />
            </circle>
          ))}
        </g>
      </svg>
    </div>
  )
}

function WheelQuadrants() {
  return (
    <div className="wheel-quadrants">
      <svg viewBox="-150 -150 300 300" fill="none">
        <defs>
          <radialGradient id="qFill1" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#3eccc4" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#3eccc4" stopOpacity="0.04" />
          </radialGradient>
          <radialGradient id="qFill2" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#21a89f" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#21a89f" stopOpacity="0.04" />
          </radialGradient>
          <radialGradient id="qFill3" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#7dddd8" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#7dddd8" stopOpacity="0.03" />
          </radialGradient>
          <radialGradient id="qFill4" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#2e3950" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#2e3950" stopOpacity="0.1" />
          </radialGradient>
        </defs>

        <path d="M 0 0 L 0 -140 A 140 140 0 0 1 140 0 Z" fill="url(#qFill1)" stroke="rgba(62,204,196,0.4)" strokeWidth="1" />
        <path d="M 0 0 L 140 0 A 140 140 0 0 1 0 140 Z" fill="url(#qFill2)" stroke="rgba(33,168,159,0.4)" strokeWidth="1" />
        <path d="M 0 0 L 0 140 A 140 140 0 0 1 -140 0 Z" fill="url(#qFill3)" stroke="rgba(125,221,216,0.4)" strokeWidth="1" />
        <path d="M 0 0 L -140 0 A 140 140 0 0 1 0 -140 Z" fill="url(#qFill4)" stroke="rgba(46,57,80,0.6)" strokeWidth="1" />

        <g fontFamily="Inter, sans-serif" textAnchor="middle">
          {/* Top-right: Win Ratio */}
          <text x="72" y="-80" fill="#3eccc4" fontSize="22" fontWeight="700" letterSpacing="-0.02em">+34%</text>
          <text x="72" y="-62" fill="#8a93ab" fontSize="8" fontWeight="700" letterSpacing="2.2">WIN RATIO</text>

          {/* Bottom-right: Confidence */}
          <text x="72" y="68" fill="#3eccc4" fontSize="22" fontWeight="700" letterSpacing="-0.02em">9.2</text>
          <text x="72" y="86" fill="#8a93ab" fontSize="8" fontWeight="700" letterSpacing="2.2">CONFIDENCE</text>

          {/* Bottom-left: Accuracy */}
          <text x="-72" y="68" fill="#7dddd8" fontSize="22" fontWeight="700" letterSpacing="-0.02em">85%</text>
          <text x="-72" y="86" fill="#8a93ab" fontSize="8" fontWeight="700" letterSpacing="2.2">ACCURACY</text>

          {/* Top-left: Pitch Time */}
          <text x="-72" y="-80" fill="#3eccc4" fontSize="22" fontWeight="700" letterSpacing="-0.02em">3×</text>
          <text x="-72" y="-62" fill="#8a93ab" fontSize="8" fontWeight="700" letterSpacing="2.2">PITCH TIME</text>
        </g>

        <g stroke="rgba(62,204,196,0.3)" strokeWidth="0.8" strokeDasharray="3 3">
          <line x1="-140" y1="0" x2="140" y2="0" />
          <line x1="0" y1="-140" x2="0" y2="140" />
        </g>
      </svg>
    </div>
  )
}

function WheelInner() {
  const ticks = [
    [0, -92, 0, -86],
    [23.8, -88.9, 22.3, -83.1],
    [46, -79.7, 43, -74.5],
    [65.1, -65.1, 60.9, -60.9],
    [79.7, -46, 74.5, -43],
    [88.9, -23.8, 83.1, -22.3],
    [92, 0, 86, 0],
    [88.9, 23.8, 83.1, 22.3],
    [79.7, 46, 74.5, 43],
    [65.1, 65.1, 60.9, 60.9],
    [46, 79.7, 43, 74.5],
    [23.8, 88.9, 22.3, 83.1],
    [0, 92, 0, 86],
    [-23.8, 88.9, -22.3, 83.1],
    [-46, 79.7, -43, 74.5],
    [-65.1, 65.1, -60.9, 60.9],
    [-79.7, 46, -74.5, 43],
    [-88.9, 23.8, -83.1, 22.3],
    [-92, 0, -86, 0],
    [-88.9, -23.8, -83.1, -22.3],
    [-79.7, -46, -74.5, -43],
    [-65.1, -65.1, -60.9, -60.9],
    [-46, -79.7, -43, -74.5],
    [-23.8, -88.9, -22.3, -83.1],
  ]
  return (
    <div className="wheel-inner">
      <svg viewBox="-100 -100 200 200" fill="none">
        <circle cx="0" cy="0" r="92" stroke="rgba(62,204,196,0.25)" strokeWidth="0.8" fill="none" />
        <g stroke="#3eccc4" strokeWidth="0.8" opacity="0.5">
          {ticks.map(([x1, y1, x2, y2], i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
          ))}
        </g>
      </svg>
    </div>
  )
}

function RadarSweep() {
  return (
    <div className="radar-sweep">
      <svg viewBox="-100 -100 200 200" fill="none">
        <defs>
          <linearGradient id="sweepGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3eccc4" stopOpacity="0" />
            <stop offset="80%" stopColor="#3eccc4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3eccc4" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <path d="M 0 0 L 92 0 A 92 92 0 0 0 65.05 -65.05 Z" fill="url(#sweepGrad)" opacity="0.5" />
      </svg>
    </div>
  )
}

function Hub() {
  return (
    <div className="hub">
      <div className="hub-disc" />
      <svg viewBox="0 0 40 40">
        <use href="#alignify-mark" />
      </svg>
    </div>
  )
}

function AccuracyBadge() {
  return (
    <div className="accuracy-badge">
      <div className="ab-row">
        <div className="ab-icon">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 8 L6 12 L14 4" />
          </svg>
        </div>
        <div className="ab-divider" />
        <div className="ab-num">
          85<span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6em' }}>%</span>
        </div>
        <div className="ab-meta">
          <span className="ab-k">Engine Accuracy</span>
          <span className="ab-v">DISC validated</span>
        </div>
      </div>
    </div>
  )
}

function ConfidenceWidget() {
  return (
    <div className="widget widget-confidence">
      <div className="widget-head">
        <span className="widget-tag">
          <span className="num">W01</span>
          Confidence Score
        </span>
        <span className="widget-status">Live</span>
      </div>
      <div className="conf-row">
        <div className="conf-num">
          92<span className="pct">%</span>
        </div>
        <div className="conf-bar" />
        <div className="conf-meta">High-fit profile · proceed to outreach</div>
      </div>
    </div>
  )
}

function WinRatioWidget() {
  return (
    <div className="widget widget-winratio">
      <div className="widget-head">
        <span className="widget-tag">
          <span className="num">W02</span>
          Win Ratio
        </span>
        <span className="widget-status">Q3</span>
      </div>
      <div className="wr-row">
        <div className="wr-gauge">
          <svg viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="26" stroke="rgba(255,255,255,0.08)" strokeWidth="5" fill="none" />
            <circle
              cx="32"
              cy="32"
              r="26"
              stroke="#3eccc4"
              strokeWidth="5"
              fill="none"
              strokeDasharray="163.4"
              strokeDashoffset="55.5"
              strokeLinecap="round"
            />
          </svg>
          <div className="wr-gauge-text">66%</div>
        </div>
        <div className="wr-meta">
          <span className="wr-label">Closed-Won</span>
          <span className="wr-value">66 of 100 deals</span>
          <span className="wr-delta">▲ +18 vs last quarter</span>
        </div>
      </div>
    </div>
  )
}

function CommWidget() {
  return (
    <div className="widget widget-comm">
      <div className="comm-row">
        <div className="comm-icon">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <rect x="2" y="3" width="12" height="9" rx="1.5" />
            <path d="M2 6 L14 6" />
          </svg>
        </div>
        <div className="comm-meta">
          <span className="comm-k">Comm Style</span>
          <span className="comm-v">
            Analytical · <span className="accent">Direct</span>
          </span>
        </div>
      </div>
    </div>
  )
}
