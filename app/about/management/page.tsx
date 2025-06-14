import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { SubNavHeader } from "@/components/sub-nav-header"

const aboutNavItems = [
  { title: "About Us", href: "/about" },
  { title: "Vision & Mission", href: "/about/vision-mission" },
  { title: "Management Members", href: "/about/management" },
  { title: "Principal's Message", href: "/about/principal-message" },
  { title: "Curriculum", href: "/about/curriculum" },
]

export default function ManagementPage() {
  return (
    <div>
      <SubNavHeader title="About" items={aboutNavItems} />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-sky-700 sm:text-4xl md:text-5xl">Management Members</h1>
          <div className="mb-6 h-1 w-24 bg-gradient-to-r from-sky-500 to-purple-500 mx-auto"></div>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Meet the dedicated team of professionals who lead Abhishek International School with vision and commitment.
          </p>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="mb-6 mx-auto relative h-[200px] w-[200px] overflow-hidden rounded-full border-4 border-sky-500">
              <Image
                src="/placeholder.svg?height=300&width=300&text=Chairman"
                alt="Dr. Rajesh Kumar"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-sky-700">Dr. Rajesh Kumar</h2>
            <p className="text-xl text-purple-600 mb-4">Chairman</p>
            <div className="max-w-2xl mx-auto prose">
              <p>
                Dr. Rajesh Kumar brings over 30 years of experience in education to his role as Chairman of Abhishek
                International School. With a Ph.D. in Educational Leadership from a prestigious university, he has
                dedicated his life to transforming education and creating opportunities for students to excel.
              </p>
              <p>
                Under his visionary leadership, the school has grown from strength to strength, establishing itself as a
                center of academic excellence and holistic development. Dr. Kumar believes in the power of education to
                transform lives and is committed to providing quality education that prepares students for the
                challenges of the 21st century.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                name: "Mrs. Sunita Sharma",
                position: "Principal",
                image: "/placeholder.svg?height=300&width=300&text=Principal",
                bio: "Mrs. Sunita Sharma is an accomplished educator with 20 years of experience in teaching and school administration. She holds a Master's degree in Education and is passionate about creating a nurturing learning environment.",
              },
              {
                name: "Mr. Vikram Singh",
                position: "Vice Principal",
                image: "/placeholder.svg?height=300&width=300&text=Vice Principal",
                bio: "Mr. Vikram Singh oversees the academic programs and student affairs. With his background in educational psychology, he has implemented several innovative teaching methodologies.",
              },
              {
                name: "Dr. Anita Patel",
                position: "Academic Director",
                image: "/placeholder.svg?height=300&width=300&text=Academic Director",
                bio: "Dr. Anita Patel leads curriculum development and teacher training initiatives. Her expertise in international education systems has helped elevate our academic standards.",
              },
              {
                name: "Mr. Sanjay Gupta",
                position: "Administrative Officer",
                image: "/placeholder.svg?height=300&width=300&text=Admin Officer",
                bio: "Mr. Sanjay Gupta manages the day-to-day operations of the school, ensuring smooth functioning of all administrative processes and infrastructure maintenance.",
              },
              {
                name: "Mrs. Priya Verma",
                position: "Head of Primary Section",
                image: "/placeholder.svg?height=300&width=300&text=Primary Head",
                bio: "Mrs. Priya Verma specializes in early childhood education and has transformed our primary section with child-centered teaching approaches and activity-based learning.",
              },
              {
                name: "Mr. Rahul Mehta",
                position: "Head of Secondary Section",
                image: "/placeholder.svg?height=300&width=300&text=Secondary Head",
                bio: "Mr. Rahul Mehta brings his expertise in STEM education to guide our secondary students. He has established partnerships with leading universities for student enrichment.",
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-[250px]">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-sky-700">{member.name}</h3>
                  <p className="text-purple-600 mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-sky-50 to-purple-50 p-8 rounded-lg">
          <h2 className="mb-6 text-2xl font-bold text-center text-sky-700">Board of Trustees</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { name: "Mr. Anil Kumar", position: "Trustee", expertise: "Finance and Administration" },
              { name: "Mrs. Deepa Joshi", position: "Trustee", expertise: "Curriculum Development" },
              { name: "Dr. Suresh Patel", position: "Trustee", expertise: "Educational Technology" },
              { name: "Ms. Kavita Singh", position: "Trustee", expertise: "Community Relations" },
            ].map((trustee, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow">
                <div className="bg-gradient-to-r from-sky-500 to-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  {trustee.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{trustee.name}</h3>
                  <p className="text-sm text-purple-600">{trustee.position}</p>
                  <p className="text-sm text-gray-500">Expertise: {trustee.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

