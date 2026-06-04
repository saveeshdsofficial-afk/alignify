export default function Footer() {
  return (
    <footer>
      <div className="frame">
        <div className="foot-top">
          <div className="foot-brand">
            <a href="#" className="brand foot-brand-link">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/alignify-logo-light.png" alt="Alignify" className="brand-mark foot-brand-mark" />
            </a>
            <p>Win more with Alignify — intelligent alignment for B2B sales teams.</p>
          </div>
          <div className="foot-col">
            <span className="label">Contact</span>
            <a href="mailto:sales@alignify.com" target="_blank" rel="noopener noreferrer">sales@alignify.com</a>
            <span className="fline">Sydney, Australia</span>
          </div>
          <div className="foot-col">
            <span className="label">Product</span>
            <a href="#products">Sales</a>
            <a href="#products">
              Recruitment <span style={{ color: 'var(--slate-soft)', fontSize: 11, fontStyle: 'italic' }}>· Coming Soon</span>
            </a>
            <a href="#products">
              Mentor <span style={{ color: 'var(--slate-soft)', fontSize: 11, fontStyle: 'italic' }}>· Coming Soon</span>
            </a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Alignify · Intelligent Alignment</span>
          <div>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="https://kainovation.com/" target="_blank" rel="noopener noreferrer">
              Designed &amp; Developed by Kainovation
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
