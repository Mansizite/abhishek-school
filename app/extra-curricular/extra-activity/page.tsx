// "use client"

// import Image from "next/image"
// import { SubNavHeader } from "@/components/sub-nav-header"
// import { Card, CardContent } from "@/components/ui/card"
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

// export default function SportsPage() {
//   return (
//     <div>
//       <SubNavHeader title="Extra Curricular Activities" items={extraCurricularNavItems} />

//       <div className="container mx-auto px-4 py-12">
//         <div className="mb-12 text-center">
//           <h1 className="mb-4 text-3xl font-bold text-sky-700 sm:text-4xl md:text-5xl">Sports</h1>
//           <div className="mb-6 h-1 w-24 bg-gradient-to-r from-sky-500 to-purple-500 mx-auto"></div>
//           <p className="mx-auto max-w-3xl text-lg text-gray-600">
//             At Abhishek International School, we believe that sports play a vital role in the holistic development of
//             students, fostering physical fitness, teamwork, discipline, and leadership skills.
//           </p>
//         </div>

//         <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             variants={fadeIn}
//           >
//             <h2 className="mb-4 text-2xl font-bold text-gray-900">Our Sports Philosophy</h2>
//             <div className="prose prose-lg max-w-none">
//               <p>
//                 We believe that sports are not just about competition but about building character, resilience, and a
//                 healthy lifestyle. Our comprehensive sports program is designed to encourage every student to
//                 participate and discover their athletic potential.
//               </p>
//               <p>
//                 Our approach to sports education focuses on skill development, fair play, and sportsmanship. We provide
//                 opportunities for students to compete at various levels, from inter-house competitions to district,
//                 state, and national tournaments.
//               </p>
//               <p>
//                 Through sports, we aim to instill values such as teamwork, discipline, perseverance, and respect for
//                 others. These values extend beyond the playing field and contribute to the overall development of our
//                 students.
//               </p>
//             </div>
//           </motion.div>
//           <motion.div
//             className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             variants={fadeIn}
//           >
//             <Image
//               src="/placeholder.svg?height=400&width=600&text=Sports Philosophy"
//               alt="Sports Philosophy"
//               fill
//               className="object-cover"
//             />
//           </motion.div>
//         </div>

//         <motion.div
//           className="mb-16"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           variants={fadeIn}
//         >
//           <h2 className="mb-8 text-2xl font-bold text-center text-sky-700">Sports Facilities</h2>
//           <div className="grid gap-6 md:grid-cols-3">
//             {[
//               {
//                 title: "Olympic-Size Swimming Pool",
//                 description:
//                   "Our temperature-controlled swimming pool meets international standards and is used for training, competitions, and recreational swimming.",
//                 image: "/placeholder.svg?height=300&width=400&text=Swimming Pool",
//               },
//               {
//                 title: "Multi-Purpose Sports Complex",
//                 description:
//                   "A state-of-the-art indoor sports complex that houses basketball courts, badminton courts, table tennis facilities, and a fitness center.",
//                 image: "/placeholder.svg?height=300&width=400&text=Sports Complex",
//               },
//               {
//                 title: "Football and Cricket Fields",
//                 description:
//                   "Expansive outdoor fields for football, cricket, and athletics, complete with proper drainage systems and spectator stands.",
//                 image: "/placeholder.svg?height=300&width=400&text=Sports Fields",
//               },
//               {
//                 title: "Tennis Courts",
//                 description:
//                   "Multiple tennis courts with all-weather surfaces, allowing students to practice and compete throughout the year.",
//                 image: "/placeholder.svg?height=300&width=400&text=Tennis Courts",
//               },
//               {
//                 title: "Yoga and Martial Arts Studio",
//                 description:
//                   "A dedicated space for yoga, karate, taekwondo, and other martial arts, promoting mental and physical discipline.",
//                 image: "/placeholder.svg?height=300&width=400&text=Yoga Studio",
//               },
//               {
//                 title: "Indoor Shooting Range",
//                 description:
//                   "A modern shooting range for air rifle and pistol training, adhering to national safety standards and regulations.",
//                 image: "/placeholder.svg?height=300&width=400&text=Shooting Range",
//               },
//             ].map((facility, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 variants={fadeIn}
//               >
//                 <Card className="overflow-hidden h-full">
//                   <div className="relative h-48">
//                     <Image
//                       src={facility.image || "/placeholder.svg"}
//                       alt={facility.title}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <CardContent className="p-6">
//                     <h3 className="text-xl font-bold text-sky-700 mb-2">{facility.title}</h3>
//                     <p className="text-gray-600">{facility.description}</p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div
//           className="mb-16"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           variants={fadeIn}
//         >
//           <h2 className="mb-8 text-2xl font-bold text-center text-sky-700">Sports Programs</h2>
//           <div className="grid gap-8 md:grid-cols-2">
//             <div>
//               <h3 className="text-xl font-bold text-purple-600 mb-4">Regular Sports Classes</h3>
//               <div className="prose prose-lg max-w-none">
//                 <p>
//                   Sports education is an integral part of our curriculum. All students participate in regular sports
//                   classes that focus on physical fitness, skill development, and exposure to various sports disciplines.
//                 </p>
//                 <p>
//                   Our sports curriculum is age-appropriate and progressive, ensuring that students develop fundamental
//                   movement skills in the early years and advance to more complex sports skills as they grow.
//                 </p>
//               </div>

