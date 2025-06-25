
// import Image from "next/image"
// import { Card, CardContent } from "@/components/ui/card"
// import { SubNavHeader } from "@/components/sub-nav-header"

// const aboutNavItems = [
//   { title: "About Us", href: "/about" },
//   { title: "Vision & Mission", href: "/about/vision-mission" },
//   { title: "Management Members", href: "/about/management" },
//   { title: "Principal's Message", href: "/about/principal-message" },
//   { title: "Curriculum", href: "/about/curriculum" },
// ]

// const managementMembers = [
//   {
//     name: "Mr. Gururaj Rachayya Charantimath",
//     title: "President",
//     image: "/management/gururaj.jpg",
//     message: `AIS, our students have always been our pride and joy. Their achievements in academics exemplify the consistent efforts put in at schools to nurture each student. We address this emergent segment of quality conscious parents who has the desire of grooming a confident child for tomorrow. Our teaching methods based on experiential learning leads to effective development of the child’s cognitive skills and easy understanding of concepts. Our methodology ensures strong moral, social, emotional and physical development of a child, converting them from a fledgling toddler into a confident, inquisitive and enthusiastic life-long learner. Our approach ensures that the child explores all his skills while learning.`,
//   },
//   {
//     name: "Mr. Suresh Uttam Kasbe",
//     title: "Vice President",
//     image: "/management/suresh.jpg",
//     message: `An individual’s intelligence depends on the heredity and environment. We cannot change the heredity of any individual but we can definitely change the environment wherein the individual is able to grasp and keep oneself abreast of the things around them. Our teachers at Abhishek International Moshi Pradhikaran are always concerned and working towards how enhance learning environment to stimulate learning and achievement to the fullest extent. At Abhishek’s Information and Communication Technology provides a support to the students to take an active role in the learning process and strengthen all the multiple intelligences necessary for quality learning. Each child is different. Therefore here we try and help each child to develop self confidence, ability of expression, social behaviour, right attitude towards teachers, classmates and environment and to develop various life skills. We also promote various co-curricular activities along with academics like Yoga, Art and Craft< Music, Physical Education thus taking care of the overall personal development of the child. I strongly believe that education is a continuous and never ending process. Our main aim is to foster a team spirit and encourage a sense of responsibility and self discipline amongst students to develop leadership qualities.`,
//   },
//   {
//     name: "Mrs. Geeta Gururaj Charantimath",
//     title: "Executive Director",
//     image: "/management/geeta.jpg",
//     message: `Abhishek International School look forward to this academic session, full of hope and promise that each and every child will be successful and productive members of the family Apart from striving for advancement in academic achievement, AHPS also nurtures students with good and proper attitude and values. The school offers countless opportunities for students to take part in all sorts of co-curricular activities. The achievements of the school do not come easy. The drive for excellence permeates deeply in the school culture. We have a strong belief to promote harmony, dedication and a win-win scenario for everyone in school. Harmony can be interpreted as ‘team cohesion’. With a great team of teaching staff and excellent students, Abhishek International School expects a continuous and sustainable advancement in learning and teaching. Teaching and learning are the core activities of a school. Our staff is committed, caring and professional. Great teachers are the most important ingredient to the success of our school. We always set students’ benefit to be the first priority. The school focuses on promoting a high level of learning culture. School follows refined policies to streamline the academic and co-curricular activities. The school cares and responds proactively to the needs of students and parents.`
//   },
//   {
//     name: "Mrs. Manisha Kasbe",
//     title: "Secretary",
//     image: "/management/manisha.jpg",
//     message: `Every Student deserves a Childhood full of enthusiasm and experimentation. This is a right time to allow them to expand their horizons and spread their wings. At AIS, every student is exposed to systematic extensive learning under the guidance of trained and perceptive educators so that they will develop a global outlook. The Abhishek International School will spare no efforts to make learning a joyful and sustainable activity for its students, making education a real celebration. The stress-free environment encourages each child to explore, experiment, and discover the world around them. As a Director, I welcome all parents to willingly entrust their wards in our care and we promise to give them a Good schooling that will enable them to compete globally, making them responsible citizens. ‘KNOWLEDGE IS SUPREME POWER’, has been the vocal slogan in and around, reminding us constantly that though every other power exists, the power which comes though Knowledge, can only INSPIRE, RENEW, REDEEM and ABHISHEK INTERNATIONAL SCHOOL, has put a step forward to materialise this beautiful belief into a possible reality, to satisfy the need of the expectant eyes, the hopeful hearts to encounter smoothly, surely and successfully the challenges of the competitive world, battling their way towards a new beginning , a renewal.

// `
//   },
//   {
//     name: "Mrs. Sudha Bhat",
//     title: "Principal",
//     image: "/management/sudha.jpg",
//     message: `My vision is to foster a safe, inclusive, and dynamic learning environment where every student is encouraged to reach their full potential—academically, socially, and emotionally. I believe in cultivating a culture of respect, collaboration, and high expectations among students, staff, and families. By promoting innovative teaching, lifelong learning, and community involvement, we aim to prepare our students to become confident, compassionate, and responsible global citizens.`
//   }
// ]

// export default function ManagementPage() {
//   return (
//     <div className="font-serif">
//       <SubNavHeader title="About" items={aboutNavItems} />

