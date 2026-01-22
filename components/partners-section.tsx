"use client"

import { Card } from "@/components/ui/card"

export function PartnersSection() {
  const partners = [
    { name: "ICICI Bank", logo: "🏦" },
    { name: "Axis Bank", logo: "🏦" },
    { name: "HDFC Bank", logo: "🏦" },
    { name: "Kotak Bank", logo: "🏦" },
    { name: "Google Pay", logo: "📱" },
    { name: "PhonePe", logo: "📱" },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Financial Partners</h2>
          <p className="text-muted-foreground">Trusted by leading financial institutions</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner, idx) => (
            <Card
              key={idx}
              className="p-6 flex items-center justify-center text-center hover:shadow-md transition-shadow"
            >
              <div>
                <div className="text-4xl mb-2">{partner.logo}</div>
                <p className="text-sm font-semibold">{partner.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
