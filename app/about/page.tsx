// import Image from "next/image"
// import { Card, CardContent } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// export default function AboutPage() {
//   return (
//     <div className="container mx-auto px-4 py-12 font-serif">
//       <div className="mb-12 text-center">
//         <h1 className="mb-4 text-4xl font-bold text-[#6a1b9a] sm:text-3xl">About Us</h1>
//         <div className="mb-6 h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto"></div>
//         <p className="mx-auto max-w-3xl text-lg text-gray-700">
//           Learn more about Abhishek International School, our history, vision, and commitment to excellence in education.
//         </p>
//       </div>

//       <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
//         <div>
//           <h2 className="mb-4 text-2xl font-bold text-[#8e24aa]">Our Story</h2>
//           <p className="mb-4 text-gray-700">
//             Founded in 2005, Abhishek International School has grown from a small institution to one of the leading educational establishments in the region.
//           </p>
//           <p className="mb-4 text-gray-700">
//             Our journey has been marked by a steadfast commitment to academic excellence and holistic development of students. Over the years, we have expanded our facilities, enhanced our curriculum, and strengthened our faculty.
//           </p>
//           <p className="text-gray-700">
//             Our alumni excel in various fields—academics, sports, arts, and entrepreneurship—carrying forward the values instilled at Abhishek International School.
//           </p>
//         </div>
//         <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
//           <Image src="/placeholder.svg?height=400&width=600" alt="School Building" fill className="object-cover" />
//         </div>
//       </div>

//       <Tabs defaultValue="vision" className="mb-16">
//         <TabsList className="grid w-full grid-cols-2 rounded-lg border border-[#ab47bc]">
//           <TabsTrigger value="vision">Vision & Mission</TabsTrigger>
//           <TabsTrigger value="values">Core Values</TabsTrigger>
//         </TabsList>
//         <TabsContent value="vision" className="mt-6">
//           <div className="grid gap-8 md:grid-cols-2">
//             <Card className="border-[#8e24aa]">
//               <CardContent className="pt-6">
//                 <h3 className="mb-4 text-xl font-bold text-[#8e24aa]">Our Vision</h3>
//                 <p className="text-gray-700">
//                   To be a premier educational institution nurturing global citizens who are intellectually competent, morally upright, and socially responsible.
//                 </p>
//               </CardContent>
//             </Card>
//             <Card className="border-[#8e24aa]">
//               <CardContent className="pt-6">
//                 <h3 className="mb-4 text-xl font-bold text-[#8e24aa]">Our Mission</h3>
//                 <p className="text-gray-700">
//                   To provide a learning environment promoting excellence, creativity, integrity, respect, and compassion, enabling students to reach their full potential.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </TabsContent>
//         <TabsContent value="values" className="mt-6">
//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {[
//               { title: "Excellence", description: "Striving for the highest standards in all endeavors" },
//               { title: "Integrity", description: "Upholding honesty, ethics, and moral principles" },
//               { title: "Respect", description: "Valuing diversity and treating everyone with dignity" },
//               { title: "Innovation", description: "Embracing creativity and forward-thinking approaches" },
//               { title: "Responsibility", description: "Taking ownership of actions and their consequences" },
//               { title: "Collaboration", description: "Working together to achieve common goals" },
//               { title: "Compassion", description: "Showing empathy and kindness towards others" },
//               { title: "Perseverance", description: "Demonstrating determination in the face of challenges" },
//             ].map((value, index) => (
//               <Card key={index} className="border-[#ab47bc]">
//                 <CardContent className="pt-6">
//                   <h3 className="mb-2 text-lg font-bold text-[#6a1b9a]">{value.title}</h3>
//                   <p className="text-gray-700">{value.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </TabsContent>
//       </Tabs>

