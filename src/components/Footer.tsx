export default function Footer() {
  return (
    <footer>
      <div className="frame">
        <div className="foot-top">
          <div className="foot-brand">
            <a href="#" className="brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/alignify-logo-light.png" alt="Alignify" className="brand-mark" />
            </a>
            <p>Intelligent alignment for B2B sales teams that refuse to waste calls on the wrong buyers.</p>
          </div>
          <div className="foot-col">
            <span className="label">Contact</span>
            <a href="mailto:hello@alignify.io">hello@alignify.io</a>
            <span className="fline">Melbourne, Australia</span>
          </div>
          <div className="foot-col">
            <span className="label">Product</span>
            <a href="#products">Sales</a>
            <a href="#products">
              Recruitment <span style={{ color: 'var(--slate-soft)', fontSize: 11 }}>· Coming Soon</span>
            </a>
            <a href="#products">
              Mentor <span style={{ color: 'var(--slate-soft)', fontSize: 11 }}>· Coming Soon</span>
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
