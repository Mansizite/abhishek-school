// import { SubNavHeader } from "@/components/sub-nav-header";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Card, CardContent } from "@/components/ui/card";
// import { BookOpen, Users, Award, Clock, Calendar, FileText } from "lucide-react";

// const aboutNavItems = [
//   { title: "About Us", href: "/about" },
//   { title: "Vision & Mission", href: "/about/vision-mission" },
//   { title: "Management Members", href: "/about/management" },
//   { title: "Principal's Message", href: "/about/principal-message" },
//   { title: "Curriculum", href: "/about/curriculum" },
// ];

// export default function CurriculumPage() {
//   return (
//     <div>
//       <SubNavHeader title="About" items={aboutNavItems} />

//       <div className="container mx-auto px-4 py-12">
//         <div className="mb-12 text-center">
//           <h1 className="mb-4 text-3xl font-bold text-sky-700 sm:text-4xl md:text-5xl">Curriculum</h1>
//           <div className="mb-6 h-1 w-24 bg-gradient-to-r from-sky-500 to-purple-500 mx-auto"></div>
//           <p className="mx-auto max-w-3xl text-lg text-gray-600">
//             Our comprehensive curriculum is designed to provide a well-rounded education that nurtures intellectual, physical, emotional, and social development.
//           </p>
//         </div>

//         <div className="mb-16">
//           <Tabs defaultValue="primary" className="w-full">
//             <TabsList className="grid w-full grid-cols-3 mb-8">
//               <TabsTrigger value="primary">Primary Section</TabsTrigger>
//               <TabsTrigger value="middle">Middle Section</TabsTrigger>
//               <TabsTrigger value="senior">Senior Section</TabsTrigger>
//             </TabsList>

//             {/* Primary Section */}
//             <TabsContent value="primary" className="mt-6">
//               {/* ...Your full primary section remains unchanged... */}
//             </TabsContent>

//             {/* Middle Section */}
//             <TabsContent value="middle" className="mt-6">
//               {/* ...Your full middle section remains unchanged... */}
//             </TabsContent>

//             {/* ✅ Senior Section (with the fixed paragraph) */}
//             <TabsContent value="senior" className="mt-6">
//               <div className="grid gap-8 md:grid-cols-2">
//                 <div>
//                   <h2 className="text-2xl font-bold text-sky-700 mb-4">Senior Section (Grades 9-12)</h2>
//                   <div className="prose prose-lg max-w-none">
//                     <p>
//                       The senior school curriculum is aligned with national board requirements and focuses on preparing students for 
//                       higher education and career choices. It offers a rigorous academic program that develops in-depth subject knowledge, 
//                       critical thinking, and problem-solving skills.
//                     </p>
//                     <p>
//                       Students can choose from different streams - Science, Commerce, and Humanities - based on their interests and career aspirations.
//                       The curriculum also includes career counseling, competitive exam preparation, and opportunities for internships and research projects.
//                     </p>
//                   </div>

//                   <h3 className="text-xl font-bold text-purple-600 mt-6 mb-3">Streams Offered</h3>
//                   <div className="space-y-4">
//                     {/* Science, Commerce, Humanities Cards */}
//                     {/* ...unchanged... */}
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-bold text-purple-600 mb-3">Additional Programs</h3>
//                   <ul className="space-y-3 mb-6">
//                     {/* ...unchanged additional programs list... */}
//                   </ul>

//                   <div className="bg-gradient-to-r from-sky-50 to-purple-50 p-6 rounded-lg">
//                     <h3 className="text-xl font-bold text-sky-700 mb-3">Academic Calendar</h3>
//                     <ul className="space-y-3">
//                       {/* Academic Year, Exams, Board Exams */}
//                       {/* ...unchanged... */}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>

//         {/* Philosophy Section */}
//         <div className="text-center mb-12">
//           <h2 className="mb-6 text-2xl font-bold text-sky-700">Our Educational Philosophy</h2>
//           <p className="mx-auto max-w-3xl text-lg text-gray-600">
//             At Abhishek International School, we believe in providing a balanced education that nurtures the intellectual, 
//             physical, emotional, and social dimensions of a child's development. Our curriculum is designed to foster a 
//             love for learning, critical thinking skills, creativity, and character development.
//           </p>
//         </div>

//         {/* Summary Cards */}
//         <div className="grid gap-6 md:grid-cols-3">
//           {/* Teaching Methodology, Assessment System, Special Features Cards */}
//           {/* ...unchanged... */}
//         </div>
//       </div>
//     </div>
//   );
// }
import { SubNavHeader } from "@/components/sub-nav-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award, Clock, Calendar, FileText } from "lucide-react";

const aboutNavItems = [
  { title: "About Us", href: "/about" },
  { title: "Vision & Mission", href: "/about/vision-mission" },
  { title: "Management Members", href: "/about/management" },
  { title: "Principal's Message", href: "/about/principal-message" },
  { title: "Curriculum", href: "/about/curriculum" },
];

