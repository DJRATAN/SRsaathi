"use client"

import Link from "next/link"
import { BookOpen, Code2, Smartphone, Building2, CreditCard, Wrench } from "lucide-react"
import { Card } from "@/components/ui/card"

const categories = [
  {
    id: "courses",
    name: "Courses",
    description: "Learn from expert instructors",
    icon: BookOpen,
    color: "from-blue-500 to-blue-600",
    href: "/courses",
  },
  {
    id: "software",
    name: "Software",
    description: "Premium tools and applications",
    icon: Code2,
    color: "from-purple-500 to-purple-600",
    href: "/software",
  },
  {
    id: "upi-apps",
    name: "UPI Apps",
    description: "Fast and secure payments",
    icon: Smartphone,
    color: "from-green-500 to-green-600",
    href: "/upi-apps",
  },
  {
    id: "bank-accounts",
    name: "Bank Accounts",
    description: "Open accounts instantly",
    icon: Building2,
    color: "from-indigo-500 to-indigo-600",
    href: "/bank-accounts",
  },
  {
    id: "credit-cards",
    name: "Credit Cards",
    description: "Best cards with rewards",
    icon: CreditCard,
    color: "from-rose-500 to-rose-600",
    href: "/credit-cards",
  },
  {
    id: "tools",
    name: "Tools",
    description: "Helpful financial utilities",
    icon: Wrench,
    color: "from-amber-500 to-amber-600",
    href: "/tools",
  },
]

export function CategoriesSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Categories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our curated collection of financial products and services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link key={category.id} href={category.href}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-primary/50 group">
                  <div className="p-8 flex flex-col h-full">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{category.description}</p>
                    <div className="text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform">
                      Explore →
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
