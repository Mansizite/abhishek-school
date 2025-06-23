import Link from "next/link"
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#6a1b9a] via-[#8e24aa] to-[#ab47bc] text-white font-serif">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* School Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Abhishek International School</h3>
            <p className="mb-4">
              Providing quality education and shaping future leaders since 2005.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[#f3e5f5] transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-[#f3e5f5] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-[#f3e5f5] transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-[#f3e5f5] transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-[#f3e5f5]">About Us</Link></li>
              <li><Link href="/admission" className="hover:text-[#f3e5f5]">Admission</Link></li>
              <li><Link href="/academics" className="hover:text-[#f3e5f5]">Academics</Link></li>
              <li><Link href="/facilities" className="hover:text-[#f3e5f5]">Facilities</Link></li>
              <li><Link href="/gallery" className="hover:text-[#f3e5f5]">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-[#f3e5f5]">Contact Us</Link></li>
            </ul>
          </div>

          {/* Important Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Important Information</h3>
            <ul className="space-y-2">
              <li><Link href="/admission/process" className="hover:text-[#f3e5f5]">Admission Process</Link></li>
              <li><Link href="/academics/examination" className="hover:text-[#f3e5f5]">Examination Schedule</Link></li>
              <li><Link href="/academics/results" className="hover:text-[#f3e5f5]">Results</Link></li>
              <li><Link href="/extra-curricular/events" className="hover:text-[#f3e5f5]">Upcoming Events</Link></li>
              <li><Link href="/facilities/transport" className="hover:text-[#f3e5f5]">Transport Routes</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
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

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Abhishek International School. All rights reserved.</p>
          <p className="mt-2 text-white/80"> &copy; Design by Sunrayz Technology</p>
        </div>
      </div>
    </footer>
  )
}
