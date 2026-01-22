"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, Mail, MessageSquare } from "lucide-react"

export default function NotificationPreferencesPage() {
  const notifications = [
    {
      id: 1,
      title: "New Referral",
      description: "Get notified when someone signs up via your link",
      email: true,
      sms: true,
      push: true,
    },
    {
      id: 2,
      title: "Referral Approved",
      description: "Receive alert when referral is approved",
      email: true,
      sms: false,
      push: true,
    },
    { id: 3, title: "Earnings Update", description: "Weekly earnings summary", email: true, sms: false, push: false },
    {
      id: 4,
      title: "Withdrawal Successful",
      description: "Confirmation of payout",
      email: true,
      sms: true,
      push: true,
    },
    {
      id: 5,
      title: "New Products",
      description: "Updates on new products to promote",
      email: false,
      sms: false,
      push: true,
    },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold" style={{ color: "#97144d" }}>
          Notification Preferences
        </h1>
        <p className="text-gray-600 mt-2">Manage how you receive notifications</p>
      </div>

      <div className="space-y-4">
        {notifications.map((notif) => (
          <Card key={notif.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: "#97144d20" }}>
                  <Bell className="w-5 h-5" style={{ color: "#97144d" }} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{notif.title}</h3>
                  <p className="text-sm text-gray-600">{notif.description}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 ml-16">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" defaultChecked={notif.email} className="w-4 h-4" />
                <Mail className="w-4 h-4 text-gray-600" />
                Email
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" defaultChecked={notif.sms} className="w-4 h-4" />
                <MessageSquare className="w-4 h-4 text-gray-600" />
                SMS
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" defaultChecked={notif.push} className="w-4 h-4" />
                <Bell className="w-4 h-4 text-gray-600" />
                Push
              </label>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex gap-3">
        <Button style={{ backgroundColor: "#97144d", color: "white" }}>Save Preferences</Button>
        <Button variant="outline">Reset to Default</Button>
      </div>
    </div>
  )
}
