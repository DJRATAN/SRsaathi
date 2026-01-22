"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Download } from "lucide-react"

export default function WithdrawalHistoryPage() {
  const withdrawals = [
    { id: 1, date: "2025-01-10", amount: "₹5000", status: "Completed", method: "Bank Transfer", reference: "TXN001" },
    { id: 2, date: "2025-01-05", amount: "₹3500", status: "Completed", method: "Bank Transfer", reference: "TXN002" },
    { id: 3, date: "2024-12-28", amount: "₹7500", status: "Completed", method: "Bank Transfer", reference: "TXN003" },
    { id: 4, date: "2024-12-20", amount: "₹4200", status: "Completed", method: "Bank Transfer", reference: "TXN004" },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold" style={{ color: "#97144d" }}>
          Withdrawal History
        </h1>
        <p className="text-gray-600 mt-2">Track all your earnings withdrawals</p>
      </div>

      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold" style={{ color: "#97144d" }}>
                  Date
                </th>
                <th className="text-left py-3 px-4 font-semibold" style={{ color: "#97144d" }}>
                  Amount
                </th>
                <th className="text-left py-3 px-4 font-semibold" style={{ color: "#97144d" }}>
                  Method
                </th>
                <th className="text-left py-3 px-4 font-semibold" style={{ color: "#97144d" }}>
                  Status
                </th>
                <th className="text-left py-3 px-4 font-semibold" style={{ color: "#97144d" }}>
                  Reference
                </th>
                <th className="text-right py-3 px-4 font-semibold" style={{ color: "#97144d" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {withdrawals.map((row) => (
                <tr key={row.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 text-gray-700">{row.date}</td>
                  <td className="py-4 px-4 font-semibold text-gray-900">{row.amount}</td>
                  <td className="py-4 px-4 text-gray-700">{row.method}</td>
                  <td className="py-4 px-4">
                    <span className="flex items-center gap-1 text-sm font-semibold text-green-600">
                      <CheckCircle2 className="w-4 h-4" />
                      {row.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600 font-mono">{row.reference}</td>
                  <td className="py-4 px-4 text-right">
                    <Button variant="ghost" size="sm" className="text-xs">
                      <Download className="w-4 h-4" />
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
