import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react"

export function SocialSidebar() {
  return (
    <div className="social-sidebar">
      <Link href="#" aria-label="Facebook">
        <Facebook className="h-6 w-6 text-blue-600" />
      </Link>
      <Link href="#" aria-label="Instagram">
        <Instagram className="h-6 w-6 text-pink-600" />
      </Link>
      <Link href="#" aria-label="Twitter">
        <Twitter className="h-6 w-6 text-sky-500" />
      </Link>
      <Link href="#" aria-label="Youtube">
        <Youtube className="h-6 w-6 text-red-600" />
      </Link>
      <Link href="#" aria-label="LinkedIn">
        <Linkedin className="h-6 w-6 text-blue-700" />
      </Link>
    </div>
  )
}

