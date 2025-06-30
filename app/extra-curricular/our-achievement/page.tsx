// "use client"

// import Image from "next/image"
// import { SubNavHeader } from "@/components/sub-nav-header"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { motion } from "framer-motion"

// const extraCurricularNavItems = [
//   { title: "Sports", href: "/extra-curricular/sports" },
//   { title: "Arts & Culture", href: "/extra-curricular/arts" },
//   { title: "Clubs", href: "/extra-curricular/clubs" },
//   { title: "Events", href: "/extra-curricular/events" },
// ]

// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// }

// export default function ArtsAndCulturePage() {
//   return (
//     <div>
//       <SubNavHeader title="Extra Curricular Activities" items={extraCurricularNavItems} />

//       <div className="container mx-auto px-4 py-12">
//         <div className="mb-12 text-center">
//           <h1 className="mb-4 text-3xl font-bold text-sky-700 sm:text-4xl md:text-5xl">Arts & Culture</h1>
//           <div className="mb-6 h-1 w-24 bg-gradient-to-r from-sky-500 to-purple-500 mx-auto"></div>
//           <p className="mx-auto max-w-3xl text-lg text-gray-600">
//             At Abhishek International School, we believe that arts and cultural activities are essential for nurturing
//             creativity, self-expression, and appreciation for diverse cultural traditions.
//           </p>
//         </div>

//         <Tabs defaultValue="visual-arts" className="mb-16">
//           <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
//             <TabsTrigger value="visual-arts">Visual Arts</TabsTrigger>
//             <TabsTrigger value="performing-arts">Performing Arts</TabsTrigger>
//             <TabsTrigger value="cultural">Cultural Programs</TabsTrigger>
//           </TabsList>

//           <TabsContent value="visual-arts" className="mt-8">
//             <div className="grid gap-12 md:grid-cols-2 items-center">
//               <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//                 variants={fadeIn}
//               >
//                 <h2 className="mb-4 text-2xl font-bold text-gray-900">Visual Arts Program</h2>
//                 <div className="prose prose-lg max-w-none">
//                   <p>
//                     Our visual arts program provides students with opportunities to explore various art forms,
//                     techniques, and mediums. From drawing and painting to sculpture and digital art, students are
//                     encouraged to experiment, create, and express themselves through visual media.
//                   </p>
//                   <p>
//                     The program is designed to develop technical skills, aesthetic sensibility, and critical thinking.
//                     Students learn about art history, different artistic traditions, and contemporary art practices,
//                     broadening their understanding and appreciation of visual arts.
//                   </p>
//                   <p>
//                     Regular art exhibitions, competitions, and workshops provide platforms for students to showcase
//                     their work, receive feedback, and learn from professional artists and each other.
//                   </p>
//                 </div>

//                 <h3 className="text-xl font-bold text-purple-600 mt-6 mb-3">Art Facilities</h3>
//                 <ul className="space-y-2">
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="text-sky-600 mr-2 mt-1"
//                     >
//                       <path d="m2 22 1-1h18l1 1"></path>
//                       <path d="M7 2v16h10V2"></path>
//                       <path d="M7 2h10"></path>
//                     </svg>
//                     <span>Fully equipped art studios with natural lighting</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="text-sky-600 mr-2 mt-1"
//                     >
//                       <path d="m2 22 1-1h18l1 1"></path>
//                       <path d="M7 2v16h10V2"></path>
//                       <path d="M7 2h10"></path>
//                     </svg>
//                     <span>Pottery and sculpture workshop</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="text-sky-600 mr-2 mt-1"
//                     >
//                       <path d="m2 22 1-1h18l1 1"></path>
//                       <path d="M7 2v16h10V2"></path>
//                       <path d="M7 2h10"></path>
//                     </svg>
//                     <span>Digital art lab with graphic tablets and software</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="text-sky-600 mr-2 mt-1"
//                     >
//                       <path d="m2 22 1-1h18l1 1"></path>
//                       <path d="M7 2v16h10V2"></path>
//                       <path d="M7 2h10"></path>
//                     </svg>
//                     <span>Photography studio with professional equipment</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="text-sky-600 mr-2 mt-1"
//                     >
//                       <path d="m2 22 1-1h18l1 1"></path>
//                       <path d="M7 2v16h10V2"></path>
//                       <path d="M7 2h10"></path>
//                     </svg>
//                     <span>Art gallery for displaying student work</span>
//                   </li>
//                 </ul>
//               </motion.div>

