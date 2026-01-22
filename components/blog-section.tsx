"use client"

import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function BlogSection() {
  const posts = [
    {
      title: "How to Start Investing for Beginners",
      description: "Learn the basics of investing and start building wealth from scratch",
      date: "Jan 10, 2026",
      readTime: "5 min",
      category: "Investing",
    },
    {
      title: "Credit Card Secrets the Banks Don't Tell You",
      description: "Maximize your credit card benefits and rewards like a pro",
      date: "Jan 8, 2026",
      readTime: "7 min",
      category: "Credit Cards",
    },
    {
      title: "Ultimate Guide to Digital Payment Apps in India",
      description: "Everything you need to know about UPI, wallets, and payment solutions",
      date: "Jan 5, 2026",
      readTime: "6 min",
      category: "UPI Apps",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">From Our Blog</h2>
            <p className="text-muted-foreground">Latest tips and guides for smart money management</p>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-primary hover:gap-3 transition-all">
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-5xl">📚</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{post.description}</p>
                <div className="text-xs text-muted-foreground">{post.date}</div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link href="/blog" className="text-primary font-semibold flex items-center justify-center gap-2">
            View all posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
