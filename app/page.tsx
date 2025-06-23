
"use client"

import { WelcomeSection } from "@/components/welcome-section"
import { FeatureCard } from "@/components/feature-card"
import { Award, BookOpen, GraduationCap, Users, Lightbulb, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { EnquiryForm } from "@/components/enquiry-form"
import { SocialSidebar } from "@/components/social-sidebar"
import { Chatbot } from "@/components/chatbot"
import { motion } from "framer-motion"

const features = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description: "Our curriculum is designed to foster critical thinking, creativity, and a love for learning.",
  },
  {
    icon: GraduationCap,
    title: "Qualified Faculty",
    description: "Learn from experienced educators who are passionate about teaching and student development.",
  },
  {
    icon: Dumbbell,
    title: "Sports & Recreation",
    description: "State-of-the-art sports facilities to encourage physical fitness and team spirit.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "Modern labs and innovation centers to nurture creativity and scientific temperament.",
  },
  {
    icon: Users,
    title: "Community Engagement",
    description: "Regular community service activities to instill social responsibility in students.",
  },
  {
    icon: Award,
    title: "Recognition & Awards",
    description: "Our students consistently achieve excellence in academics, sports, and cultural activities.",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col font-serif">
      <SocialSidebar />
      <Chatbot />

      {/* Hero Section with Video */}
      <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-6 items-center text-white">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-3xl lg:text-4xl mb-4 drop-shadow-lg">
                Welcome to Abhishek International School
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl drop-shadow-md">
                Nurturing young minds to become future leaders through quality education and holistic development.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-[#6a1b9a] via-[#8e24aa] to-[#ab47bc]"
                >
                  <Link href="/admission">Apply Now</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#8e24aa] text-[#8e24aa] hover:bg-[#f3e5f5] px-6 py-3 rounded-lg transition-all duration-300"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </motion.div>

            <div className="md:ml-auto">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      <WelcomeSection />

      
{/* Why Choose Us Section */}
<section className="py-16 ">
  <div className="container mx-auto px-4">
    <div className="mb-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
       
        <h2 className="mb-4 text-3xl font-bold sm:text-3xl text-gray-800">
          Why Choose <span className="text-[#8e24aa]">Abhishek International School ?</span>
        </h2>
        <div className="mb-6 h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto"></div>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Discover what makes us the preferred choice for parents who value holistic education and excellence
        </p>
      </motion.div>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="relative overflow-hidden bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#f3e5f5] to-[#e1bee7] opacity-10"></div>
          
          <div className="p-6 relative z-10">
            <div className="flex items-start mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#f3e5f5] text-[#8e24aa] mr-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
            </div>
            
            <p className="text-gray-600">{feature.description}</p>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex flex-wrap gap-2">
                {Array(5).fill(0).map((_, i) => (
                  <div 
                    key={i}
                    className="w-2 h-2 rounded-full bg-[#d1c4e9]"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    
    {/* Testimonial */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-16 max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
    >
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 mr-4">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
        </div>
        <div>
          <h4 className="font-bold text-gray-800">Rajesh Sharma</h4>
          <p className="text-sm text-gray-600">Parent of Class 10 Student</p>
        </div>
        
        
      </div>
      
      
      
      <div className="relative">
        <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-[#e1bee7]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-gray-700 italic pl-8">
          "The personalized attention my child receives has transformed his confidence and academic performance. The teachers go above and beyond to nurture each student's unique talents."
        </p>
      </div>
    </motion.div>
  </div>
</section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#6a1b9a] via-[#8e24aa] to-[#ab47bc] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold sm:text-3xl">Ready to Join Our School?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Take the first step towards providing your child with a quality education that focuses on holistic
              development.
            </p>
            
          
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-[#6a1b9a] via-[#8e24aa] to-[#ab47bc]">
                  <Link href="/admission">Apply for Admission</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="border-[#8e24aa] text-[#8e24aa] hover:bg-[#f3e5f5] px-6 py-3 rounded-lg transition-all duration-300">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest News & Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            
             
        <h2 className="mb-4 text-3xl font-bold sm:text-3xl text-gray-800">
          Latest News <span className="text-[#8e24aa]">& Events</span>
        </h2>
            
            <div className="mb-6 h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4 text-sm font-medium text-[#8e24aa]">April {item + 10}, 2023</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Annual Sports Day Celebration</h3>
                <p className="mb-4 text-gray-600">
                  Our school celebrated its Annual Sports Day with great enthusiasm. Students participated in various
                  sports activities.
                </p>
                <Link href="#" className="text-[#6a1b9a] hover:text-[#4a148c] font-medium">
                  Read More →
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" className="border-[#8e24aa] text-[#8e24aa] hover:bg-[#f3e5f5]">
                <Link href="/extra-curricular/events">View All Events</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
