import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  onDark?: boolean
  className?: string
}

export default function Logo({ onDark = false, className = 'h-9 w-auto' }: LogoProps) {
  const src = onDark ? '/alignify-logo-light.png' : '/alignify-logo-dark.png'
  return (
    <Link href="/" className="inline-flex items-center text-inherit no-underline">
      <Image
        src={src}
        alt="Alignify"
        width={1920}
        height={666}
        priority
        className={className}
      />
    </Link>
  )
}
