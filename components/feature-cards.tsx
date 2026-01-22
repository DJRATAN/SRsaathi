"use client"

import { Card } from "@/components/ui/card"
import { Shield, Zap, Users, TrendingUp } from "lucide-react"

export function FeatureCards() {
  const features = [
    {
      icon: Shield,
      title: "100% Secure & Safe",
      description: "Your data is protected with industry-leading security standards",
    },
    {
      icon: Zap,
      title: "Instant Payouts",
      description: "Get commissions instantly in your bank account",
    },
    {
      icon: Users,
      title: "Trusted by Millions",
      description: "Join a community of 40 lakh+ users and referrers",
    },
    {
      icon: TrendingUp,
      title: "Real-Time Analytics",
      description: "Track your earnings and performance with detailed insights",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why choose SRsaathi?</h2>
          <p className="text-muted-foreground text-lg">Everything you need to succeed</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
