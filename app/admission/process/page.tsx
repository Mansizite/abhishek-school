"use client"

import Image from "next/image"
import { SubNavHeader } from "@/components/sub-nav-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

const admissionNavItems = [
  { title: "Admission Process", href: "/admission/process" },
  { title: "Fee Structure", href: "/admission/fees" },
  { title: "Apply Online", href: "/admission/apply" },
  { title: "FAQs", href: "/admission/faqs" },
]

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function AdmissionProcessPage() {
  return (
    <div>
      <SubNavHeader title="Admission" items={admissionNavItems} />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-sky-700 sm:text-4xl md:text-5xl">Admission Process</h1>
          <div className="mb-6 h-1 w-24 bg-gradient-to-r from-sky-500 to-purple-500 mx-auto"></div>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Our admission process is designed to be transparent, fair, and comprehensive, allowing us to identify
            students who will thrive in our academic environment and contribute positively to our school community.
          </p>
        </div>

        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Admission Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Abhishek International School welcomes applications from students of all backgrounds who demonstrate
                  academic potential, curiosity, and a willingness to contribute to our diverse community. Our admission
                  process is comprehensive and considers various aspects of a student's profile.
                </p>
                <p>
                  We assess not only academic achievements but also co-curricular interests, character, and the
                  potential to benefit from and contribute to our educational program. We value diversity and seek to
                  create a student body that represents a wide range of backgrounds, experiences, and perspectives.
                </p>
                <p>
                  Admissions are offered based on availability of seats in each grade level. We encourage families to
                  apply early to increase the chances of securing a place for their child.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Admission Overview"
                alt="Admission Overview"
                fill
                className="object-cover"
              />
            </div>
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
          <h2 className="mb-8 text-2xl font-bold text-center text-sky-700">Step-by-Step Admission Process</h2>
          <div className="relative border-l-2 border-sky-500 ml-4 md:ml-0 md:mx-auto md:max-w-4xl pl-8 md:pl-0">
            {[
              {
                step: "Step 1",
                title: "Inquiry and School Visit",
                description:
                  "Contact our admissions office to schedule a campus tour and learn more about our programs, facilities, and educational philosophy.",
                image: "/placeholder.svg?height=200&width=300&text=School Visit",
              },
              {
                step: "Step 2",
                title: "Application Submission",
                description:
                  "Complete the online application form and submit it along with the required documents and application fee.",
                image: "/placeholder.svg?height=200&width=300&text=Application",
              },
              {
                step: "Step 3",
                title: "Entrance Assessment",
                description:
                  "Students are required to take an entrance assessment appropriate for their grade level to evaluate their academic readiness.",
                image: "/placeholder.svg?height=200&width=300&text=Assessment",
              },
              {
                step: "Step 4",
                title: "Student and Parent Interview",
                description:
                  "Shortlisted candidates and their parents are invited for an interview with the admissions committee.",
                image: "/placeholder.svg?height=200&width=300&text=Interview",
              },
              {
                step: "Step 5",
                title: "Admission Decision",
                description:
                  "Based on the assessment results, interview, and review of documents, the admissions committee makes a decision.",
                image: "/placeholder.svg?height=200&width=300&text=Decision",
              },
              {
                step: "Step 6",
                title: "Acceptance and Enrollment",
                description:
                  "Upon acceptance, parents need to complete the enrollment process by paying the admission fee and submitting additional documents.",
                image: "/placeholder.svg?height=200&width=300&text=Enrollment",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={fadeIn}
                className={`mb-12 md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                  <div className="bg-sky-100 inline-block px-3 py-1 rounded-full text-sky-700 font-bold mb-2">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
                  <div className="relative h-[150px] rounded-lg overflow-hidden shadow-md">
                    <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 mt-1 md:mt-0">
                  <div className="w-4 h-4 rounded-full bg-sky-500 border-4 border-white shadow"></div>
                </div>
              </motion.div>
            ))}
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
          <h2 className="mb-8 text-2xl font-bold text-center text-sky-700">Required Documents</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Completed Application Form",
                description: "The online application form must be filled out completely with accurate information.",
              },
              {
                title: "Birth Certificate",
                description: "A copy of the student's birth certificate for age verification.",
              },
              {
                title: "Academic Records",
                description: "Report cards and transcripts from the previous two academic years.",
              },
              {
                title: "Transfer Certificate",
                description: "A transfer certificate from the previous school (if applicable).",
              },
              {
                title: "Passport-sized Photographs",
                description: "Recent passport-sized photographs of the student.",
              },
              {
                title: "Identification Documents",
                description: "Copies of parents' and student's identification documents (Aadhar Card, Passport, etc.).",
              },
              {
                title: "Residential Proof",
                description: "Document proving the family's residential address.",
              },
              {
                title: "Medical Records",
                description: "Immunization records and any relevant medical information.",
              },
              {
                title: "Special Needs Documentation",
                description:
                  "Any documentation related to special educational needs or accommodations (if applicable).",
              },
            ].map((document, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={fadeIn}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-sky-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-sky-700 mb-2">{document.title}</h3>
                    <p className="text-gray-600">{document.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
          <h2 className="mb-8 text-2xl font-bold text-center text-sky-700">Admission Timeline</h2>
          <div className="bg-gradient-to-r from-sky-50 to-purple-50 p-8 rounded-lg">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  period: "November - December",
                  activities: "Application forms available online and at the school office",
                },
                {
                  period: "January - February",
                  activities: "Submission of applications and required documents",
                },
                {
                  period: "February - March",
                  activities: "Entrance assessments and interviews",
                },
                {
                  period: "March - April",
                  activities: "Admission decisions communicated to parents",
                },
                {
                  period: "April - May",
                  activities: "Enrollment process and fee payment",
                },
                {
                  period: "June",
                  activities: "Orientation program for new students and parents",
                },
              ].map((timeline, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  variants={fadeIn}
                  className="flex"
                >
                  <div className="bg-white p-4 rounded-lg shadow-md w-full">
                    <div className="font-bold text-purple-600 mb-2">{timeline.period}</div>
                    <p className="text-gray-700">{timeline.activities}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8 text-gray-600">
              <p>
                Note: The above timeline is for general guidance. Please contact the admissions office for specific
                dates and deadlines.
              </p>
            </div>
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
          <h2 className="mb-8 text-2xl font-bold text-center text-sky-700">Admission Criteria</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-purple-600 mb-4">Age Requirements</h3>
              <div className="prose prose-lg max-w-none">
                <p>The minimum age requirements for admission to different grades are as follows:</p>
                <ul>
                  <li>Nursery: 3+ years as of June 30th</li>
                  <li>Kindergarten: 4+ years as of June 30th</li>
                  <li>Grade 1: 5+ years as of June 30th</li>
                  <li>For other grades: Corresponding increase in age</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-purple-600 mt-8 mb-4">Academic Performance</h3>
              <div className="prose prose-lg max-w-none">
                <p>
                  For admission to grades 2 and above, we consider the student's academic performance in the previous
                  school. A minimum of 60% marks or equivalent grade in core subjects is generally expected.
                </p>
                <p>
                  The entrance assessment evaluates the student's proficiency in English, Mathematics, and Science (for
                  higher grades), aligned with the grade-level expectations.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-purple-600 mb-4">Interview Performance</h3>
              <div className="prose prose-lg max-w-none">
                <p>
                  The interview aims to assess the student's communication skills, confidence, interests, and alignment
                  with the school's values and ethos. For younger children, the interview is more informal and focuses
                  on basic readiness and social skills.
                </p>
                <p>
                  Parents are also interviewed to ensure that their educational philosophy and expectations align with
                  the school's approach.
                </p>
              </div>

              <h3 className="text-xl font-bold text-purple-600 mt-8 mb-4">Other Considerations</h3>
              <div className="prose prose-lg max-w-none">
                <p>While academic performance is important, we also value:</p>
                <ul>
                  <li>Co-curricular achievements and interests</li>
                  <li>Character and values</li>
                  <li>Potential to contribute to the school community</li>
                  <li>Special talents and abilities</li>
                </ul>
                <p>
                  Siblings of current students and children of alumni are given preference, subject to meeting the basic
                  admission criteria.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="mb-6 text-2xl font-bold text-sky-700">Ready to Apply?</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 mb-8">
            We invite you to take the first step towards providing your child with a quality education that focuses on
            holistic development and academic excellence. Our admissions team is here to guide you through every step of
            the process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-sky-600 to-purple-600 hover:from-sky-700 hover:to-purple-700"
              >
                <Link href="/admission/apply">Apply Online</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50">
                <Link href="/contact">Contact Admissions Office</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

