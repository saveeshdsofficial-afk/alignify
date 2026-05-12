import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alignify — Sales',
  description:
    'Validate every prospect before you pick up the phone. Alignify turns random cold calls into aligned, high-probability sales conversations.',
  openGraph: {
    title: 'Alignify — Sales',
    description: 'Intelligent alignment for sales teams that refuse to waste calls.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Gabarito:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body suppressHydrationWarning>
        <div className="orb orb-1" aria-hidden />
        <div className="orb orb-2" aria-hidden />
        {children}
      </body>
    </html>
  )
}
