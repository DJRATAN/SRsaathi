"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Search,
  Globe,
  ChevronDown,
  LayoutGrid,
  Menu,
  X,
  Share2,
  CircleDashed,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { categories } from "@/lib/categories"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <div className="w-full font-sans">
      {/* ================= TOP BAR ================= */}
      <div className="w-full bg-white border-b border-gray-100 h-[50px] flex items-center justify-between px-6 lg:px-12 relative z-20">
        {/* Left */}
        <Link href="/">
          <button className="flex items-center gap-2 px-3 py-1.5 border border-[#043270] rounded text-[#043270] text-sm font-bold hover:bg-[#043270] hover:text-white transition uppercase">
            <CircleDashed size={16} />
            SRsaathi
          </button>
        </Link>

        {/* Right */}
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-1 font-semibold">
            <span>€ 3.598</span>
            <span className="text-[#97144d]">+0.39%</span>
          </div>

          <div className="h-4 w-px bg-gray-300" />

          <button className="flex items-center gap-2 font-semibold hover:text-[#043270]">
            <Search size={18} className="text-[#043270]" />
            Search
          </button>

          <div className="h-4 w-px bg-gray-300" />

          <button className="flex items-center gap-1 font-bold hover:text-[#043270]">
            <Globe size={18} className="text-[#043270]" />
            EN
            <ChevronDown size={14} />
          </button>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div className="relative w-full h-[60px] bg-[#97144d] flex items-center justify-between px-6 lg:px-12 text-white z-10">

        {/* -------- LEFT MENU (DESKTOP) -------- */}
        <nav className="hidden lg:flex items-center gap-8 pl-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="relative group"
            >
              {/* Main Menu */}
              <button className="text-sm font-extrabold tracking-wide flex items-center gap-1 hover:text-gray-300">
                {cat.name}
                <ChevronDown size={14} />
              </button>

              {/* Invisible hover bridge */}
              <div className="absolute left-0 top-full h-3 w-full"></div>

              {/* Dropdown */}
              <div
                className="
          absolute left-0 top-8
          w-52 bg-white text-[#97144d]
          rounded-lg shadow-lg
          opacity-0 invisible
          group-hover:opacity-100 group-hover:visible
          transition-opacity duration-150
          z-50
        "
              >
                {cat.subcategories.map((sub) => (
                  <Link
                    key={sub.id}
                    href={sub.path}
                    className="block px-4 py-2 text-sm rounded-lg hover:bg-gray-100"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[280px] h-full pointer-events-none flex justify-center">
          {/* The Custom Curve SVG */}
          <svg
            width="280"
            height="60"
            viewBox="0 0 280 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0"
          >
            <path
              d="M0 0H280V0C280 0 270 0.5 260 10C250 20 240 55 210 55H70C40 55 30 20 20 10C10 0.5 0 0 0 0V0Z"
              fill="white"
            />
          </svg>

          {/* The Logo Text/Icon */}
          <div className="relative z-20 mb-1 flex items-center justify-center gap-2">
            <span className="text-[#043270] font-bold text-3xl tracking-tight">

              <Link href="/">
                <Image src={'/full_logo.svg'} alt="SRsaathi Logo" height={80} width={80} />
              </Link>
            </span>
          </div>
        </div>

        {/* -------- RIGHT ACTIONS -------- */}
        <div className="flex items-center gap-2 pr-4">
 
        <Link href="/dashboard">
          <button className="flex items-center gap-2 px-3 py-1.5 border bg-white border-[#043270] rounded text-[#043270] text-sm font-bold   hover:text-[#97144d] hover:border-[#97144d] transition uppercase">
            <LayoutGrid size={16} />
            Dashboard
          </button>
        </Link>
          <Link href="/refer-and-earn" className="hidden sm:block">
            <Button
              size="sm"
              className="text-white hover:bg-[#043270]"
              style={{ backgroundColor: "#97144d" }}
            >
              <Share2 className="w-4 h-4 mr-1" />
              Refer & Earn
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-2">
          {categories.map((cat) => (
            <div key={cat.id}>
              <button
                className="w-full flex justify-between items-center text-[#97144d] font-semibold py-2"
                onClick={() =>
                  setOpenDropdown(openDropdown === cat.id ? null : cat.id)
                }
              >
                {cat.name}
                <ChevronDown
                  className={`transition ${openDropdown === cat.id ? "rotate-180" : ""
                    }`}
                />
              </button>

              {openDropdown === cat.id && (
                <div className="pl-4">
                  {cat.subcategories.map((sub) => (
                    <Link
                      key={sub.id}
                      href={sub.path}
                      className="block py-2 text-sm text-[#97144d]"
                      onClick={() => setIsOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}