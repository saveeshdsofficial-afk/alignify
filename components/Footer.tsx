import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="relative bg-graphite pb-7 pt-16 text-white">
      <span
        aria-hidden="true"
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, #21a89f, transparent)',
        }}
      />
      <div className="mx-auto max-w-wrap px-7">
        <div className="mb-11 flex flex-col justify-between gap-10 md:flex-row md:gap-10">
          <div>
            <Logo onDark />
            <p className="mt-3.5 max-w-[360px] text-sm leading-[1.55] text-white/60">
              Intelligent alignment for sales teams that refuse to waste calls.
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-soft">
              Get in touch
            </span>
            <Link
              href="mailto:hello@alignify.io"
              className="flex items-center gap-2.5 text-sm text-white/75 no-underline transition-colors hover:text-teal-bright"
            >
              <MailIcon />
              hello@alignify.io
            </Link>
            <div className="flex items-center gap-2.5 text-sm text-white/75">
              <PinIcon />
              Melbourne, Australia
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3.5 border-t border-white/10 pt-6 text-[12.5px] text-white/45">
          <div>© 2026 Alignify. Intelligent Alignment.</div>
          <div>
            <Link href="#" className="ml-5 text-inherit hover:text-white">Privacy</Link>
            <Link href="#" className="ml-5 text-inherit hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className="flex-shrink-0 text-teal-bright">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7 L12 13 L21 7" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" className="flex-shrink-0 text-teal-bright">
      <path d="M12 2 C 7 2 4 6 4 11 C 4 17 12 22 12 22 C 12 22 20 17 20 11 C 20 6 17 2 12 2 Z" />
      <circle cx="12" cy="11" r="3" />
    </svg>
  )
}
