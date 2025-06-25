import { Card, CardContent } from "@/components/ui/card";
import { SubNavHeader } from "@/components/sub-nav-header";

const aboutNavItems = [
  { title: "About Us", href: "/about" },
  { title: "Vision & Mission", href: "/about/vision-mission" },
  { title: "Management Members", href: "/about/management" },
  { title: "Principal's Message", href: "/about/principal-message" },
  { title: "Curriculum", href: "/about/curriculum" },
];

export default function VisionMissionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6fb] to-white font-serif">
      <SubNavHeader title="About" items={aboutNavItems} />

      {/* Title */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="mb-4 text-4xl font-bold text-800" style={{color:'#6a1b9a'}}>Vision & Mission</h1>
        <div className="mb-8 h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full"></div>
      </div>

    {/* Vision & Mission Side by Side */}
<div className="container mx-auto px-4 py-16">
  <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
    
    {/* Vision Card */}
    <div className="flex-1 bg-white shadow-xl rounded-xl p-8 border border-[#e1bee7] text-center">
      <div className="flex justify-center mb-4">
        <div className="bg-gradient-to-br from-[#e1bee7] to-[#f3e5f5] p-4 rounded-full shadow-md">
          <svg className="w-8 h-8 text-[#6a1b9a]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M12 8c1.38 0 2.5-1.12 2.5-2.5S13.38 3 12 3s-2.5 1.12-2.5 2.5S10.62 8 12 8zM12 10v10M7 20h10" />
          </svg>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-[#6a1b9a] mb-3">Our Vision</h2>
      <p className="text-gray-700 leading-relaxed">
        “Look not from the mind, but from the soul, for the life that is coming is already before us,
        waiting to open up the world. Just look more closely, find the eyes to see.”
      </p>
    </div>

    {/* Mission Card */}
    <div className="flex-1 bg-white shadow-xl rounded-xl p-8 border border-[#e1bee7] text-center">
      <div className="flex justify-center mb-4">
        <div className="bg-gradient-to-br from-[#e1bee7] to-[#f3e5f5] p-4 rounded-full shadow-md">
          <svg className="w-8 h-8 text-[#6a1b9a]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M12 6v6l4 2m4 2a9 9 0 11-8-9" />
          </svg>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-[#6a1b9a] mb-3">Our Mission</h2>
      <p className="text-gray-700 leading-relaxed">
        “Education enriches life to a unique perspective of within and without.”
      </p>
    </div>
  </div>
</div>


      {/* Core Values */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-[#6a1b9a] mb-4">Core Values</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full mb-10"></div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Attitude before knowledge",
            "Excellence",
            "Passion",
            "Integrity",
            "Respect",
            "Encouragement",
          ].map((value, idx) => (
            <Card key={idx} className="shadow-lg hover:shadow-xl transition">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-[#6a1b9a]">{value}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* How Do We Do This */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-[#6a1b9a] mb-4">"How Do We Do This?"</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full mb-8"></div>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed max-w-3xl mx-auto">
          <li>We make learning a passion through which several discoveries happen and success follows our path.</li>
          <li>We provide the child-oriented syllabus.</li>
          <li>Each day the child takes home a value that enhances the way a child sees life.</li>
          <li>Child starts respecting and celebrating his/her uniqueness of 'I Am'.</li>
          <li>The child starts realizing that connection with Mother Nature and respects everyone’s contribution to making this world a better place.</li>
        </ul>
      </div>

      {/* Aims & Objectives */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-[#6a1b9a] mb-4">Aims and Objectives</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-[#6a1b9a] to-[#ab47bc] mx-auto rounded-full mb-8"></div>
        <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed max-w-3xl mx-auto">
          <li>To develop a child’s physical, mental, emotional and spiritual growth.</li>
          <li>To develop a feeling of self-respect and love for oneself and surroundings.</li>
          <li>To inculcate pride in being a true Indian and instill qualities of an ideal citizen above all prejudices.</li>
          <li>To bring awareness in self-reliance.</li>
          <li>To bring awareness to daily activities.</li>
          <li>To create balance in creativity and calculations.</li>
          <li>To bring harmony to the surroundings.</li>
          <li>To spark creative energy within an individual.</li>
          <li>To direct energy in an innovative direction.</li>
          <li>To instill values of love, compassion, friendliness, and devotion that lead to human excellence.</li>
        </ul>
      </div>
    </div>
  );
}
