"use client"

import { Card } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"

export default function TrackingPage() {
  const monthlyData = [
    { month: "Jan", referrals: 5, earnings: 2500 },
    { month: "Feb", referrals: 8, earnings: 4200 },
    { month: "Mar", referrals: 10, earnings: 5450 },
    { month: "Apr", referrals: 12, earnings: 6800 },
    { month: "May", referrals: 15, earnings: 8200 },
  ]

  const stats = [
    { label: "Total Referrals", value: "50", color: "#97144d" },
    { label: "Approved", value: "45", color: "green" },
    { label: "Pending", value: "5", color: "orange" },
    { label: "Active Users", value: "38", color: "#97144d" },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold" style={{ color: "#97144d" }}>
          Referral Tracking
        </h1>
        <p className="text-gray-600 mt-2">Monitor your referral performance and analytics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, idx) => (
          <Card key={idx} className="p-6">
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-3xl font-bold mt-2" style={{ color: stat.color }}>
              {stat.value}
            </p>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-4" style={{ color: "#97144d" }}>
            Monthly Referrals
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="referrals" stroke="#97144d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-4" style={{ color: "#97144d" }}>
            Monthly Earnings
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="earnings" fill="#97144d" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  )
}
