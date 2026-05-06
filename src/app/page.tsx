import LogoSymbol from '@/components/LogoSymbol'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import FinalCTA from '@/components/FinalCTA'
import Products from '@/components/Products'
import Engine from '@/components/Engine'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <LogoSymbol />
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <FinalCTA />
      <Products />
      <Engine />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  )
}
