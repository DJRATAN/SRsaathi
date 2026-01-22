"use client"

import { Copy, Users, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"

export function ReferralBanner() {
  const [copied, setCopied] = useState(false)
  const referralCode = "SRSAATHI2024"
  const referralLink = `https://srsaathi.com/ref/${referralCode}`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden border-0 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="flex justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Gift className="w-6 h-6 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Earn Money Sharing SRsaathi</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Share your referral link and earn unlimited rewards on every successful referral. Get bonuses for both
                you and your friends!
              </p>
            </div>

            <div className="space-y-8">
              {/* Referral Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">Unlimited</div>
                  <div className="text-sm text-muted-foreground">Referrals</div>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg text-center">
                  <Gift className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-secondary mb-1">₹100-₹1000</div>
                  <div className="text-sm text-muted-foreground">Per Referral</div>
                </div>
                <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg text-center">
                  <span className="text-2xl font-bold text-primary block">100%</span>
                  <div className="text-sm text-muted-foreground">Verified Rewards</div>
                </div>
              </div>

              {/* Referral Link */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                <label className="block text-sm font-semibold text-foreground mb-3">Your Personal Referral Link</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={referralLink}
                    readOnly
                    className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-sm font-mono focus:outline-none"
                  />
                  <Button
                    onClick={copyToClipboard}
                    className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 gap-2"
                  >
                    <Copy className="w-4 h-4" />
                    {copied ? "Copied!" : "Copy"}
                  </Button>
                </div>
              </div>

              {/* Share Options */}
              <div className="flex flex-wrap gap-3 justify-center">
                <Button variant="outline" className="gap-2 bg-transparent">
                  Share on WhatsApp
                </Button>
                <Button variant="outline" className="gap-2 bg-transparent">
                  Share on Twitter
                </Button>
                <Button variant="outline" className="gap-2 bg-transparent">
                  Share on Facebook
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
