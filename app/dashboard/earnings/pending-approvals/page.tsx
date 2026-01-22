"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"

export default function PendingApprovalsPage() {
  const pending = [
    {
      id: 1,
      referral: "Amit Kumar - SBI Bank",
      amount: "₹2000",
      submittedDate: "2025-01-12",
      daysWaiting: 2,
      product: "Bank Account",
    },
    {
      id: 2,
      referral: "Priya Singh - HDFC Credit Card",
      amount: "₹1500",
      submittedDate: "2025-01-11",
      daysWaiting: 3,
      product: "Credit Card",
    },
    {
      id: 3,
      referral: "Rohit Sharma - Insurance",
      amount: "₹3000",
      submittedDate: "2025-01-09",
      daysWaiting: 5,
      product: "Insurance",
    },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold" style={{ color: "#97144d" }}>
          Pending Approvals
        </h1>
        <p className="text-gray-600 mt-2">Earnings awaiting approval</p>
      </div>

      <div className="mb-4 p-4 bg-orange-50 border border-orange-200 rounded-lg flex gap-2">
        <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
        <p className="text-sm text-orange-700">
          Approvals typically take 3-7 business days. Contact support if delayed.
        </p>
      </div>

      <div className="space-y-4">
        {pending.map((item) => (
          <Card key={item.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">{item.referral}</h3>
                <p className="text-sm text-gray-600 mt-1">Product: {item.product}</p>
                <div className="flex gap-6 mt-3">
                  <div>
                    <p className="text-xs text-gray-500">Submitted</p>
                    <p className="text-sm font-semibold text-gray-700">{item.submittedDate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Waiting</p>
                    <p className="text-sm font-semibold text-orange-600">{item.daysWaiting} days</p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold" style={{ color: "#97144d" }}>
                  {item.amount}
                </p>
                <Button variant="outline" size="sm" className="mt-3 text-xs bg-transparent">
                  Check Status
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
