'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, Share2, Download } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function InsurancePage() {
  const products = [
    { id: 1, name: 'HDFC Life Insurance', provider: 'HDFC', commission: '₹400 - ₹2,000', description: 'Term & life insurance policies', rating: 4.8, reviews: 2100 },
    { id: 2, name: 'LIC Life Insurance', provider: 'LIC', commission: '₹500 - ₹2,500', description: 'Government-backed insurance', rating: 4.7, reviews: 3400 },
    { id: 3, name: 'Max Life Insurance', provider: 'Max', commission: '₹450 - ₹2,200', description: 'Digital insurance solutions', rating: 4.8, reviews: 1800 },
    { id: 4, name: 'ICICI Prudential', provider: 'ICICI', commission: '₹400 - ₹1,800', description: 'Investment-linked plans', rating: 4.6, reviews: 2200 },
    { id: 5, name: 'Health Insurance Plans', provider: 'Various', commission: '₹300 - ₹1,500', description: 'Medical & health coverage', rating: 4.9, reviews: 1600 },
    { id: 6, name: 'Motor Insurance', provider: 'Multiple', commission: '₹200 - ₹800', description: 'Vehicle insurance policies', rating: 4.7, reviews: 1400 },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#97144d' }}>Insurance Products</h1>
        <p className="text-gray-600">Earn ₹300 - ₹2,500 per policy. Share comprehensive insurance solutions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden border border-gray-200 hover:border-[#97144d] transition-all hover:shadow-lg">
            <div className="h-40 bg-gradient-to-br from-orange-200 to-orange-300" />
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
                <p className="text-xs text-gray-600">Earn per policy</p>
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
