import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
  return (
    <header className="sticky top-0 z-[100] border-b border-line bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-wrap items-center justify-between px-7 py-3.5">
        <Logo />
        <Link
          href="#final-cta"
          className="rounded-lg bg-graphite px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-teal"
        >
          Get Early Access
        </Link>
      </div>
    </header>
  )
}
