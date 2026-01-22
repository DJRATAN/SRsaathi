"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Digital Entrepreneur",
      content: "SRsaathi changed how I earn passive income. The process is so simple and payouts are instant!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Finance Blogger",
      content: "The products curated here are genuine and trusted. My audience loves the recommendations.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Student",
      content: "Earned ₹50,000+ just by sharing with friends. No hidden charges or complicated process!",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Loved by thousands</h2>
          <p className="text-muted-foreground text-lg">Join happy referrers earning real money</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="p-6">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
