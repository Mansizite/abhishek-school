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
      <Card className="shadow-xl border-t-4 border-t-sky-600 bg-white/90 backdrop-blur-sm overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-sky-600 to-purple-600 text-white rounded-t-lg pb-3">
          <CardTitle className="text-xl text-center flex items-center justify-center">
            <BookOpen className="mr-2 h-5 w-5" />
            Admission Enquiry
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <form onSubmit={handleSubmit} className="space-y-3">
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
                className="bg-white/80 pl-9"
              />
            </div>

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
                className="bg-white/80 pl-9"
              />
            </div>

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
                className="bg-white/80 pl-9"
              />
            </div>

            <div className="space-y-2">
              <Select value={formData.class} onValueChange={handleSelectChange}>
                <SelectTrigger className="bg-white/80">
                  <SelectValue placeholder="Select Class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nursery">Nursery</SelectItem>
                  <SelectItem value="kg">Kindergarten</SelectItem>
                  <SelectItem value="1">Class 1</SelectItem>
                  <SelectItem value="2">Class 2</SelectItem>
                  <SelectItem value="3">Class 3</SelectItem>
                  <SelectItem value="4">Class 4</SelectItem>
                  <SelectItem value="5">Class 5</SelectItem>
                  <SelectItem value="6">Class 6</SelectItem>
                  <SelectItem value="7">Class 7</SelectItem>
                  <SelectItem value="8">Class 8</SelectItem>
                  <SelectItem value="9">Class 9</SelectItem>
                  <SelectItem value="10">Class 10</SelectItem>
                  <SelectItem value="11">Class 11</SelectItem>
                  <SelectItem value="12">Class 12</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={3}
                className="bg-white/80"
              />
            </div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-sky-600 to-purple-600 hover:from-sky-700 hover:to-purple-700"
              >
                Submit Enquiry
              </Button>
            </motion.div>

            <div className="text-center text-sm text-gray-500 mt-2">
              <span className="text-sky-600 font-semibold">20% OFF</span> on admission fees for early registrations!
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}

