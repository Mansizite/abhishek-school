
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6fb] to-white font-serif">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute  z-0"></div>
        <div className="container mx-auto px-4 py-32 relative z-10 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-gray-800">
            About <span className="text-[#8e24aa]">Abhishek International</span>
          </h2>
          <div className="mb-8 h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full"></div>
        
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 py-16 -mt-16 relative z-20">
        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-10">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#6a1b9a]/50 to-transparent z-10"></div>
              <Image 
                src="/about/school-building.jpg" 
                alt="Abhishek International School Campus" 
                fill 
                className="object-cover transition duration-700 hover:scale-105" 
                priority
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
                  Abhishek International School is run by the trust - 'Abhishek Vidyalam's. The pioneers of this trust - Chairman - Mr Gururaj Charantimath, Vice Chairman - Mr. Suresh Kasbe, Director - Mrs. Geeta Charantimath, Secretary - Mrs. Manisha Kasbe - have been in the educational field for the last 10 years.
                </p>
                <p className="leading-relaxed">
                  Our extensive one-acre campus in Moshi provides a serene, pollution-free environment ideal for systematic learning. The academic year 2015-16 marked our first year in this beautiful campus with permission from the Maharashtra Government to run up to Secondary section.
                </p>
                <p className="leading-relaxed">
                  We currently have classes from Nursery to STD X, with plans to grow organically by adding one standard each year. This approach allows us to focus on nurturing each student's unique strengths while transforming weaknesses into opportunities for growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Methodology Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "OUR METHODOLOGY",
              image: "http://www.abhishekinternationalschool.com/assets/img/p1.jpg",
              desc: "Abhishek International School combines preferred practices in Primary and Secondary school education with the fastest growing methods of the world-renowned Activity based Education System. We recognize the uniqueness of every child and develop it further. Our Activity based Education System facilitates opportunities for social, emotional, intellectual and physical growth of the child. The age-appropriate learning environment enables children to reach their fullest-potential."
            },
            {
              title: "EXTRA CURRICULAR ACTIVITIES",
              image: "http://www.abhishekinternationalschool.com/assets/img/Activities.jpg",
              desc: "The aim at Abhishek International School is to provide our students with the opportunity to develop life skills which include self- awareness and teamwork. Children are provided with teaching aids, Worksheets and Booklets that give a complete hands-on experience to them as these years are the most crucial years that act as a foundation for their future development. Hence, it is imperative to include a blended curriculum that is theme based and concept based providing our scholars the holistic approach to learning and development. Our main focus areas of development are Personal, Social and Emotional Development, Communication, Mathematical and Logical Development, Environmental Awareness, Fine and Gross Motor skill Development and Creative Development."
            },
            {
              title: "OLDAGE VISIT",
              image: "http://www.abhishekinternationalschool.com/assets/img/oldage.jpg",
              desc: "Abhishek International School visited Orphanage on 17th November 2022 Thursday at SNEHWAN EK AASHECHA KIRAN in Mahalungae, Alandi. In presence of our Hon. & Respected Mrs.Geeta Charantimath Madam ,Mrs. Manisha Kasbe Madam, Rutuja Kasbe Madam, Principal Mrs. Ramamani Iyengar Madam, Co-ordinators Mrs. Kavita Sharma& Mrs.Jagruti Satpute, Teachers, Non Teaching Staff and students of our school. Our school had organized donation of some Food, Toys, Sarees, Dress ,Kids clothes, Shoes to the Orphanage. All our Teachers, Parents, Students were happy to participate and they collected items for donation. Our Principal Mrs. Ramamani Iyengar madam,teacher Mrs. Anita Naidu Miss, our class girls and boys from std 8th& 9th visited SNEHWAN EK AASHECHA KIRAN."
            }
          ].map((item, index) => (
            <Card key={index} className="border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="h-[250px] relative overflow-hidden">
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 "
                  quality={90}
                />

              </div>
              <CardContent className="pt-6 pb-8 px-6">
                <h3 className="text-xl font-semibold text-[#6a1b9a] mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Vision & Mission Section */}
      {/* 
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
            { 
              name: "Mr. Gururaj Charantimath", 
              position: "Chairman", 
              image: "/about/chairman.jpg",
              bio: "With over 15 years in education, our chairman provides visionary leadership and strategic direction."
            },
            { 
              name: "Mrs. Geeta Charantimath", 
              position: "Director", 
              image: "/about/director.jpg",
              bio: "Our director oversees academic excellence and ensures our curriculum meets international standards."
            },
            { 
              name: "Mrs. Manisha Kasbe", 
              position: "Secretary", 
              image: "/about/secretary.jpg",
              bio: "As secretary, she manages administrative operations and community relations with exceptional skill."
            },
          ].map((leader, index) => (
            <div 
              key={index} 
              className="text-center bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group"
            >
              {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#6a1b9a]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white z-10">
                <p className="text-sm">{leader.bio}</p>
              </div> */}
              <div className="mb-6 mx-auto relative h-[200px] w-[200px] overflow-hidden rounded-full border-4 border-white shadow-lg">
                <Image 
                  src={leader.image} 
                  alt={leader.name} 
                  fill 
                  className="object-cover rounded-full transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-800 group-hover:text-dark relative z-20">{leader.name}</h3>
              <p className="text-[#8e24aa] font-medium mb-4 group-hover:text-dark relative z-20">{leader.position}</p>
              <div className="flex justify-center space-x-4 relative z-20">
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
      <div className="bg-[#f9f6fb] py-16">
        <div className="container mx-auto px-4">
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
                  { 
                    year: "2005", 
                    achievement: "Establishment of Abhishek International School",
                    icon: "M13 10V3L4 14h7v7l9-11h-7z" 
                  },
                  { 
                    year: "2010", 
                    achievement: "Received accreditation from the International Education Board",
                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                  },
                  { 
                    year: "2015", 
                    achievement: "Expansion of campus with state-of-the-art facilities in Moshi",
                    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                  },
                  { 
                    year: "2018", 
                    achievement: "Celebrated 10 years of academic excellence",
                    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                  },
                  { 
                    year: "2020", 
                    achievement: "Recognized as one of the top schools in the region",
                    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" 
                  },
                  { 
                    year: "2022", 
                    achievement: "Launched innovative STEM program and digital classrooms",
                    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
                  },
                  { 
                    year: "2023", 
                    achievement: "Opened new sports complex and performing arts center",
                    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" 
                  },
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                  >
                    <div className={`w-1/2 px-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="inline-block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 rounded-full bg-[#f3e5f5] flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#6a1b9a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                            </svg>
                          </div>
                          <div className="text-xl font-bold text-[#8e24aa]">{item.year}</div>
                        </div>
                        <p className="text-gray-700 text-left">{item.achievement}</p>
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
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold text-[#6a1b9a]">
            What Parents Say
          </h2>
          <div className="mb-6 h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Hear from our school community about their experiences
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {[
            {
              quote: "Abhishek International has provided my child with an exceptional learning environment that balances academics and character development perfectly.",
              author: "Mrs. Sharma",
              role: "Parent of Grade 5 student"
            },
            {
              quote: "The teachers' dedication and the school's innovative curriculum have helped my daughter develop confidence and a love for learning.",
              author: "Mr. Patel",
              role: "Parent of Grade 8 student"
            }
          ].map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg overflow-hidden bg-white">
              <CardContent className="p-8">
                <div className="mb-6 text-[#6a1b9a]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-bold text-[#6a1b9a]">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

     
      </div>
    
  );
}