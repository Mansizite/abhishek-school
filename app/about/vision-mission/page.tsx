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

export default function VisionMissionPage() {
  return (
    <div>
      <SubNavHeader title="About" items={aboutNavItems} />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-sky-700 sm:text-4xl md:text-5xl">Vision & Mission</h1>
          <div className="mb-6 h-1 w-24 bg-gradient-to-r from-sky-500 to-purple-500 mx-auto"></div>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Our guiding principles that shape our educational philosophy and approach.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Our Vision"
              alt="Vision"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="mb-6 text-3xl font-bold text-sky-700">Our Vision</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                To be a premier educational institution that nurtures global citizens who are intellectually competent,
                morally upright, and socially responsible, equipped to meet the challenges of a rapidly changing world.
              </p>
              <p>
                We envision our students as future leaders who will contribute positively to society, uphold ethical
                values, and drive innovation in their chosen fields. Our vision encompasses creating an educational
                environment that fosters critical thinking, creativity, and a lifelong love for learning.
              </p>
              <p>
                We aspire to be recognized nationally and internationally for our academic excellence, innovative
                teaching methodologies, and holistic approach to education that addresses the intellectual, physical,
                emotional, and spiritual dimensions of a child's development.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-sky-700">Our Mission</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                To provide a stimulating learning environment that promotes academic excellence, fosters creativity,
                encourages critical thinking, and instills values of integrity, respect, and compassion, enabling
                students to realize their full potential and contribute meaningfully to society.
              </p>
              <p>We are committed to:</p>
              <ul>
                <li>Providing a comprehensive curriculum that balances academic rigor with co-curricular activities</li>
                <li>Employing qualified and dedicated educators who inspire and mentor students</li>
                <li>Creating a safe, inclusive, and supportive learning environment</li>
                <li>Integrating technology and innovative teaching methods to enhance learning outcomes</li>
                <li>Fostering a sense of global citizenship and cultural awareness</li>
                <li>Developing leadership skills and social responsibility</li>
                <li>Building strong partnerships with parents and the community</li>
              </ul>
              <p>
                Through our mission, we strive to prepare students not just for academic success, but for life itself,
                equipping them with the knowledge, skills, and values they need to navigate an increasingly complex
                world.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Our Mission"
              alt="Mission"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-sky-50 to-purple-50 p-8 rounded-lg mb-16">
          <h2 className="mb-6 text-2xl font-bold text-center text-sky-700">Core Values</h2>
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
        </div>

        <div className="text-center">
          <h2 className="mb-6 text-2xl font-bold text-sky-700">Our Motto</h2>
          <div className="max-w-3xl mx-auto">
            <div className="text-3xl font-serif italic text-purple-600 mb-4">"Knowledge, Character, Excellence"</div>
            <p className="text-lg text-gray-600">
              This motto encapsulates our belief that true education encompasses not just the acquisition of knowledge,
              but also the development of character and the pursuit of excellence in all endeavors.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

