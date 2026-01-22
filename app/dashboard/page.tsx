"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, IndianRupee, Share2, ArrowUpRight, Download, CreditCard, Zap, BookOpen, ShoppingCart } from "lucide-react"
import { categories } from "@/lib/categories"

export default function DashboardPage() {
  const stats = [
    {
      label: "Total Referrals",
      value: "24",
      change: "+4 this month",
      icon: Users,
      color: "text-blue-500",
    },
    {
      label: "Total Earnings",
      value: "₹12,450",
      change: "+₹2,100 this month",
      icon: IndianRupee,
      color: "text-green-500",
    },
    {
      label: "Conversion Rate",
      value: "32%",
      change: "+5% from last month",
      icon: TrendingUp,
      color: "text-purple-500",
    },
    {
      label: "Active Referrals",
      value: "18",
      change: "8 pending approval",
      icon: Share2,
      color: "text-pink-500",
    },
  ]

  const categoryBenefits = [
    {
      category: "Bank Accounts",
      commission: "₹500 - ₹2,000",
      perSignup: "₹500",
      downloads: 1240,
      icon: CreditCard,
      benefit: "Per account opened",
    },
    {
      category: "Credit Cards",
      commission: "₹300 - ₹1,500",
      perSignup: "₹300",
      downloads: 856,
      icon: CreditCard,
      benefit: "Per card approved",
    },
    {
      category: "Courses",
      commission: "₹100 - ₹500",
      perSignup: "₹100",
      downloads: 2145,
      icon: BookOpen,
      benefit: "Per course purchased",
    },
    {
      category: "UPI Apps",
      commission: "₹50 - ₹200",
      perSignup: "₹50",
      downloads: 3420,
      icon: Zap,
      benefit: "Per app download",
    },
    {
      category: "Insurance",
      commission: "₹400 - ₹2,500",
      perSignup: "₹400",
      downloads: 645,
      icon: CreditCard,
      benefit: "Per policy purchased",
    },
    {
      category: "Software Tools",
      commission: "₹200 - ₹1,000",
      perSignup: "₹200",
      downloads: 1876,
      icon: Zap,
      benefit: "Per subscription",
    },
    {
      category: "Demat Accounts",
      commission: "₹600 - ₹3,000",
      perSignup: "₹600",
      downloads: 756,
      icon: TrendingUp,
      benefit: "Per account opened",
    },
    {
      category: "Shopping & Lifestyle",
      commission: "₹50 - ₹300",
      perSignup: "₹50",
      downloads: 4250,
      icon: ShoppingCart,
      benefit: "Per purchase",
    },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold" style={{ color: "#97144d" }}>Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's your referral performance overview and earning potential.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label} className="p-6 border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 bg-gray-100 rounded-lg ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="text-sm font-medium text-gray-500 mb-1">{stat.label}</h3>
              <p className="text-2xl font-bold mb-2" style={{ color: "#97144d" }}>{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.change}</p>
            </Card>
          )
        })}
      </div>

      {/* Category Benefits Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "#97144d" }}>Category Benefits & Earning Potential</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categoryBenefits.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.category} className="p-4 border border-gray-200 hover:border-[#97144d] transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-5 h-5" style={{ color: "#97144d" }} />
                  <h3 className="font-semibold" style={{ color: "#97144d" }}>{item.category}</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-gray-500 text-xs">Per Signup</p>
                    <p className="font-bold text-green-600">{item.perSignup}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Range</p>
                    <p className="font-semibold text-gray-700">{item.commission}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Downloads</p>
                    <p className="font-medium text-gray-700">{item.downloads.toLocaleString()}+</p>
                  </div>
                  <p className="text-gray-600 italic text-xs pt-2">{item.benefit}</p>
                </div>
                <Button className="w-full mt-3 text-xs" style={{ backgroundColor: "#97144d" }}>
                  Share Link
                </Button>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 border border-gray-200 lg:col-span-2">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#97144d" }}>Recent Referrals</h2>
          <div className="space-y-4">
            {[
              { user: "Rajesh Kumar", category: "Bank Account", status: "Active", earnings: "₹500" },
              { user: "Priya Singh", category: "Credit Card", status: "Active", earnings: "₹300" },
              { user: "Amit Patel", category: "Insurance", status: "Pending", earnings: "₹400" },
            ].map((item) => (
              <div key={item.user} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div>
                  <p className="font-medium">{item.user}</p>
                  <p className="text-sm text-gray-500">{item.category} - 2 days ago</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">{item.earnings}</p>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.status === "Active" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 border border-gray-200">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#97144d" }}>Quick Actions</h2>
          <div className="space-y-3">
            <Button className="w-full gap-2 text-white" style={{ backgroundColor: "#97144d" }}>
              <Share2 className="w-4 h-4" />
              Share Referral Link
            </Button>
            <Button variant="outline" className="w-full border-2 bg-transparent" style={{ borderColor: "#97144d", color: "#97144d" }}>
              View All Referrals
            </Button>
            <Button variant="outline" className="w-full border-2 bg-transparent" style={{ borderColor: "#97144d", color: "#97144d" }}>
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
