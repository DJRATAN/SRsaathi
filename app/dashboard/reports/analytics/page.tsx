"use client"

import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

export default function AnalyticsPage() {
  const conversionData = [
    { week: "Week 1", clicks: 150, conversions: 12, rate: "8%" },
    { week: "Week 2", clicks: 200, conversions: 18, rate: "9%" },
    { week: "Week 3", clicks: 280, conversions: 28, rate: "10%" },
    { week: "Week 4", clicks: 320, conversions: 35, rate: "11%" },
  ]

  const categoryData = [
    { name: "Bank Accounts", value: 40, color: "#97144d" },
    { name: "Credit Cards", value: 25, color: "#043270" },
    { name: "Courses", value: 20, color: "#dc2626" },
    { name: "Insurance", value: 15, color: "#ea580c" },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold" style={{ color: "#97144d" }}>
          Analytics
        </h1>
        <p className="text-gray-600 mt-2">Detailed performance metrics and insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="p-6">
          <p className="text-sm text-gray-600">Conversion Rate</p>
          <p className="text-3xl font-bold mt-2" style={{ color: "#97144d" }}>
            9.8%
          </p>
          <p className="text-xs text-green-600 mt-2">↑ 2.3% from last month</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-gray-600">Avg. Click Value</p>
          <p className="text-3xl font-bold mt-2" style={{ color: "#97144d" }}>
            ₹165
          </p>
          <p className="text-xs text-green-600 mt-2">↑ ₹25 from last month</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-gray-600">Top Category</p>
          <p className="text-3xl font-bold mt-2" style={{ color: "#97144d" }}>
            Bank Accounts
          </p>
          <p className="text-xs text-gray-600 mt-2">40% of total referrals</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-bold text-lg mb-4" style={{ color: "#97144d" }}>
            Weekly Conversions
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={conversionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="conversions" fill="#97144d" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="font-bold text-lg mb-4" style={{ color: "#97144d" }}>
            Referrals by Category
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  )
}
