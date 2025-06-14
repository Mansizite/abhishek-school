import Image from "next/image"
import { SubNavHeader } from "@/components/sub-nav-header"

const comprehensiveInfoNavItems = [
  { title: "School History", href: "/comprehensive-info/history" },
  { title: "Academic Excellence", href: "/comprehensive-info/academic-excellence" },
  { title: "Infrastructure", href: "/comprehensive-info/infrastructure" },
  { title: "Awards & Recognition", href: "/comprehensive-info/awards" },
]

export default function SchoolHistoryPage() {
  return (
    <div>
      <SubNavHeader title="Comprehensive Info" items={comprehensiveInfoNavItems} />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-sky-700 sm:text-4xl md:text-5xl">School History</h1>
          <div className="mb-6 h-1 w-24 bg-gradient-to-r from-sky-500 to-purple-500 mx-auto"></div>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Discover the journey of Abhishek International School from its humble beginnings to becoming a leading
            educational institution.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Our Founding</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Abhishek International School was founded in 2005 by Dr. Rajesh Kumar, a visionary educator with a
                passion for transforming education. What began as a small institution with just 120 students and 15
                teachers has now grown into one of the most prestigious educational establishments in the region.
              </p>
              <p>
                The school was established with a mission to provide quality education that focuses not just on academic
                excellence but also on character development and holistic growth. Dr. Kumar believed that education
                should prepare students not just for examinations but for life itself.
              </p>
              <p>
                The name "Abhishek" was chosen to signify the anointing or blessing of knowledge and wisdom upon the
                students who would pass through its gates.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=400&width=600&text=School Founding"
              alt="School Founding"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-center text-sky-700">Timeline of Growth</h2>
          <div className="relative border-l-2 border-sky-500 ml-4 md:ml-0 md:mx-auto md:max-w-4xl pl-8 md:pl-0">
            {[
              {
                year: "2005",
                title: "Establishment",
                description:
                  "Abhishek International School was established with 120 students and 15 teachers in a rented building.",
                image: "/placeholder.svg?height=200&width=300&text=2005",
              },
              {
                year: "2008",
                title: "First Campus",
                description:
                  "The school moved to its own campus with improved facilities including science labs and a library.",
                image: "/placeholder.svg?height=200&width=300&text=2008",
              },
              {
                year: "2010",
                title: "Expansion",
                description:
                  "The school expanded to include higher secondary classes with specialized streams in Science, Commerce, and Humanities.",
                image: "/placeholder.svg?height=200&width=300&text=2010",
              },
              {
                year: "2012",
                title: "Sports Complex",
                description:
                  "A state-of-the-art sports complex was inaugurated, featuring indoor and outdoor facilities for various sports.",
                image: "/placeholder.svg?height=200&width=300&text=2012",
              },
              {
                year: "2015",
                title: "10th Anniversary",
                description:
                  "The school celebrated its 10th anniversary with a grand cultural event and the launch of a scholarship program.",
                image: "/placeholder.svg?height=200&width=300&text=2015",
              },
              {
                year: "2018",
                title: "International Recognition",
                description:
                  "The school received international accreditation and established exchange programs with schools abroad.",
                image: "/placeholder.svg?height=200&width=300&text=2018",
              },
              {
                year: "2020",
                title: "Digital Transformation",
                description:
                  "Implementation of advanced digital learning platforms and smart classrooms across the campus.",
                image: "/placeholder.svg?height=200&width=300&text=2020",
              },
              {
                year: "2023",
                title: "New Wing",
                description:
                  "Inauguration of a new academic wing with specialized facilities for STEM education and performing arts.",
                image: "/placeholder.svg?height=200&width=300&text=2023",
              },
            ].map((item, index) => (
              <div key={index} className={`mb-12 md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                  <div className="bg-sky-100 inline-block px-3 py-1 rounded-full text-sky-700 font-bold mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
                  <div className="relative h-[150px] rounded-lg overflow-hidden shadow-md">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 mt-1 md:mt-0">
                  <div className="w-4 h-4 rounded-full bg-sky-500 border-4 border-white shadow"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
            <Image
              src="/placeholder.svg?height=400&width=600&text=School Today"
              alt="School Today"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">The School Today</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Today, Abhishek International School stands as a testament to the vision of its founder. With over 2,000
                students and 150 faculty members, the school has established itself as a center of academic excellence
                and holistic development.
              </p>
              <p>
                Our sprawling campus now features modern classrooms, well-equipped laboratories, a comprehensive
                library, sports facilities, and dedicated spaces for arts and cultural activities. The school has
                embraced technology with smart classrooms and digital learning platforms while maintaining its focus on
                personalized attention and value-based education.
              </p>
              <p>
                Our alumni have gone on to excel in various fields, from academics to sports, from arts to
                entrepreneurship, carrying forward the values and principles instilled in them during their time at
                Abhishek International School.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-sky-50 to-purple-50 p-8 rounded-lg">
          <h2 className="mb-6 text-2xl font-bold text-center text-sky-700">Our Legacy</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-sky-600 mb-2">2000+</div>
              <h3 className="text-lg font-semibold mb-2">Students</h3>
              <p className="text-gray-600">
                Currently enrolled across all grades from kindergarten to higher secondary.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
              <h3 className="text-lg font-semibold mb-2">Faculty Members</h3>
              <p className="text-gray-600">Dedicated educators with expertise in various academic disciplines.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-sky-600 mb-2">3000+</div>
              <h3 className="text-lg font-semibold mb-2">Alumni</h3>
              <p className="text-gray-600">
                Successful graduates making their mark in various fields around the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

