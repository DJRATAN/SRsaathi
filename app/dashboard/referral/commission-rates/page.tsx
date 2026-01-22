"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

export default function CommissionRatesPage() {
  const commissionData = [
    {
      category: "Courses",
      products: "Financial courses, Stock market, Crypto",
      commission: "₹500 - ₹2000",
      percentage: "20%",
    },
    {
      category: "Bank Accounts",
      products: "SBI, HDFC, ICICI, Axis Bank",
      commission: "₹1000 - ₹5000",
      percentage: "Flat rate",
    },
    {
      category: "Credit Cards",
      products: "Gold, Platinum, Premium cards",
      commission: "₹500 - ₹3000",
      percentage: "Approved basis",
    },
    {
      category: "UPI Apps",
      products: "Google Pay, PhonePe, Paytm",
      commission: "₹200 - ₹500",
      percentage: "Per activation",
    },
    {
      category: "Insurance",
      products: "Health, Term Life, Auto insurance",
      commission: "₹1500 - ₹8000",
      percentage: "15-20%",
    },
    {
      category: "Demat Accounts",
      products: "Stocks, Mutual funds, Bonds",
      commission: "₹1000 - ₹4000",
      percentage: "Deposit based",
    },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold" style={{ color: "#97144d" }}>
          Commission Rates
        </h1>
        <p className="text-gray-600 mt-2">View earning potential for each product category</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {commissionData.map((item, idx) => (
          <Card key={idx} className="p-6 border-l-4" style={{ borderLeftColor: "#97144d" }}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold" style={{ color: "#97144d" }}>
                  {item.category}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{item.products}</p>
              </div>
              <TrendingUp className="w-6 h-6" style={{ color: "#97144d" }} />
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Commission</p>
                  <p className="text-lg font-bold text-gray-900 mt-1">{item.commission}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Rate</p>
                  <p className="text-lg font-bold" style={{ color: "#97144d" }}>
                    {item.percentage}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
