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
    <div>
      <SubNavHeader title="About" items={aboutNavItems} />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-sky-700 sm:text-4xl md:text-5xl">Principal's Message</h1>
          <div className="mb-6 h-1 w-24 bg-gradient-to-r from-sky-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="relative h-[350px] w-full overflow-hidden rounded-lg shadow-xl mb-6">
                <Image
                  src="/placeholder.svg?height=400&width=300&text=Principal"
                  alt="Mrs. Sunita Sharma"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold text-sky-700">Mrs. Sunita Sharma</h2>
                <p className="text-purple-600">Principal</p>
                <p className="text-gray-600 mt-2">M.Ed., B.Ed., M.A. (English)</p>
                <p className="text-gray-600">20+ Years of Experience in Education</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl font-serif italic text-gray-700 mb-6">
                "Education is not the filling of a pail, but the lighting of a fire."
              </p>

              <p>Dear Parents and Students,</p>

              <p>
                It gives me immense pleasure to welcome you to Abhishek International School, an institution committed
                to excellence in education and holistic development of students. As the Principal, I am proud to lead a
                team of dedicated educators who are passionate about nurturing young minds and helping them realize
                their full potential.
              </p>

              <p>
                At Abhishek International School, we believe that education goes beyond textbooks and classrooms. It is
                about igniting curiosity, fostering creativity, and instilling values that will guide our students
                throughout their lives. Our comprehensive curriculum, state-of-the-art facilities, and diverse
                co-curricular activities are designed to provide a well-rounded education that prepares students not
                just for examinations, but for life itself.
              </p>

              <p>
                In today's rapidly changing world, it is essential for students to develop not only academic knowledge
                but also critical thinking skills, adaptability, and emotional intelligence. Our teaching methodologies
                focus on experiential learning, problem-solving, and character building, ensuring that our students
                emerge as confident, responsible, and compassionate individuals ready to face the challenges of the 21st
                century.
              </p>

              <p>
                We recognize that each child is unique, with their own strengths, interests, and learning styles. Our
                teachers are trained to identify and nurture these individual qualities, providing personalized
                attention and guidance to help every student excel in their chosen path. We also place great emphasis on
                creating a safe, inclusive, and supportive learning environment where students feel valued and
                respected.
              </p>

              <p>
                Parents are our most important partners in this educational journey. We encourage open communication and
                active participation from parents, believing that a strong home-school partnership is crucial for a
                child's success. Together, we can create a positive and enriching experience that will shape the future
                of our children.
              </p>

              <p>
                As we embark on another exciting academic year, I invite you to join us in our mission to provide
                quality education that transforms lives. Let us work together to inspire our students to dream big, work
                hard, and make a difference in the world.
              </p>

              <p>
                I look forward to meeting you and your children, and to a fruitful association with Abhishek
                International School.
              </p>

              <p>Warm regards,</p>

              <p className="font-bold">
                Mrs. Sunita Sharma
                <br />
                Principal
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-sky-50 to-purple-50 p-8 rounded-lg">
          <h2 className="mb-6 text-2xl font-bold text-center text-sky-700">Principal's Achievements</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "National Award for Excellence in Educational Leadership, 2020",
              "Published research on 'Innovative Teaching Methodologies' in International Journal of Education",
              "Keynote speaker at multiple educational conferences",
              "Led the school to achieve ISO 9001:2015 certification",
              "Implemented several community outreach programs",
              "Established international exchange programs with schools in three countries",
            ].map((achievement, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