//               <h3 className="text-xl font-bold text-purple-600 mt-8 mb-4">Sports Teams and Clubs</h3>
//               <div className="prose prose-lg max-w-none">
//                 <p>
//                   Students with a keen interest and aptitude for specific sports can join our school teams and clubs.
//                   These provide more intensive training and opportunities to participate in inter-school competitions
//                   and tournaments.
//                 </p>
//                 <p>
//                   Our school teams have consistently performed well in various competitions, bringing home numerous
//                   trophies and medals.
//                 </p>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-xl font-bold text-purple-600 mb-4">Sports Academy Programs</h3>
//               <div className="prose prose-lg max-w-none">
//                 <p>
//                   For students who show exceptional talent in specific sports, we offer specialized academy programs in
//                   collaboration with professional coaches and sports organizations. These programs provide advanced
//                   training and pathways to professional sports.
//                 </p>
//                 <p>
//                   Our sports academies currently focus on cricket, football, swimming, tennis, and badminton. Students
//                   in these programs receive personalized coaching and participate in high-level competitions.
//                 </p>
//               </div>

//               <h3 className="text-xl font-bold text-purple-600 mt-8 mb-4">Annual Sports Events</h3>
//               <div className="prose prose-lg max-w-none">
//                 <p>
//                   We organize various sports events throughout the academic year, including our Annual Sports Day,
//                   inter-house tournaments, friendly matches with other schools, and sports clinics conducted by
//                   professional athletes and coaches.
//                 </p>
//                 <p>
//                   These events provide platforms for students to showcase their skills, learn from experts, and develop
//                   a deeper appreciation for sports and physical fitness.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           className="mb-16"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           variants={fadeIn}
//         >
//           <h2 className="mb-8 text-2xl font-bold text-center text-sky-700">Our Sports Achievements</h2>
//           <div className="bg-gradient-to-r from-sky-50 to-purple-50 p-8 rounded-lg">
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//               {[
//                 {
//                   title: "National Swimming Championship",
//                   year: "2023",
//                   achievement: "Gold medal in 100m freestyle and silver medal in 4x100m relay",
//                 },
//                 {
//                   title: "State Cricket Tournament",
//                   year: "2023",
//                   achievement: "Champions in the Under-17 category",
//                 },
//                 {
//                   title: "District Football League",
//                   year: "2022",
//                   achievement: "Runners-up in the senior division",
//                 },
//                 {
//                   title: "National Table Tennis Championship",
//                   year: "2022",
//                   achievement: "Bronze medal in singles and doubles categories",
//                 },
//                 {
//                   title: "State Badminton Tournament",
//                   year: "2023",
//                   achievement: "Gold medal in girls' singles and boys' doubles",
//                 },
//                 {
//                   title: "Inter-School Athletics Meet",
//                   year: "2023",
//                   achievement: "Overall champions with 12 gold, 8 silver, and 5 bronze medals",
//                 },
//               ].map((achievement, index) => (
//                 <motion.div
//                   key={index}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   variants={fadeIn}
//                   className="bg-white p-6 rounded-lg shadow-md"
//                 >
//                   <div className="flex items-start">
//                     <div className="bg-sky-100 p-2 rounded-full mr-3 mt-1">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="text-sky-600"
//                       >
//                         <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
//                         <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
//                         <path d="M4 22h16"></path>
//                         <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
//                         <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
//                         <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-sky-700">{achievement.title}</h3>
//                       <p className="text-sm text-purple-600 font-medium">{achievement.year}</p>
//                       <p className="text-gray-600 mt-1">{achievement.achievement}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           className="text-center"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           variants={fadeIn}
//         >
//           <h2 className="mb-6 text-2xl font-bold text-sky-700">Meet Our Sports Faculty</h2>
//           <div className="grid gap-8 md:grid-cols-4 mt-8">
//             {[
//               {
//                 name: "Mr. Rajiv Singh",
//                 position: "Head of Sports Department",
//                 specialization: "Athletics & Football",
//                 image: "/placeholder.svg?height=300&width=300&text=Rajiv Singh",
//               },
//               {
//                 name: "Ms. Priya Sharma",
//                 position: "Swimming Coach",
//                 specialization: "National Level Swimmer",
//                 image: "/placeholder.svg?height=300&width=300&text=Priya Sharma",
//               },
//               {
//                 name: "Mr. Anil Kumar",
//                 position: "Cricket Coach",
//                 specialization: "Former Ranji Trophy Player",
//                 image: "/placeholder.svg?height=300&width=300&text=Anil Kumar",
//               },
//               {
//                 name: "Ms. Deepa Patel",
//                 position: "Badminton & Table Tennis Coach",
//                 specialization: "State Champion",
//                 image: "/placeholder.svg?height=300&width=300&text=Deepa Patel",
//               },
//             ].map((coach, index) => (
//               <motion.div
//                 key={index}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 variants={fadeIn}
//                 className="text-center"
//               >
//                 <div className="mb-4 mx-auto relative h-[200px] w-[200px] overflow-hidden rounded-full border-4 border-sky-500">
//                   <Image src={coach.image || "/placeholder.svg"} alt={coach.name} fill className="object-cover" />
//                 </div>
//                 <h3 className="text-xl font-bold">{coach.name}</h3>
//                 <p className="text-purple-600 font-medium">{coach.position}</p>
//                 <p className="text-gray-600">{coach.specialization}</p>
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
import { motion } from "framer-motion"
import { SubNavHeader } from "@/components/sub-nav-header"
import { Card, CardContent } from "@/components/ui/card"

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

