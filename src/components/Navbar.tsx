export default function Navbar() {
  return (
    <nav>
      <div className="frame nav-inner">
        <a href="#" className="brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/alignify-logo-light.png" alt="Alignify" className="brand-mark" />
          <span className="head-product">sales</span>
        </a>
        <div className="nav-actions">
          <span className="nav-status">
            <span className="dot" />
            Engine online · 85% accuracy
          </span>
          <a href="#cta" className="nav-cta">Request a Team Demo</a>
        </div>
      </div>
    </nav>
  )
}
