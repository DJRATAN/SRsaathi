'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, Share2, Download } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function ProductivityPage() {
  const products = [
    { id: 1, name: 'Notion Plus', provider: 'Notion', commission: '₹100 - ₹400', description: 'All-in-one workspace', rating: 4.9, reviews: 4500 },
    { id: 2, name: 'Microsoft Teams', provider: 'Microsoft', commission: '₹80 - ₹350', description: 'Team collaboration platform', rating: 4.8, reviews: 3200 },
    { id: 3, name: 'Google Workspace', provider: 'Google', commission: '₹90 - ₹380', description: 'Complete productivity suite', rating: 4.9, reviews: 2800 },
    { id: 4, name: 'Slack Pro', provider: 'Slack', commission: '₹120 - ₹450', description: 'Team messaging platform', rating: 4.8, reviews: 2100 },
    { id: 5, name: 'Monday.com', provider: 'Monday', commission: '₹110 - ₹420', description: 'Project management tool', rating: 4.7, reviews: 1850 },
    { id: 6, name: 'Asana Premium', provider: 'Asana', commission: '₹100 - ₹400', description: 'Work management platform', rating: 4.8, reviews: 1600 },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#97144d' }}>Productivity Tools</h1>
        <p className="text-gray-600">Earn ₹80 - ₹450 per subscription. Share productivity solutions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden border border-gray-200 hover:border-[#97144d] transition-all hover:shadow-lg">
            <div className="h-40 bg-gradient-to-br from-cyan-200 to-cyan-300" />
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
                <p className="text-xs text-gray-600">Earn per signup</p>
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
