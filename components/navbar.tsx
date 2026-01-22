"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Share2, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { categories } from "@/lib/categories"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image 
              src="/full_logo.svg" 
              alt="SRsaathi Logo" 
              width={150} 
              height={40}
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {categories.map((cat) => (
              <div key={cat.id} className="relative group">
                <button className="px-4 py-2 text-sm font-medium hover:text-[#97144d] transition-colors flex items-center gap-1" style={{ color: '#97144d' }}>
                  {cat.name}
                  <ChevronDown className="w-4 h-4 opacity-50" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    {cat.subcategories.map((subcat) => (
                      <Link
                        key={subcat.id}
                        href={subcat.path}
                        className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                        style={{ color: '#97144d' }}
                      >
                        {subcat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Link href="/dashboard">
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:flex gap-2 border-2 bg-white hover:bg-[#97144d] hover:text-white"
                style={{ borderColor: '#97144d', color: '#97144d' }}
              >
                Dashboard
              </Button>
            </Link>

            <Link href="/refer-and-earn">
              <Button size="sm" className="hidden sm:flex gap-2 text-white hover:bg-[#043270]" style={{ backgroundColor: '#97144d' }}>
                <Share2 className="w-4 h-4" />
                Refer & Earn
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-2">
            {categories.map((cat) => (
              <div key={cat.id}>
                <button
                  className="w-full text-left px-3 py-2 text-sm font-medium hover:text-[#97144d] flex items-center justify-between"
                  style={{ color: '#97144d' }}
                  onClick={() => setOpenDropdown(openDropdown === cat.id ? null : cat.id)}
                >
                  {cat.name}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openDropdown === cat.id ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Mobile Submenu */}
                {openDropdown === cat.id && (
                  <div className="pl-4 space-y-1">
                    {cat.subcategories.map((subcat) => (
                      <Link
                        key={subcat.id}
                        href={subcat.path}
                        className="block px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors"
                        style={{ color: '#97144d' }}
                        onClick={() => setIsOpen(false)}
                      >
                        {subcat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 border-t border-gray-200 space-y-2">
              <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full border-2 bg-white hover:bg-[#97144d] hover:text-white"
                  style={{ borderColor: '#97144d', color: '#97144d' }}
                >
                  Dashboard
                </Button>
              </Link>
              <Link href="/refer-and-earn" onClick={() => setIsOpen(false)}>
                <Button className="w-full text-white hover:bg-[#043270]" style={{ backgroundColor: '#97144d' }}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Refer & Earn
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
