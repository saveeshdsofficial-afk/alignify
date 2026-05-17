import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Pipeline from '@/components/Pipeline'
import FinalCTA from '@/components/FinalCTA'
import Products from '@/components/Products'
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
      <Products />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  )
}
