import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { StatsSection } from "@/components/stats-section"
import { HowToEarn } from "@/components/how-to-earn"
import { BenefitsSection } from "@/components/benefits-section"
import { FeatureCards } from "@/components/feature-cards"
import { ReferralProgram } from "@/components/referral-program"
import { PartnersSection } from "@/components/partners-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogSection } from "@/components/blog-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">

      <Hero />
      <StatsSection />
      <HowToEarn />
      <BenefitsSection />
      <FeatureCards />
      <ReferralProgram />
      <PartnersSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
      
    </main>
  )
}
