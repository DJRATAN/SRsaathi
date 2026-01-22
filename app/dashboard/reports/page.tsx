"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Download, TrendingUp, Eye, CheckCircle2 } from "lucide-react"

export default function ReportsPage() {
  const reportStats = [
    {
      label: "Total Impressions",
      value: "3,450",
      icon: Eye,
      color: "text-blue-500",
    },
    {
      label: "Link Clicks",
      value: "890",
      icon: TrendingUp,
      color: "text-purple-500",
    },
    {
      label: "Conversions",
      value: "24",
      icon: CheckCircle2,
      color: "text-green-500",
    },
    {
      label: "Conversion Rate",
      value: "2.7%",
      icon: BarChart3,
      color: "text-pink-500",
    },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Reports</h1>
        <p className="text-muted-foreground mt-2">Detailed analytics of your referral performance</p>
      </div>

      {/* Report Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {reportStats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 bg-muted rounded-lg ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <p className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            </Card>
          )
        })}
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-bold text-foreground mb-4">Performance by Category</h2>
          <div className="space-y-4">
            {["Courses", "Banking", "Insurance", "UPI Apps"].map((category) => (
              <div key={category} className="flex items-center justify-between">
                <span className="text-foreground">{category}</span>
                <div className="flex items-center gap-3">
                  <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-3/5 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-sm text-muted-foreground">24%</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-bold text-foreground mb-4">Export Reports</h2>
          <div className="space-y-3">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-secondary gap-2 justify-start">
              <Download className="w-4 h-4" />
              Download Monthly Report
            </Button>
            <Button
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2 justify-start bg-transparent"
            >
              <Download className="w-4 h-4" />
              Download Yearly Report
            </Button>
            <Button
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2 justify-start bg-transparent"
            >
              <Download className="w-4 h-4" />
              Export All Data
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
