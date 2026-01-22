import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryHero } from "@/components/category-hero"
import { ProductGrid } from "@/components/product-grid"

const bankProducts = [
  {
    id: 1,
    name: "Prime Savings Account",
    price: "Free",
    rating: 4.9,
    reviews: 6200,
    image: "/placeholder.svg?height=300&width=300",
    description: "Zero balance account with 4% interest",
    referralBonus: "₹500",
    instructor: "Prime Bank",
  },
  {
    id: 2,
    name: "Digital Banking Plus",
    price: "Free",
    rating: 4.8,
    reviews: 4100,
    image: "/placeholder.svg?height=300&width=300",
    description: "100% digital account opening",
    referralBonus: "₹400",
    instructor: "Digital Bank",
  },
  {
    id: 3,
    name: "Student Banking Account",
    price: "Free",
    rating: 4.7,
    reviews: 2300,
    image: "/placeholder.svg?height=300&width=300",
    description: "Special benefits for students",
    referralBonus: "₹300",
    instructor: "Youth Bank",
  },
  {
    id: 4,
    name: "Senior Citizen Account",
    price: "Free",
    rating: 4.6,
    reviews: 1800,
    image: "/placeholder.svg?height=300&width=300",
    description: "Higher interest rates for seniors",
    referralBonus: "₹350",
    instructor: "Senior Bank",
  },
  {
    id: 5,
    name: "Business Current Account",
    price: "Free (Min balance ₹10,000)",
    rating: 4.8,
    reviews: 2900,
    image: "/placeholder.svg?height=300&width=300",
    description: "Designed for entrepreneurs",
    referralBonus: "₹750",
    instructor: "Business Bank",
  },
  {
    id: 6,
    name: "Premium Banking Account",
    price: "₹2,500 annual",
    rating: 4.9,
    reviews: 3500,
    image: "/placeholder.svg?height=300&width=300",
    description: "Exclusive benefits and priority support",
    referralBonus: "₹1000",
    instructor: "Elite Bank",
  },
]

export default function BankAccountsPage() {
  return (
    <main className="min-h-screen bg-background">
       <CategoryHero title="Bank Accounts" description="Find the perfect bank account for your needs" icon="Building2" />
      <ProductGrid products={bankProducts} />
     </main>
  )
}
