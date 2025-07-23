"use client"

import Image from "next/image"
import { Heart, Users, Award, Clock } from "lucide-react"
import { motion } from "framer-motion"

export function AboutContent() {
  const values = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every meal is prepared with the same care and love as a mother would cook for her family",
    },
    {
      icon: Users,
      title: "Community First",
      description: "We believe in building a community around good food and bringing people together",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "We use only the finest ingredients and maintain the highest standards of hygiene",
    },
    {
      icon: Clock,
      title: "Timely Service",
      description: "Punctual delivery ensures you get fresh, hot meals exactly when you need them",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-orange-600">Shree Ram Bhojanam</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bringing the divine taste of home-cooked meals to your doorstep since 2020
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Shree Ram Bhojanam was born from a simple yet profound belief - that everyone deserves to experience the
                comfort and nourishment of home-cooked meals, no matter how far they are from home.
              </p>
              <p>
                Founded in 2020 by a team of food enthusiasts who understood the struggles of students, working
                professionals, and senior citizens in finding authentic, healthy, and affordable meals, we set out on a
                mission to bridge this gap.
              </p>
              <p>
                Our name, "Shree Ram Bhojanam," reflects our commitment to serving food with the same devotion and
                purity that Lord Ram would expect. Every meal we prepare carries the blessings of tradition, the warmth
                of home, and the promise of satisfaction.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <Image
                src="/logo.jpg"
                alt="Shree Ram Bhojanam Story"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 md:p-12">
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 italic mb-6">
              "Delivering 'Ghar jaisa khana' - the taste, nutrition, and love of home-cooked meals to every doorstep in
              the city"
            </blockquote>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to preserving traditional cooking methods, using fresh and pure ingredients, and
              maintaining the authentic flavors that make Indian cuisine so special. Our goal is to ensure that no one
              has to compromise on the quality and taste of their daily meals.
            </p>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey So Far</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-orange-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50,000+</div>
              <div className="text-orange-100">Meals Delivered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-orange-100">Areas Covered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.8★</div>
              <div className="text-orange-100">Customer Rating</div>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Founder</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">👨‍🍳</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ramesh Sharma</h3>
              <p className="text-orange-600 font-medium mb-4">Founder & Head Chef</p>
              <p className="text-gray-600 leading-relaxed">
                "With over 20 years of experience in traditional Indian cooking and a passion for serving authentic
                home-style meals, I founded Shree Ram Bhojanam to share the joy of pure, wholesome food with everyone.
                Every recipe we use has been perfected over generations in my family."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
