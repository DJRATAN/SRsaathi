"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary via-primary to-secondary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Sell more. Earn more.</h2>
            <p className="text-lg opacity-90 mb-8 text-balance">
              Start earning with zero investment. Join thousands of referrers making real money by sharing trusted
              financial products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                Start Earning Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                Download App
              </Button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-48 h-80 bg-white/10 rounded-2xl border-4 border-white/30 mx-auto backdrop-blur flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl mb-4">📱</div>
                      <p className="text-sm opacity-70">Mobile App</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
