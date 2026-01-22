'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, Share2, Download } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function BankAccountsPage() {
  const products = [
    {
      id: 1,
      name: 'SBI Savings Account',
      provider: 'State Bank of India',
      commission: '₹500 - ₹1,000',
      description: 'Secure savings account with cashback benefits',
      rating: 4.8,
      reviews: 2450,
    },
    {
      id: 2,
      name: 'HDFC Bank Savings',
      provider: 'HDFC Bank',
      commission: '₹600 - ₹1,200',
      description: 'Premium savings with insurance coverage',
      rating: 4.7,
      reviews: 2100,
    },
    {
      id: 3,
      name: 'ICICI Bank Account',
      provider: 'ICICI Bank',
      commission: '₹550 - ₹1,100',
      description: 'All-in-one banking with investment options',
      rating: 4.6,
      reviews: 1890,
    },
    {
      id: 4,
      name: 'Axis Bank Advantage',
      provider: 'Axis Bank',
      commission: '₹500 - ₹950',
      description: 'Digital-first banking experience',
      rating: 4.5,
      reviews: 1650,
    },
    {
      id: 5,
      name: 'Kotak Bank Account',
      provider: 'Kotak Mahindra Bank',
      commission: '₹700 - ₹1,400',
      description: 'Premium banking with wealth management',
      rating: 4.9,
      reviews: 890,
    },
    {
      id: 6,
      name: 'IndusInd Bank Plus',
      provider: 'IndusInd Bank',
      commission: '₹600 - ₹1,200',
      description: 'Flexible banking with multiple benefits',
      rating: 4.7,
      reviews: 1200,
    },
  ]

  return (
    <>
      <Navbar />
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#97144d' }}>Bank Accounts</h1>
          <p className="text-gray-600">Earn ₹500 - ₹2,000 per account opening. Choose from premium banking options.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden border border-gray-200 hover:border-[#97144d] transition-all hover:shadow-lg">
              <div className="h-40 bg-gradient-to-br from-gray-200 to-gray-300" />
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
    <Footer />
    </>
  )
}
