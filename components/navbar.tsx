"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.jpg" alt="Shree Ram Bhojanam" width={50} height={50} className="rounded-full" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-orange-600">Shree Ram Bhojanam</h1>
              <p className="text-xs text-gray-600">The Divine Taste of Home</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors">
              Home
            </Link>
            <Link href="/tiffin-plans" className="text-gray-700 hover:text-orange-600 transition-colors">
              Tiffin Plans
            </Link>
            <Link href="/order" className="text-gray-700 hover:text-orange-600 transition-colors">
              Order Now
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors">
              Contact
            </Link>
            <Button asChild className="bg-orange-600 hover:bg-orange-700">
              <Link href="/order">Order Your Tiffin</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/tiffin-plans"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600"
                onClick={() => setIsOpen(false)}
              >
                Tiffin Plans
              </Link>
              <Link
                href="/order"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600"
                onClick={() => setIsOpen(false)}
              >
                Order Now
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-orange-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="/order">Order Your Tiffin</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