export default function CurriculumPage() {
  return (
    <div className="font-serif">
      <SubNavHeader title="About" items={aboutNavItems} />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#6a1b9a]">Curriculum</h1>
          <div className="mb-6 h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full"></div>
          <p className="mx-auto max-w-3xl text-lg text-gray-700 font-sans">
            Our comprehensive curriculum is designed to provide a well-rounded education that nurtures intellectual, physical, emotional, and social development.
          </p>
        </div>

        <div className="mb-20">
          <Tabs defaultValue="primary" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="primary">Primary Section</TabsTrigger>
              <TabsTrigger value="middle">Middle Section</TabsTrigger>
              <TabsTrigger value="senior">Senior Section</TabsTrigger>
            </TabsList>

            {/* Primary Section */}
            <TabsContent value="primary" className="mt-6">
              <Card className="p-6 bg-white shadow rounded-xl">
                <CardContent className="text-gray-700 font-sans">
                  <h2 className="text-2xl font-bold text-[#6a1b9a] mb-4">Primary Section (Grades 1-5)</h2>
                  <p className="mb-3">Our Primary curriculum lays a strong foundation in literacy, numeracy, and inquiry-based learning. It emphasizes experiential learning, joyful discovery, and social-emotional development through activities and hands-on tasks.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Integrated theme-based curriculum</li>
                    <li>Foundational skills in reading, writing, and math</li>
                    <li>Visual arts, music, dance, and physical education</li>
                    <li>Special focus on life skills and values</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Middle Section */}
            <TabsContent value="middle" className="mt-6">
              <Card className="p-6 bg-white shadow rounded-xl">
                <CardContent className="text-gray-700 font-sans">
                  <h2 className="text-2xl font-bold text-[#6a1b9a] mb-4">Middle Section (Grades 6-8)</h2>
                  <p className="mb-3">The Middle School curriculum bridges primary learning with advanced academics. It encourages conceptual clarity, collaborative learning, and analytical thinking through subject enrichment activities and digital learning tools.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Subject specialization: Science, Math, English, Social Science</li>
                    <li>Technology integration and STEM projects</li>
                    <li>Experiential labs and field learning</li>
                    <li>Structured assessments and feedback</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Senior Section */}
            <TabsContent value="senior" className="mt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-bold text-[#6a1b9a] mb-4">Senior Section (Grades 9-12)</h2>
                  <div className="prose prose-lg max-w-none font-sans text-gray-700">
                    <p>
                      The senior school curriculum aligns with national board standards and prepares students for higher education and professional careers. It promotes academic excellence, research, and career-oriented planning.
                    </p>
                    <p>
                      Students choose from Science, Commerce, and Humanities streams. The program includes mentorship, competitive exam prep, and real-world learning.
                    </p>
                  </div>

                  <h3 className="text-xl font-bold text-[#8e24aa] mt-6 mb-3">Streams Offered</h3>
                  <div className="grid gap-4">
                    {["Science", "Commerce", "Humanities"].map((stream, idx) => (
                      <div key={idx} className="p-4 bg-white rounded-lg shadow border-l-4 border-[#ab47bc]">
                        <h4 className="text-lg font-semibold text-[#6a1b9a]">{stream}</h4>
                        <p className="text-gray-600 text-sm font-sans">
                          {stream === "Science" && "Focus on Physics, Chemistry, Biology, Math, and Computer Science"}
                          {stream === "Commerce" && "Includes Business Studies, Economics, Accountancy, and Entrepreneurship"}
                          {stream === "Humanities" && "Offers History, Political Science, Sociology, Psychology, and Literature"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#8e24aa] mb-4">Additional Programs</h3>
                  <ul className="space-y-3 mb-6 font-sans text-gray-700">
                    <li>Career Counseling Workshops</li>
                    <li>Mock Interviews & Aptitude Tests</li>
                    <li>Internship Opportunities & Research</li>
                    <li>Leadership & Public Speaking Training</li>
                  </ul>

                  <div className="bg-gradient-to-r from-sky-50 to-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-[#6a1b9a] mb-3">Academic Calendar Highlights</h3>
                    <ul className="space-y-3 text-gray-700 font-sans">
                      <li>Academic Year: April – March</li>
                      <li>Term Exams: September & February</li>
                      <li>Board Exam Prep: January – March</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Educational Philosophy */}
        <div className="text-center mb-12">
          <h2 className="mb-6 text-2xl font-bold text-[#6a1b9a]">Our Educational Philosophy</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-700 font-sans">
            At Abhishek International School, we believe in holistic education that develops not only the intellect, but also creativity, compassion, discipline, and resilience.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Teaching Methodology",
              icon: BookOpen,
              description: "We adopt experiential, project-based, and inquiry-driven approaches to make learning engaging and meaningful.",
            },
            {
              title: "Assessment System",
              icon: FileText,
              description: "We use continuous assessment, formative feedback, and performance tracking to ensure student growth.",
            },
            {
              title: "Special Features",
              icon: Award,
              description: "Global collaborations, Olympiad training, coding classes, and leadership programs are part of our enriched curriculum.",
            },
          ].map((item, idx) => (
            <Card key={idx} className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <CardContent className="text-center">
                <item.icon className="mx-auto mb-4 text-[#8e24aa]" size={32} />
                <h4 className="text-lg font-bold text-[#6a1b9a] mb-2">{item.title}</h4>
                <p className="text-gray-600 font-sans">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

