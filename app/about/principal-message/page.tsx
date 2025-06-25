

// import Image from "next/image"
// import { SubNavHeader } from "@/components/sub-nav-header"

// const aboutNavItems = [
//   { title: "About Us", href: "/about" },
//   { title: "Vision & Mission", href: "/about/vision-mission" },
//   { title: "Management Members", href: "/about/management" },
//   { title: "Principal's Message", href: "/about/principal-message" },
//   { title: "Curriculum", href: "/about/curriculum" },
// ]

// export default function PrincipalMessagePage() {
//   return (
//     <div className="font-serif">
//       <SubNavHeader title="About" items={aboutNavItems} />

//       <div className="container mx-auto px-4 py-12">
//         <div className="mb-12 text-center">
//           <h1 className="mb-4 text-4xl font-bold text-[#6a1b9a]">Principal's Message</h1>
//           <div className="mb-6 h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full"></div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-10 mb-20">
//           {/* Left Sidebar */}
//           <div className="md:col-span-1">
//             <div className="sticky top-24">
//               <div className="relative h-[350px] w-full overflow-hidden rounded-xl shadow-xl mb-6 border-4 border-[#ab47bc]">
//                 <Image
//                   src="/placeholder.svg?height=400&width=300&text=Principal"
//                   alt="Mrs. Sunita Sharma"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="text-center">
//                 <h2 className="text-xl font-bold text-[#6a1b9a]">Mrs. Sunita Sharma</h2>
//                 <p className="text-[#8e24aa]">Principal</p>
//                 <p className="text-gray-600 mt-2 font-sans">M.Ed., B.Ed., M.A. (English)</p>
//                 <p className="text-gray-600 font-sans">20+ Years of Experience in Education</p>
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="md:col-span-2 font-sans leading-relaxed text-gray-700">
//             <p className="text-xl italic text-[#6a1b9a] font-serif mb-8">
//               "Education is not the filling of a pail, but the lighting of a fire."
//             </p>

//             <p className="mb-4">Dear Parents and Students,</p>

//             <p className="mb-4">
//               It gives me immense pleasure to welcome you to Abhishek International School, an institution committed to excellence
//               in education and the holistic development of students. As the Principal, I’m proud to lead a team of passionate educators
//               focused on nurturing young minds.
//             </p>

//             <p className="mb-4">
//               We believe education is about igniting curiosity, fostering creativity, and instilling values that last a lifetime.
//               Our curriculum, infrastructure, and co-curricular programs are designed to deliver well-rounded education.
//             </p>

//             <p className="mb-4">
//               In today’s fast-paced world, we emphasize not only academics but also critical thinking, adaptability, and emotional intelligence.
//               Our teaching fosters experiential learning, problem-solving, and strong character.
//             </p>

//             <p className="mb-4">
//               Every child is unique. Our teachers support students’ individual learning styles and talents, ensuring a safe and inclusive
//               environment that builds confidence and respect.
//             </p>

//             <p className="mb-4">
//               We value our partnership with parents. Your involvement and communication are essential in shaping your child’s success.
//             </p>

//             <p className="mb-4">
//               I invite you to join us in our journey of providing quality education that transforms lives. Let’s inspire our students to
//               dream big, work hard, and make a difference.
//             </p>

//             <p className="mb-4">Warm regards,</p>
//             <p className="font-bold text-[#6a1b9a]">
//               Mrs. Sunita Sharma<br />
//               Principal
//             </p>
//           </div>
//         </div>

//         {/* Achievements */}
//         <div className="bg-gradient-to-r from-[#f3e5f5] to-[#ede7f6] p-8 rounded-xl shadow-sm">
//           <h2 className="mb-6 text-2xl font-bold text-center text-[#6a1b9a]">Principal's Achievements</h2>
//           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//             {[
//               "National Award for Excellence in Educational Leadership, 2020",
//               "Published research on 'Innovative Teaching Methodologies' in International Journal of Education",
//               "Keynote speaker at multiple educational conferences",
//               "Led the school to achieve ISO 9001:2015 certification",
//               "Implemented several community outreach programs",
//               "Established international exchange programs with schools in three countries",
//             ].map((achievement, index) => (
//               <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
//                 <div className="flex items-start">
//                   <div className="bg-[#8e24aa] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
//                     {index + 1}
//                   </div>
//                   <p className="text-gray-700">{achievement}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
import Image from "next/image"
import { SubNavHeader } from "@/components/sub-nav-header"

const aboutNavItems = [
  { title: "About Us", href: "/about" },
  { title: "Vision & Mission", href: "/about/vision-mission" },
  { title: "Management Members", href: "/about/management" },
  { title: "Principal's Message", href: "/about/principal-message" },
  { title: "Curriculum", href: "/about/curriculum" },
]

export default function PrincipalMessagePage() {
  return (
    <div className=" font-serif">
      <SubNavHeader title="About" items={aboutNavItems} />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#6a1b9a]">Principal's Message</h1>
          <div className="mb-6 h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {/* Left Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="relative h-[350px] w-full overflow-hidden rounded-xl shadow-xl mb-6 border-4 border-[#ab47bc]">
                <Image
                  src="/placeholder.svg?height=400&width=300&text=Principal"
                  alt="Mrs. Sudha Bhat"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold text-[#6a1b9a]">Mrs. Sudha Bhat</h2>
                <p className="text-[#8e24aa]">Principal</p>
              
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 font-sans leading-relaxed text-gray-700">
            <p className="text-xl italic text-[#6a1b9a] font-serif mb-8">
              "Education is not the filling of a pail, but the lighting of a fire."
            </p>

            <p className="mb-4">Dear Parents and Students,</p>

         
            
            {/* NEW: Principal's Vision */}
           
              <p className="text-gray-800">
                My vision is to foster a safe, inclusive, and dynamic learning environment where every student is encouraged
                to reach their full potential—academically, socially, and emotionally. I believe in cultivating a culture of
                respect, collaboration, and high expectations among students, staff, and families. By promoting innovative teaching,
                lifelong learning, and community involvement, we aim to prepare our students to become confident, compassionate,
                and responsible global citizens.
              </p>
        

            <p className="mb-4">Warm regards,</p>
            <p className="font-bold text-[#6a1b9a]">
              Mrs. Sudha Bhat<br />
              Principal
            </p>
          </div>
        </div>


        
         
      </div>
    </div>
  )
}
