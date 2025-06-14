"use client"

import * as React from "react"
import Link from "next/link"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
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
      <div className="w-full bg-gradient-to-r from-purple-600 to-sky-600 text-white py-1 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="inline-flex items-center mx-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>
            Admission Open for 2025-26 Academic Year
          </span>
          <span className="inline-flex items-center mx-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            Limited Seats Available - Apply Now!
          </span>
          <span className="inline-flex items-center mx-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Last Date for Application: June 30, 2025
          </span>
        </div>
      </div>
      <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-sky-600 to-purple-600 text-white">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Abhishek International School</span>
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="outline"
                size="icon"
                className="mr-2 text-white border-white hover:bg-white/20 hover:text-white"
                aria-label="Menu"
              >
                <Menu className="h-5 w-5 text-white" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
              <Link href="/" className="flex items-center pb-6 pt-2">
                <span className="text-xl font-bold">Abhishek International School</span>
              </Link>
              <ScrollArea className="h-[calc(100vh-8rem)] pb-10">
                <div className="flex flex-col space-y-3 py-4">
                  <Accordion type="multiple" className="w-full">
                    {navItems.map((item) => (
                      <AccordionItem key={item.title} value={item.title} className="border-b-0">
                        {item.subItems.length > 0 ? (
                          <>
                            <AccordionTrigger className="py-2 text-lg font-medium hover:no-underline">
                              {item.title}
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="ml-4 flex flex-col space-y-2">
                                {item.subItems.map((subItem) => (
                                  <Link
                                    key={subItem.title}
                                    href={subItem.href}
                                    className="py-1 text-sm transition-colors hover:text-primary"
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
                            className="block py-2 text-lg font-medium transition-colors hover:text-primary"
                          >
                            {item.title}
                          </Link>
                        )}
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>

          <Link href="/" className="mr-6 flex md:hidden">
            <span className="text-lg font-bold">AIS</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.subItems.length > 0 ? (
                  <>
                    <button className="px-3 py-2 text-white hover:bg-white/20 rounded-md flex items-center">
                      {item.title}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    <div className="absolute left-0 top-full w-60 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 z-50">
                      <div className="bg-white rounded-md shadow-lg overflow-hidden border border-gray-200 animate-in fade-in slide-in-from-top-5 duration-300">
                        <div className="p-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-700 rounded-md"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link href={item.href} className="px-3 py-2 text-white hover:bg-white/20 rounded-md block">
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="ml-auto flex items-center space-x-4">
            <Button variant="secondary" className="bg-white text-sky-600 hover:bg-white/90">
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

