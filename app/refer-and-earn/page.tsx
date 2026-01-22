"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Share2, Users, TrendingUp, Zap } from "lucide-react"

export default function ReferAndEarnPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Refer & Earn</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Share SRsaathi with your friends and family, and earn attractive commissions on every successful referral
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Share Your Link",
                desc: "Get your unique referral link from the dashboard and share it with friends",
                icon: Share2,
              },
              {
                step: "2",
                title: "They Sign Up & Invest",
                desc: "Your friends join SRsaathi and invest in financial products",
                icon: Users,
              },
              {
                step: "3",
                title: "You Earn",
                desc: "Receive commission for every successful referral instantly",
                icon: TrendingUp,
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-primary bg-opacity-5 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Benefits of Referring</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Unlimited earning potential",
              "Instant commission payouts",
              "No minimum referral requirement",
              "Real-time tracking dashboard",
              "Dedicated support team",
              "Exclusive partner benefits",
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Commission Structure */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Competitive Commission Rates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Courses",
                commission: "20% commission",
                range: "₹500 - ₹2000",
              },
              {
                category: "Bank Accounts",
                commission: "Flat Amount",
                range: "₹2000 - ₹5000",
              },
              {
                category: "Credit Cards",
                commission: "Per Approval",
                range: "₹500 - ₹3000",
              },
              {
                category: "Insurance",
                commission: "20-25% commission",
                range: "₹1000 - ₹5000",
              },
              {
                category: "Demat Accounts",
                commission: "Flat + Bonus",
                range: "₹1500 - ₹3000",
              },
              {
                category: "UPI Apps",
                commission: "Per Transaction",
                range: "₹50 - ₹500",
              },
            ].map((item) => (
              <Card key={item.category} className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{item.category}</h3>
                <p className="text-primary font-semibold mb-1">{item.commission}</p>
                <p className="text-sm text-muted-foreground">{item.range} per referral</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary text-primary-foreground rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of successful referrers earning consistently with SRsaathi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary-foreground text-primary hover:bg-opacity-90 gap-2">
              <Share2 className="w-5 h-5" />
              Get Your Referral Link
            </Button>
            <Button
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary gap-2 bg-transparent"
            >
              View Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