//       <div className="mb-16">
//         <h2 className="mb-6 text-2xl font-bold text-center text-[#6a1b9a]">Our Leadership Team</h2>
//         <div className="grid gap-8 md:grid-cols-3">
//           {[
//             { name: "Dr. Rajesh Kumar", position: "Chairman", image: "/placeholder.svg?height=300&width=300" },
//             { name: "Mrs. Sunita Sharma", position: "Principal", image: "/placeholder.svg?height=300&width=300" },
//             { name: "Mr. Vikram Singh", position: "Vice Principal", image: "/placeholder.svg?height=300&width=300" },
//           ].map((leader, index) => (
//             <div key={index} className="text-center">
//               <div className="mb-4 mx-auto relative h-[200px] w-[200px] overflow-hidden rounded-full border-4 border-[#8e24aa]">
//                 <Image src={leader.image} alt={leader.name} fill className="object-cover" />
//               </div>
//               <h3 className="mb-1 text-xl font-bold text-[#6a1b9a]">{leader.name}</h3>
//               <p className="text-gray-700">{leader.position}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="bg-[#f9f6fb] p-8 rounded-lg">
//         <h2 className="mb-6 text-2xl font-bold text-center text-[#6a1b9a]">Achievements & Milestones</h2>
//         <div className="space-y-4">
//           {[
//             { year: "2005", achievement: "Establishment of Abhishek International School" },
//             { year: "2008", achievement: "Received accreditation from the International Education Board" },
//             { year: "2012", achievement: "Expansion of campus with state-of-the-art facilities" },
//             { year: "2015", achievement: "Celebrated 10 years of academic excellence" },
//             { year: "2018", achievement: "Recognized as one of the top 50 schools in the region" },
//             { year: "2020", achievement: "Launched innovative STEM program" },
//             { year: "2022", achievement: "Opened new sports complex and performing arts center" },
//           ].map((item, index) => (
//             <div key={index} className="flex">
//               <div className="mr-4 w-20 shrink-0 text-right font-bold text-[#ab47bc]">{item.year}</div>
//               <div className="grow border-l-2 border-[#6a1b9a] pl-4 pb-4">{item.achievement}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6fb] to-white font-serif">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#6a1b9a]/90 to-[#ab47bc]/90 z-0"></div> */}
        
         
            {/* <h1 className="mb-6 text-4xl md:text-5xl font-bold text-purple tracking-tight">
              About Abhishek International School
            </h1> */}
              <h2 className="mb-4 text-3xl font-bold sm:text-3xl text-gray-800 text-center " style={{marginTop:"70px"}}>
          About <span className="text-[#8e24aa]">Abhishek International School </span>
        </h2>
            <div className="mb-8 h-1 w-24 bg-gradient-to-r from-white to-[#e0d4e8] mx-auto rounded-full"></div>
          
          
        
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 py-16 -mt-16 relative z-20" style={{marginTop:"0px"}}>
        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-10">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#6a1b9a]/50 to-transparent z-10"></div>
              <Image 
                src="/placeholder.svg?height=400&width=600" 
                alt="School Building" 
                fill 
                className="object-cover transition duration-700 hover:scale-105" 
              />
            </div>
            <div className="py-4">
              <div className="inline-block mb-5 px-3 py-1 bg-[#6a1b9a]/10 rounded-full">
                <span className="text-sm font-medium text-[#6a1b9a]">Our Journey</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold text-gray-800">
                Building Futures Since 2005
              </h2>
              <div className="space-y-5 text-gray-700">
                <p className="leading-relaxed">
                  Founded in 2005, Abhishek International School has grown from a small institution to one of the leading educational establishments in the region.
                </p>
                <p className="leading-relaxed">
                  Our journey has been marked by a steadfast commitment to academic excellence and holistic development of students. Over the years, we have expanded our facilities, enhanced our curriculum, and strengthened our faculty.
                </p>
                <p className="leading-relaxed">
                  Our alumni excel in various fields—academics, sports, arts, and entrepreneurship—carrying forward the values instilled at Abhishek International School.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold text-[#6a1b9a]">
            Guiding Principles
          </h2>
          <div className="mb-6 h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our vision and mission shape every aspect of our educational approach
          </p>
        </div>

        <Tabs defaultValue="vision" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 rounded-xl overflow-hidden shadow-md">
            <TabsTrigger 
              value="vision" 
              className="data-[state=active]:bg-[#6a1b9a] data-[state=active]:text-white py-5 transition-all"
            >
              Vision & Mission
            </TabsTrigger>
            <TabsTrigger 
              value="values" 
              className="data-[state=active]:bg-[#6a1b9a] data-[state=active]:text-white py-5 transition-all"
            >
              Core Values
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="vision" className="mt-10">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-0 shadow-xl overflow-hidden transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="h-2 bg-gradient-to-r from-[#8e24aa] to-[#ab47bc]"></div>
                <CardContent className="pt-8 pb-10">
                  <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#f3e5f5] flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8e24aa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-center text-[#8e24aa]">Our Vision</h3>
                  <p className="text-gray-700 text-center">
                    To be a premier educational institution nurturing global citizens who are intellectually competent, morally upright, and socially responsible.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-xl overflow-hidden transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="h-2 bg-gradient-to-r from-[#8e24aa] to-[#ab47bc]"></div>
                <CardContent className="pt-8 pb-10">
                  <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#f3e5f5] flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8e24aa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-center text-[#8e24aa]">Our Mission</h3>
                  <p className="text-gray-700 text-center">
                    To provide a learning environment promoting excellence, creativity, integrity, respect, and compassion, enabling students to reach their full potential.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="values" className="mt-10">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Excellence", description: "Striving for the highest standards in all endeavors" },
                { title: "Integrity", description: "Upholding honesty, ethics, and moral principles" },
                { title: "Respect", description: "Valuing diversity and treating everyone with dignity" },
                { title: "Innovation", description: "Embracing creativity and forward-thinking approaches" },
                { title: "Responsibility", description: "Taking ownership of actions and their consequences" },
                { title: "Collaboration", description: "Working together to achieve common goals" },
                { title: "Compassion", description: "Showing empathy and kindness towards others" },
                { title: "Perseverance", description: "Demonstrating determination in the face of challenges" },
              ].map((value, index) => (
                <Card 
                  key={index} 
                  className="border-0 shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="h-1 bg-gradient-to-r from-[#ab47bc] to-[#e1bee7]"></div>
                  <CardContent className="pt-6 pb-8">
                    <h3 className="mb-3 text-lg font-bold text-center text-[#6a1b9a]">{value.title}</h3>
                    <p className="text-gray-700 text-center text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Leadership Team */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold text-[#6a1b9a]">
            Our Leadership Team
          </h2>
          <div className="mb-6 h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Experienced educators guiding our institution to excellence
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {[
            { name: "Dr. Rajesh Kumar", position: "Chairman", image: "/placeholder.svg?height=300&width=300" },
            { name: "Mrs. Sunita Sharma", position: "Principal", image: "/placeholder.svg?height=300&width=300" },
            { name: "Mr. Vikram Singh", position: "Vice Principal", image: "/placeholder.svg?height=300&width=300" },
          ].map((leader, index) => (
            <div 
              key={index} 
              className="text-center bg-white rounded-xl shadow-lg p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 mx-auto relative h-[200px] w-[200px] overflow-hidden rounded-full border-4 border-white shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#6a1b9a]/30 z-10 rounded-full"></div>
                <Image 
                  src={leader.image} 
                  alt={leader.name} 
                  fill 
                  className="object-cover rounded-full" 
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-800">{leader.name}</h3>
              <p className="text-[#8e24aa] font-medium mb-4">{leader.position}</p>
              <div className="flex justify-center space-x-4">
                <button className="w-8 h-8 rounded-full bg-[#f3e5f5] flex items-center justify-center hover:bg-[#e1bee7] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#6a1b9a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </button>
                <button className="w-8 h-8 rounded-full bg-[#f3e5f5] flex items-center justify-center hover:bg-[#e1bee7] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#6a1b9a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.277-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold text-[#6a1b9a]">
            Our Journey Through Time
          </h2>
          <div className="mb-6 h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Significant milestones in our educational journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#6a1b9a] to-[#ab47bc]"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {[
                { year: "2005", achievement: "Establishment of Abhishek International School" },
                { year: "2008", achievement: "Received accreditation from the International Education Board" },
                { year: "2012", achievement: "Expansion of campus with state-of-the-art facilities" },
                { year: "2015", achievement: "Celebrated 10 years of academic excellence" },
                { year: "2018", achievement: "Recognized as one of the top 50 schools in the region" },
                { year: "2020", achievement: "Launched innovative STEM program" },
                { year: "2022", achievement: "Opened new sports complex and performing arts center" },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  <div className={`w-1/2 px-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-xl font-bold text-[#8e24aa] mb-2">{item.year}</div>
                      <p className="text-gray-700">{item.achievement}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-6 rounded-full bg-[#6a1b9a] border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2 px-4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      
      
    </div>
  );
}