//               <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 variants={fadeIn}
//               >
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
//                     <Image
//                       src="/placeholder.svg?height=200&width=300&text=Painting"
//                       alt="Painting"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
//                     <Image
//                       src="/placeholder.svg?height=200&width=300&text=Sculpture"
//                       alt="Sculpture"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
//                     <Image
//                       src="/placeholder.svg?height=200&width=300&text=Digital Art"
//                       alt="Digital Art"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
//                     <Image
//                       src="/placeholder.svg?height=200&width=300&text=Photography"
//                       alt="Photography"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 </div>

//                 <div className="mt-6 bg-gradient-to-r from-sky-50 to-purple-50 p-6 rounded-lg">
//                   <h3 className="text-xl font-bold text-sky-700 mb-3">Student Art Gallery</h3>
//                   <p className="text-gray-700 mb-4">
//                     Our school hosts regular art exhibitions to showcase student work. These exhibitions are open to
//                     parents, community members, and art enthusiasts, providing students with real-world exposure and
//                     appreciation for their creativity.
//                   </p>
//                   <div className="flex justify-between text-sm">
//                     <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded-full">Annual Exhibition: May</span>
//                     <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
//                       Semester Showcases: Sep & Jan
//                     </span>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </TabsContent>

//           <TabsContent value="performing-arts" className="mt-8">
//             <div className="grid gap-12 md:grid-cols-2 items-center">
//               <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//                 variants={fadeIn}
//               >
//                 <h2 className="mb-4 text-2xl font-bold text-gray-900">Performing Arts Program</h2>
//                 <div className="prose prose-lg max-w-none">
//                   <p>
//                     Our performing arts program encompasses music, dance, theater, and public speaking. It provides
//                     students with opportunities to develop their talents, build confidence, and experience the joy of
//                     performance.
//                   </p>
//                   <p>
//                     Students receive training from experienced instructors who are accomplished performers in their
//                     respective fields. Regular performances, recitals, and productions allow students to showcase their
//                     skills and gain valuable stage experience.
//                   </p>
//                   <p>
//                     The program also includes exposure to diverse musical traditions, dance forms, and theatrical styles
//                     from around the world, fostering cultural awareness and appreciation.
//                   </p>
//                 </div>

//                 <h3 className="text-xl font-bold text-purple-600 mt-6 mb-3">Performing Arts Facilities</h3>
//                 <ul className="space-y-2">
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="text-sky-600 mr-2 mt-1"
//                     >
//                       <path d="M9 18V5l12-2v13"></path>
//                       <circle cx="6" cy="18" r="3"></circle>
//                       <circle cx="18" cy="16" r="3"></circle>
//                     </svg>
//                     <span>Music rooms with acoustic treatment</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="text-sky-600 mr-2 mt-1"
//                     >
//                       <path d="M9 18V5l12-2v13"></path>
//                       <circle cx="6" cy="18" r="3"></circle>
//                       <circle cx="18" cy="16" r="3"></circle>
//                     </svg>
//                     <span>Dance studios with sprung floors and mirrors</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="text-sky-600 mr-2 mt-1"
//                     >
//                       <path d="M9 18V5l12-2v13"></path>
//                       <circle cx="6" cy="18" r="3"></circle>
//                       <circle cx="18" cy="16" r="3"></circle>
//                     </svg>
//                     <span>400-seat auditorium with professional lighting and sound</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="text-sky-600 mr-2 mt-1"
//                     >
//                       <path d="M9 18V5l12-2v13"></path>
//                       <circle cx="6" cy="18" r="3"></circle>
//                       <circle cx="18" cy="16" r="3"></circle>
//                     </svg>
//                     <span>Recording studio for music production</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="text-sky-600 mr-2 mt-1"
//                     >
//                       <path d="M9 18V5l12-2v13"></path>
//                       <circle cx="6" cy="18" r="3"></circle>
//                       <circle cx="18" cy="16" r="3"></circle>
//                     </svg>
//                     <span>Costume and prop workshop</span>
//                   </li>
//                 </ul>
//               </motion.div>

