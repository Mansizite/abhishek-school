import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WelcomeSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-sky-700 sm:text-4xl md:text-5xl">
            Welcome to Abhishek International School
          </h2>
          <div className="mb-8 h-1 w-24 bg-gradient-to-r from-sky-500 to-purple-500 mx-auto"></div>
          <p className="mb-8 text-lg text-gray-600">
            At Abhishek International School, we believe in nurturing young minds to become future leaders. Our holistic
            approach to education focuses on academic excellence, character development, and extracurricular activities
            to ensure the all-round development of our students.
          </p>
          <p className="mb-10 text-lg text-gray-600">
            With state-of-the-art facilities, experienced faculty, and a conducive learning environment, we strive to
            provide the best educational experience for our students. Join us in our journey of shaping the future of
            tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              className="bg-gradient-to-r from-sky-600 to-purple-600 hover:from-sky-700 hover:to-purple-700"
            >
              <Link href="/admission">Apply for Admission</Link>
            </Button>
            <Button asChild variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

