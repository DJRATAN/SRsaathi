"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/people/SRsaathi/61583142583576/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/srsaathi/", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/SRsaathi", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/srsaathi/", label: "LinkedIn" },
    { icon: MessageCircle, href: "https://wa.me/917869021171", label: "WhatsApp" },
  ]

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/full_logo.svg"
              alt="SRsaathi Logo"
              width={150}
              height={100}
              className="h-30 w-auto"
            />
            <p className="text-sm text-gray-600">Your trusted financial companion for all money matters</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className="
          group
          p-2 rounded-full
          border border-[#97144d]
          bg-transparent
          transition-all duration-200
          hover:bg-[#043270]
          hover:border-[#043270]
        "
                  >
                    <Icon
                      className="
            w-5 h-5
            text-[#97144d]
            transition-colors duration-200
            group-hover:text-white
          "
                    />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: '#97144d' }}>Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses" className="text-gray-600 hover:text-[#97144d] transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/software" className="text-gray-600 hover:text-[#97144d] transition-colors">
                  Software
                </Link>
              </li>
              <li>
                <Link href="/upi-apps" className="text-gray-600 hover:text-[#97144d] transition-colors">
                  UPI Apps
                </Link>
              </li>
              <li>
                <Link href="/bank-accounts" className="text-gray-600 hover:text-[#97144d] transition-colors">
                  Bank Accounts
                </Link>
              </li>
              <li>
                <Link href="/credit-cards" className="text-gray-600 hover:text-[#97144d] transition-colors">
                  Credit Cards
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-[#97144d] transition-colors">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: '#97144d' }}>Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#97144d] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-[#97144d] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/refer-and-earn" className="text-gray-600 hover:text-[#97144d] transition-colors">
                  Refer & Earn
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#97144d] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: '#97144d' }}>Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                hr@srsaathi.com
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                +91 78690-21171
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <MapPin className="w-4 h-4 mt-1" />
                Morena, MP India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 text-center md:text-left mb-4 md:mb-0">
              © 2026 SRsaathi. All rights reserved. Helping you manage finances better.
            </p>
            <div className="flex gap-6 text-sm text-gray-600">
              <Link href="/privacy" className="hover:text-[#97144d] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#97144d] transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="hover:text-[#97144d] transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
