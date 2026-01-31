'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, Share2, Download } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function SoftwarePage() {
  const products = [
    { id: 1, name: 'Excel Master Pro', provider: 'Finance Tools', commission: '₹200 - ₹800', description: 'Advanced Excel for finance', rating: 4.8, reviews: 1800 },
    { id: 2, name: 'TaxAssist Software', provider: 'TaxAssist', commission: '₹300 - ₹1,200', description: 'Automated tax filing', rating: 4.7, reviews: 1450 },
    { id: 3, name: 'Portfolio Manager Pro', provider: 'Invest Plus', commission: '₹250 - ₹950', description: 'Track & manage investments', rating: 4.8, reviews: 1200 },
    { id: 4, name: 'Budget Planner', provider: 'Smart Finance', commission: '₹150 - ₹600', description: 'Personal budget management', rating: 4.6, reviews: 2100 },
    { id: 5, name: 'Invoice Generator', provider: 'Business Tools', commission: '₹100 - ₹500', description: 'Professional invoicing', rating: 4.7, reviews: 1650 },
    { id: 6, name: 'Financial Dashboard', provider: 'Analytics Pro', commission: '₹200 - ₹900', description: 'Real-time financial analytics', rating: 4.8, reviews: 980 },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#97144d' }}>Financial Software & Tools</h1>
        <p className="text-gray-600">Earn ₹100 - ₹1,200 per subscription. Share productivity and financial tools.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden border border-gray-200 hover:border-[#97144d] transition-all hover:shadow-lg">
            <div className="h-40 bg-gradient-to-br from-indigo-200 to-indigo-300" />
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
                <p className="text-xs text-gray-600">Earn per subscription</p>
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
