"use client"

import { TrendingUp, Users, Award, Target } from "lucide-react"

export function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-3">
              <Users className="w-8 h-8" />
            </div>
            <div className="text-3xl md:text-4xl font-bold">40L+</div>
            <p className="text-sm md:text-base mt-2 opacity-90">Active Members</p>
          </div>

          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div className="text-3xl md:text-4xl font-bold">₹500Cr+</div>
            <p className="text-sm md:text-base mt-2 opacity-90">Money Saved</p>
          </div>

          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-3">
              <Award className="w-8 h-8" />
            </div>
            <div className="text-3xl md:text-4xl font-bold">1000+</div>
            <p className="text-sm md:text-base mt-2 opacity-90">Products Listed</p>
          </div>

          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-3">
              <Target className="w-8 h-8" />
            </div>
            <div className="text-3xl md:text-4xl font-bold">5★</div>
            <p className="text-sm md:text-base mt-2 opacity-90">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}
