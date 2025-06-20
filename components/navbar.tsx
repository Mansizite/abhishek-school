
"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
      { title: "Sports", href: "/extra-curricular/sports" },
      { title: "Arts & Culture", href: "/extra-curricular/arts" },
      { title: "Clubs", href: "/extra-curricular/clubs" },
      { title: "Events", href: "/extra-curricular/events" },
    ],
  },
  {
    title: "Admission",
    href: "/admission",
    subItems: [
      { title: "Admission Process", href: "/admission/process" },
      { title: "Fee Structure", href: "/admission/fees" },
      { title: "Apply Online", href: "/admission/apply" },
      { title: "FAQs", href: "/admission/faqs" },
    ],
  },
  {
    title: "Academics",
    href: "/academics",
    subItems: [
      { title: "Curriculum", href: "/academics/curriculum" },
      { title: "Faculty", href: "/academics/faculty" },
      { title: "Examination", href: "/academics/examination" },
      { title: "Results", href: "/academics/results" },
    ],
  },
  {
    title: "FACILITIES",
    href: "/facilities",
    subItems: [
      { title: "Library", href: "/facilities/library" },
      { title: "Labs", href: "/facilities/labs" },
      { title: "Sports Complex", href: "/facilities/sports" },
      { title: "Transport", href: "/facilities/transport" },
      { title: "Cafeteria", href: "/facilities/cafeteria" },
    ],
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
    title: "Contact US",
    href: "/contact",
    subItems: [],
  },
]


export function Navbar() {
  return (
    <>
      {/* Announcement Marquee */}
      <div className="w-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-gray-900 py-1 overflow-hidden border-b border-yellow-500">
        <div className="animate-marquee whitespace-nowrap text-sm font-semibold tracking-wide">
          <span className="inline-flex items-center mx-6">🎓 Admission Open for 2025-26 Academic Year</span>
          <span className="inline-flex items-center mx-6">⏳ Limited Seats Available - Apply Now!</span>
          <span className="inline-flex items-center mx-6">📅 Last Date for Application: June 30, 2025</span>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className="sticky top-0 z-50 w-full border-b border-gray-700 shadow-md bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-900 backdrop-blur-sm"
        style={{ backdropFilter: "saturate(180%) blur(10px)" }}
      >
        <div className="container mx-auto flex items-center h-16 px-6">
          {/* Logo + Site Name */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity duration-200">
            <img
              src="/school_logo.png"
              alt="School Logo"
              className="w-10 h-10 rounded-md object-cover shadow-md"
              draggable={false}
            />
            <span className="text-white font-extrabold text-xl select-none">Abhishek International School</span>
          </Link>

          <div className="flex-grow" />

          {/* Hamburger Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 focus:ring-2 focus:ring-white/60 rounded-full transition-all group"
                aria-label="Open menu"
              >
                <div className="relative w-6 h-6">
                  <Menu
                    className="h-6 w-6 absolute inset-0 transition-opacity duration-300 group-data-[state=open]:opacity-0"
                    strokeWidth={2.5}
                  />
                  <X
                    className="h-6 w-6 absolute inset-0 opacity-0 transition-opacity duration-300 group-data-[state=open]:opacity-100"
                    strokeWidth={2.5}
                  />
                </div>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[320px] sm:w-[420px] bg-gradient-to-b from-indigo-900 to-indigo-800 text-white border-l border-indigo-600 shadow-lg p-8 rounded-l-lg"
            >
              <Link href="/" className="flex items-center mb-8">
                <img
                  src="/school_logo.png"
                  alt="School Logo"
                  className="w-14 h-14 rounded-md shadow-lg mr-4"
                  draggable={false}
                />
                <span className="text-1xl font-bold tracking-wide select-none">Abhishek International School</span>
              </Link>

              <ScrollArea className="h-[calc(100vh-12rem)]">
                <Accordion type="multiple" className="w-full space-y-3">
                  {navItems.map((item) => (
                    <AccordionItem
                      key={item.title}
                      value={item.title}
                      className="border-b border-indigo-700 last:border-none"
                    >
                      {item.subItems.length > 0 ? (
                        <>
                          <AccordionTrigger className="py-3 text-lg font-semibold rounded-md hover:bg-indigo-700/40 transition-colors px-4 select-none flex justify-between items-center">
                            {item.title}
                            {/* Optionally add an arrow icon here for submenus */}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="ml-6 flex flex-col space-y-3 mt-3">
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.href}
                                  className="py-2 pl-6 text-base rounded-md hover:bg-indigo-700/50 transition-colors border-l-4 border-transparent hover:border-yellow-400"
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
                          className="block py-3 text-lg font-semibold rounded-md px-4 hover:bg-indigo-700/40 transition-colors select-none"
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

      {/* CSS for marquee animation */}
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
