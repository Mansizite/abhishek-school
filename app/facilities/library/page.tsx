"use client"

import Image from "next/image"
import { SubNavHeader } from "@/components/sub-nav-header"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const facilitiesNavItems = [
  { title: "Library", href: "/facilities/library" },
  { title: "Labs", href: "/facilities/labs" },
  { title: "Sports Complex", href: "/facilities/sports" },
  { title: "Transport", href: "/facilities/transport" },
  { title: "Cafeteria", href: "/facilities/cafeteria" },
]

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function LibraryPage() {
  return (
    <div>
      <SubNavHeader title="Facilities" items={facilitiesNavItems} />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-sky-700 sm:text-4xl md:text-5xl">Library</h1>
          <div className="mb-6 h-1 w-24 bg-gradient-to-r from-sky-500 to-purple-500 mx-auto"></div>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Our state-of-the-art library is a hub of knowledge, inspiration, and discovery, providing students with
            access to a vast collection of books, digital resources, and a conducive environment for learning and
            research.
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
            <h2 className="mb-4 text-2xl font-bold text-gray-900">A World of Knowledge</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                The Abhishek International School Library is designed to be a center of academic excellence and
                intellectual growth. Spanning over 10,000 square feet across two floors, our library provides a
                spacious, well-lit, and comfortable environment for reading, research, and collaborative learning.
              </p>
              <p>
                Our library houses a comprehensive collection of over 30,000 books, periodicals, journals, and digital
                resources covering a wide range of subjects, from literature and history to science, technology, arts,
                and beyond. The collection is carefully curated to support the curriculum, foster a love for reading,
                and encourage independent learning.
              </p>
              <p>
                Beyond being a repository of books, our library is a dynamic learning space that hosts various
                activities such as author visits, book clubs, reading challenges, research workshops, and literary
                events, making it a vibrant part of our school community.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Library Overview"
              alt="Library Overview"
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
          <h2 className="mb-8 text-2xl font-bold text-center text-sky-700">Library Sections</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Main Reading Area",
                description: "A spacious area with comfortable seating arrangements for individual reading and study.",
                image: "/placeholder.svg?height=300&width=400&text=Reading Area",
              },
              {
                title: "Reference Section",
                description:
                  "Houses encyclopedias, dictionaries, atlases, and other reference materials for in-library use.",
                image: "/placeholder.svg?height=300&width=400&text=Reference Section",
              },
              {
                title: "Digital Resource Center",
                description:
                  "Equipped with computers for accessing digital databases, e-books, and online research tools.",
                image: "/placeholder.svg?height=300&width=400&text=Digital Center",
              },
              {
                title: "Periodicals Section",
                description: "Features current and archived newspapers, magazines, and journals from around the world.",
                image: "/placeholder.svg?height=300&width=400&text=Periodicals",
              },
              {
                title: "Children's Corner",
                description: "A colorful and engaging space designed specifically for our younger readers.",
                image: "/placeholder.svg?height=300&width=400&text=Children's Corner",
              },
              {
                title: "Group Study Rooms",
                description: "Private rooms for collaborative projects, group discussions, and peer tutoring.",
                image: "/placeholder.svg?height=300&width=400&text=Study Rooms",
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={fadeIn}
              >
                <Card className="overflow-hidden h-full">
                  <div className="relative h-48">
                    <Image
                      src={section.image || "/placeholder.svg"}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-sky-700 mb-2">{section.title}</h3>
                    <p className="text-gray-600">{section.description}</p>
                  </CardContent>
                </Card>
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
          <h2 className="mb-8 text-2xl font-bold text-center text-sky-700">Library Resources</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-purple-600 mb-4">Print Collection</h3>
              <div className="prose prose-lg max-w-none">
                <p>Our extensive print collection includes:</p>
                <ul>
                  <li>Fiction books spanning various genres and reading levels</li>
                  <li>Non-fiction books covering all academic subjects and beyond</li>
                  <li>Reference materials including encyclopedias, dictionaries, and atlases</li>
                  <li>Periodicals including newspapers, magazines, and academic journals</li>
                  <li>Special collections of award-winning literature and classics</li>
                  <li>Books in multiple languages to support our diverse student body</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-purple-600 mt-8 mb-4">Digital Resources</h3>
              <div className="prose prose-lg max-w-none">
                <p>In addition to our print collection, we offer a wide range of digital resources:</p>
                <ul>
                  <li>Access to major online research databases</li>
                  <li>E-books and audiobooks</li>
                  <li>Digital encyclopedias and reference materials</li>
                  <li>Educational videos and documentaries</li>
                  <li>Language learning software</li>
                  <li>Online newspapers and magazines from around the world</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-r from-sky-50 to-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-sky-700 mb-4">Library by Numbers</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-3xl font-bold text-purple-600">30,000+</div>
                    <p className="text-gray-600">Books</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-3xl font-bold text-sky-600">5,000+</div>
                    <p className="text-gray-600">E-books</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-3xl font-bold text-purple-600">100+</div>
                    <p className="text-gray-600">Periodicals</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-3xl font-bold text-sky-600">20+</div>
                    <p className="text-gray-600">Online Databases</p>
                  </div>
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-sky-700 mb-4">Library Services</h3>
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
                          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">Book Borrowing</span>
                        <p className="text-sm text-gray-600">
                          Students can borrow up to 5 books for a period of 2 weeks
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
                          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">Research Assistance</span>
                        <p className="text-sm text-gray-600">
                          Librarians provide guidance on research methodologies and resources
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
                          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">Information Literacy Workshops</span>
                        <p className="text-sm text-gray-600">
                          Regular workshops on research skills, digital literacy, and critical evaluation of sources
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
                          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">Printing and Photocopying</span>
                        <p className="text-sm text-gray-600">
                          Self-service printing and photocopying facilities available at nominal charges
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
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
          <h2 className="mb-8 text-2xl font-bold text-center text-sky-700">Library Programs and Activities</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Book Clubs",
                description:
                  "Regular meetings for students to discuss books, share insights, and develop critical thinking skills.",
                schedule: "Weekly",
              },
              {
                title: "Author Visits",
                description: "Opportunities to meet and interact with renowned authors, poets, and illustrators.",
                schedule: "Quarterly",
              },
              {
                title: "Reading Challenges",
                description: "Fun competitions to encourage reading across different genres and topics.",
                schedule: "Seasonal",
              },
              {
                title: "Research Workshops",
                description:
                  "Sessions on research methodologies, citation styles, and effective use of library resources.",
                schedule: "Monthly",
              },
              {
                title: "Book Fairs",
                description: "Events where students can browse and purchase books from various publishers.",
                schedule: "Bi-annually",
              },
              {
                title: "Literary Festivals",
                description: "Celebrations of literature through readings, performances, and creative activities.",
                schedule: "Annually",
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={fadeIn}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <h3 className="text-xl font-bold text-sky-700 mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex items-center text-sm text-purple-600 font-medium">
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
                    className="mr-2"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <line x1="16" x2="16" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="2" y2="6"></line>
                    <line x1="3" x2="21" y1="10" y2="10"></line>
                  </svg>
                  <span>Schedule: {program.schedule}</span>
                </div>
              </motion.div>
            ))}
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
          <h2 className="mb-6 text-2xl font-bold text-sky-700">Meet Our Library Team</h2>
          <div className="grid gap-8 md:grid-cols-3 mt-8">
            {[
              {
                name: "Ms. Anjali Sharma",
                position: "Head Librarian",
                qualification: "M.Lib, M.Phil in Library Science",
                image: "/placeholder.svg?height=300&width=300&text=Anjali Sharma",
              },
              {
                name: "Mr. Rajiv Kumar",
                position: "Reference Librarian",
                qualification: "M.Lib, Specialization in Digital Resources",
                image: "/placeholder.svg?height=300&width=300&text=Rajiv Kumar",
              },
              {
                name: "Ms. Priya Patel",
                position: "Children's Librarian",
                qualification: "B.Lib, Diploma in Children's Literature",
                image: "/placeholder.svg?height=300&width=300&text=Priya Patel",
              },
            ].map((staff, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={fadeIn}
                className="text-center"
              >
                <div className="mb-4 mx-auto relative h-[200px] w-[200px] overflow-hidden rounded-full border-4 border-sky-500">
                  <Image src={staff.image || "/placeholder.svg"} alt={staff.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold">{staff.name}</h3>
                <p className="text-purple-600 font-medium">{staff.position}</p>
                <p className="text-gray-600">{staff.qualification}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

