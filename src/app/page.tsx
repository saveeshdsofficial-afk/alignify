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

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Pipeline />
      <PCCA />
      <Solutions />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  )
}
