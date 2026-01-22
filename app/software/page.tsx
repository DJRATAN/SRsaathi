import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryHero } from "@/components/category-hero"
import { ProductGrid } from "@/components/product-grid"

const softwareProducts = [
  {
    id: 1,
    name: "Portfolio Management Suite",
    price: "₹499/month",
    rating: 4.8,
    reviews: 1200,
    image: "/portfolio-management-software.jpg",
    description: "Track and manage your investments",
    referralBonus: "₹200",
    instructor: "Software Provider",
  },
  {
    id: 2,
    name: "Budget & Expense Tracker",
    price: "₹199/month",
    rating: 4.6,
    reviews: 2300,
    image: "/expense-tracker-app.jpg",
    description: "Monitor every penny you spend",
    referralBonus: "₹100",
    instructor: "FinTech Company",
  },
  {
    id: 3,
    name: "Income Tax Calculator Pro",
    price: "₹299/year",
    rating: 4.9,
    reviews: 3100,
    image: "/tax-calculator-software.jpg",
    description: "Calculate taxes accurately and quickly",
    referralBonus: "₹150",
    instructor: "Tax Software Experts",
  },
  {
    id: 4,
    name: "Investment Analysis Tool",
    price: "₹399/month",
    rating: 4.7,
    reviews: 1600,
    image: "/investment-analysis-tool.jpg",
    description: "Analyze stocks, funds, and bonds",
    referralBonus: "₹180",
    instructor: "Finance Analytics",
  },
  {
    id: 5,
    name: "Loan EMI Calculator",
    price: "Free",
    rating: 4.5,
    reviews: 890,
    image: "/loan-calculator-software.jpg",
    description: "Plan your loans with detailed EMI breakdown",
    referralBonus: "₹50",
    instructor: "Finance Tools",
  },
  {
    id: 6,
    name: "Financial Report Generator",
    price: "₹599/month",
    rating: 4.8,
    reviews: 950,
    image: "/financial-report-software.jpg",
    description: "Generate professional financial reports",
    referralBonus: "₹250",
    instructor: "Business Software",
  },
]

export default function SoftwarePage() {
  return (
    <main className="min-h-screen bg-background">
       <CategoryHero
        title="Financial Software"
        description="Powerful tools to manage and grow your wealth"
        icon="Code2"
      />
      <ProductGrid products={softwareProducts} />
     </main>
  )
}
