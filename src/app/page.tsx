import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Pipeline from '@/components/Pipeline'
import PCCA from '@/components/PCCA'
import Solutions from '@/components/Solutions'
import FinalCTA from '@/components/FinalCTA'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <PCCA />
      <Solutions />
      <Pipeline />
      <FinalCTA />
      <Testimonials />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </>
  )
}
