import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SectionMarker from '@/components/SectionMarker'
import Problem from '@/components/Problem'
import Pipeline from '@/components/Pipeline'
import Tools from '@/components/Tools'
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

      <SectionMarker idx="// 01 — Problem" tag="Diagnostic" />
      <Problem />

      <SectionMarker idx="// 02 — Pipeline" tag="Engine · Live" />
      <Pipeline />

      <SectionMarker idx="// 03 — Toolkit" tag="Inside Alignify Sales" />
      <Tools />

      <SectionMarker idx="// 04 — Request access" tag="Talk to the team" />
      <FinalCTA />

      <SectionMarker idx="// 05 — Platform" tag="Three products · One layer" />
      <Products />

      <SectionMarker idx="// 06 — Field reports" tag="From the front line" />
      <Testimonials />

      <SectionMarker idx="// 07 — Questions" tag="Common asks" />
      <FAQ />

      <Footer />
    </>
  )
}
