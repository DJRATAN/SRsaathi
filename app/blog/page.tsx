'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowRight, Search } from 'lucide-react'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Loading from './loading'

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const searchParams = useSearchParams()

  const blogs = [
    {
      id: 1,
      title: '5 Proven Strategies to Earn ₹50,000+ Monthly Through Referrals',
      excerpt: 'Learn the secrets of top referral partners and how they consistently earn high commissions by sharing the right products.',
      category: 'Earning Tips',
      author: 'Rajesh Kumar',
      date: 'Jan 20, 2025',
      readTime: '8 min',
      image: '/blog-referral-strategies.jpg',
      featured: true,
    },
    {
      id: 2,
      title: 'Complete Guide to Bank Account Referrals: Maximizing Your Commission',
      excerpt: 'Understand the bank account market, how to identify potential customers, and strategies to maximize your referral commissions.',
      category: 'Banking',
      author: 'Priya Singh',
      date: 'Jan 18, 2025',
      readTime: '10 min',
      image: '/blog-banking.jpg',
      featured: true,
    },
    {
      id: 3,
      title: 'Credit Card Referrals: The Ultimate Earning Opportunity',
      excerpt: 'Discover why credit card referrals offer the highest commissions and how to effectively market them to your network.',
      category: 'Credit Cards',
      author: 'Amit Patel',
      date: 'Jan 16, 2025',
      readTime: '7 min',
      image: '/blog-credit-cards.jpg',
      featured: true,
    },
    {
      id: 4,
      title: 'How to Build Your First Income Stream Through Financial Products',
      excerpt: 'A beginner\'s guide to understanding different financial products and how to start earning through referrals with zero experience.',
      category: 'Getting Started',
      author: 'Neha Gupta',
      date: 'Jan 14, 2025',
      readTime: '6 min',
      image: '/blog-beginner.jpg',
      featured: false,
    },
    {
      id: 5,
      title: 'UPI Apps & Digital Payments: High Volume, Low Commission Opportunity',
      excerpt: 'Master the art of promoting UPI apps through social media and networks, converting high volume into consistent income.',
      category: 'Technology',
      author: 'Vikram Singh',
      date: 'Jan 12, 2025',
      readTime: '7 min',
      image: '/blog-upi.jpg',
      featured: false,
    },
    {
      id: 6,
      title: 'Insurance Referrals: Why They Offer the Best Long-Term Income',
      excerpt: 'Learn how insurance referrals can provide recurring income and why it\'s one of the most profitable categories.',
      category: 'Insurance',
      author: 'Shreya Desai',
      date: 'Jan 10, 2025',
      readTime: '9 min',
      image: '/blog-insurance.jpg',
      featured: false,
    },
    {
      id: 7,
      title: 'Social Media Marketing for Referrals: Instagram & LinkedIn Strategies',
      excerpt: 'Explore effective social media strategies to reach your audience and increase referral conversions.',
      category: 'Marketing',
      author: 'Rohan Verma',
      date: 'Jan 8, 2025',
      readTime: '8 min',
      image: '/blog-social-media.jpg',
      featured: false,
    },
    {
      id: 8,
      title: 'Tax Implications of Referral Income: What You Need to Know',
      excerpt: 'Understand the tax implications of referral income and how to properly document your earnings for compliance.',
      category: 'Finance',
      author: 'Arun Krishnan',
      date: 'Jan 6, 2025',
      readTime: '10 min',
      image: '/blog-tax.jpg',
      featured: false,
    },
    {
      id: 9,
      title: 'Course Referrals: Passive Income from Educational Products',
      excerpt: 'Transform your knowledge into income by effectively promoting online courses and educational platforms.',
      category: 'Education',
      author: 'Divya Malhotra',
      date: 'Jan 4, 2025',
      readTime: '6 min',
      image: '/blog-courses.jpg',
      featured: false,
    },
  ]

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const featuredBlogs = filteredBlogs.filter(b => b.featured)
  const otherBlogs = filteredBlogs.filter(b => !b.featured)

  return (
    <Suspense fallback={<Loading />}>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 py-12">
          <div className="max-w-6xl mx-auto px-8">
            <h1 className="text-4xl font-bold mb-4" style={{ color: '#97144d' }}>SRsaathi Blog</h1>
            <p className="text-gray-600 text-lg mb-8">Expert tips, strategies, and insights to maximize your referral earnings</p>
            
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#97144d]"
              />
            </div>
          </div>
        </div>

        {/* Featured Articles */}
        {featuredBlogs.length > 0 && (
          <div className="max-w-6xl mx-auto px-8 py-12">
            <h2 className="text-2xl font-bold mb-8" style={{ color: '#97144d' }}>Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredBlogs.map((blog) => (
                <Card key={blog.id} className="overflow-hidden border border-gray-200 hover:border-[#97144d] hover:shadow-lg transition-all cursor-pointer">
                  <div className="h-40 bg-gradient-to-br from-blue-200 to-blue-300" />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-100 rounded-full text-xs font-semibold" style={{ color: '#97144d' }}>
                        {blog.category}
                      </span>
                      <span className="text-xs text-gray-500">{blog.readTime} read</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 line-clamp-2" style={{ color: '#97144d' }}>{blog.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{blog.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                      <div>
                        <p>{blog.author}</p>
                        <p>{blog.date}</p>
                      </div>
                      <ArrowRight className="w-4 h-4" style={{ color: '#97144d' }} />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Articles */}
        <div className="max-w-6xl mx-auto px-8 py-12">
          <h2 className="text-2xl font-bold mb-8" style={{ color: '#97144d' }}>
            {featuredBlogs.length > 0 ? 'Latest Articles' : 'All Articles'}
          </h2>
          <div className="space-y-6">
            {otherBlogs.map((blog) => (
              <Card key={blog.id} className="p-6 border border-gray-200 hover:border-[#97144d] hover:shadow-md transition-all cursor-pointer">
                <div className="flex gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold" style={{ color: '#97144d' }}>
                        {blog.category}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {blog.date}
                      </span>
                      <span className="text-xs text-gray-500">{blog.readTime} read</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2" style={{ color: '#97144d' }}>{blog.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{blog.excerpt}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{blog.author}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredBlogs.length === 0 && (
          <div className="max-w-6xl mx-auto px-8 py-12 text-center">
            <p className="text-gray-600 text-lg">No articles found matching your search.</p>
          </div>
        )}
      </div>
    </Suspense>
  )
}
