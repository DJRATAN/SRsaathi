"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="SRsaathi" className="h-16 w-auto" />
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Product", href: "/products" },
              { label: "Dashboard", href: "/dashboard" },
              { label: "Learn", href: "/learn" },
              { label: "About us", href: "/" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[#97144d] font-medium hover:text-[#7a0f3d] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="hidden sm:inline-flex bg-transparent border-[#97144d] text-[#97144d] hover:bg-red-50"
              >
                Dashboard
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-[#97144d] hover:bg-[#7a0f3d]">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
