"use client"

import { CreditCard, Share2, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

export function HowToEarn() {
  const steps = [
    {
      icon: Share2,
      title: "Share Your Link",
      description: "Share your unique referral link with friends and family",
      step: "01",
    },
    {
      icon: CreditCard,
      title: "They Sign Up",
      description: "Your referral signs up using your personalized link",
      step: "02",
    },
    {
      icon: Zap,
      title: "Earn Rewards",
      description: "Get rewarded for every successful referral instantly",
      step: "03",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Start earning in 3 easy steps</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Simple, transparent, and rewarding</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={idx} className="relative">
                <Card className="p-8 h-full border-2 hover:border-primary transition-colors">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
