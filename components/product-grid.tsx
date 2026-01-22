"use client"

import { Star, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  price: string
  rating: number
  reviews: number
  image: string
  description: string
  referralBonus: string
  instructor?: string
}

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{product.description}</p>

                {product.instructor && (
                  <div className="text-xs text-muted-foreground mb-3 font-medium">By {product.instructor}</div>
                )}

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
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold whitespace-nowrap ml-2">
                      +{product.referralBonus}
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
