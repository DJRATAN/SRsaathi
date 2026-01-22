"use client"

import { Star, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const featuredProducts = [
  {
    id: 1,
    name: "Financial Mastery Course",
    category: "Courses",
    price: "₹999",
    rating: 4.8,
    reviews: 2500,
    image: "/online-course-financial.jpg",
    description: "Master personal finance and investment strategies",
    referralBonus: "₹200",
  },
  {
    id: 2,
    name: "PayFlow UPI App",
    category: "UPI Apps",
    price: "Free",
    rating: 4.6,
    reviews: 1850,
    image: "/upi-payment-app.jpg",
    description: "Fast, secure digital payments with cashback",
    referralBonus: "₹100",
  },
  {
    id: 3,
    name: "Prime Banking",
    category: "Bank Accounts",
    price: "Free",
    rating: 4.9,
    reviews: 3200,
    image: "/bank-account-savings.jpg",
    description: "Open zero-balance account in 2 minutes",
    referralBonus: "₹500",
  },
  {
    id: 4,
    name: "Rewards Pro Card",
    category: "Credit Cards",
    price: "Free",
    rating: 4.7,
    reviews: 2100,
    image: "/credit-card-rewards.png",
    description: "5% cashback on all transactions",
    referralBonus: "₹1000",
  },
  {
    id: 5,
    name: "Tax Saver Pro",
    category: "Tools",
    price: "₹499/month",
    rating: 4.8,
    reviews: 1500,
    image: "/tax-calculation-software.jpg",
    description: "Calculate and optimize your taxes",
    referralBonus: "₹300",
  },
  {
    id: 6,
    name: "Budget Manager Software",
    category: "Software",
    price: "₹199/month",
    rating: 4.5,
    reviews: 980,
    image: "/budget-management-app.png",
    description: "Track spending and manage budgets easily",
    referralBonus: "₹150",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground">Top rated and most popular financial solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-primary">
                  {product.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{product.description}</p>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>

                <div className="border-t border-border pt-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                      +{product.referralBonus} Referral
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 gap-2">
                  Get Now
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
