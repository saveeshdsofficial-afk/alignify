import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface LegalPageProps {
  eyebrow: string
  title: string
  children: React.ReactNode
}

export default function LegalPage({ eyebrow, title, children }: LegalPageProps) {
  return (
    <>
      <Navbar />
      <main className="section legal">
        <div className="frame">
          <div className="legal-head">
            <span className="label">{eyebrow}</span>
            <h1 className="section-h">{title}</h1>
          </div>
          <div className="legal-body">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  )
}
