import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-700 to-purple-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">Abhishek International School</h3>
            <p className="mb-4">Providing quality education and shaping future leaders since 2005.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-sky-300 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-sky-300 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-sky-300 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-sky-300 transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-sky-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/admission" className="hover:text-sky-300 transition-colors">
                  Admission
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-sky-300 transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-sky-300 transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-sky-300 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Important Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/admission/process" className="hover:text-sky-300 transition-colors">
                  Admission Process
                </Link>
              </li>
              <li>
                <Link href="/academics/examination" className="hover:text-sky-300 transition-colors">
                  Examination Schedule
                </Link>
              </li>
              <li>
                <Link href="/academics/results" className="hover:text-sky-300 transition-colors">
                  Results
                </Link>
              </li>
              <li>
                <Link href="/extra-curricular/events" className="hover:text-sky-300 transition-colors">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="/facilities/transport" className="hover:text-sky-300 transition-colors">
                  Transport Routes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0" />
                <span>123 Education Street, Knowledge City, State - 123456</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <span>info@abhishekinternational.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Abhishek International School. All rights reserved.</p>
          <p className="mt-2 text-sm text-white/80">Design by Prashant Pawar</p>
        </div>
      </div>
    </footer>
  )
}

