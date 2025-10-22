import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Navigation */}


      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-accent-foreground px-4 py-2 rounded-full">
              <span className="text-accent font-semibold text-sm">Join 10,000+ Earners</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Empower. Learn. Earn with SRsaathi.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Connect people with income opportunities through smart learning and referrals. Build your network, earn
              commissions, and grow your financial knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
                Start Earning →
              </Button>
              <Button size="lg" variant="outline">
                Partner with Us
              </Button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📈</div>
              <p className="text-muted-foreground">Growth Dashboard Preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose SRsaathi?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to succeed in the referral economy
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📈",
                title: "Earn Commissions",
                description: "Earn up to 30% commission on every successful referral",
              },
              {
                icon: "📚",
                title: "Learn & Grow",
                description: "Access premium courses and resources to boost your skills",
              },
              {
                icon: "👥",
                title: "Build Network",
                description: "Connect with thousands of like-minded entrepreneurs",
              },
            ].map((feature, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Explore Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Promote financial, insurance, education, and business products
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {["Finance", "Insurance", "Education", "Business"].map((category) => (
            <Card key={category} className="p-6 text-center hover:border-primary transition cursor-pointer">
              <div className="text-4xl mx-auto mb-3">
                {category === "Finance" && "💰"}
                {category === "Insurance" && "🛡️"}
                {category === "Education" && "🎓"}
                {category === "Business" && "💼"}
              </div>
              <h3 className="font-bold text-foreground mb-2">{category}</h3>
              <p className="text-sm text-muted-foreground">Explore opportunities</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of successful referrers and start building your income today
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            Create Free Account
          </Button>
        </div>
      </section>

    </main>
  )
}
