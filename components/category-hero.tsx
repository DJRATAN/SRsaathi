"use client"

import type React from "react"

import { BookOpen, Code2, Smartphone, Building2, CreditCard, Wrench } from "lucide-react"

interface CategoryHeroProps {
  title: string
  description: string
  icon: string
}

export function CategoryHero({ title, description, icon }: CategoryHeroProps) {
  const iconMap: { [key: string]: React.ComponentType<{ className: string }> } = {
    BookOpen,
    Code2,
    Smartphone,
    Building2,
    CreditCard,
    Wrench,
  }

  const Icon = iconMap[icon] || BookOpen

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-secondary/5 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
