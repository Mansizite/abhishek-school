'use client';

import { motion } from 'framer-motion';
import { BookOpen, Brain, Heart, Hand, Trophy, Book, Globe } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const programmeSections = [
  {
    title: "Holistic Education Philosophy",
    icon: <Brain className="text-[#8e24aa] w-8 h-8" />,
    content: (
      <>
        <p className="mb-4">
          We believe in what Gandhiji said — education means the development of 3 H: Head, Heart and Hand.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
            <div className="flex items-center mb-2">
              <Brain className="text-[#6a1b9a] mr-2" />
              <h4 className="font-semibold text-[#6a1b9a]">Head</h4>
            </div>
            <p>Remembering, calculations, thinking, and decision making.</p>
          </div>
          <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
            <div className="flex items-center mb-2">
              <Heart className="text-[#d81b60] mr-2" />
              <h4 className="font-semibold text-[#d81b60]">Heart</h4>
            </div>
            <p>Stress management, emotions, values, and human relations.</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
            <div className="flex items-center mb-2">
              <Hand className="text-[#5c6bc0] mr-2" />
              <h4 className="font-semibold text-[#5c6bc0]">Hand</h4>
            </div>
            <p>Application and learning by doing.</p>
          </div>
        </div>
        <p className="mt-6">
          Every child has inborn qualities and intelligence. With proper planning and stimulation, we strive to bring out the best in them.
        </p>
      </>
    )
  },
  {
    title: "Primary Education",
    icon: <BookOpen className="text-[#8e24aa] w-8 h-8" />,
    content: (
      <>
        <p className="mb-4">
          Our primary curriculum is based on CBSE and crafted to make learning enjoyable and meaningful. We nurture lifelong learners by sparking curiosity and engagement.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h4 className="font-semibold text-[#6a1b9a] mb-2">Focus Areas</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Reading, writing & speaking</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>IT & problem-solving</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Creative expression</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#6a1b9a] mb-2">Activities</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Drama & competitions</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Field trips</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Service projects</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-100">
          <p className="font-medium text-[#6a1b9a]">
            We currently offer Nursery to Class VIII (2021–2022), and plan to extend to Class X.
          </p>
        </div>
      </>
    )
  },
  {
    title: "Sports",
    icon: <Trophy className="text-[#8e24aa] w-8 h-8" />,
    content: (
      <>
        <p className="mb-4">
          Our school offers professional coaching in various sports to promote fitness, discipline, and teamwork.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {['Archery', 'Football', 'Basketball', 'Karate', 'Boxing', 'Rifle Shooting', 'Taekwondo', 'Skating'].map((sport) => (
            <div key={sport} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-center">
              <span className="font-medium text-[#6a1b9a]">{sport}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-100">
          <p>
            Our students have won medals in interschool skating events and other competitions.
          </p>
        </div>
      </>
    )
  },
  {
    title: "Olympiads & Scholarships",
    icon: <Trophy className="text-[#8e24aa] w-8 h-8" />,
    content: (
      <>
        <p className="mb-4">
          We aim to build confident students through competitive exams and Olympiads.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h4 className="font-semibold text-[#6a1b9a] mb-2">Our Approach</h4>
            <p>
              Our teachers are highly qualified and passionate, providing guidance and motivation to all learners.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h4 className="font-semibold text-[#6a1b9a] mb-2">Achievements</h4>
            <p>
              Many of our students have excelled in national level Olympiads and scholarship exams.
            </p>
          </div>
        </div>
      </>
    )
  },
  {
    title: "Library",
    icon: <Book className="text-[#8e24aa] w-8 h-8" />,
    content: (
      <>
        <p className="mb-4">
          Our well-stocked library fosters a love for reading and independent learning.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {['Storybooks', 'Novels', 'Encyclopedias', 'Dictionaries', 'Magazines', 'Reference Books'].map((item) => (
            <div key={item} className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100">
              <span className="text-purple-500 mr-2">•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </>
    )
  },
  {
    title: "Global & Civil Awareness",
    icon: <Globe className="text-[#8e24aa] w-8 h-8" />,
    content: (
      <>
        <p className="mb-4">
          We cultivate empathy and social responsibility through meaningful experiences.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h4 className="font-semibold text-[#6a1b9a] mb-2">Activities</h4>
            <ul className="space-y-2">
              {['Sharing Week', 'Orphanage Visits', 'Field Trips', 'Cookery Lessons', 'Community Service'].map((activity) => (
                <li key={activity} className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
            <h4 className="font-semibold text-[#6a1b9a] mb-2">Impact</h4>
            <p>
              These experiences help students connect with society and appreciate the value of giving back.
            </p>
          </div>
        </div>
      </>
    )
  }
];

function ProgrammesPage() {
  return (
    <div className="bg-gradient-to-br from-[#f9f6fb] to-white min-h-screen font-sans py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#6a1b9a] mb-4">
            Our <span className="bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] text-transparent bg-clip-text">Programmes</span>
          </h1>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive educational programmes designed to nurture holistic development.
          </p>
        </motion.div>

        <div className="space-y-8">
          {programmeSections.map((section, index) => (
            <motion.section
              key={section.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 p-2 rounded-lg mr-4">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl font-semibold text-[#6a1b9a]">{section.title}</h2>
                  </div>
                  <div className="text-gray-700 leading-relaxed">
                    {section.content}
                  </div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] rounded-xl p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Join Our Learning Community</h2>
          <p className="mb-6 max-w-2xl">
            Experience education that develops the head, heart and hands. Enroll your child today to begin their journey of holistic growth.
          </p>
          <button className="bg-white text-[#6a1b9a] px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition">
            Learn More About Admissions
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default ProgrammesPage;