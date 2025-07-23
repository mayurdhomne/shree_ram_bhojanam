"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Clock, Users, Leaf } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function TiffinPlansContent() {
  const [selectedFilter, setSelectedFilter] = useState("all")

  const plans = [
    {
      id: 1,
      name: "Daily Regular",
      type: "daily",
      category: "veg",
      price: 120,
      originalPrice: 150,
      duration: "Per Day",
      description: "Fresh home-cooked meal with rice, dal, sabzi, roti, and pickle",
      features: ["2 Rotis", "Rice", "Dal", "1 Sabzi", "Pickle", "Salad"],
      popular: false,
      image: "/images/punjabi-thali.jpg",
    },
    {
      id: 2,
      name: "Weekly Premium",
      type: "weekly",
      category: "veg",
      price: 800,
      originalPrice: 1000,
      duration: "Per Week",
      description: "Premium meals with variety of dishes and sweets",
      features: ["3 Rotis", "Rice", "Dal", "2 Sabzi", "Pickle", "Sweet", "Papad"],
      popular: true,
      image: "/images/punjabi-thali.jpg",
    },
    {
      id: 3,
      name: "Monthly Special",
      type: "monthly",
      category: "veg",
      price: 3200,
      originalPrice: 4000,
      duration: "Per Month",
      description: "Complete monthly package with maximum variety",
      features: ["4 Rotis", "Rice", "Dal", "2 Sabzi", "Pickle", "Sweet", "Papad", "Curd"],
      popular: false,
      image: "/images/punjabi-thali.jpg",
    },
    {
      id: 4,
      name: "South Indian Special",
      type: "weekly",
      category: "south",
      price: 900,
      originalPrice: 1100,
      duration: "Per Week",
      description: "Authentic South Indian meals with sambar, rasam, and more",
      features: ["Rice", "Sambar", "Rasam", "2 Curry", "Pickle", "Papad", "Curd"],
      popular: false,
      image: "/images/punjabi-thali.jpg",
    },
    {
      id: 5,
      name: "Jain Thali",
      type: "daily",
      category: "jain",
      price: 140,
      originalPrice: 170,
      duration: "Per Day",
      description: "Pure Jain food without onion, garlic, and root vegetables",
      features: ["2 Rotis", "Rice", "Dal", "Jain Sabzi", "Pickle", "Sweet"],
      popular: false,
      image: "/images/punjabi-thali.jpg",
    },
    {
      id: 6,
      name: "Low Oil Combo",
      type: "monthly",
      category: "combo",
      price: 3500,
      originalPrice: 4200,
      duration: "Per Month",
      description: "Healthy low-oil cooking for health-conscious people",
      features: ["3 Rotis", "Brown Rice", "Dal", "Steamed Sabzi", "Salad", "Soup"],
      popular: false,
      image: "/images/punjabi-thali.jpg",
    },
  ]

  const filteredPlans = plans.filter((plan) => {
    if (selectedFilter === "all") return true
    return plan.category === selectedFilter
  })

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-600">Tiffin Plans</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our variety of meal plans designed to suit your taste and budget
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <Tabs value={selectedFilter} onValueChange={setSelectedFilter} className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-5">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="veg">Veg</TabsTrigger>
            <TabsTrigger value="jain">Jain</TabsTrigger>
            <TabsTrigger value="south">South</TabsTrigger>
            <TabsTrigger value="combo">Combo</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`relative h-full hover:shadow-xl transition-all duration-300 ${plan.popular ? "ring-2 ring-orange-500" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center">
                  <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={plan.image || "/placeholder.svg"}
                      alt={plan.name}
                      className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-3xl font-bold text-orange-600">₹{plan.price}</span>
                    <span className="text-lg text-gray-500 line-through">₹{plan.originalPrice}</span>
                  </div>
                  <p className="text-sm text-gray-600">{plan.duration}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">{plan.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Includes:</h4>
                    <ul className="space-y-1">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <Check className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>Fresh Daily</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Leaf className="w-4 h-4" />
                      <span>Pure Veg</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                    <Link href="/order">Order Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Tiffin Plans?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold mb-2">Flexible Plans</h4>
              <p className="text-sm text-gray-600">Choose daily, weekly, or monthly plans as per your needs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">Fresh & Healthy</h4>
              <p className="text-sm text-gray-600">Made fresh daily with quality ingredients</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">On-Time Delivery</h4>
              <p className="text-sm text-gray-600">Delivered hot and fresh at your preferred time</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