const achievements = [
  "Cleanliness Award",
  "PCMC River Cyclothon Rally",
  "Karate & Kick Boxing Championship",
  "Marathon Participation",
  "State Level Yoga Matches",
  "SOF Exams – IEO, NSO, IMO, NCO",
  "Elementary Drawing Exam – 100% Result",
  "Zilla Parishad Matches – Basketball, Cricket, Chess, Carrom",
  "Athletics Grand Field Events",
  "Kabaddi Tournament",
]

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6fb] to-white font-serif">
      <SubNavHeader title="Extra Curricular Activities" items={extraCurricularNavItems} />

      {/* Page Title */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="mb-4 text-4xl font-bold text-[#6a1b9a]">Achievements</h1>
        <div className="h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full"></div>
        <p className="max-w-3xl mx-auto mt-6 text-gray-700 text-lg">
          The icing on the cake is watching our students shine across fields—bringing laurels and making Abhishek International School proud through excellence in academics, arts, and sports.
        </p>
      </div>

      {/* Achievements List */}
      <motion.div
        className="container mx-auto px-4 py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
        variants={fadeIn}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white p-6 rounded-xl border border-[#e1bee7] shadow-lg hover:shadow-xl transition"
            >
              <p className="text-[#6a1b9a] font-semibold text-lg text-center">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Images */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-[#6a1b9a] mb-3">Glimpses of Glory</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full"></div>
          <p className="text-gray-700 mt-4 max-w-xl mx-auto">
            Snapshots from our most prestigious awards, events, and achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {["achieve1.jpg", "achieve2.jpg", "achieve3.jpg", "achieve4.jpg"].map((img, index) => (
            <motion.div
              key={index}
              className="relative h-56 rounded-xl overflow-hidden shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Image
                src={`/images/achievements/${img}`}
                alt={`Achievement ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
