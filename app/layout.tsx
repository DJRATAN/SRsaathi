import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css" 
import { Footer } from "@/components/footer" 
import Navbar from "@/components/navbar"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "SRsaathi - Your Financial Companion",
  description:
    "Discover courses, software, banking solutions, credit cards, UPI apps and financial tools all in one place",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
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
        <Footer />
      </body>
    </html>
  )
}
