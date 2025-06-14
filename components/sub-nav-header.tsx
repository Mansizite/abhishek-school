"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface SubNavItem {
  title: string
  href: string
}

interface SubNavHeaderProps {
  title: string
  items: SubNavItem[]
}

export function SubNavHeader({ title, items }: SubNavHeaderProps) {
  const pathname = usePathname()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    // Check if current path is in the subnav items
    const isCurrentPathInSubNav = items.some((item) => pathname === item.href)
    setIsActive(isCurrentPathInSubNav)
  }, [pathname, items])

  return (
    <div className="bg-gradient-to-r from-sky-50 to-purple-50 border-b">
      <div className="container mx-auto px-4">
        <div className="py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-bold text-sky-700">{title}</h1>
              <button
                onClick={() => setIsActive(!isActive)}
                className="md:hidden ml-2 p-1 rounded-full hover:bg-gray-100"
              >
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-sky-700 transition-transform duration-200",
                    isActive ? "transform rotate-180" : "",
                  )}
                />
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-1">
              {items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-sky-100 text-sky-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-sky-700",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile navigation */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-2 py-3">
                  {items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className={cn(
                        "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "bg-sky-100 text-sky-700"
                          : "text-gray-600 hover:bg-gray-100 hover:text-sky-700",
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