//               <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 variants={fadeIn}
//               >
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
//                     <Image
//                       src="/placeholder.svg?height=200&width=300&text=Music"
//                       alt="Music"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
//                     <Image
//                       src="/placeholder.svg?height=200&width=300&text=Dance"
//                       alt="Dance"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
//                     <Image
//                       src="/placeholder.svg?height=200&width=300&text=Theater"
//                       alt="Theater"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
//                     <Image
//                       src="/placeholder.svg?height=200&width=300&text=Public Speaking"
//                       alt="Public Speaking"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 </div>

//                 <div className="mt-6 bg-gradient-to-r from-sky-50 to-purple-50 p-6 rounded-lg">
//                   <h3 className="text-xl font-bold text-sky-700 mb-3">Annual Productions</h3>
//                   <p className="text-gray-700 mb-4">
//                     Each year, our school stages major productions that showcase the talents of our students in music,
//                     dance, and theater. These productions are collaborative efforts that involve students from different
//                     grade levels and departments.
//                   </p>
//                   <div className="flex justify-between text-sm">
//                     <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded-full">Annual Musical: December</span>
//                     <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Dance Showcase: March</span>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </TabsContent>

//           <TabsContent value="cultural" className="mt-8">
//             <div className="grid gap-12 md:grid-cols-2 items-center">
//               <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//                 variants={fadeIn}
//               >
//                 <h2 className="mb-4 text-2xl font-bold text-gray-900">Cultural Programs</h2>
//                 <div className="prose prose-lg max-w-none">
//                   <p>
//                     Our cultural programs celebrate diversity and promote understanding and appreciation of various
//                     cultural traditions. Through festivals, celebrations, and special events, students learn about
//                     different cultures, customs, and practices.
//                   </p>
//                   <p>
//                     These programs provide opportunities for students to explore their own cultural heritage and share
//                     it with others, fostering a sense of pride in their identity and respect for cultural diversity.
//                   </p>
//                   <p>
//                     Cultural exchange programs, international days, and collaborative projects with schools from
//                     different countries further enrich our students' cultural awareness and global perspective.
//                   </p>
//                 </div>

//                 <h3 className="text-xl font-bold text-purple-600 mt-6 mb-3">Annual Cultural Events</h3>
//                 <ul className="space-y-2">
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="text-sky-600 mr-2 mt-1"
//                     >
//                       <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
//                       <line x1="16" x2="16" y1="2" y2="6"></line>
//                       <line x1="8" x2="8" y1="2" y2="6"></line>
//                       <line x1="3" x2="21" y1="10" y2="10"></line>
//                     </svg>
//                     <span>International Cultural Festival (October)</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="text-sky-600 mr-2 mt-1"
//                     >
//                       <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
//                       <line x1="16" x2="16" y1="2" y1="6"></line>
//                       <line x1="8" x2="8" y1="2" y2="6"></line>
//                       <line x1="3" x2="21" y1="10" y2="10"></line>
//                     </svg>
//                     <span>Traditional Arts and Crafts Exhibition (January)</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="text-sky-600 mr-2 mt-1"
//                     >
//                       <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
//                       <line x1="16" x2="16" y1="2" y2="6"></line>
//                       <line x1="8" x2="8" y1="2" y2="6"></line>
//                       <line x1="3" x2="21" y1="10" y2="10"></line>
//                     </svg>
//                     <span>Heritage Day Celebrations (August)</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="text-sky-600 mr-2 mt-1"
//                     >
//                       <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
//                       <line x1="16" x2="16" y1="2" y2="6"></line>
//                       <line x1="8" x2="8" y1="2" y2="6"></line>
//                       <line x1="3" x2="21" y1="10" y2="10"></line>
//                     </svg>
//                     <span>Festival of Languages (February)</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="text-sky-600 mr-2 mt-1"
//                     >
//                       <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
//                       <line x1="16" x2="16" y1="2" y2="6"></line>
//                       <line x1="8" x2="8" y1="2" y2="6"></line>
//                       <line x1="3" x2="21" y1="10" y2="10"></line>
//                     </svg>
//                     <span>Global Cuisine Week (November)</span>
//                   </li>
//                 </ul>
//               </motion.div>

//               <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 variants={fadeIn}
//               >
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
//                     <Image
//                       src="/placeholder.svg?height=200&width=300&text=Cultural Festival"
//                       alt="Cultural Festival"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
//                     <Image
//                       src="/placeholder.svg?height=200&width=300&text=Traditional Arts"
//                       alt="Traditional Arts"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
//                     <Image
//                       src="/placeholder.svg?height=200&width=300&text=Heritage Day"
//                       alt="Heritage Day"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
//                     <Image
//                       src="/placeholder.svg?height=200&width=300&text=Global Cuisine"
//                       alt="Global Cuisine"
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 </div>

