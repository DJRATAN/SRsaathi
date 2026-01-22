'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, Share2, Download } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function UPIAppsPage() {
  const products = [
    { id: 1, name: 'Google Pay', provider: 'Google', commission: '₹50 - ₹200', description: 'Safe & secure digital payments', rating: 4.8, reviews: 5200 },
    { id: 2, name: 'PhonePe', provider: 'Flipkart', commission: '₹50 - ₹250', description: 'Fast UPI transfers & cashback', rating: 4.9, reviews: 4800 },
    { id: 3, name: 'BHIM', provider: 'NPCI', commission: '₹40 - ₹150', description: 'Government-backed UPI app', rating: 4.6, reviews: 2800 },
    { id: 4, name: 'Paytm', provider: 'One97', commission: '₹60 - ₹300', description: 'All-in-one payments wallet', rating: 4.7, reviews: 3900 },
    { id: 5, name: 'WhatsApp Pay', provider: 'Meta', commission: '₹50 - ₹180', description: 'Send money via WhatsApp', rating: 4.8, reviews: 2100 },
    { id: 6, name: 'iMobile', provider: 'HDFC Bank', commission: '₹50 - ₹200', description: 'Bank-integrated UPI payments', rating: 4.7, reviews: 1800 },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#97144d' }}>UPI & Payment Apps</h1>
        <p className="text-gray-600">Earn ₹50 - ₹300 per app download. Share digital payment solutions.</p>
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
                <p className="text-xs text-gray-600">Earn per download</p>
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
