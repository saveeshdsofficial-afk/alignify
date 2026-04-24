import Link from 'next/link'
import ProspectCard from './ProspectCard'

const heroBg =
  'radial-gradient(ellipse 700px 400px at 85% 20%, rgba(33,168,159,0.15) 0%, transparent 60%),' +
  'radial-gradient(ellipse 500px 300px at 10% 90%, rgba(62,204,196,0.08) 0%, transparent 60%),' +
  'linear-gradient(180deg, #1e2635 0%, #0f1117 100%)'

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden px-0 py-20 pb-24 text-white"
      style={{ background: heroBg }}
    >
      <HeroNetwork />

      <div className="relative z-[2] mx-auto grid max-w-wrap grid-cols-1 items-center gap-x-14 gap-y-10 px-7 md:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-teal-bright/25 bg-teal-bright/10 px-3.5 py-1.5">
            <span className="h-[7px] w-[7px] animate-pulse-ring rounded-full bg-teal-bright" />
            <span className="text-xs font-medium tracking-[0.02em] text-teal-bright">
              Alignify for Sales · Now in beta
            </span>
          </div>

          <h1 className="mb-5 font-display text-[clamp(40px,5.8vw,72px)] font-bold leading-[1.02] tracking-[-0.025em] text-white">
            Selling is easier when you{' '}
            <span className="text-teal-bright">know your prospect.</span>
          </h1>

          <p className="mb-9 max-w-[500px] text-[18px] leading-[1.55] text-white/70">
            Validate every prospect before you pick up the phone. Alignify turns random cold calls
            into aligned, high-probability sales conversations.
          </p>

          <div className="mb-10 flex flex-wrap gap-3.5">
            <Link
              href="#final-cta"
              className="btn-lg bg-teal text-white hover:bg-teal-bright"
            >
              Get Early Access
            </Link>
            <Link
              href="#products"
              className="btn-lg border-[1.5px] border-white/30 bg-transparent text-white hover:border-white hover:bg-white hover:text-graphite"
            >
              See the Platform
            </Link>
          </div>

          <div className="flex items-center gap-3.5 border-t border-white/10 pt-6">
            <div className="flex">
              {(
                [
                  ['SJ', 'linear-gradient(135deg,#21a89f,#3eccc4)'],
                  ['MT', 'linear-gradient(135deg,#6b7388,#3a4460)'],
                  ['RN', 'linear-gradient(135deg,#8b94aa,#21a89f)'],
                ] as const
              ).map(([initials, bg], i) => (
                <div
                  key={initials}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-graphite font-display text-[11px] font-bold text-white"
                  style={{ background: bg, marginLeft: i === 0 ? 0 : '-8px' }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <div className="text-[13px] text-white/70">
              <strong className="font-semibold text-white">200+ sales professionals</strong> on the
              beta waitlist
            </div>
          </div>
        </div>

        <div className="relative ml-auto w-full max-w-[500px]">
          <HeroChip pos="top-[-12px] left-[-20px]" dotClass="bg-teal">
            Alignment score · 94
          </HeroChip>
          <HeroChip
            pos="bottom-10 right-[-30px]"
            dotClass="bg-teal-bright animate-pulse-chip"
          >
            High-probability call
          </HeroChip>
          <ProspectCard />
        </div>
      </div>
    </section>
  )
}

function HeroChip({
  children,
  pos,
  dotClass,
}: {
  children: React.ReactNode
  pos: string
  dotClass: string
}) {
  return (
    <span
      className={`absolute z-[3] inline-flex items-center gap-2 rounded-full bg-white py-2 pl-2.5 pr-3.5 text-xs font-semibold tracking-[-0.01em] text-graphite shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] ${pos}`}
    >
      <span className={`h-2 w-2 rounded-full ${dotClass}`} />
      {children}
    </span>
  )
}

function HeroNetwork() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
      viewBox="0 0 1400 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g stroke="#3eccc4" strokeWidth="0.7" fill="none" opacity="0.5">
        <line x1="80" y1="120" x2="260" y2="70" />
        <line x1="260" y1="70" x2="400" y2="180" />
        <line x1="80" y1="120" x2="400" y2="180" />
        <line x1="1100" y1="480" x2="1260" y2="380" />
        <line x1="1260" y1="380" x2="1180" y2="580" />
        <line x1="1100" y1="480" x2="1180" y2="580" />
        <line x1="60" y1="500" x2="220" y2="590" />
        <line x1="220" y1="590" x2="360" y2="520" />
      </g>
      <g fill="#3eccc4" opacity="0.65">
        {[
          [80, 120],
          [260, 70],
          [400, 180],
          [1100, 480],
          [1260, 380],
          [1180, 580],
          [60, 500],
          [220, 590],
          [360, 520],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" />
        ))}
      </g>
    </svg>
  )
}
