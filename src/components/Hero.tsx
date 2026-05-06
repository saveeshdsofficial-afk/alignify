import type { ReactNode } from 'react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="frame hero-grid">
        <div>
          <div className="hero-tag">
            <span className="pulse" />
            <span>Alignify for Sales · Now available</span>
          </div>
          <h1 className="hero-title">
            Selling is easy when you{' '}
            <span className="it">know your buyer.</span>
          </h1>
          <p className="hero-sub">
            Alignify analyses your prospect&apos;s personality, communication style, and behavioural drivers, so{' '}
            <strong>every sales conversation starts aligned, not cold</strong>.
          </p>
          <div className="hero-actions">
            <a href="#final-cta" className="btn-glow">Get Started</a>
            <a href="mailto:hello@alignify.io" className="btn-ghost">Contact us</a>
          </div>
          <div className="hero-trust">
            <div className="hero-avatars">
              <div className="av">SJ</div>
              <div className="av">MT</div>
              <div className="av">RN</div>
            </div>
            <div className="hero-trust-text">
              <strong>200+ sales professionals</strong> on the waitlist
            </div>
          </div>
        </div>

        <Cube />
      </div>
    </section>
  )
}

function Cube() {
  return (
    <div className="hero-3d">
      <div className="cube">
        <StatFace side="face-front" label="Win rate" big="50" unit="%" delta="Lift" />
        <StatFace side="face-right" label="Pitch time" big="3" unit="×" delta="Faster" />
        <StatFace side="face-back" label="Go-live" big="5" unit="days" delta="From signup" />
        <StatFace side="face-left" label="Waitlist" big="200" unit="+" delta="Sales pros" />
        <BrandFace side="face-top" />
        <BrandFace side="face-bottom" />
      </div>
    </div>
  )
}

function Corners() {
  return (
    <>
      <div className="corner tl" />
      <div className="corner tr" />
      <div className="corner bl" />
      <div className="corner br" />
    </>
  )
}

function FaceShell({ side, label, children }: { side: string; label: string; children: ReactNode }) {
  return (
    <div className={`cube-face ${side}`}>
      <Corners />
      <span className="face-label">{label}</span>
      {children}
    </div>
  )
}

interface StatFaceProps {
  side: string
  label: string
  big: string
  unit: string
  delta: string
}

function StatFace({ side, label, big, unit, delta }: StatFaceProps) {
  return (
    <FaceShell side={side} label={label}>
      <div className="face-content face-stat">
        <div className="face-num">
          {big}
          <span className="unit">{unit}</span>
        </div>
        <div className="face-stat-delta">{delta}</div>
      </div>
    </FaceShell>
  )
}

function BrandFace({ side }: { side: string }) {
  return (
    <FaceShell side={side} label="Alignify · Sales">
      <div className="face-content face-brand">
        <svg viewBox="0 0 40 40" className="face-brand-mark">
          <use href="#alignify-mark" />
        </svg>
      </div>
    </FaceShell>
  )
}
