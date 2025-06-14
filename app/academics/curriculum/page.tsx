"use client"

import Image from "next/image"
import { SubNavHeader } from "@/components/sub-nav-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const academicsNavItems = [
  { title: "Curriculum", href: "/academics/curriculum" },
  { title: "Faculty", href: "/academics/faculty" },
  { title: "Examination", href: "/academics/examination" },
  { title: "Results", href: "/academics/results" },
]

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function CurriculumPage() {
  return (
    <div>
      <SubNavHeader title="Academics" items={academicsNavItems} />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-sky-700 sm:text-4xl md:text-5xl">Curriculum</h1>
          <div className="mb-6 h-1 w-24 bg-gradient-to-r from-sky-500 to-purple-500 mx-auto"></div>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Our comprehensive curriculum is designed to provide a well-rounded education that nurtures intellectual,
            physical, emotional, and social development of our students.
          </p>
        </div>

        <motion.div
          className="grid gap-12 md:grid-cols-2 items-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Our Educational Philosophy</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                At Abhishek International School, we believe that education should be holistic, student-centered, and
                focused on developing not just academic knowledge but also essential life skills, values, and character.
              </p>
              <p>
                Our curriculum is designed to foster critical thinking, creativity, collaboration, and communication
                skills. We emphasize conceptual understanding over rote learning, encouraging students to explore,
                question, and discover.
              </p>
              <p>
                We recognize that each student is unique, with different strengths, interests, and learning styles. Our
                teaching approaches are differentiated to cater to individual needs, ensuring that every student can
                reach their full potential.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Educational Philosophy"
              alt="Educational Philosophy"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <Tabs defaultValue="primary" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="primary">Primary Section</TabsTrigger>
              <TabsTrigger value="middle">Middle Section</TabsTrigger>
              <TabsTrigger value="senior">Senior Section</TabsTrigger>
            </TabsList>

            <TabsContent value="primary" className="mt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  variants={fadeIn}
                >
                  <h3 className="text-2xl font-bold text-sky-700 mb-4">Primary Section (Grades 1-5)</h3>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      Our primary curriculum focuses on building a strong foundation in core subjects while nurturing
                      curiosity and creativity. We follow an activity-based learning approach that makes education
                      engaging and enjoyable for young learners.
                    </p>
                    <p>
                      The curriculum is designed to develop essential skills such as reading, writing, numeracy,
                      critical thinking, and problem-solving. We also emphasize character development, social skills,
                      and environmental awareness through various activities and projects.
                    </p>
                  </div>

                  <h4 className="text-xl font-bold text-purple-600 mt-6 mb-3">Core Subjects</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-sky-600 mr-2 mt-1"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                      <span>English Language and Literature</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-sky-600 mr-2 mt-1"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                      <span>Mathematics</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-sky-600 mr-2 mt-1"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                      <span>Science</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-sky-600 mr-2 mt-1"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                      <span>Social Studies</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-sky-600 mr-2 mt-1"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                      <span>Hindi/Regional Language</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  variants={fadeIn}
                >
                  <h4 className="text-xl font-bold text-purple-600 mb-3">Co-Curricular Activities</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-sky-600 mr-2 mt-1"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                      <span>Art and Craft</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-sky-600 mr-2 mt-1"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                      <span>Music and Dance</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-sky-600 mr-2 mt-1"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                      <span>Physical Education</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-sky-600 mr-2 mt-1"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                      <span>Computer Education</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-sky-600 mr-2 mt-1"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                      <span>Value Education</span>
                    </li>
                  </ul>

                  <div className="bg-gradient-to-r from-sky-50 to-purple-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-sky-700 mb-3">Teaching Methodology</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-sky-100 p-2 rounded-full mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-sky-600"
                          >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium">Activity-Based Learning</span>
                          <p className="text-sm text-gray-600">
                            Hands-on activities that make learning fun and engaging
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-sky-100 p-2 rounded-full mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-sky-600"
                          >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium">Thematic Approach</span>
                          <p className="text-sm text-gray-600">
                            Integrated learning through themes that connect different subjects
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-sky-100 p-2 rounded-full mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-sky-600"
                          >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium">Experiential Learning</span>
                          <p className="text-sm text-gray-600">Learning through direct experiences and reflection</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="middle" className="mt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  variants={fadeIn}
                >
                  <h3 className="text-2xl font-bold text-sky-700 mb-4">Middle Section (Grades 6-8)</h3>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      The middle school curriculum builds upon the foundation laid in primary years and introduces more
                      advanced concepts. It is designed to develop analytical thinking, research skills, and
                      subject-specific knowledge while continuing to nurture creativity and personal development.
                    </p>
                    <p>
                      Students are encouraged to explore their interests and aptitudes through a variety of academic and
                      co-curricular activities. The curriculum also focuses on developing life skills, digital literacy,
                      and environmental consciousness.
                    </p>
                  </div>

                  <h4 className="text-xl font-bold text-purple-600 mt-6 mb-3">Core Subjects</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-sky-600 mr-2 mt-1"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                      <span>English Language and Literature</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-sky-600 mr-2 mt-1"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                      <span>Mathematics</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-sky-600 mr-2 mt-1"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                      <span>Science (Physics, Chemistry, Biology)</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-sky-600 mr-2 mt-1"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                      <span>Social Science (History, Geography, Civics)</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-sky-600 mr-2 mt-1"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                      <span>Hindi/Regional Language</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-sky-600 mr-2 mt-1"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                      <span>Third Language (Sanskrit/French/German)</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  variants={fadeIn}
                >
                  <h4 className="text-xl font-bold text-purple-600 mb-3">Co-Curricular Activities</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-sky-600 mr-2 mt-1"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                      <span>Computer Science</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-sky-600 mr-2 mt-1"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                      <span>Art Education</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-sky-600 mr-2 mt-1"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                      <span>Music (Vocal and Instrumental)</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-sky-600 mr-2 mt-1"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                      <span>Physical Education and Sports</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-sky-600 mr-2 mt-1"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                      <span>Life Skills and Value Education</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-sky-600 mr-2 mt-1"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                      <span>Environmental Studies</span>
                    </li>
                  </ul>

                  <div className="bg-gradient-to-r from-sky-50 to-purple-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-sky-700 mb-3">Assessment Pattern</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-sky-100 p-2 rounded-full mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-sky-600"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium">Formative Assessments</span>
                          <p className="text-sm text-gray-600">
                            Regular assessments through projects, quizzes, and class participation
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-sky-100 p-2 rounded-full mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-sky-600"
                          >
                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                            <line x1="16" x2="16" y1="2" y2="6"></line>
                            <line x1="8" x2="8" y1="2" y2="6"></line>
                            <line x1="3" x2="21" y1="10" y2="10"></line>
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium">Summative Assessments</span>
                          <p className="text-sm text-gray-600">
                            Term-end examinations to evaluate overall understanding
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-sky-100 p-2 rounded-full mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-sky-600"
                          >
                            <path d="M8.21 13.89L7 23l9-9-8.99-9L7.2 13.9"></path>
                            <path d="M14.12 14.12l2.16 2.16a2.5 2.5 0 1 1-3.54 3.54l-2.15-2.16"></path>
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium">Holistic Development</span>
                          <p className="text-sm text-gray-600">
                            Evaluation of co-scholastic areas and personal-social qualities
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="senior" className="mt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  variants={fadeIn}
                >
                  <h3 className="text-2xl font-bold text-sky-700 mb-4">Senior Section (Grades 9-12)</h3>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      The senior school curriculum is aligned with national board requirements and focuses on preparing
                      students for higher education and career choices. It offers a rigorous academic program that
                      develops in-depth subject knowledge, critical thinking, and problem-solving skills.
                    </p>
                    <p>
                      Students can choose from different streams - Science, Commerce, and Humanities - based on their
                      interests and career aspirations. The curriculum also includes career counseling, competitive exam
                      preparation, and opportunities for internships and research projects.
                    </p>
                  </div>

                  <h3 className="text-xl font-bold text-purple-600 mt-6 mb-3">Streams Offered</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-bold text-sky-700">Science Stream</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Core Subjects: Physics, Chemistry, Biology/Mathematics
                        </p>
                        <p className="text-sm text-gray-600">Electives: Computer Science, Economics, Psychology</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-bold text-sky-700">Commerce Stream</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Core Subjects: Accountancy, Business Studies, Economics
                        </p>
                        <p className="text-sm text-gray-600">
                          Electives: Mathematics, Computer Science, Entrepreneurship
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-bold text-sky-700">Humanities Stream</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Core Subjects: History, Geography, Political Science
                        </p>
                        <p className="text-sm text-gray-600">Electives: Psychology, Economics, Sociology, Fine Arts</p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  variants={fadeIn}
                >
                  <h3 className="text-xl font-bold text-purple-600 mb-3">Additional Programs</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-full mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-purple-600"
                        >
                          <path d="M8.21 13.89L7 23l9-9-8.99-9L7.2 13.9"></path>
                          <path d="M14.12 14.12l2.16 2.16a2.5 2.5 0 1 1-3.54 3.54l-2.15-2.16"></path>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">Career Counseling</span>
                        <p className="text-sm text-gray-600">
                          Professional guidance for higher education and career choices
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-full mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-purple-600"
                        >
                          <path d="M8.21 13.89L7 23l9-9-8.99-9L7.2 13.9"></path>
                          <path d="M14.12 14.12l2.16 2.16a2.5 2.5 0 1 1-3.54 3.54l-2.15-2.16"></path>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">Competitive Exam Preparation</span>
                        <p className="text-sm text-gray-600">
                          Special coaching for JEE, NEET, CLAT, and other entrance exams
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-full mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-purple-600"
                        >
                          <path d="M8.21 13.89L7 23l9-9-8.99-9L7.2 13.9"></path>
                          <path d="M14.12 14.12l2.16 2.16a2.5 2.5 0 1 1-3.54 3.54l-2.15-2.16"></path>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">Leadership Development</span>
                        <p className="text-sm text-gray-600">
                          Student council, prefect system, and community service initiatives
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-full mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-purple-600"
                        >
                          <path d="M8.21 13.89L7 23l9-9-8.99-9L7.2 13.9"></path>
                          <path d="M14.12 14.12l2.16 2.16a2.5 2.5 0 1 1-3.54 3.54l-2.15-2.16"></path>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">Research Projects</span>
                        <p className="text-sm text-gray-600">Opportunities to work on research projects with mentors</p>
                      </div>
                    </li>
                  </ul>

                  <div className="bg-gradient-to-r from-sky-50 to-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-sky-700 mb-3">Academic Calendar</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-sky-100 p-2 rounded-full mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-sky-600"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium">Academic Year</span>
                          <p className="text-sm text-gray-600">April to March, divided into two terms</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-sky-100 p-2 rounded-full mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-sky-600"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium">Examination Schedule</span>
                          <p className="text-sm text-gray-600">
                            Term exams in September and March, with regular unit tests
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-sky-100 p-2 rounded-full mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-sky-600"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium">Board Examinations</span>
                          <p className="text-sm text-gray-600">
                            Pre-board exams in December, final board exams in February-March
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="mb-6 text-2xl font-bold text-sky-700">Our Educational Philosophy</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            At Abhishek International School, we believe in providing a balanced education that nurtures the
            intellectual, physical, emotional, and social dimensions of a child's development. Our curriculum is
            designed to foster a love for learning, critical thinking skills, creativity, and character development.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-700 mb-3">Teaching Methodology</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="bg-sky-100 p-1 rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-sky-600"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Student-centered approach</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-sky-100 p-1 rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-sky-600"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Experiential learning</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-sky-100 p-1 rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-sky-600"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Inquiry-based learning</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-sky-100 p-1 rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-sky-600"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Collaborative learning</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-sky-100 p-1 rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-sky-600"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Technology integration</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-700 mb-3">Assessment System</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="bg-purple-100 p-1 rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-600"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Continuous and comprehensive evaluation</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 p-1 rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-600"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Formative and summative assessments</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 p-1 rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-600"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Project-based assessments</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 p-1 rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-600"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Regular feedback and progress reports</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 p-1 rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-600"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">Parent-teacher meetings</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-700 mb-3">Special Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="bg-sky-100 p-1 rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-sky-600"
                    >
                      <path d="M8.21 13.89L7 23l9-9-8.99-9L7.2 13.9"></path>
                      <path d="M14.12 14.12l2.16 2.16a2.5 2.5 0 1 1-3.54 3.54l-2.15-2.16"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">STEM education program</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-sky-100 p-1 rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-sky-600"
                    >
                      <path d="M8.21 13.89L7 23l9-9-8.99-9L7.2 13.9"></path>
                      <path d="M14.12 14.12l2.16 2.16a2.5 2.5 0 1 1-3.54 3.54l-2.15-2.16"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Language enrichment program</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-sky-100 p-1 rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-sky-600"
                    >
                      <path d="M8.21 13.89L7 23l9-9-8.99-9L7.2 13.9"></path>
                      <path d="M14.12 14.12l2.16 2.16a2.5 2.5 0 1 1-3.54 3.54l-2.15-2.16"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Life skills and value education</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-sky-100 p-1 rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-sky-600"
                    >
                      <path d="M8.21 13.89L7 23l9-9-8.99-9L7.2 13.9"></path>
                      <path d="M14.12 14.12l2.16 2.16a2.5 2.5 0 1 1-3.54 3.54l-2.15-2.16"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">International exchange programs</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-sky-100 p-1 rounded-full mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-sky-600"
                    >
                      <path d="M8.21 13.89L7 23l9-9-8.99-9L7.2 13.9"></path>
                      <path d="M14.12 14.12l2.16 2.16a2.5 2.5 0 1 1-3.54 3.54l-2.15-2.16"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">Career counseling and guidance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

