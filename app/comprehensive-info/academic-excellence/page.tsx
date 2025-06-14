import Image from "next/image"
import { SubNavHeader } from "@/components/sub-nav-header"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, BookOpen, Trophy, Users } from "lucide-react"

const comprehensiveInfoNavItems = [
  { title: "School History", href: "/comprehensive-info/history" },
  { title: "Academic Excellence", href: "/comprehensive-info/academic-excellence" },
  { title: "Infrastructure", href: "/comprehensive-info/infrastructure" },
  { title: "Awards & Recognition", href: "/comprehensive-info/awards" },
]

export default function AcademicExcellencePage() {
  return (
    <div>
      <SubNavHeader title="Comprehensive Info" items={comprehensiveInfoNavItems} />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-sky-700 sm:text-4xl md:text-5xl">Academic Excellence</h1>
          <div className="mb-6 h-1 w-24 bg-gradient-to-r from-sky-500 to-purple-500 mx-auto"></div>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            At Abhishek International School, we are committed to fostering academic excellence through innovative
            teaching methodologies, rigorous curriculum, and personalized attention to each student.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Our Approach to Education</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Our approach to education is rooted in the belief that every child has unique talents and abilities that
                need to be nurtured and developed. We focus on creating a stimulating learning environment that
                encourages curiosity, critical thinking, and a love for learning.
              </p>
              <p>
                Our teaching methodologies combine traditional classroom instruction with experiential learning,
                project-based activities, and technology integration. This balanced approach ensures that students not
                only acquire knowledge but also develop essential skills such as problem-solving, creativity, and
                collaboration.
              </p>
              <p>
                We maintain small class sizes to ensure personalized attention to each student, allowing teachers to
                identify and address individual learning needs, strengths, and areas for improvement.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Academic Excellence"
              alt="Academic Excellence"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <Tabs defaultValue="curriculum" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="faculty">Faculty</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="programs">Special Programs</TabsTrigger>
            </TabsList>

            <TabsContent value="curriculum" className="mt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold text-sky-700 mb-4">Comprehensive Curriculum</h3>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      Our curriculum is designed to provide a well-rounded education that balances academic rigor with
                      co-curricular activities. It is aligned with national and international standards while
                      incorporating innovative elements that make learning engaging and relevant.
                    </p>
                    <p>
                      The curriculum emphasizes the development of core competencies in language, mathematics, science,
                      and social studies, while also fostering creativity through arts, music, and physical education.
                    </p>
                  </div>

                  <h4 className="text-lg font-semibold text-purple-600 mt-6 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <BookOpen className="h-5 w-5 text-sky-600 mr-2 mt-1" />
                      <span>Integration of technology across subjects</span>
                    </li>
                    <li className="flex items-start">
                      <BookOpen className="h-5 w-5 text-sky-600 mr-2 mt-1" />
                      <span>Focus on conceptual understanding rather than rote learning</span>
                    </li>
                    <li className="flex items-start">
                      <BookOpen className="h-5 w-5 text-sky-600 mr-2 mt-1" />
                      <span>Regular assessments to track progress and provide feedback</span>
                    </li>
                    <li className="flex items-start">
                      <BookOpen className="h-5 w-5 text-sky-600 mr-2 mt-1" />
                      <span>Interdisciplinary projects that connect different subjects</span>
                    </li>
                    <li className="flex items-start">
                      <BookOpen className="h-5 w-5 text-sky-600 mr-2 mt-1" />
                      <span>Life skills and value education integrated into the curriculum</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-sky-50 to-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-sky-700 mb-4">Academic Streams</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-bold text-sky-700">Science Stream</h4>
                        <p className="text-sm text-gray-600 mb-2">Physics, Chemistry, Biology, Mathematics</p>
                        <p className="text-sm text-gray-600">
                          Prepares students for careers in medicine, engineering, research, and technology.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-bold text-sky-700">Commerce Stream</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Accountancy, Business Studies, Economics, Mathematics
                        </p>
                        <p className="text-sm text-gray-600">
                          Prepares students for careers in business, finance, accounting, and entrepreneurship.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-bold text-sky-700">Humanities Stream</h4>
                        <p className="text-sm text-gray-600 mb-2">History, Geography, Political Science, Psychology</p>
                        <p className="text-sm text-gray-600">
                          Prepares students for careers in law, journalism, social services, and civil services.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faculty" className="mt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold text-sky-700 mb-4">Qualified and Dedicated Faculty</h3>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      Our faculty comprises highly qualified and experienced educators who are passionate about teaching
                      and committed to the holistic development of students. They bring a wealth of knowledge,
                      expertise, and innovative teaching practices to the classroom.
                    </p>
                    <p>
                      Our teachers regularly participate in professional development programs to stay updated with the
                      latest educational trends and teaching methodologies. They are mentors and guides who inspire
                      students to explore, question, and learn.
                    </p>
                  </div>

                  <h4 className="text-lg font-semibold text-purple-600 mt-6 mb-3">Faculty Qualifications</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Users className="h-5 w-5 text-sky-600 mr-2 mt-1" />
                      <span>All teachers hold at least a Master's degree in their respective subjects</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-5 w-5 text-sky-600 mr-2 mt-1" />
                      <span>
                        Many faculty members have additional certifications in specialized teaching methodologies
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-5 w-5 text-sky-600 mr-2 mt-1" />
                      <span>Several teachers have research experience and publications in academic journals</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-5 w-5 text-sky-600 mr-2 mt-1" />
                      <span>Regular training in the latest educational technologies and teaching approaches</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/placeholder.svg?height=200&width=300&text=Faculty 1"
                        alt="Faculty"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/placeholder.svg?height=200&width=300&text=Faculty 2"
                        alt="Faculty"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/placeholder.svg?height=200&width=300&text=Faculty 3"
                        alt="Faculty"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
                      <Image
                        src="/placeholder.svg?height=200&width=300&text=Faculty 4"
                        alt="Faculty"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-sky-50 to-purple-50 p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-sky-700 mb-3">Faculty Development</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-sky-100 p-2 rounded-full mr-3">
                          <Users className="h-5 w-5 text-sky-600" />
                        </div>
                        <div>
                          <span className="font-medium">Regular Workshops</span>
                          <p className="text-sm text-gray-600">
                            Teachers participate in workshops on innovative teaching methodologies
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-sky-100 p-2 rounded-full mr-3">
                          <Users className="h-5 w-5 text-sky-600" />
                        </div>
                        <div>
                          <span className="font-medium">Collaborative Learning</span>
                          <p className="text-sm text-gray-600">
                            Regular faculty meetings for sharing best practices and collaborative planning
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-sky-100 p-2 rounded-full mr-3">
                          <Users className="h-5 w-5 text-sky-600" />
                        </div>
                        <div>
                          <span className="font-medium">Research Opportunities</span>
                          <p className="text-sm text-gray-600">
                            Support for teachers to engage in educational research and innovation
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="mt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold text-sky-700 mb-4">Academic Achievements</h3>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      Our students have consistently achieved outstanding results in board examinations and competitive
                      tests. Their success is a testament to our academic rigor, dedicated faculty, and supportive
                      learning environment.
                    </p>
                    <p>
                      Beyond examinations, our students have excelled in various academic competitions, Olympiads, and
                      research projects at national and international levels. These achievements reflect their
                      intellectual curiosity, critical thinking skills, and passion for learning.
                    </p>
                  </div>

                  <h4 className="text-lg font-semibold text-purple-600 mt-6 mb-3">Recent Highlights</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Trophy className="h-5 w-5 text-sky-600 mr-2 mt-1" />
                      <span>100% pass rate in board examinations for the past 5 consecutive years</span>
                    </li>
                    <li className="flex items-start">
                      <Trophy className="h-5 w-5 text-sky-600 mr-2 mt-1" />
                      <span>Over 75% of students scoring above 90% in board examinations</span>
                    </li>
                    <li className="flex items-start">
                      <Trophy className="h-5 w-5 text-sky-600 mr-2 mt-1" />
                      <span>
                        National and international Olympiad medalists in Mathematics, Science, and Informatics
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Trophy className="h-5 w-5 text-sky-600 mr-2 mt-1" />
                      <span>
                        Students selected for prestigious national science and mathematics talent search programs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Trophy className="h-5 w-5 text-sky-600 mr-2 mt-1" />
                      <span>Research papers by senior students published in academic journals</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h4 className="text-lg font-bold text-sky-700 mb-3">Board Examination Results (2023)</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Students scoring above 95%</span>
                          <span className="font-medium text-purple-600">35%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{ width: "35%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Students scoring 90-95%</span>
                          <span className="font-medium text-sky-600">42%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-sky-600 h-2 rounded-full" style={{ width: "42%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Students scoring 80-90%</span>
                          <span className="font-medium text-green-600">18%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: "18%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Students scoring below 80%</span>
                          <span className="font-medium text-orange-600">5%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-orange-600 h-2 rounded-full" style={{ width: "5%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-sky-50 to-purple-50 p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-sky-700 mb-3">College Placements</h4>
                    <p className="mb-4 text-gray-700">
                      Our students have secured admissions to prestigious universities in India and abroad, including:
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white p-3 rounded-md shadow-sm">
                        <span className="font-medium text-sky-700">IITs and NITs</span>
                      </div>
                      <div className="bg-white p-3 rounded-md shadow-sm">
                        <span className="font-medium text-sky-700">AIIMS and Top Medical Colleges</span>
                      </div>
                      <div className="bg-white p-3 rounded-md shadow-sm">
                        <span className="font-medium text-sky-700">Delhi University</span>
                      </div>
                      <div className="bg-white p-3 rounded-md shadow-sm">
                        <span className="font-medium text-sky-700">Harvard University</span>
                      </div>
                      <div className="bg-white p-3 rounded-md shadow-sm">
                        <span className="font-medium text-sky-700">Oxford University</span>
                      </div>
                      <div className="bg-white p-3 rounded-md shadow-sm">
                        <span className="font-medium text-sky-700">Stanford University</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="programs" className="mt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold text-sky-700 mb-4">Special Academic Programs</h3>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      We offer a range of special academic programs designed to cater to diverse learning needs and
                      interests. These programs provide opportunities for students to explore their passions, develop
                      specialized skills, and prepare for future academic and career paths.
                    </p>
                    <p>
                      Our special programs are led by expert faculty members and often involve collaborations with
                      universities, research institutions, and industry partners. They complement the regular curriculum
                      and provide enriching learning experiences.
                    </p>
                  </div>

                  <h4 className="text-lg font-semibold text-purple-600 mt-6 mb-3">Featured Programs</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-sky-600 mr-2 mt-1" />
                      <span>STEM Excellence Program for budding scientists and engineers</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-sky-600 mr-2 mt-1" />
                      <span>Young Entrepreneurs Initiative for business-minded students</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-sky-600 mr-2 mt-1" />
                      <span>Creative Writing and Journalism Workshop for aspiring writers</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-sky-600 mr-2 mt-1" />
                      <span>Competitive Examination Preparation for JEE, NEET, and other entrance tests</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-5 w-5 text-sky-600 mr-2 mt-1" />
                      <span>Language Proficiency Programs for English and foreign languages</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold text-sky-700 mb-2">STEM Excellence Program</h4>
                      <p className="text-gray-600 mb-4">
                        A specialized program for students with a strong aptitude for Science, Technology, Engineering,
                        and Mathematics. It includes advanced coursework, hands-on projects, research opportunities, and
                        mentoring by experts.
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded-full mr-2">Grades 8-12</span>
                        <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                          Selection through aptitude test
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold text-sky-700 mb-2">Young Entrepreneurs Initiative</h4>
                      <p className="text-gray-600 mb-4">
                        Designed to nurture entrepreneurial skills and business acumen. Students learn about business
                        planning, marketing, finance, and innovation through workshops, case studies, and mentoring by
                        successful entrepreneurs.
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded-full mr-2">Grades 9-12</span>
                        <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                          Open to all interested students
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold text-sky-700 mb-2">Competitive Exam Preparation</h4>
                      <p className="text-gray-600 mb-4">
                        Comprehensive coaching for various competitive examinations including JEE, NEET, CLAT, and
                        Olympiads. The program includes specialized study materials, regular mock tests, and
                        personalized guidance.
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded-full mr-2">Grades 11-12</span>
                        <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                          Based on academic performance
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="text-center mb-12">
          <h2 className="mb-6 text-2xl font-bold text-sky-700">Our Commitment to Excellence</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            At Abhishek International School, academic excellence is not just about achieving high scores in
            examinations. It is about fostering a love for learning, developing critical thinking skills, and preparing
            students to be lifelong learners who can adapt to the challenges of a rapidly changing world.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-700 mb-3">Personalized Learning</h3>
              <p className="text-gray-600">
                We recognize that each student has unique learning needs and styles. Our teachers provide personalized
                attention and adapt their teaching approaches to cater to individual requirements, ensuring that every
                student can reach their full potential.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-700 mb-3">Technology Integration</h3>
              <p className="text-gray-600">
                We integrate technology into our teaching and learning processes to enhance educational experiences. Our
                smart classrooms, digital resources, and online platforms provide students with access to a wealth of
                information and interactive learning tools.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-sky-700 mb-3">Global Perspective</h3>
              <p className="text-gray-600">
                We prepare our students to be global citizens by exposing them to diverse perspectives, cultures, and
                ideas. Our curriculum incorporates global issues and encourages students to think critically about their
                role in an interconnected world.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

