"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Wallet, Check } from "lucide-react"

export default function PaymentMethodPage() {
  const paymentMethods = [
    { id: 1, type: "Bank Transfer", details: "SBI Account ending in 4567", default: true, status: "Verified" },
    { id: 2, type: "UPI", details: "rajesh.singh@okaxis", default: false, status: "Verified" },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold" style={{ color: "#97144d" }}>
          Payment Methods
        </h1>
        <p className="text-gray-600 mt-2">Manage your withdrawal payment methods</p>
      </div>

      <div className="space-y-4 mb-8">
        {paymentMethods.map((method) => (
          <Card
            key={method.id}
            className="p-6 flex items-center justify-between border-l-4"
            style={{ borderLeftColor: "#97144d" }}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg" style={{ backgroundColor: "#97144d20" }}>
                {method.type === "Bank Transfer" ? (
                  <Wallet className="w-6 h-6" style={{ color: "#97144d" }} />
                ) : (
                  <CreditCard className="w-6 h-6" style={{ color: "#97144d" }} />
                )}
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{method.type}</h3>
                <p className="text-sm text-gray-600">{method.details}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {method.default && (
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                  Default
                </span>
              )}
              <span
                className={`flex items-center gap-1 text-sm font-semibold ${method.status === "Verified" ? "text-green-600" : "text-orange-600"}`}
              >
                <Check className="w-4 h-4" />
                {method.status}
              </span>
            </div>
          </Card>
        ))}
      </div>

      <Button style={{ backgroundColor: "#97144d", color: "white" }}>+ Add Payment Method</Button>
    </div>
  )
}
