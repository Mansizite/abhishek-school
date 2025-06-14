import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold text-sky-700 sm:text-4xl md:text-5xl">About Us</h1>
        <div className="mb-6 h-1 w-24 bg-gradient-to-r from-sky-500 to-purple-500 mx-auto"></div>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          Learn more about Abhishek International School, our history, vision, and commitment to excellence in
          education.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Our Story</h2>
          <p className="mb-4 text-gray-600">
            Founded in 2005, Abhishek International School has grown from a small institution to one of the leading
            educational establishments in the region. Our journey has been marked by a steadfast commitment to academic
            excellence and holistic development of students.
          </p>
          <p className="mb-4 text-gray-600">
            Over the years, we have expanded our facilities, enhanced our curriculum, and strengthened our faculty to
            provide the best possible education to our students. Today, we stand proud as an institution that has shaped
            thousands of young minds and prepared them for future success.
          </p>
          <p className="text-gray-600">
            Our alumni have gone on to excel in various fields, from academics to sports, from arts to entrepreneurship,
            carrying forward the values and principles instilled in them during their time at Abhishek International
            School.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image src="/placeholder.svg?height=400&width=600" alt="School Building" fill className="object-cover" />
        </div>
      </div>

      <Tabs defaultValue="vision" className="mb-16">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="vision">Vision & Mission</TabsTrigger>
          <TabsTrigger value="values">Core Values</TabsTrigger>
        </TabsList>
        <TabsContent value="vision" className="mt-6">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-4 text-xl font-bold text-sky-700">Our Vision</h3>
                <p className="text-gray-600">
                  To be a premier educational institution that nurtures global citizens who are intellectually
                  competent, institution that nurtures global citizens who are intellectually competent, morally
                  upright, and socially responsible, equipped to meet the challenges of a rapidly changing world.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-4 text-xl font-bold text-sky-700">Our Mission</h3>
                <p className="text-gray-600">
                  To provide a stimulating learning environment that promotes academic excellence, fosters creativity,
                  encourages critical thinking, and instills values of integrity, respect, and compassion, enabling
                  students to realize their full potential and contribute meaningfully to society.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="values" className="mt-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-lg font-bold text-sky-700">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-center text-sky-700">Our Leadership Team</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { name: "Dr. Rajesh Kumar", position: "Chairman", image: "/placeholder.svg?height=300&width=300" },
            { name: "Mrs. Sunita Sharma", position: "Principal", image: "/placeholder.svg?height=300&width=300" },
            { name: "Mr. Vikram Singh", position: "Vice Principal", image: "/placeholder.svg?height=300&width=300" },
          ].map((leader, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 mx-auto relative h-[200px] w-[200px] overflow-hidden rounded-full border-4 border-sky-500">
                <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
              </div>
              <h3 className="mb-1 text-xl font-bold">{leader.name}</h3>
              <p className="text-gray-600">{leader.position}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="mb-6 text-2xl font-bold text-center text-sky-700">Achievements & Milestones</h2>
        <div className="space-y-4">
          {[
            { year: "2005", achievement: "Establishment of Abhishek International School" },
            { year: "2008", achievement: "Received accreditation from the International Education Board" },
            { year: "2012", achievement: "Expansion of campus with state-of-the-art facilities" },
            { year: "2015", achievement: "Celebrated 10 years of academic excellence" },
            { year: "2018", achievement: "Recognized as one of the top 50 schools in the region" },
            { year: "2020", achievement: "Launched innovative STEM program" },
            { year: "2022", achievement: "Opened new sports complex and performing arts center" },
          ].map((item, index) => (
            <div key={index} className="flex">
              <div className="mr-4 w-20 shrink-0 text-right font-bold text-purple-600">{item.year}</div>
              <div className="grow border-l-2 border-sky-500 pl-4 pb-4">{item.achievement}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

