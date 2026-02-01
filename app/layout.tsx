import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Footer } from "@/components/footer"
import Navbar from "@/components/navbar"
import { StickyCTA } from "@/components/sticky-cta"
import FixedQuoteBtn from "@/components/FixedQuoteBtn"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "SRsaathi - Your Financial Companion",
  description:
    "Discover courses, software, banking solutions, credit cards, UPI apps and financial tools all in one place",
  generator: "TechnoML",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} font-sans antialiased`}>
        <Navbar />
        {children}

        <Analytics />
        <FixedQuoteBtn />
        <StickyCTA />
        <Footer />
      </body>
    </html>
  )
}
