"use client"

import { Heart, DollarSign, Home } from "lucide-react"
import { motion } from "framer-motion"

export function WhyUsSection() {
  const features = [
    {
      icon: Heart,
      title: "Healthy",
      description: "Fresh ingredients, no preservatives, cooked with pure ghee and love",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      icon: DollarSign,
      title: "Affordable",
      description: "Best prices in the city with flexible daily, weekly, and monthly plans",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: Home,
      title: "Homely Taste",
      description: "Traditional recipes passed down through generations, just like mom's cooking",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-orange-600">Shree Ram Bhojanam</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We bring you the authentic taste of home with our commitment to quality, affordability, and tradition.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`text-center p-8 rounded-2xl border-2 ${feature.bgColor} ${feature.borderColor} hover:shadow-lg transition-all duration-300 hover:scale-105`}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.bgColor} ${feature.color} mb-6 shadow-lg`}
              >
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
