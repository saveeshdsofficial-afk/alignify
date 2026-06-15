export default function Navbar() {
  return (
    <nav>
      <div className="frame nav-inner">
        <a href="/" className="brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/alignify-logo-light.png" alt="Alignify" className="brand-mark" />
        </a>
        <div className="nav-actions">
          <a href="/#cta" className="nav-cta">Contact us</a>
        </div>
      </div>
    </nav>
  )
}
