import EmailForm from './EmailForm'

const PILLS = ['Beta access this quarter', 'No credit card', 'Founding pricing']

export default function FinalCTA() {
  return (
    <section id="final-cta" className="pb-28 pt-28">
      <div className="mx-auto max-w-wrap px-7">
        <div
          className="relative overflow-hidden rounded-[20px] px-7 py-14 shadow-[0_50px_100px_-40px_rgba(30,38,53,0.4)] md:px-16 md:py-20"
          style={{ background: 'linear-gradient(135deg,#2E3950 0%,#171820 100%)' }}
        >
          <CtaDecoTR />
          <CtaDecoBL />

          <div className="relative z-[1] grid grid-cols-1 items-center gap-10 text-white md:grid-cols-[1.05fr_1fr] md:gap-14">
            <div>
              <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-teal-bright/30 bg-teal-bright/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-bright">
                <span className="h-1.5 w-1.5 animate-pulse-chip rounded-full bg-teal-bright" />
                Early Access
              </div>
              <h2 className="mb-4 font-display text-[clamp(32px,4.4vw,50px)] font-bold leading-[1.05] tracking-[-0.025em] text-white">
                Ready to align your{' '}
                <span className="text-teal-bright">sales pipeline?</span>
              </h2>
              <p className="mb-7 max-w-[460px] text-[17px] leading-[1.55] text-white/75">
                Drop your details and get early access to Alignify for Sales. Start validating
                prospects and closing more of the calls that matter.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {PILLS.map((p) => {
                  const [first, ...rest] = p.split(' ')
                  return (
                    <span
                      key={p}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-3.5 py-2 text-[13px] text-white"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        className="flex-shrink-0 text-teal-bright"
                      >
                        <path d="M2 7 L6 11 L12 3" />
                      </svg>
                      <strong className="font-bold text-teal-bright">{first}</strong>{' '}
                      {rest.join(' ')}
                    </span>
                  )
                })}
              </div>
            </div>

            <EmailForm />
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaDecoTR() {
  return (
    <svg
      className="pointer-events-none absolute right-[-60px] top-[-60px] h-[260px] w-[260px] opacity-40"
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="80" stroke="#3eccc4" strokeWidth="1" opacity="0.3" />
      <circle cx="100" cy="100" r="55" stroke="#3eccc4" strokeWidth="1" opacity="0.4" strokeDasharray="3 3" />
      <circle cx="100" cy="100" r="30" fill="#3eccc4" opacity="0.15" />
    </svg>
  )
}

function CtaDecoBL() {
  return (
    <svg
      className="pointer-events-none absolute bottom-[-80px] left-[-80px] h-[240px] w-[240px] opacity-30"
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="#3eccc4" strokeWidth="1" opacity="0.4">
        <line x1="40" y1="120" x2="100" y2="80" />
        <line x1="100" y1="80" x2="160" y2="130" />
        <line x1="40" y1="120" x2="160" y2="130" />
        <line x1="100" y1="80" x2="120" y2="30" />
        <line x1="160" y1="130" x2="120" y2="30" />
      </g>
      <g fill="#3eccc4">
        <circle cx="40" cy="120" r="4" />
        <circle cx="100" cy="80" r="4" />
        <circle cx="160" cy="130" r="4" />
        <circle cx="120" cy="30" r="4" />
      </g>
    </svg>
  )
}
