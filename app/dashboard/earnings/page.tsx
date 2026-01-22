"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { IndianRupee, Calendar, DollarSign } from "lucide-react"

export default function EarningsPage() {
  const earnings = [
    { month: "January", amount: 2500, referrals: 5 },
    { month: "February", amount: 4200, referrals: 8 },
    { month: "March", amount: 5450, referrals: 10 },
  ]

  const totalEarnings = earnings.reduce((sum, e) => sum + e.amount, 0)

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Earnings</h1>
        <p className="text-muted-foreground mt-2">Track your referral earnings and payouts</p>
      </div>

      {/* Earnings Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Earnings</p>
              <p className="text-3xl font-bold text-foreground">₹{totalEarnings}</p>
            </div>
            <IndianRupee className="w-6 h-6 text-primary" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Available Balance</p>
              <p className="text-3xl font-bold text-foreground">₹8,750</p>
            </div>
            <DollarSign className="w-6 h-6 text-green-500" />
          </div>
          <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-secondary">Withdraw</Button>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Pending Approval</p>
              <p className="text-3xl font-bold text-foreground">₹3,700</p>
            </div>
            <Calendar className="w-6 h-6 text-orange-500" />
          </div>
          <p className="text-xs text-muted-foreground mt-4">Waiting for referral approval</p>
        </Card>
      </div>

      {/* Earnings Table */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Monthly Earnings</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Month</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Referrals</th>
                <th className="text-right py-3 px-4 font-semibold text-foreground">Amount</th>
              </tr>
            </thead>
            <tbody>
              {earnings.map((row) => (
                <tr key={row.month} className="border-b border-border hover:bg-muted">
                  <td className="py-3 px-4 text-foreground">{row.month}</td>
                  <td className="py-3 px-4 text-foreground">{row.referrals}</td>
                  <td className="py-3 px-4 text-right font-semibold text-green-600">₹{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
