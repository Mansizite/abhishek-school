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
    <div className="flex flex-col">
      <SocialSidebar />
      <Chatbot />

      {/* Hero Section with Background Image */}
      {/* <section
        className="relative w-full min-h-[80vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            'url("https://img.freepik.com/free-vector/realistic-ice-skating-background_23-2150974035.jpg?t=st=1743822441~exp=1743826041~hmac=275e54cb28bd6f0fd5bfbcdb2dcc59efb150c9a53a19487c37e7748f71b3db54&w=1380")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
                Welcome to Abhishek International School
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl drop-shadow-md">
                Nurturing young minds to become future leaders through quality education and holistic development.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                    <Link href="/admission">Apply Now</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                    <Link href="/about">Learn More</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <div className="md:ml-auto">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section> */}
      <section
  className="relative w-full min-h-[80vh] bg-cover bg-center flex items-center"
  style={{
    backgroundImage:
      'url("https://img.freepik.com/free-vector/realistic-ice-skating-background_23-2150974035.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="grid md:grid-cols-2 gap-6 items-center text-white">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
          Welcome to Abhishek International School
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl drop-shadow-md">
          Nurturing young minds to become future leaders through quality education and holistic development.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
            <Link href="/admission">Apply Now</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
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

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-sky-700 sm:text-4xl">Why Choose Us</h2>
            <div className="mb-6 h-1 w-24 bg-gradient-to-r from-sky-500 to-purple-500 mx-auto"></div>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Discover what makes Abhishek International School the preferred choice for parents and students.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-sky-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Ready to Join Our School?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Take the first step towards providing your child with a quality education that focuses on holistic
              development.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/admission">Apply for Admission</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-sky-700 sm:text-4xl">Latest News & Events</h2>
            <div className="mb-6 h-1 w-24 bg-gradient-to-r from-sky-500 to-purple-500 mx-auto"></div>
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
                <div className="mb-4 text-sm font-medium text-purple-600">April {item + 10}, 2023</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Annual Sports Day Celebration</h3>
                <p className="mb-4 text-gray-600">
                  Our school celebrated its Annual Sports Day with great enthusiasm. Students participated in various
                  sports activities.
                </p>
                <Link href="#" className="text-sky-600 hover:text-sky-800 font-medium">
                  Read More →
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50">
                <Link href="/extra-curricular/events">View All Events</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

