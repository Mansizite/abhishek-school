"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { BookOpen, Mail, Phone, User } from "lucide-react"

export function EnquiryForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    class: "",
    message: "",
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, class: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Enquiry submitted:", formData)
    toast({
      title: "Enquiry Submitted",
      description: "Thank you for your interest. We will contact you shortly.",
    })
    setFormData({
      name: "",
      email: "",
      phone: "",
      class: "",
      message: "",
    })
  }

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2,
      }}
      className="relative z-10"
    >
      <Card className="shadow-lg border-t-4 border-[#8e24aa] bg-white/90 rounded-lg backdrop-blur-md">
        <CardHeader className="text-white rounded-t-lg pb-3 font-serif" style={{ backgroundColor: "#8e24aa" }}>
          <CardTitle className="text-xl text-center flex items-center justify-center">
            <BookOpen className="mr-2 h-5 w-5" />
            Admission Enquiry
          </CardTitle>
        </CardHeader>

        <CardContent className="p-4">
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Name */}
            <div className="space-y-2 relative">
              <div className="absolute left-3 top-2.5 text-gray-500">
                <User size={16} />
              </div>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name *"
                required
                className="bg-white/90 pl-9 text-sm text-gray-800 rounded-md focus:ring-2 focus:ring-[#8e24aa]/50"
              />
            </div>

            {/* Email */}
            <div className="space-y-2 relative">
              <div className="absolute left-3 top-2.5 text-gray-500">
                <Mail size={16} />
              </div>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                required
                className="bg-white/90 pl-9 text-sm text-gray-800 rounded-md focus:ring-2 focus:ring-[#8e24aa]/50"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2 relative">
              <div className="absolute left-3 top-2.5 text-gray-500">
                <Phone size={16} />
              </div>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number *"
                required
                className="bg-white/90 pl-9 text-sm text-gray-800 rounded-md focus:ring-2 focus:ring-[#8e24aa]/50"
              />
            </div>

            {/* Class Select */}
            <div className="space-y-2">
              <Select value={formData.class} onValueChange={handleSelectChange}>
                <SelectTrigger className="bg-white/90 text-sm text-gray-800 rounded-md focus:ring-2 focus:ring-[#8e24aa]/50">
                  <SelectValue placeholder="Select Class" />
                </SelectTrigger>
                <SelectContent>
                  {["Nursery", "Kindergarten", ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`)].map((cls, i) => (
                    <SelectItem key={i} value={cls.toLowerCase().replace(" ", "")}>
                      {cls}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={3}
                className="bg-white/90 text-sm text-gray-800 rounded-md focus:ring-2 focus:ring-[#8e24aa]/50"
              />
            </div>

            {/* Submit Button */}
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#6a1b9a] via-[#8e24aa] to-[#ab47bc] text-white hover:from-[#5e1789] hover:to-[#9c1fb4] transition-all duration-300 font-serif rounded-md py-2"
              >
                Submit Enquiry
              </Button>
            </motion.div>

            {/* Offer Note */}
            <div className="text-center text-sm text-[#8e24aa] mt-2 font-medium font-serif">
              🎉 <span className="font-bold">20% OFF</span> on admission fees for early registrations!
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
