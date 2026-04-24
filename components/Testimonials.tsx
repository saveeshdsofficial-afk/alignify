import type { ReactNode } from 'react'

interface Testimonial {
  quote: ReactNode
  name: string
  role: string
  logo: string
  initials: string
  avatarClass: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: (<>&quot;We stopped guessing about buyers. Our <strong className="font-bold text-teal">reply rates doubled</strong> in the first month.&quot;</>),
    name: 'Sarah Jenkins',
    role: 'Head of Sales',
    logo: 'Innosystems',
    initials: 'SJ',
    avatarClass: 'bg-gradient-to-br from-teal to-teal-bright',
  },
  {
    quote: (<>&quot;The <strong className="font-bold text-teal">first five minutes</strong> of every call changed. We walk in already aligned.&quot;</>),
    name: 'Marcus Thorne',
    role: 'VP of Revenue',
    logo: 'Quartix',
    initials: 'MT',
    avatarClass: 'bg-gradient-to-br from-graphite to-slate',
  },
  {
    quote: (<>&quot;Cut our call-to-close time by <strong className="font-bold text-teal">30%</strong>. Every meeting starts with real context.&quot;</>),
    name: 'Rhea Nakamura',
    role: 'Chief Revenue Officer',
    logo: 'Meridian',
    initials: 'RN',
    avatarClass: 'bg-gradient-to-br from-slate to-teal',
  },
]

function Star() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M8 1l2.09 4.26 4.7.68-3.4 3.31.8 4.68L8 11.77l-4.2 2.16.8-4.68-3.4-3.31 4.7-.68z" />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-wrap px-7">
        <div className="mx-auto mb-14 max-w-[680px] text-center">
          <span className="mono-eyebrow">Sales Professionals</span>
          <h2 className="section-heading mt-3.5">
            Trusted by <span className="text-teal">revenue leaders.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="rounded-[14px] border border-line bg-paper p-8 transition-all hover:-translate-y-0.5 hover:border-teal-pale"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-0.5 text-teal">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} />
                  ))}
                </div>
                <div className="font-display text-[13px] font-bold tracking-[-0.01em] text-slate">
                  {t.logo}
                </div>
              </div>
              <p className="mb-5 font-display text-[17px] font-medium leading-[1.5] tracking-[-0.01em] text-graphite">
                {t.quote}
              </p>
              <div className="flex items-center gap-3.5">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-display text-[13px] font-bold text-white ${t.avatarClass}`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-graphite">{t.name}</div>
                  <div className="mt-px text-[12.5px] text-slate">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
