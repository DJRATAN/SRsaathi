"use client"

import { ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-20 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
            <Zap className="w-4 h-4 text-secondary" />
            <span className="text-sm font-semibold text-foreground">Your Financial Gateway</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Manage Your Finances
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Discover the best courses, software, banking solutions, credit cards, UPI apps and financial tools - all
            curated and reviewed by experts, in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
              Explore Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
