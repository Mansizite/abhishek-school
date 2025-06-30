
// "use client"

// import * as React from "react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Menu, X } from "lucide-react"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"


// const navItems = [
//   {
//     title: "Home",
//     href: "/",
//     subItems: [],
//   },
//   {
//     title: "MPD",
//     href: "/mpd",
//     subItems: [],
//   },
//   {
//     title: "About",
//     href: "/about",
//     subItems: [
//       { title: "About Us", href: "/about" },
//       { title: "Vision & Mission", href: "/about/vision-mission" },
//       { title: "Management Members", href: "/about/management" },
//       { title: "Principal's Message", href: "/about/principal-message" },
//       { title: "Curriculum", href: "/about/curriculum" },
//     ],
//   },
//   {
//     title: "Comprehensive Info",
//     href: "/comprehensive-info",
//     subItems: [
//       { title: "School History", href: "/comprehensive-info/history" },
//       { title: "Academic Excellence", href: "/comprehensive-info/academic-excellence" },
//       { title: "Infrastructure", href: "/comprehensive-info/infrastructure" },
//       { title: "Awards & Recognition", href: "/comprehensive-info/awards" },
//     ],
//   },
//   {
//     title: "Extra Curricular Activities",
//     href: "/extra-curricular",
//     subItems: [
//       { title: "Sports", href: "/extra-curricular/sports" },
//       { title: "Arts & Culture", href: "/extra-curricular/arts" },
//       { title: "Clubs", href: "/extra-curricular/clubs" },
//       { title: "Events", href: "/extra-curricular/events" },
//     ],
//   },
//   {
//     title: "Admission",
//     href: "/admission",
//     subItems: [
//       { title: "Admission Process", href: "/admission/process" },
//       { title: "Fee Structure", href: "/admission/fees" },
//       { title: "Apply Online", href: "/admission/apply" },
//       { title: "FAQs", href: "/admission/faqs" },
//     ],
//   },
//   {
//     title: "Academics",
//     href: "/academics",
//     subItems: [
//       { title: "Curriculum", href: "/academics/curriculum" },
//       { title: "Faculty", href: "/academics/faculty" },
//       { title: "Examination", href: "/academics/examination" },
//       { title: "Results", href: "/academics/results" },
//     ],
//   },
//   {
//     title: "Facilities",
//     href: "/facilities",
//     subItems: [
//       { title: "Library", href: "/facilities/library" },
//       { title: "Labs", href: "/facilities/labs" },
//       { title: "Sports Complex", href: "/facilities/sports" },
//       { title: "Transport", href: "/facilities/transport" },
//       { title: "Cafeteria", href: "/facilities/cafeteria" },
//     ],
//   },
//   {
//     title: "Gallery",
//     href: "/gallery",
//     subItems: [
//       { title: "Photo Gallery", href: "/gallery/photos" },
//       { title: "Video Gallery", href: "/gallery/videos" },
//       { title: "Events", href: "/gallery/events" },
//       { title: "Achievements", href: "/gallery/achievements" },
//     ],
//   },
//   {
//     title: "Contact Us",
//     href: "/contact",
//     subItems: [],
//   },
// ]

// export function Navbar() {
//   return (
//     <>
// <div className="w-full py-1.5 overflow-hidden border-b "  style={{ backgroundColor: "#537D5D" }}>
//   <div className="animate-marquee whitespace-nowrap text-sm font-serif tracking-wide " style={{ color:"white"} }>
//     <span className="inline-flex items-center mx-6">🎓 Admission Open for 2025-26 Academic Year</span>
//     <span className="inline-flex items-center mx-6">⏳ Limited Seats Available - Apply Now!</span>
//     <span className="inline-flex items-center mx-6">📅 Last Date for Application: June 30, 2025</span>
//   </div>
// </div>


//       {/* Main Navbar */}
//       <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
//         <div className="container mx-auto flex items-center h-16 px-6">
//           {/* Logo + Site Name */}
//           <Link href="/" className="flex items-center space-x-3 hover:opacity-85 transition-opacity duration-200">
//             <img
//               src="/school_logo.png"
//               alt="School Logo"
//               className="w-10 h-10 rounded-md object-cover shadow-sm"
//               draggable={false}
//             />
//            <span className="font-bold text-xl text-gray-800 select-none font-serif">
//   Abhishek International School
// </span>

//           </Link>

//           <div className="flex-grow" />

