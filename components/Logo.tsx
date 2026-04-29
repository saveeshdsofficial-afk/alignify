import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  onDark?: boolean
}

export default function Logo({ onDark = false }: LogoProps) {
  const src = onDark ? '/alignify-logo-light.png' : '/alignify-logo-dark.jpg'
  return (
    <Link href="/" className="inline-flex items-center text-inherit no-underline">
      <Image
        src={src}
        alt="Alignify"
        width={1920}
        height={666}
        priority
        className="h-9 w-auto"
      />
    </Link>
  )
}