//                 <div className="mt-6 bg-gradient-to-r from-sky-50 to-purple-50 p-6 rounded-lg">
//                   <h3 className="text-xl font-bold text-sky-700 mb-3">Cultural Exchange Programs</h3>
//                   <p className="text-gray-700 mb-4">
//                     Our school has established partnerships with schools in different countries, facilitating cultural
//                     exchange programs that allow students to experience different cultures firsthand through visits,
//                     virtual collaborations, and joint projects.
//                   </p>
//                   <div className="flex justify-between text-sm">
//                     <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded-full">
//                       Partner Schools in 5 Countries
//                     </span>
//                     <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
//                       Annual Exchange Programs
//                     </span>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </TabsContent>
//         </Tabs>

//         <motion.div
//           className="mb-16"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           variants={fadeIn}
//         >
//           <h2 className="mb-8 text-2xl font-bold text-center text-sky-700">Our Arts & Culture Faculty</h2>
//           <div className="grid gap-8 md:grid-cols-4">
//             {[
//               {
//                 name: "Ms. Anjali Mehta",
//                 position: "Head of Arts Department",
//                 specialization: "Fine Arts & Art History",
//                 image: "/placeholder.svg?height=300&width=300&text=Anjali Mehta",
//               },
//               {
//                 name: "Mr. Rahul Sharma",
//                 position: "Music Director",
//                 specialization: "Classical & Contemporary Music",
//                 image: "/placeholder.svg?height=300&width=300&text=Rahul Sharma",
//               },
//               {
//                 name: "Ms. Meera Patel",
//                 position: "Dance Instructor",
//                 specialization: "Classical & Modern Dance Forms",
//                 image: "/placeholder.svg?height=300&width=300&text=Meera Patel",
//               },
//               {
//                 name: "Mr. Vikram Singh",
//                 position: "Theater Director",
//                 specialization: "Drama & Stage Production",
//                 image: "/placeholder.svg?height=300&width=300&text=Vikram Singh",
//               },
//             ].map((faculty, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 variants={fadeIn}
//                 className="text-center"
//               >
//                 <div className="mb-4 mx-auto relative h-[200px] w-[200px] overflow-hidden rounded-full border-4 border-purple-500">
//                   <Image src={faculty.image || "/placeholder.svg"} alt={faculty.name} fill className="object-cover" />
//                 </div>
//                 <h3 className="text-xl font-bold">{faculty.name}</h3>
//                 <p className="text-purple-600 font-medium">{faculty.position}</p>
//                 <p className="text-gray-600">{faculty.specialization}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div
//           className="bg-gradient-to-r from-sky-50 to-purple-50 p-8 rounded-lg"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           variants={fadeIn}
//         >
//           <h2 className="mb-6 text-2xl font-bold text-center text-sky-700">Student Testimonials</h2>
//           <div className="grid gap-6 md:grid-cols-3">
//             {[
//               {
//                 name: "Ananya Singh",
//                 grade: "Grade 11",
//                 testimonial:
//                   "The arts program at Abhishek International School has helped me discover my passion for painting and develop my skills. The supportive environment and expert guidance have been invaluable in my artistic journey.",
//               },
//               {
//                 name: "Rohan Kapoor",
//                 grade: "Grade 10",
//                 testimonial:
//                   "Being part of the school choir and participating in musical productions has not only improved my singing but also boosted my confidence and taught me the importance of teamwork and dedication.",
//               },
//               {
//                 name: "Priya Sharma",
//                 grade: "Grade 12",
//                 testimonial:
//                   "The cultural exchange program was a life-changing experience that broadened my perspective and deepened my appreciation for different cultures. It's one of the highlights of my school years.",
//               },
//             ].map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 variants={fadeIn}
//                 className="bg-white p-6 rounded-lg shadow-md"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="40"
//                   height="40"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="text-purple-200 mb-4"
//                 >
//                   <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
//                   <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
//                 </svg>
//                 <p className="text-gray-600 italic mb-4">{testimonial.testimonial}</p>
//                 <div className="flex items-center">
//                   <div className="bg-gradient-to-r from-sky-500 to-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
//                     {testimonial.name.charAt(0)}
//                   </div>
//                   <div>
//                     <h4 className="font-bold">{testimonial.name}</h4>
//                     <p className="text-sm text-gray-500">{testimonial.grade}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   )
// }

