"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, Smartphone } from "lucide-react"

export default function SecurityPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold" style={{ color: "#97144d" }}>
          Security Settings
        </h1>
        <p className="text-gray-600 mt-2">Manage your account security and authentication</p>
      </div>

      <div className="space-y-6 max-w-2xl">
        {/* Password */}
        <Card className="p-6 border-l-4" style={{ borderLeftColor: "#97144d" }}>
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <Lock className="w-6 h-6 mt-1" style={{ color: "#97144d" }} />
              <div>
                <h3 className="font-bold text-gray-900">Password</h3>
                <p className="text-sm text-gray-600 mt-1">Last changed 3 months ago</p>
              </div>
            </div>
            <Button variant="outline">Change Password</Button>
          </div>
        </Card>

        {/* Two-Factor Authentication */}
        <Card className="p-6 border-l-4" style={{ borderLeftColor: "#97144d" }}>
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <Smartphone className="w-6 h-6 mt-1" style={{ color: "#97144d" }} />
              <div>
                <h3 className="font-bold text-gray-900">Two-Factor Authentication (2FA)</h3>
                <p className="text-sm text-gray-600 mt-1">Enabled • Phone: +91 98765 43210</p>
              </div>
            </div>
            <Button variant="outline">Manage</Button>
          </div>
        </Card>

        {/* Active Sessions */}
        <Card className="p-6">
          <h3 className="font-bold text-gray-900 mb-4">Active Sessions</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <div>
                <p className="text-sm font-semibold text-gray-900">Chrome • Windows</p>
                <p className="text-xs text-gray-600">Last active: Today at 10:30 AM</p>
              </div>
              <span className="text-xs font-semibold text-green-600">Current</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <div>
                <p className="text-sm font-semibold text-gray-900">Safari • iPhone</p>
                <p className="text-xs text-gray-600">Last active: Yesterday at 5:20 PM</p>
              </div>
              <Button variant="ghost" size="sm" className="text-xs text-red-600">
                Sign Out
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
