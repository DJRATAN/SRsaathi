"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Share2, Wallet, Settings, LogOut, Home, UserCircle } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Referral Program", href: "/dashboard/referral", icon: Share2 },
    { name: "Earnings", href: "/dashboard/earnings", icon: Wallet },
    { name: "Reports", href: "/dashboard/reports", icon: BarChart3 },
    { name: "Profile", href: "/dashboard/profile", icon: UserCircle },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ]

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border min-h-screen">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">SR</span>
          </div>
          <span className="font-bold text-primary">SRsaathi</span>
        </Link>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-sidebar-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Logout */}
      <div className="absolute bottom-6 left-6 right-6">
        <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sidebar-foreground hover:bg-muted hover:text-primary transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  )
}