"use client"

import Image from "next/image"
import { SubNavHeader } from "@/components/sub-nav-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

const extraCurricularNavItems = [
  { title: "Sports", href: "/extra-curricular/sports" },
  { title: "Arts & Culture", href: "/extra-curricular/arts" },
  { title: "Clubs", href: "/extra-curricular/clubs" },
  { title: "Events", href: "/extra-curricular/events" },
]

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function ArtsAndCulturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6fb] to-white font-serif">
      <SubNavHeader title="Extra Curricular Activities" items={extraCurricularNavItems} />

      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#6a1b9a] sm:text-5xl">Arts & Culture</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full mb-6"></div>
          <p className="mx-auto max-w-3xl text-lg text-gray-700">
            At Abhishek International School, we believe that arts and cultural activities are essential for nurturing
            creativity, self-expression, and appreciation for diverse cultural traditions.
          </p>
        </div>

        <Tabs defaultValue="visual-arts" className="mb-16">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-[#f3e5f5] border border-[#e1bee7] rounded-xl text-[#6a1b9a]">
            <TabsTrigger value="visual-arts">Visual Arts</TabsTrigger>
            <TabsTrigger value="performing-arts">Performing Arts</TabsTrigger>
            <TabsTrigger value="cultural">Cultural Programs</TabsTrigger>
          </TabsList>

          <TabsContent value="visual-arts" className="mt-12">
            <h2 className="text-2xl font-bold text-[#6a1b9a] mb-6">Visual Arts Program</h2>
            <p className="text-gray-700 mb-4">
              Our visual arts program allows students to explore and express creativity through various mediums such as
              painting, sculpture, and digital art. Workshops, exhibitions, and studio classes inspire students to
              discover and hone their artistic talents.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {["Painting", "Sculpture", "Digital Art", "Photography"].map((label, idx) => (
                <div key={idx} className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={`/placeholder.svg?height=200&width=300&text=${label}`}
                    alt={label}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-sky-50 to-purple-50 p-6 rounded-lg border border-[#e1bee7]">
              <h3 className="text-xl font-bold text-[#6a1b9a] mb-2">Facilities</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Art studios with natural lighting</li>
                <li>Pottery & sculpture workspace</li>
                <li>Digital lab with graphic tablets</li>
                <li>Photography setup with equipment</li>
                <li>Dedicated exhibition gallery</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="performing-arts" className="mt-12">
            <h2 className="text-2xl font-bold text-[#6a1b9a] mb-6">Performing Arts Program</h2>
            <p className="text-gray-700 mb-4">
              From dance and drama to instrumental and vocal music, our performing arts program cultivates expression,
              confidence, and collaboration. Regular performances and productions give students the stage to shine.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {["Music", "Dance", "Theater", "Public Speaking"].map((label, idx) => (
                <div key={idx} className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={`/placeholder.svg?height=200&width=300&text=${label}`}
                    alt={label}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-sky-50 to-purple-50 p-6 rounded-lg border border-[#e1bee7]">
              <h3 className="text-xl font-bold text-[#6a1b9a] mb-2">Facilities</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Acoustic music rooms</li>
                <li>Dance studios with mirrors</li>
                <li>400-seat auditorium</li>
                <li>Recording and editing studios</li>
                <li>Stage costume & prop inventory</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="cultural" className="mt-12">
            <h2 className="text-2xl font-bold text-[#6a1b9a] mb-6">Cultural Programs</h2>
            <p className="text-gray-700 mb-4">
              Celebrating India's rich cultural diversity, our school conducts cultural fests, traditional days,
              heritage week, and global cuisine showcases to instill pride and global awareness.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {["Festival", "Heritage", "Crafts", "Cuisine"].map((label, idx) => (
                <div key={idx} className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={`/placeholder.svg?height=200&width=300&text=${label}`}
                    alt={label}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-sky-50 to-purple-50 p-6 rounded-lg border border-[#e1bee7]">
              <h3 className="text-xl font-bold text-[#6a1b9a] mb-2">Annual Highlights</h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>International Culture Day (Oct)</li>
                <li>Heritage Day Celebrations (Aug)</li>
                <li>Traditional Arts Exhibition (Jan)</li>
                <li>Festival of Languages (Feb)</li>
                <li>Global Cuisine Week (Nov)</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
