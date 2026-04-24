import Header from '@/components/Header'
import Hero from '@/components/Hero'
import StatsStrip from '@/components/StatsStrip'
import ProblemSection from '@/components/ProblemSection'
import ProductsSection from '@/components/ProductsSection'
import PipelineSection from '@/components/PipelineSection'
import BigStat from '@/components/BigStat'
import Testimonials from '@/components/Testimonials'
import ToolsSection from '@/components/ToolsSection'
import FinalCTA from '@/components/FinalCTA'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <ProblemSection />
        <ProductsSection />
        <PipelineSection />
        <BigStat />
        <Testimonials />
        <ToolsSection />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
