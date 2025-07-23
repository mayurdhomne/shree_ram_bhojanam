import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { WhatsAppFloat } from "@/components/whatsapp-float"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shree Ram Bhojanam - The Divine Taste of Home | Pure Veg Tiffin Service",
  description:
    "Experience the divine taste of home-cooked meals with Shree Ram Bhojanam. Daily, weekly, and monthly tiffin plans with healthy, affordable, and homely taste.",
  keywords: "tiffin service, pure veg, home food, daily tiffin, healthy meals, affordable food",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <WhatsAppFloat />
        <Toaster />
      </body>
    </html>
  )
}
