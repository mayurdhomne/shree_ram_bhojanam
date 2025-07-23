"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-300 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-red-200 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6">
              <Image
                src="/logo.jpg"
                alt="Shree Ram Bhojanam"
                width={120}
                height={120}
                className="mx-auto lg:mx-0 rounded-full shadow-lg"
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-orange-600">Shree Ram</span>
              <br />
              <span className="text-yellow-600">Bhojanam</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">The Divine Taste of Home</p>

            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Experience authentic home-cooked meals delivered fresh to your doorstep. Pure vegetarian, healthy, and
              made with love.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
                <Link href="/order">Order Your Tiffin Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg bg-transparent"
              >
                <Link href="/tiffin-plans">View Plans</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Real Thali Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Enhanced 3D Thali Effect with Real Image */}
              <div className="relative transform hover:scale-105 transition-all duration-500 hover:rotate-1">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-orange-200 to-red-200 rounded-full blur-2xl opacity-60 animate-pulse scale-110"></div>

                {/* Shadow layers for 3D depth */}
                <div className="absolute inset-0 bg-black/10 rounded-full blur-lg transform translate-y-4 scale-95"></div>
                <div className="absolute inset-0 bg-black/5 rounded-full blur-md transform translate-y-2 scale-98"></div>

                {/* Main thali container */}
                <div className="relative bg-gradient-to-br from-yellow-50 to-orange-50 rounded-full p-4 shadow-2xl border-4 border-yellow-300/50 backdrop-blur-sm">
                  {/* Real Thali Image */}
                  <div className="relative overflow-hidden rounded-full">
                    <Image
                      src="/thali.png"
                      alt="Authentic Indian Thali - Shree Ram Bhojanam"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-full shadow-inner"
                      priority
                    />

                    {/* Overlay gradient for better integration */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 rounded-full"></div>

                    {/* Floating elements for extra appeal */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full shadow-lg animate-bounce delay-100 flex items-center justify-center text-xs">
                      🌟
                    </div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-orange-400 rounded-full shadow-lg animate-bounce delay-300 flex items-center justify-center text-xs">
                      ✨
                    </div>
                    <div className="absolute top-4 -left-3 w-7 h-7 bg-red-400 rounded-full shadow-lg animate-bounce delay-500 flex items-center justify-center text-xs">
                      🔥
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-yellow-300 via-orange-300 to-red-300 opacity-50"></div>
                </div>

                {/* Additional floating text labels */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg border border-orange-200">
                    <span className="text-sm font-semibold text-orange-600">Fresh & Hot</span>
                  </div>
                </div>

                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg border border-green-200">
                    <span className="text-sm font-semibold text-green-600">Pure Veg</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
