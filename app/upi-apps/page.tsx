import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryHero } from "@/components/category-hero"
import { ProductGrid } from "@/components/product-grid"

const upiProducts = [
  {
    id: 1,
    name: "PayFlow - Fast Digital Payments",
    price: "Free",
    rating: 4.8,
    reviews: 4500,
    image: "/payflow-upi-app.jpg",
    description: "Secure payments with 2% cashback",
    referralBonus: "₹100",
    instructor: "PayFlow Inc",
  },
  {
    id: 2,
    name: "MoneyZap UPI",
    price: "Free",
    rating: 4.7,
    reviews: 3800,
    image: "/moneyzap-upi-app.jpg",
    description: "Instant money transfers with zero fees",
    referralBonus: "₹75",
    instructor: "MoneyZap",
  },
  {
    id: 3,
    name: "QuickPay Pro",
    price: "₹0 (Premium ₹99/month)",
    rating: 4.6,
    reviews: 2900,
    image: "/quickpay-upi-app.jpg",
    description: "All-in-one payment solution",
    referralBonus: "₹120",
    instructor: "QuickPay",
  },
  {
    id: 4,
    name: "InstaCash - Peer to Peer Payments",
    price: "Free",
    rating: 4.9,
    reviews: 5200,
    image: "/placeholder.svg?height=300&width=300",
    description: "Bill splitting and instant transfers",
    referralBonus: "₹125",
    instructor: "InstaCash",
  },
  {
    id: 5,
    name: "CashBack King",
    price: "Free",
    rating: 4.5,
    reviews: 2100,
    image: "/placeholder.svg?height=300&width=300",
    description: "Maximum cashback on every transaction",
    referralBonus: "₹150",
    instructor: "CashBack Rewards",
  },
  {
    id: 6,
    name: "SecureTransfer UPI",
    price: "Free",
    rating: 4.7,
    reviews: 3400,
    image: "/placeholder.svg?height=300&width=300",
    description: "Enhanced security with biometric auth",
    referralBonus: "₹110",
    instructor: "SecureTransfer",
  },
]

export default function UpiAppsPage() {
  return (
    <main className="min-h-screen bg-background">
      <CategoryHero
        title="UPI & Payment Apps"
        description="Fast, secure, and rewarding digital payments"
        icon="Smartphone"
      />
      <ProductGrid products={upiProducts} />
    </main>
  )
}
