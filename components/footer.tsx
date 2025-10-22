import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
          {/*
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SR</span>
              </div>
              <span className="font-bold text-lg text-white">SRsaathi</span>
            </div> 
            */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="SRsaathi" className="h-16 w-auto" />
          </Link>
            <p className="text-sm text-gray-400">
              Empower. Learn. Earn. Your trusted platform for financial growth and referral opportunities.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products?category=credit-cards" className="hover:text-blue-400 transition-colors">
                  Credit Cards
                </Link>
              </li>
              <li>
                <Link href="/products?category=loans" className="hover:text-blue-400 transition-colors">
                  Loans
                </Link>
              </li>
              <li>
                <Link href="/products?category=insurance" className="hover:text-blue-400 transition-colors">
                  Insurance
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-blue-400 transition-colors">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/learn" className="hover:text-blue-400 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/learn" className="hover:text-blue-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-blue-400 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2025 SRsaathi. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                Twitter
              </Link>
              <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                LinkedIn
              </Link>
              <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