//       <div className="container mx-auto px-4 py-12">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-[#6a1b9a]">Management Members</h1>
//           <div className="h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full mt-4"></div>
//           <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
//             Meet the leaders shaping the future of Abhishek International School with dedication and vision.
//           </p>
//         </div>

//         <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
//           {managementMembers.map((member, idx) => (
//             <Card key={idx} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl">
//               <div className="relative w-full h-[250px]">
//                 <Image
//                   src={member.image || "/placeholder.svg?text=Photo"}
//                   alt={member.name}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <CardContent className="p-6 space-y-3">
//                 <h2 className="text-xl font-bold text-[#6a1b9a]">{member.name}</h2>
//                 <p className="text-[#8e24aa] font-medium">{member.title}</p>
//                 <p className="text-gray-700 text-sm leading-relaxed">{member.message}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { SubNavHeader } from "@/components/sub-nav-header";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const aboutNavItems = [
  { title: "About Us", href: "/about" },
  { title: "Vision & Mission", href: "/about/vision-mission" },
  { title: "Management Members", href: "/about/management" },
  { title: "Principal's Message", href: "/about/principal-message" },
  { title: "Curriculum", href: "/about/curriculum" },
];

const managementMembers = [
  {
    name: "Mr. Gururaj Rachayya Charantimath",
    title: "President",
    image: "/management/gururaj.jpg",
    message: `AIS, our students have always been our pride and joy. Their achievements in academics exemplify the consistent efforts put in at schools to nurture each student. We address this emergent segment of quality conscious parents who has the desire of grooming a confident child for tomorrow.`,
  },
  {
    name: "Mr. Suresh Uttam Kasbe",
    title: "Vice President",
    image: "/management/suresh.jpg",
    message: `An individual's intelligence depends on the heredity and environment. We cannot change the heredity of any individual but we can definitely change the environment wherein the individual is able to grasp and keep oneself abreast of the things around them.`,
  },
  {
    name: "Mrs. Geeta Gururaj Charantimath",
    title: "Executive Director",
    image: "/management/geeta.jpg",
    message: `Abhishek International School look forward to this academic session, full of hope and promise that each and every child will be successful and productive members of the family.`,
  },
  {
    name: "Mrs. Manisha Kasbe",
    title: "Secretary",
    image: "/management/manisha.jpg",
    message: `Every Student deserves a Childhood full of enthusiasm and experimentation. This is a right time to allow them to expand their horizons and spread their wings.`,
  },
  {
    name: "Mrs. Sudha Bhat",
    title: "Principal",
    image: "/management/sudha.jpg",
    message: `My vision is to foster a safe, inclusive, and dynamic learning environment where every student is encouraged to reach their full potential—academically, socially, and emotionally.`,
  }
];

export default function ManagementPage() {
  return (
    <div className="font-serif bg-gradient-to-b from-[#f9f6fb] to-white min-h-screen">
      <SubNavHeader title="About" items={aboutNavItems} />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6a1b9a] mb-4">
            Our <span className="text-[#ab47bc]">Leadership</span> Team
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full mb-6"></div>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            Meet the visionary leaders shaping the future of Abhishek International School with dedication and excellence.
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {managementMembers.map((member, idx) => (
            <Card 
              key={idx} 
              className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl group bg-white"
            >
              <div className="relative w-full h-[300px] overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h2 className="text-xl font-bold text-white">{member.name}</h2>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h2 className="text-xl font-bold text-[#6a1b9a]">{member.name}</h2>
                  <p className="text-[#ab47bc] font-medium">{member.title}</p>
                </div>
                <p className="text-gray-700 leading-relaxed line-clamp-4">{member.message}</p>
                <button className="text-[#6a1b9a] font-medium hover:text-[#8e24aa] transition-colors flex items-center">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden px-2">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {managementMembers.map((member, idx) => (
                <CarouselItem key={idx} className="basis-full sm:basis-1/2">
                  <div className="p-2">
                    <Card className="overflow-hidden shadow-lg rounded-xl bg-white">
                      <div className="relative w-full h-[250px]">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6 space-y-3">
                        <h2 className="text-xl font-bold text-[#6a1b9a]">{member.name}</h2>
                        <p className="text-[#ab47bc] font-medium">{member.title}</p>
                        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">{member.message}</p>
                        <button className="text-[#6a1b9a] text-sm font-medium hover:text-[#8e24aa] transition-colors">
                          Read more
                        </button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white/80 hover:bg-white text-[#6a1b9a] border-none shadow-lg" />
            <CarouselNext className="right-2 bg-white/80 hover:bg-white text-[#6a1b9a] border-none shadow-lg" />
          </Carousel>
        </div>

        {/* Values Section */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#6a1b9a]">Our Leadership Values</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                title: "Visionary", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              { 
                title: "Integrity", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              { 
                title: "Commitment", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              { 
                title: "Innovation", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 bg-[#f3e5f5] rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-[#6a1b9a]">{value.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-24 bg-gradient-to-r from-[#6a1b9a] to-[#8e24aa] rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-6 opacity-70" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p className="text-xl md:text-2xl font-medium italic mb-6">
              "Education is the most powerful weapon which you can use to change the world."
            </p>
            <p className="font-bold">- Nelson Mandela</p>
          </div>
        </div>
      </div>
    </div>
  );
}