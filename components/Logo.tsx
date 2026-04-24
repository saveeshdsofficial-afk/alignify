import Link from 'next/link'

interface LogoProps {
  onDark?: boolean
}

export function LogoMark({ className = 'h-[30px] w-[30px]' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      <g stroke="#21a89f" strokeWidth="2.2" strokeLinecap="round">
        <line x1="20" y1="5" x2="7" y2="33" />
        <line x1="20" y1="5" x2="33" y2="33" />
        <line x1="12" y1="22" x2="28" y2="22" />
      </g>
      <circle cx="20" cy="5" r="3.2" fill="#21a89f" />
      <circle cx="12" cy="22" r="2.6" fill="#21a89f" />
      <circle cx="28" cy="22" r="2.6" fill="#21a89f" />
      <circle cx="7" cy="33" r="2.8" fill="#1e2635" />
      <circle cx="33" cy="33" r="2.8" fill="#21a89f" />
    </svg>
  )
}

export default function Logo({ onDark = false }: LogoProps) {
  return (
    <Link href="/" className="inline-flex items-center gap-2 text-inherit no-underline">
      <LogoMark />
      <span
        className={`font-display text-[22px] font-bold leading-none tracking-[-0.025em] ${
          onDark ? 'text-white' : 'text-graphite'
        }`}
      >
        alignify
      </span>
    </Link>
  )
}
