"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2 } from "lucide-react"

export default function BankDetailsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold" style={{ color: "#97144d" }}>
          Bank Details
        </h1>
        <p className="text-gray-600 mt-2">Manage your withdrawal bank account</p>
      </div>

      <Card className="p-8 max-w-2xl">
        <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
          <p className="text-sm text-green-700">Bank account verified</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold" style={{ color: "#97144d" }}>
              Account Holder Name
            </label>
            <Input value="Rajesh Kumar Singh" readOnly className="mt-2" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold" style={{ color: "#97144d" }}>
                Bank Name
              </label>
              <Input value="State Bank of India (SBI)" readOnly className="mt-2" />
            </div>
            <div>
              <label className="block text-sm font-semibold" style={{ color: "#97144d" }}>
                Account Type
              </label>
              <Input value="Savings" readOnly className="mt-2" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold" style={{ color: "#97144d" }}>
              Account Number
            </label>
            <Input value="******* 4567" readOnly className="mt-2" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold" style={{ color: "#97144d" }}>
                IFSC Code
              </label>
              <Input value="SBIN0001234" readOnly className="mt-2" />
            </div>
            <div>
              <label className="block text-sm font-semibold" style={{ color: "#97144d" }}>
                MICR Code
              </label>
              <Input value="560002001" readOnly className="mt-2" />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button style={{ backgroundColor: "#97144d", color: "white" }}>Edit Details</Button>
            <Button variant="outline">Add Another Account</Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
