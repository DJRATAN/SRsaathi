import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryHero } from "@/components/category-hero"
import { ProductGrid } from "@/components/product-grid"

const creditCardProducts = [
  {
    id: 1,
    name: "Rewards Pro Card",
    price: "Free",
    rating: 4.9,
    reviews: 5200,
    image: "/placeholder.svg?height=300&width=300",
    description: "5% cashback on all purchases",
    referralBonus: "₹1000",
    instructor: "Prime Bank",
  },
  {
    id: 2,
    name: "Travel Elite Card",
    price: "₹999 annual",
    rating: 4.8,
    reviews: 3400,
    image: "/placeholder.svg?height=300&width=300",
    description: "Free flights and hotel stays",
    referralBonus: "₹800",
    instructor: "Travel Bank",
  },
  {
    id: 3,
    name: "Cashback Maximizer",
    price: "Free",
    rating: 4.7,
    reviews: 2800,
    image: "/placeholder.svg?height=300&width=300",
    description: "10% cashback on groceries and dining",
    referralBonus: "₹700",
    instructor: "Cashback Bank",
  },
  {
    id: 4,
    name: "Student Card",
    price: "Free",
    rating: 4.6,
    reviews: 1900,
    image: "/placeholder.svg?height=300&width=300",
    description: "Special discounts for students",
    referralBonus: "₹500",
    instructor: "Youth Bank",
  },
  {
    id: 5,
    name: "Business Credit Card",
    price: "₹2,499 annual",
    rating: 4.8,
    reviews: 2400,
    image: "/placeholder.svg?height=300&width=300",
    description: "Designed for business owners",
    referralBonus: "₹1200",
    instructor: "Business Bank",
  },
  {
    id: 6,
    name: "Premium Luxury Card",
    price: "₹5,000 annual",
    rating: 4.9,
    reviews: 1600,
    image: "/placeholder.svg?height=300&width=300",
    description: "Exclusive perks and concierge service",
    referralBonus: "₹2000",
    instructor: "Elite Bank",
  },
]

export default function CreditCardsPage() {
  return (
    <main className="min-h-screen bg-background">
       <CategoryHero
        title="Credit Cards"
        description="Choose the perfect credit card with amazing benefits"
        icon="CreditCard"
      />
      <ProductGrid products={creditCardProducts} />
     </main>
  )
}
