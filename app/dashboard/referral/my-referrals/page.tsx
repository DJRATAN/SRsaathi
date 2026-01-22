"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, CheckCircle2, Clock } from "lucide-react"

export default function MyReferralsPage() {
  const referrals = [
    {
      id: 1,
      name: "Amit Kumar",
      email: "amit@example.com",
      phone: "9876543210",
      product: "SBI Bank Account",
      status: "Approved",
      commission: "₹2000",
      date: "2025-01-10",
    },
    {
      id: 2,
      name: "Priya Singh",
      email: "priya@example.com",
      phone: "9876543211",
      product: "HDFC Credit Card",
      status: "Pending",
      commission: "₹1500",
      date: "2025-01-12",
    },
    {
      id: 3,
      name: "Rajesh Patel",
      email: "rajesh@example.com",
      phone: "9876543212",
      product: "Stock Market Course",
      status: "Approved",
      commission: "₹800",
      date: "2025-01-08",
    },
    {
      id: 4,
      name: "Neha Verma",
      email: "neha@example.com",
      phone: "9876543213",
      product: "UPI App Referral",
      status: "Approved",
      commission: "₹500",
      date: "2025-01-05",
    },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold" style={{ color: "#97144d" }}>
          My Referrals
        </h1>
        <p className="text-gray-600 mt-2">View and manage all your active referrals</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <Input placeholder="Search by name or email..." className="pl-10" />
        </div>
        <Button style={{ backgroundColor: "#97144d", color: "white" }}>Filter</Button>
      </div>

      {/* Referrals Table */}
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold" style={{ color: "#97144d" }}>
                  Name
                </th>
                <th className="text-left py-3 px-4 font-semibold" style={{ color: "#97144d" }}>
                  Product
                </th>
                <th className="text-left py-3 px-4 font-semibold" style={{ color: "#97144d" }}>
                  Status
                </th>
                <th className="text-right py-3 px-4 font-semibold" style={{ color: "#97144d" }}>
                  Commission
                </th>
                <th className="text-right py-3 px-4 font-semibold" style={{ color: "#97144d" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {referrals.map((ref) => (
                <tr key={ref.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-semibold text-gray-900">{ref.name}</p>
                      <p className="text-sm text-gray-500">{ref.email}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-700">{ref.product}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`flex items-center gap-1 text-sm font-semibold ${ref.status === "Approved" ? "text-green-600" : "text-orange-600"}`}
                    >
                      {ref.status === "Approved" ? <CheckCircle2 className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                      {ref.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right font-semibold text-gray-900">{ref.commission}</td>
                  <td className="py-4 px-4 text-right">
                    <Button variant="outline" size="sm" className="mr-2 bg-transparent">
                      Contact
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