//           {/* Hamburger Menu */}
//           <Sheet>
      
// <SheetTrigger asChild>
//   <Button
//     variant="ghost"
//     size="icon"
//     className="text-gray-700 hover:text-white bg-gray-100 hover:bg-gray-800 transition-all duration-300 ease-in-out border border-gray-300 hover:border-gray-700 shadow-md hover:shadow-lg rounded-xl p-2 w-12 h-12"
//     aria-label="Open menu"
//   >
//     <div className="relative w-full h-full flex items-center justify-center">
//       <Menu className="w-6 h-6 absolute transition-opacity duration-300 group-data-[state=open]:opacity-0" />
//       <X className="w-6 h-6 absolute opacity-0 transition-opacity duration-300 group-data-[state=open]:opacity-100" />
//     </div>
//   </Button>
// </SheetTrigger>



//             <SheetContent
//               side="right"
//               className="w-[320px] sm:w-[420px] border-l border-gray-200 p-8 rounded-l-lg bg-white"
//             >
//               <Link href="/" className="flex items-center mb-8">
//                 <img
//                   src="/school_logo.png"
//                   alt="School Logo"
//                   className="w-14 h-14 rounded-md shadow-sm mr-4"
//                   draggable={false}
//                 />
//                 <span className="text-1xl font-serif tracking-wide text-gray-800 select-none">
//                   Abhishek International School
//                 </span>
//               </Link>

//               <ScrollArea className="h-[calc(100vh-12rem)]">
//                 <Accordion type="multiple" className="w-full space-y-2">
//                   {navItems.map((item) => (
//                     <AccordionItem
//                       key={item.title}
//                       value={item.title}
//                       className="border-b border-gray-100 last:border-none"
//                     >
//                       {item.subItems.length > 0 ? (
//                         <>
//                           <AccordionTrigger className="py-3 text-base font-serif rounded-md hover:bg-gray-50 transition-colors px-4 select-none flex justify-between items-center text-gray-800">
//                             {item.title}
//                           </AccordionTrigger>
//                           <AccordionContent>
//                             <div className="ml-6 flex flex-col space-y-2 mt-2 font-serif">
//                               {item.subItems.map((subItem) => (
//                                 <Link
//                                   key={subItem.title}
//                                   href={subItem.href}
//                                   className="py-2 pl-6 text-sm rounded-md hover:bg-gray-50 transition-colors border-l-2 border-transparent hover:border-gray-300 text-gray-700 "
//                                 >
//                                   {subItem.title}
//                                 </Link>
//                               ))}
//                             </div>
//                           </AccordionContent>
//                         </>
//                       ) : (
//                         <Link
//                           href={item.href}
//                           className="block py-3 text-bas rounded-md px-4 hover:bg-gray-50 transition-colors select-none text-gray-800 font-serif"
//                         >
//                           {item.title}
//                         </Link>
//                       )}
//                     </AccordionItem>
//                   ))}
//                 </Accordion>
//               </ScrollArea>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </header>

//       {/* CSS for marquee animation */}
//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(100%);
//           }
//           100% {
//             transform: translateX(-100%);
//           }
//         }
//         .animate-marquee {
//           animation: marquee 20s linear infinite;
//         }
//       `}</style>
//     </>
//   )
// }
'use client'

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const navItems = [
  {
    title: "Home",
    href: "/",
    subItems: [],
  },
  {
    title: "MPD",
    href: "/mpd",
    subItems: [],
  },
  {
    title: "About",
    href: "/about",
    subItems: [
      { title: "About Us", href: "/about" },
      { title: "Vision & Mission", href: "/about/vision-mission" },
      { title: "Management Members", href: "/about/management" },
      { title: "Principal's Message", href: "/about/principal-message" },
      { title: "Curriculum", href: "/about/curriculum" },
    ],
  },
  {
    title: "Comprehensive Info",
    href: "/comprehensive-info",
    subItems: [
      { title: "School History", href: "/comprehensive-info/history" },
      { title: "Academic Excellence", href: "/comprehensive-info/academic-excellence" },
      { title: "Infrastructure", href: "/comprehensive-info/infrastructure" },
      { title: "Awards & Recognition", href: "/comprehensive-info/awards" },
    ],
  },
  {
    title: "Extra Curricular Activities",
    href: "/extra-curricular",
    subItems: [
      { title: "Our Achievement", href: "/extra-curricular/our-achievement" },
      { title: "Extra Activity", href: "/extra-curricular/extra-activity" },
      // { title: "Clubs", href: "/extra-curricular/clubs" },
      // { title: "Events", href: "/extra-curricular/events" },
    ],
  },
  {
    title: "Admission",
    href: "/admission",
    subItems: [
      { title: "Elligibility & intake", href: "/admission/elligibilty-intake" },
      { title: "Fee Structure", href: "/admission/fees-structure" },
    
      { title: "Admission Form", href: "/admission/admission-form" },
    ],
  },
  {
    title: "Academics",
    href: "/academics",
    subItems: [
      { title: "Acadmic Planner", href: "/academics/academic-planner" },
      { title: "Programs", href: "/academics/programs" },
      { title: "Teaching Methodology", href: "/academics/teaching-methodology" },
      { title: "Activity", href: "/academics/activity" },
    ],
  },
  {
    title: "Facilities",
    href: "/facilities",
     subItems: [],
 
  },
  {
    title: "Gallery",
    href: "/gallery",
    subItems: [
      { title: "Photo Gallery", href: "/gallery/photos" },
      { title: "Video Gallery", href: "/gallery/videos" },
      { title: "Events", href: "/gallery/events" },
      { title: "Achievements", href: "/gallery/achievements" },
    ],
  },
  {
    title: "Contact Us",
    href: "/contact",
    subItems: [],
  },
]

