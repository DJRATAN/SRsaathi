"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Share2 } from "lucide-react"
import { categories } from "@/lib/categories"
import { useParams } from "next/navigation"

const productsData: Record<string, any[]> = {
  "bank-accounts": [
    {
      id: 1,
      name: "SBI Bank Account",
      description: "Zero Balance Savings Account with premium benefits",
      rating: 4.8,
      reviews: 1250,
      commission: "₹2000-5000",
      image: "/sbi-bank-account.jpg",
    },
    {
      id: 2,
      name: "HDFC Bank Savings",
      description: "Low maintenance, high interest rates",
      rating: 4.7,
      reviews: 980,
      commission: "₹1500-4000",
      image: "/hdfc-bank-account.jpg",
    },
    {
      id: 3,
      name: "ICICI Bank Pro",
      description: "Premium banking with exclusive perks",
      rating: 4.6,
      reviews: 750,
      commission: "₹2500-6000",
      image: "/icici-bank-account.jpg",
    },
  ],
  "credit-cards": [
    {
      id: 1,
      name: "SBI Gold Credit Card",
      description: "Earn maximum cashback and rewards",
      rating: 4.7,
      reviews: 1100,
      commission: "₹1000-3000",
      image: "/sbi-gold-credit-card.jpg",
    },
    {
      id: 2,
      name: "HDFC Rewards Card",
      description: "Unlimited rewards on every transaction",
      rating: 4.8,
      reviews: 1350,
      commission: "₹1500-3500",
      image: "/hdfc-credit-card.jpg",
    },
  ],
  courses: [
    {
      id: 1,
      name: "Stock Market Basics",
      description: "Learn investing fundamentals from experts",
      rating: 4.9,
      reviews: 2100,
      commission: "₹500-1500",
      image: "/stock-market-course.jpg",
    },
    {
      id: 2,
      name: "Financial Planning Masterclass",
      description: "Complete guide to personal finance",
      rating: 4.8,
      reviews: 1800,
      commission: "₹800-2000",
      image: "/financial-planning-course.jpg",
    },
  ],
}

export default function CategoryPage() {
  const params = useParams()
  const categorySlug = params.category as string
  const products = productsData[categorySlug] || []

  const categoryName =
    categories
      .flatMap((cat) => cat.subcategories.filter((sub) => sub.slug === categorySlug))
      .map((sub) => sub.name)[0] || "Products"

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-3">{categoryName}</h1>
          <p className="text-lg text-muted-foreground">
            Explore and earn by referring these premium financial products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="bg-primary bg-opacity-10 p-3 rounded-lg mb-4">
                  <p className="text-xs text-muted-foreground mb-1">Commission</p>
                  <p className="text-lg font-bold text-primary">{product.commission}</p>
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-secondary gap-2">
                  <Share2 className="w-4 h-4" />
                  Refer Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
