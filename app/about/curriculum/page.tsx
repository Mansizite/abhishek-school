import { SubNavHeader } from "@/components/sub-nav-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award, Clock, Calendar, FileText } from "lucide-react";

const aboutNavItems = [
  { title: "About Us", href: "/about" },
  { title: "Vision & Mission", href: "/about/vision-mission" },
  { title: "Management Members", href: "/about/management" },
  { title: "Principal's Message", href: "/about/principal-message" },
  { title: "Curriculum", href: "/about/curriculum" },
];

export default function CurriculumPage() {
  return (
    <div>
      <SubNavHeader title="About" items={aboutNavItems} />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-sky-700 sm:text-4xl md:text-5xl">Curriculum</h1>
          <div className="mb-6 h-1 w-24 bg-gradient-to-r from-sky-500 to-purple-500 mx-auto"></div>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Our comprehensive curriculum is designed to provide a well-rounded education that nurtures intellectual, physical, emotional, and social development.
          </p>
        </div>

        <div className="mb-16">
          <Tabs defaultValue="primary" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="primary">Primary Section</TabsTrigger>
              <TabsTrigger value="middle">Middle Section</TabsTrigger>
              <TabsTrigger value="senior">Senior Section</TabsTrigger>
            </TabsList>

            {/* Primary Section */}
            <TabsContent value="primary" className="mt-6">
              {/* ...Your full primary section remains unchanged... */}
            </TabsContent>

            {/* Middle Section */}
            <TabsContent value="middle" className="mt-6">
              {/* ...Your full middle section remains unchanged... */}
            </TabsContent>

            {/* ✅ Senior Section (with the fixed paragraph) */}
            <TabsContent value="senior" className="mt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-bold text-sky-700 mb-4">Senior Section (Grades 9-12)</h2>
                  <div className="prose prose-lg max-w-none">
                    <p>
                      The senior school curriculum is aligned with national board requirements and focuses on preparing students for 
                      higher education and career choices. It offers a rigorous academic program that develops in-depth subject knowledge, 
                      critical thinking, and problem-solving skills.
                    </p>
                    <p>
                      Students can choose from different streams - Science, Commerce, and Humanities - based on their interests and career aspirations.
                      The curriculum also includes career counseling, competitive exam preparation, and opportunities for internships and research projects.
                    </p>
                  </div>

                  <h3 className="text-xl font-bold text-purple-600 mt-6 mb-3">Streams Offered</h3>
                  <div className="space-y-4">
                    {/* Science, Commerce, Humanities Cards */}
                    {/* ...unchanged... */}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-purple-600 mb-3">Additional Programs</h3>
                  <ul className="space-y-3 mb-6">
                    {/* ...unchanged additional programs list... */}
                  </ul>

                  <div className="bg-gradient-to-r from-sky-50 to-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-sky-700 mb-3">Academic Calendar</h3>
                    <ul className="space-y-3">
                      {/* Academic Year, Exams, Board Exams */}
                      {/* ...unchanged... */}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Philosophy Section */}
        <div className="text-center mb-12">
          <h2 className="mb-6 text-2xl font-bold text-sky-700">Our Educational Philosophy</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            At Abhishek International School, we believe in providing a balanced education that nurtures the intellectual, 
            physical, emotional, and social dimensions of a child's development. Our curriculum is designed to foster a 
            love for learning, critical thinking skills, creativity, and character development.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Teaching Methodology, Assessment System, Special Features Cards */}
          {/* ...unchanged... */}
        </div>
      </div>
    </div>
  );
}
