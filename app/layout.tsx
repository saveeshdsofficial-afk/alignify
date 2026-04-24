import type { Metadata } from 'next'
import { Inter, Gabarito } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const gabarito = Gabarito({
  subsets: ['latin'],
  variable: '--font-gabarito',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Alignify for Sales — Intelligent Alignment',
  description:
    'Validate every prospect before you pick up the phone. Alignify turns random cold calls into aligned, high-probability sales conversations.',
  openGraph: {
    title: 'Alignify for Sales — Intelligent Alignment',
    description:
      'Validate every prospect before you pick up the phone. Turn cold calls into aligned conversations.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${gabarito.variable}`}>
      <body className="font-sans" suppressHydrationWarning>{children}</body>
    </html>
  )
}
