import Link from 'next/link'
import type { ReactNode } from 'react'

interface Product {
  status: 'available' | 'soon'
  title: ReactNode
  desc: string
  features: string[]
  cta: string
  icon: ReactNode
  live?: boolean
}

const SalesIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
    <path d="M3 16 L8 11 L13 14 L21 6" />
    <path d="M16 6 L21 6 L21 11" />
    <circle cx="21" cy="6" r="1.2" fill="currentColor" stroke="none" />
  </svg>
)
const RecruitIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21 C 4 16 20 16 20 21" />
    <path d="M17 5 L22 5 M19.5 2.5 L19.5 7.5" strokeWidth="2" />
  </svg>
)
const MentorIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
    <circle cx="8" cy="9" r="3" />
    <circle cx="16" cy="9" r="3" />
    <path d="M2 20 C 2 16 14 16 14 20" />
    <path d="M10 20 C 10 16 22 16 22 20" />
  </svg>
)

const PRODUCTS: Product[] = [
  {
    status: 'available',
    title: (<>Alignify for <span className="text-teal">Sales</span></>),
    desc: 'Know your prospect before you reach out. Validate fit, adapt your pitch, and turn cold calls into aligned conversations.',
    features: [
      'Prospect alignment scoring',
      'Buyer personality signals',
      'Personalised outreach guidance',
      'Objection-handling playbooks',
    ],
    cta: 'Get early access →',
    icon: SalesIcon,
    live: true,
  },
  {
    status: 'soon',
    title: 'Alignify for Recruitment',
    desc: 'Hire for structural fit, not just skill. Validate candidates against your culture blueprint before the first interview.',
    features: ['Candidate alignment scoring', 'Culture-fit screening', 'Structured interview prompts'],
    cta: 'Join the waitlist →',
    icon: RecruitIcon,
  },
  {
    status: 'soon',
    title: 'Alignify for Mentor',
    desc: 'Match mentors and mentees by alignment — values, working style, and growth trajectory. Relationships that actually stick.',
    features: ['Mentor-mentee matching', 'Growth pathway mapping', 'Pairing health check-ins'],
    cta: 'Join the waitlist →',
    icon: MentorIcon,
  },
]

export default function ProductsSection() {
  return (
    <section id="products" className="py-28">
      <div className="mx-auto max-w-wrap px-7">
        <div className="mb-14 max-w-[680px]">
          <span className="mono-eyebrow">The Platform</span>
          <h2 className="section-heading mt-3.5">
            Three products. <span className="text-teal">One intelligent alignment layer.</span>
          </h2>
          <p className="mt-4 text-[17px] leading-[1.6] text-ink-soft">
            Alignify brings structured intelligence to the moments that matter — starting with
            Sales.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-[1.3fr_1fr_1fr]">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={i} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: Product }) {
  const live = product.live

  return (
    <article
      className={`group relative overflow-hidden rounded-[14px] p-9 transition-all hover:-translate-y-1 ${
        live
          ? 'border border-transparent text-white'
          : 'border border-line bg-paper hover:border-teal-pale hover:shadow-[0_30px_60px_-30px_rgba(30,38,53,0.2)]'
      }`}
      style={
        live
          ? { background: 'linear-gradient(160deg,#2E3950 0%,#171820 100%)' }
          : undefined
      }
    >
      {live && (
        <div
          className="pointer-events-none absolute right-[-20%] top-[-50%] h-[200%] w-[60%]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(33,168,159,0.2) 0%, transparent 60%)',
          }}
        />
      )}

      <div className="relative z-[1]">
        <ProductBadge status={product.status} />

        <div
          className={`mb-5 flex h-[54px] w-[54px] items-center justify-center rounded-xl border ${
            live
              ? 'border-teal/30 bg-teal/15 text-teal'
              : 'border-teal-pale bg-teal-tint text-teal'
          }`}
        >
          {product.icon}
        </div>

        <h3
          className={`mb-2.5 font-display text-[28px] font-bold tracking-[-0.025em] ${
            live ? 'text-white' : 'text-graphite'
          }`}
        >
          {product.title}
        </h3>

        <p
          className={`mb-5 text-[15px] leading-[1.55] ${
            live ? 'text-white/75' : 'text-ink-soft'
          }`}
        >
          {product.desc}
        </p>

        <ul className="mb-6 list-none space-y-0">
          {product.features.map((f) => (
            <li
              key={f}
              className={`relative py-2 pl-6 text-sm ${
                live ? 'text-white/80' : 'text-ink-soft'
              }`}
            >
              <span
                className={`absolute left-0 top-3.5 h-0.5 w-3 rounded-sm ${
                  live ? 'bg-teal' : 'bg-teal'
                }`}
              />
              {f}
            </li>
          ))}
        </ul>

        <Link
          href="#final-cta"
          className={
            live
              ? 'inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-sm font-semibold text-white transition-all hover:gap-3 hover:bg-white hover:text-graphite'
              : 'inline-flex items-center gap-2 text-sm font-semibold text-slate transition-all hover:gap-3 hover:text-teal'
          }
        >
          {product.cta}
        </Link>
      </div>
    </article>
  )
}

function ProductBadge({ status }: { status: 'available' | 'soon' }) {
  const isLive = status === 'available'
  return (
    <div
      className={`mb-4 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ${
        isLive
          ? 'bg-teal text-white'
          : 'border border-line bg-canvas-soft text-slate'
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          isLive ? 'animate-pulse-chip bg-graphite' : 'bg-slate'
        }`}
      />
      {isLive ? 'Available now' : 'Coming soon'}
    </div>
  )
}
