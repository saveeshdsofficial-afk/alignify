export default function LogoSymbol() {
  return (
    <svg width={0} height={0} style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <symbol id="alignify-mark" viewBox="0 0 40 40">
          <g stroke="#3eccc4" strokeWidth="2.4" strokeLinecap="round">
            <line x1="20" y1="5" x2="7" y2="33" />
            <line x1="20" y1="5" x2="33" y2="33" />
            <line x1="12" y1="22" x2="28" y2="22" />
          </g>
          <circle cx="20" cy="5" r="3.4" fill="#3eccc4" />
          <circle cx="12" cy="22" r="2.8" fill="#3eccc4" />
          <circle cx="28" cy="22" r="2.8" fill="#3eccc4" />
          <circle cx="7" cy="33" r="3" fill="#7dddd8" />
          <circle cx="33" cy="33" r="3" fill="#3eccc4" />
        </symbol>
      </defs>
    </svg>
  )
}
