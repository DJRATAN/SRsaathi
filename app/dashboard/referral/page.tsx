"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Copy, Share2, Mail, MessageSquare, CheckCircle2 } from "lucide-react"

export default function ReferralPage() {
  const referralLink = "https://srsaathi.com/ref/USER123456"
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Referral Program</h1>
        <p className="text-muted-foreground mt-2">Share your unique referral link and earn commissions</p>
      </div>

      {/* Your Referral Link */}
      <Card className="p-8 mb-8 border-2 border-primary">
        <h2 className="text-xl font-bold text-foreground mb-4">Your Referral Link</h2>
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <Input type="text" value={referralLink} readOnly className="bg-input font-mono text-sm flex-1" />
          <Button
            onClick={copyToClipboard}
            className="bg-primary text-primary-foreground hover:bg-secondary gap-2 whitespace-nowrap"
          >
            <Copy className="w-4 h-4" />
            {copied ? "Copied!" : "Copy Link"}
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2 bg-transparent"
          >
            <Share2 className="w-4 h-4" />
            Share
          </Button>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2 bg-transparent"
          >
            <Mail className="w-4 h-4" />
            Email
          </Button>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2 bg-transparent"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp
          </Button>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2 bg-transparent"
          >
            <Share2 className="w-4 h-4" />
            LinkedIn
          </Button>
        </div>
      </Card>

      {/* Commission Structure */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-primary bg-opacity-10 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Course Referral</h3>
              <p className="text-sm text-muted-foreground">₹500 - ₹2000 per referral</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">Earn 20% commission on course purchases</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-primary bg-opacity-10 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Bank Account</h3>
              <p className="text-sm text-muted-foreground">₹1000 - ₹5000 per referral</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">Earn flat amount or percentage based on deposit</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-primary bg-opacity-10 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Credit Card</h3>
              <p className="text-sm text-muted-foreground">₹500 - ₹3000 per referral</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">Earn on successful card approvals</p>
        </Card>
      </div>
    </div>
  )
}
