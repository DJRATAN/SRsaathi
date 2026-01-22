'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, Share2, Download } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function CoursesPage() {
  const products = [
    { id: 1, name: 'Stock Market Masterclass', provider: 'Udemy', commission: '₹100 - ₹500', description: 'Learn trading strategies from experts', rating: 4.8, reviews: 3200 },
    { id: 2, name: 'Financial Planning Course', provider: 'Elite Funds', commission: '₹150 - ₹600', description: 'Complete personal finance guide', rating: 4.9, reviews: 2800 },
    { id: 3, name: 'Crypto & Blockchain 101', provider: 'Coursera', commission: '₹120 - ₹550', description: 'Beginner to advanced blockchain', rating: 4.7, reviews: 2400 },
    { id: 4, name: 'Mutual Funds Investing', provider: 'Learning Academy', commission: '₹100 - ₹480', description: 'Build wealth through funds', rating: 4.6, reviews: 1900 },
    { id: 5, name: 'Real Estate Investment', provider: 'Prime Learning', commission: '₹180 - ₹700', description: 'Property investment fundamentals', rating: 4.8, reviews: 1600 },
    { id: 6, name: 'Tax Planning Essentials', provider: 'Finance Academy', commission: '₹140 - ₹580', description: 'Optimize your tax liability', rating: 4.7, reviews: 1450 },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#97144d' }}>Financial Courses</h1>
        <p className="text-gray-600">Earn ₹100 - ₹700 per course purchase. Share knowledge-based earning opportunities.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden border border-gray-200 hover:border-[#97144d] transition-all hover:shadow-lg">
            <div className="h-40 bg-gradient-to-br from-blue-200 to-blue-300" />
            <div className="p-6">
              <h3 className="font-bold text-lg mb-1" style={{ color: '#97144d' }}>{product.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{product.provider}</p>
              <p className="text-sm text-gray-600 mb-4">{product.description}</p>
              
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
              </div>

              <div className="bg-green-50 p-3 rounded-lg mb-4">
                <p className="text-xs text-gray-600">Earn per purchase</p>
                <p className="font-bold text-green-600 text-lg">{product.commission}</p>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1 text-white" style={{ backgroundColor: '#97144d' }}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent" style={{ borderColor: '#97144d', color: '#97144d' }}>
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
