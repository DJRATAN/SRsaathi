'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { TrendingUp, CreditCard, BookOpen, Zap, ShoppingCart, BarChart3, Wallet, GraduationCap } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function ProductsPage() {
  const categories = [
    {
      id: 1,
      name: 'Bank Accounts',
      description: 'Premium banking solutions with zero balance accounts',
      commission: '₹500 - ₹2,000',
      downloads: '1,240+',
      icon: CreditCard,
      slug: 'bank-accounts',
      color: 'from-blue-200 to-blue-300',
    },
    {
      id: 2,
      name: 'Credit Cards',
      description: 'High-earning credit cards with premium benefits',
      commission: '₹450 - ₹1,600',
      downloads: '856+',
      icon: Wallet,
      slug: 'credit-cards',
      color: 'from-purple-200 to-pink-200',
    },
    {
      id: 3,
      name: 'Financial Courses',
      description: 'Online courses for financial literacy',
      commission: '₹100 - ₹700',
      downloads: '2,145+',
      icon: BookOpen,
      slug: 'courses',
      color: 'from-blue-200 to-blue-300',
    },
    {
      id: 4,
      name: 'UPI & Payment Apps',
      description: 'Digital payment solutions and apps',
      commission: '₹50 - ₹300',
      downloads: '3,420+',
      icon: Zap,
      slug: 'upi-apps',
      color: 'from-green-200 to-green-300',
    },
    {
      id: 5,
      name: 'Insurance Products',
      description: 'Life, health, and vehicle insurance plans',
      commission: '₹300 - ₹2,500',
      downloads: '645+',
      icon: Wallet,
      slug: 'insurance',
      color: 'from-orange-200 to-orange-300',
    },
    {
      id: 6,
      name: 'Financial Software',
      description: 'Tools and software for financial management',
      commission: '₹200 - ₹1,200',
      downloads: '1,876+',
      icon: Zap,
      slug: 'software',
      color: 'from-indigo-200 to-indigo-300',
    },
    {
      id: 7,
      name: 'Demat Accounts',
      description: 'Stock trading and investment platforms',
      commission: '₹600 - ₹3,000',
      downloads: '756+',
      icon: TrendingUp,
      slug: 'demat-accounts',
      color: 'from-teal-200 to-teal-300',
    },
    {
      id: 8,
      name: 'Mutual Funds',
      description: 'Investment schemes for wealth creation',
      commission: '₹180 - ₹1,000',
      downloads: '1,245+',
      icon: BarChart3,
      slug: 'mutual-funds',
      color: 'from-green-200 to-green-300',
    },
    {
      id: 9,
      name: 'Productivity Tools',
      description: 'Collaboration and workspace solutions',
      commission: '₹80 - ₹450',
      downloads: '2,456+',
      icon: Zap,
      slug: 'productivity',
      color: 'from-cyan-200 to-cyan-300',
    },
    {
      id: 10,
      name: 'Trading Platforms',
      description: 'Stocks, crypto, and forex trading',
      commission: '₹280 - ₹2,000',
      downloads: '1,890+',
      icon: TrendingUp,
      slug: 'trading-platforms',
      color: 'from-red-200 to-red-300',
    },
    {
      id: 11,
      name: 'Online Learning',
      description: 'Udemy and skill-based courses',
      commission: '₹100 - ₹600',
      downloads: '3,567+',
      icon: GraduationCap,
      slug: 'udemy',
      color: 'from-purple-200 to-purple-300',
    },
    {
      id: 12,
      name: 'E-Commerce',
      description: 'Amazon, Flipkart, and shopping platforms',
      commission: '₹40 - ₹500',
      downloads: '4,250+',
      icon: ShoppingCart,
      slug: 'ecommerce',
      color: 'from-yellow-200 to-yellow-300',
    },
    {
      id: 13,
      name: 'Certifications',
      description: 'Professional certifications and career courses',
      commission: '₹120 - ₹800',
      downloads: '892+',
      icon: GraduationCap,
      slug: 'certifications',
      color: 'from-pink-200 to-pink-300',
    },
    {
      id: 14,
      name: 'Subscriptions',
      description: 'Premium subscriptions for entertainment & tools',
      commission: '₹80 - ₹700',
      downloads: '2,134+',
      icon: Wallet,
      slug: 'subscriptions',
      color: 'from-slate-200 to-slate-300',
    },
  ]

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-3" style={{ color: '#97144d' }}>All Product Categories</h1>
          <p className="text-gray-600 text-lg">Choose from 14 premium categories and start earning today. Share these products with your network and earn commissions instantly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link key={category.id} href={`/products/${category.slug}`}>
                <Card className="h-full overflow-hidden border border-gray-200 hover:border-[#97144d] transition-all hover:shadow-lg cursor-pointer">
                  <div className={`h-32 bg-gradient-to-br ${category.color}`} />
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-base mb-1" style={{ color: '#97144d' }}>{category.name}</h3>
                        <p className="text-xs text-gray-600">{category.downloads} downloads</p>
                      </div>
                      <Icon className="w-5 h-5" style={{ color: '#97144d' }} />
                    </div>

                    <p className="text-xs text-gray-600 mb-4 line-clamp-2">{category.description}</p>

                    <div className="bg-green-50 p-3 rounded-lg mb-4">
                      <p className="text-xs text-gray-600">Earn Per Signup</p>
                      <p className="font-bold text-green-600 text-sm">{category.commission}</p>
                    </div>

                    <Button className="w-full text-xs h-9 text-white" style={{ backgroundColor: '#97144d' }}>
                      View Products
                    </Button>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>

        <div className="mt-16 p-8 rounded-lg" style={{ backgroundColor: '#f8f0f7' }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#97144d' }}>How to Maximize Your Earnings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2" style={{ color: '#97144d' }}>1. Choose Products</h3>
              <p className="text-gray-600 text-sm">Select from 14 categories with high-value commissions ranging from ₹40 to ₹3,000 per signup.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2" style={{ color: '#97144d' }}>2. Share Links</h3>
              <p className="text-gray-600 text-sm">Share your personalized referral links via WhatsApp, email, social media, or direct messaging.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2" style={{ color: '#97144d' }}>3. Earn Commissions</h3>
              <p className="text-gray-600 text-sm">Get instant commissions when someone signs up or purchases through your link.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
