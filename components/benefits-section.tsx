"use client"

import { CheckCircle } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    "Earn passive income with unlimited earning potential",
    "Transparent commission structure with instant payouts",
    "Access to dedicated referral dashboard and analytics",
    "Marketing materials and promotional resources provided",
    "Priority customer support for top referrers",
    "Special bonuses and incentives for high performers",
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Unlock extra income for all your needs</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join thousands of referrers earning consistent income by sharing trusted financial products and services
              with their network.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-5xl">💰</span>
              </div>
              <p className="text-muted-foreground">Illustration: Income Growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