export function Navbar() {
  return (
    <>
      {/* Marquee */}
      <div className="w-full py-1.5 overflow-hidden border-b " >
        <div className="animate-marquee whitespace-nowrap text-sm font-serif tracking-wide" style={{ color: "black" }}>
          <span className="inline-flex items-center mx-6">🎓 Admission Open for 2025-26 Academic Year</span>
          <span className="inline-flex items-center mx-6">⏳ Limited Seats Available - Apply Now!</span>
          <span className="inline-flex items-center mx-6">📅 Last Date for Application: June 30, 2025</span>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full shadow-md border-b" style={{ background: "linear-gradient(90deg, #6a1b9a, #8e24aa, #ab47bc)" ,border:'1px solid black'}}>
        <div className="container mx-auto flex items-center h-16 px-6">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-85 transition-opacity duration-200">
            <img
              src="/school_logo.png"
              alt="School Logo"
              className="w-10 h-10 rounded-md object-cover shadow-sm"
              draggable={false}
            />
            <span className="font-bold text-xl text-white select-none font-serif">
              Abhishek International School
            </span>
          </Link>

          <div className="flex-grow" />

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white shadow-md hover:shadow-lg rounded-xl p-2 w-12 h-12"
                aria-label="Open menu"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Menu className="w-6 h-6 absolute transition-opacity duration-300 group-data-[state=open]:opacity-0" />
                  <X className="w-6 h-6 absolute opacity-0 transition-opacity duration-300 group-data-[state=open]:opacity-100" />
                </div>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[320px] sm:w-[420px] border-l border-gray-200 p-8 rounded-l-lg bg-white"
            >
              <Link href="/" className="flex items-center mb-8">
                <img
                  src="/school_logo.png"
                  alt="School Logo"
                  className="w-14 h-14 rounded-md shadow-sm mr-4"
                  draggable={false}
                />
                <span className="text-1xl font-serif tracking-wide text-gray-800 select-none">
                  Abhishek International School
                </span>
              </Link>

              <ScrollArea className="h-[calc(100vh-12rem)]">
                <Accordion type="multiple" className="w-full space-y-2">
                  {navItems.map((item) => (
                    <AccordionItem
                      key={item.title}
                      value={item.title}
                      className="border-b border-gray-100 last:border-none"
                    >
                      {item.subItems.length > 0 ? (
                        <>
                          <AccordionTrigger className="py-3 text-base font-serif rounded-md hover:bg-gray-50 transition-colors px-4 select-none flex justify-between items-center text-gray-800">
                            {item.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="ml-6 flex flex-col space-y-2 mt-2 font-serif">
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.href}
                                  className="py-2 pl-6 text-sm rounded-md hover:bg-gray-50 transition-colors border-l-2 border-transparent hover:border-gray-300 text-gray-700"
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="block py-3 text-base rounded-md px-4 hover:bg-gray-50 transition-colors select-none text-gray-800 font-serif"
                        >
                          {item.title}
                        </Link>
                      )}
                    </AccordionItem>
                  ))}
                </Accordion>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Marquee CSS */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </>
  )
}
