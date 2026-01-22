import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryHero } from "@/components/category-hero"
import { ProductGrid } from "@/components/product-grid"

const courseProducts = [
  {
    id: 1,
    name: "Complete Financial Planning Masterclass",
    price: "₹1,999",
    rating: 4.9,
    reviews: 3200,
    image: "/financial-planning-course.jpg",
    description: "Master budgeting, investing, and wealth creation",
    referralBonus: "₹300",
    instructor: "Expert Wealth Manager",
  },
  {
    id: 2,
    name: "Stock Market Investing 101",
    price: "₹999",
    rating: 4.7,
    reviews: 2100,
    image: "/stock-market-course.jpg",
    description: "Learn how to invest in stocks like a pro",
    referralBonus: "₹200",
    instructor: "Certified Investment Advisor",
  },
  {
    id: 3,
    name: "Crypto & Digital Assets Course",
    price: "₹1,499",
    rating: 4.6,
    reviews: 1800,
    image: "/cryptocurrency-course.jpg",
    description: "Understanding blockchain and cryptocurrency",
    referralBonus: "₹250",
    instructor: "Blockchain Expert",
  },
  {
    id: 4,
    name: "Real Estate Investment Guide",
    price: "₹2,499",
    rating: 4.8,
    reviews: 2500,
    image: "/real-estate-course.jpg",
    description: "Build wealth through property investment",
    referralBonus: "₹400",
    instructor: "Real Estate Professional",
  },
  {
    id: 5,
    name: "Tax Planning & Optimization",
    price: "₹799",
    rating: 4.8,
    reviews: 2900,
    image: "/tax-planning-course.jpg",
    description: "Legally reduce your tax burden",
    referralBonus: "₹150",
    instructor: "Tax Expert CA",
  },
  {
    id: 6,
    name: "Insurance 101: Protect Your Family",
    price: "₹599",
    rating: 4.5,
    reviews: 1500,
    image: "/insurance-course.jpg",
    description: "Comprehensive guide to insurance products",
    referralBonus: "₹100",
    instructor: "Insurance Specialist",
  },
]

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-background">
       <CategoryHero
        title="Financial Courses"
        description="Learn from industry experts and master your financial future"
        icon="BookOpen"
      />
      <ProductGrid products={courseProducts} />
     </main>
  )
}
