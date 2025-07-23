"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { MapPin, User } from "lucide-react"
import { motion } from "framer-motion"

export function OrderContent() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    area: "",
    landmark: "",
    plan: "",
    startDate: "",
    specialInstructions: "",
    agreeTerms: false,
  })

  const plans = [
    { id: "daily-regular", name: "Daily Regular - ₹120/day", price: 120 },
    { id: "weekly-premium", name: "Weekly Premium - ₹800/week", price: 800 },
    { id: "monthly-special", name: "Monthly Special - ₹3200/month", price: 3200 },
    { id: "south-indian", name: "South Indian Special - ₹900/week", price: 900 },
    { id: "jain-thali", name: "Jain Thali - ₹140/day", price: 140 },
    { id: "low-oil", name: "Low Oil Combo - ₹3500/month", price: 3500 },
  ]

  const areas = [
    "Koramangala",
    "BTM Layout",
    "Jayanagar",
    "Electronic City",
    "Whitefield",
    "Marathahalli",
    "HSR Layout",
    "Indiranagar",
    "JP Nagar",
    "Banashankari",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.agreeTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to terms and conditions",
        variant: "destructive",
      })
      return
    }

    // Create WhatsApp message
    const selectedPlan = plans.find((p) => p.id === formData.plan)
    const message = `
🍽️ *New Tiffin Order Request*

👤 *Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

📍 *Delivery Address:*
Address: ${formData.address}
Area: ${formData.area}
Landmark: ${formData.landmark}

🥘 *Plan Selected:*
${selectedPlan?.name || "Not selected"}

📅 *Start Date:* ${formData.startDate}

📝 *Special Instructions:*
${formData.specialInstructions || "None"}

Please confirm this order. Thank you! 🙏
    `.trim()

    const phoneNumber = "919876543210" // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")

    toast({
      title: "Order Submitted!",
      description: "Your order has been sent via WhatsApp. We'll contact you soon!",
    })
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Order Your <span className="text-orange-600">Tiffin</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill in your details and we'll get your delicious home-cooked meals started!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-orange-600">Order Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <User className="w-5 h-5 mr-2 text-orange-600" />
                    Personal Information
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Delivery Address */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-orange-600" />
                    Delivery Address
                  </h3>

                  <div>
                    <Label htmlFor="address">Complete Address *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder="Flat/House No, Building Name, Street Name"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="area">Area *</Label>
                      <Select value={formData.area} onValueChange={(value) => handleInputChange("area", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your area" />
                        </SelectTrigger>
                        <SelectContent>
                          {areas.map((area) => (
                            <SelectItem key={area} value={area}>
                              {area}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="landmark">Landmark</Label>
                      <Input
                        id="landmark"
                        value={formData.landmark}
                        onChange={(e) => handleInputChange("landmark", e.target.value)}
                        placeholder="Near Metro Station, Mall, etc."
                      />
                    </div>
                  </div>
                </div>

                {/* Plan Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Select Your Plan *</h3>
                  <RadioGroup value={formData.plan} onValueChange={(value) => handleInputChange("plan", value)}>
                    <div className="grid md:grid-cols-2 gap-4">
                      {plans.map((plan) => (
                        <div
                          key={plan.id}
                          className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-orange-50"
                        >
                          <RadioGroupItem value={plan.id} id={plan.id} />
                          <Label htmlFor={plan.id} className="flex-1 cursor-pointer">
                            {plan.name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Start Date */}
                <div>
                  <Label htmlFor="startDate">Preferred Start Date *</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange("startDate", e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    required
                  />
                </div>

                {/* Special Instructions */}
                <div>
                  <Label htmlFor="instructions">Special Instructions</Label>
                  <Textarea
                    id="instructions"
                    value={formData.specialInstructions}
                    onChange={(e) => handleInputChange("specialInstructions", e.target.value)}
                    placeholder="Any dietary preferences, delivery time preferences, etc."
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the terms and conditions and privacy policy
                  </Label>
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-lg py-3">
                  Send Order via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Order Process Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">How It Works</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Fill Form</h4>
              <p className="text-sm text-gray-600">Complete the order form with your details</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">WhatsApp</h4>
              <p className="text-sm text-gray-600">Your order is sent via WhatsApp</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Confirmation</h4>
              <p className="text-sm text-gray-600">We'll call you to confirm details</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2">Delivery</h4>
              <p className="text-sm text-gray-600">Fresh meals delivered to your door</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
