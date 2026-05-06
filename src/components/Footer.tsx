export default function Footer() {
  return (
    <footer>
      <div className="frame">
        <div className="foot-inner">
          <div className="foot-brand">
            <a href="#" className="brand">
              <svg className="brand-mark" viewBox="0 0 40 40">
                <use href="#alignify-mark" />
              </svg>
              <span className="brand-word">alignify</span>
            </a>
            <p>Sales alignment that allows you to win more deals.</p>
          </div>
          <div className="foot-col">
            <span className="label">Contact</span>
            <a href="mailto:hello@alignify.io">hello@alignify.io</a>
            <span className="foot-line">Sydney, Australia</span>
          </div>
          <div className="foot-col">
            <span className="label">Product</span>
            <a href="#">Sales</a>
            <a href="#">
              Recruitment <span style={{ color: 'var(--slate-soft)', fontSize: 11 }}>· soon</span>
            </a>
            <a href="#">
              Mentor <span style={{ color: 'var(--slate-soft)', fontSize: 11 }}>· soon</span>
            </a>
          </div>
        </div>
        <div className="foot-bottom">
          <div>© 2026 Alignify · Intelligent Alignment</div>
          <div>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
