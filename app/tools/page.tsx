import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryHero } from "@/components/category-hero"
import { ProductGrid } from "@/components/product-grid"

const toolProducts = [
  {
    id: 1,
    name: "EMI Calculator Pro",
    price: "Free",
    rating: 4.8,
    reviews: 4200,
    image: "/placeholder.svg?height=300&width=300",
    description: "Calculate loans and EMI instantly",
    referralBonus: "₹75",
    instructor: "Finance Tools",
  },
  {
    id: 2,
    name: "Salary & Tax Calculator",
    price: "Free",
    rating: 4.9,
    reviews: 5100,
    image: "/placeholder.svg?height=300&width=300",
    description: "Know your net salary after tax",
    referralBonus: "₹100",
    instructor: "Tax Tools",
  },
  {
    id: 3,
    name: "Investment Returns Calculator",
    price: "Free",
    rating: 4.7,
    reviews: 2900,
    image: "/placeholder.svg?height=300&width=300",
    description: "Project your investment growth",
    referralBonus: "₹80",
    instructor: "Investment Tools",
  },
  {
    id: 4,
    name: "Retirement Planning Tool",
    price: "Free",
    rating: 4.8,
    reviews: 3200,
    image: "/placeholder.svg?height=300&width=300",
    description: "Plan your retirement savings",
    referralBonus: "₹120",
    instructor: "Retirement Planning",
  },
  {
    id: 5,
    name: "Inflation & Purchasing Power",
    price: "Free",
    rating: 4.6,
    reviews: 1800,
    image: "/placeholder.svg?height=300&width=300",
    description: "Understand inflation impact",
    referralBonus: "₹60",
    instructor: "Finance Analytics",
  },
  {
    id: 6,
    name: "Budget Planner Pro",
    price: "₹99 one-time",
    rating: 4.8,
    reviews: 2600,
    image: "/placeholder.svg?height=300&width=300",
    description: "Create and manage budgets easily",
    referralBonus: "₹150",
    instructor: "Budget Tools",
  },
]

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-background">
       <CategoryHero title="Financial Tools" description="Essential calculators and planning tools" icon="Wrench" />
      <ProductGrid products={toolProducts} />
     </main>
  )
}
