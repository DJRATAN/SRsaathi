"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Bell, Lock, Eye, Database } from "lucide-react"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: true,
    marketingEmails: false,
  })

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-2">Manage your account preferences and security</p>
      </div>

      <div className="space-y-6 max-w-2xl">
        {/* Notifications */}
        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Bell className="w-5 h-5 text-primary" />
            Notifications
          </h2>

          <div className="space-y-4">
            {[
              {
                key: "emailNotifications",
                label: "Email Notifications",
                desc: "Receive email updates on referral status",
              },
              {
                key: "pushNotifications",
                label: "Push Notifications",
                desc: "Receive browser notifications",
              },
              {
                key: "smsNotifications",
                label: "SMS Notifications",
                desc: "Receive SMS alerts for important updates",
              },
              {
                key: "marketingEmails",
                label: "Marketing Emails",
                desc: "Receive promotional emails and offers",
              },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                <Switch
                  checked={settings[item.key as keyof typeof settings]}
                  onCheckedChange={(checked) => setSettings({ ...settings, [item.key]: checked })}
                />
              </div>
            ))}
          </div>
        </Card>

        {/* Security */}
        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Lock className="w-5 h-5 text-primary" />
            Security
          </h2>

          <div className="space-y-3">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-secondary justify-start">
              <Lock className="w-4 h-4 mr-2" />
              Change Password
            </Button>
            <Button
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground justify-start bg-transparent"
            >
              <Eye className="w-4 h-4 mr-2" />
              Manage Two-Factor Authentication
            </Button>
          </div>
        </Card>

        {/* Privacy */}
        <Card className="p-6">
          <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Database className="w-5 h-5 text-primary" />
            Privacy & Data
          </h2>

          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground justify-start bg-transparent"
            >
              <Database className="w-4 h-4 mr-2" />
              Download My Data
            </Button>
            <Button
              variant="outline"
              className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white justify-start bg-transparent"
            >
              Delete Account
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
