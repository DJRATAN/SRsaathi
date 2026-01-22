'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, Share2, Download } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function MutualFundsPage() {
  const products = [
    { id: 1, name: 'HDFC Equity Fund', provider: 'HDFC', commission: '₹200 - ₹1,000', description: 'Long-term wealth creation', rating: 4.8, reviews: 3200 },
    { id: 2, name: 'SBI Mutual Fund', provider: 'SBI', commission: '₹180 - ₹900', description: 'Diversified investment options', rating: 4.7, reviews: 2800 },
    { id: 3, name: 'Axis Focused Fund', provider: 'Axis', commission: '₹200 - ₹950', description: 'Concentrated portfolio', rating: 4.8, reviews: 1600 },
    { id: 4, name: 'ICICI Prudential', provider: 'ICICI', commission: '₹190 - ₹880', description: 'Multi-asset portfolio', rating: 4.6, reviews: 2100 },
    { id: 5, name: 'Aditya Birla MF', provider: 'Aditya Birla', commission: '₹180 - ₹850', description: 'Balanced mutual funds', rating: 4.7, reviews: 1800 },
    { id: 6, name: 'DSP Mutual Fund', provider: 'DSP', commission: '₹200 - ₹920', description: 'Growth-focused schemes', rating: 4.8, reviews: 1450 },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#97144d' }}>Mutual Funds</h1>
        <p className="text-gray-600">Earn ₹180 - ₹1,000+ per investment. Share wealth creation opportunities.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden border border-gray-200 hover:border-[#97144d] transition-all hover:shadow-lg">
            <div className="h-40 bg-gradient-to-br from-green-200 to-green-300" />
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
                <p className="text-xs text-gray-600">Earn per investment</p>
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
