"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function ReferralProgram() {
  const [copied, setCopied] = useState(false)
  const referralLink = "https://srsaathi.com/ref/your-unique-code-12345"

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Sell more. Earn more.</h2>
            <p className="text-muted-foreground text-lg">Share your unique referral link with 2 zero investment</p>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-semibold text-foreground mb-2">Your Referral Link</label>
            <div className="flex gap-2">
              <Input value={referralLink} readOnly className="bg-background border-border text-sm" />
              <Button onClick={handleCopy} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">₹500</div>
              <p className="text-sm text-muted-foreground">Per Referral</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary mb-1">Unlimited</div>
              <p className="text-sm text-muted-foreground">Earn Potential</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">Instant</div>
              <p className="text-sm text-muted-foreground">Payouts</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
