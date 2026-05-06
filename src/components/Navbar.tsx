export default function Navbar() {
  return (
    <nav>
      <div className="frame nav-inner">
        <a href="#" className="brand">
          <svg className="brand-mark" viewBox="0 0 40 40">
            <use href="#alignify-mark" />
          </svg>
          <span className="brand-word">alignify</span>
          <span className="brand-divider" />
          <span className="head-product">sales</span>
        </a>
        <a href="#final-cta" className="nav-cta">
          Get Started
        </a>
      </div>
    </nav>
  )
}
