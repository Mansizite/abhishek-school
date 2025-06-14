import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold text-sky-700 sm:text-4xl md:text-5xl">Gallery</h1>
        <div className="mb-6 h-1 w-24 bg-gradient-to-r from-sky-500 to-purple-500 mx-auto"></div>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          Explore the vibrant life at Abhishek International School through our collection of photos and videos.
        </p>
      </div>

      <Tabs defaultValue="photos" className="mb-16">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="photos" className="mt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <Link href={`/gallery/photos/${index + 1}`} key={index} className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Photo ${index + 1}`}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-lg font-bold">School Life</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/gallery/photos" className="text-sky-600 hover:text-sky-800 font-medium">
              View All Photos →
            </Link>
          </div>
        </TabsContent>

        <TabsContent value="videos" className="mt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
                <div className="relative aspect-video">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Video ${index + 1}`}
                    alt={`Video thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-white/80 p-4">
                      <svg className="h-8 w-8 text-sky-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-bold">Annual Day Celebration {2023 - index}</h3>
                  <p className="text-gray-600">
                    Watch highlights from our annual day celebration featuring cultural performances.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/gallery/videos" className="text-sky-600 hover:text-sky-800 font-medium">
              View All Videos →
            </Link>
          </div>
        </TabsContent>

        <TabsContent value="events" className="mt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Annual Sports Day",
              "Science Exhibition",
              "Cultural Festival",
              "Independence Day Celebration",
              "Teachers' Day",
              "Children's Day",
            ].map((event, index) => (
              <div key={index} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=${event}`}
                    alt={event}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-bold">{event}</h3>
                  <p className="mb-4 text-gray-600">
                    A collection of memorable moments from our {event.toLowerCase()} celebrations.
                  </p>
                  <Link href={`/gallery/events/${index + 1}`} className="text-sky-600 hover:text-sky-800 font-medium">
                    View Gallery →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="mt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Academic Excellence Awards",
              "Sports Championships",
              "Science Olympiad Winners",
              "Art Competition Winners",
              "Debate Competition",
              "Music and Dance Achievements",
            ].map((achievement, index) => (
              <div key={index} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=${achievement}`}
                    alt={achievement}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-bold">{achievement}</h3>
                  <p className="mb-4 text-gray-600">
                    Celebrating our students' achievements in {achievement.toLowerCase()}.
                  </p>
                  <Link
                    href={`/gallery/achievements/${index + 1}`}
                    className="text-sky-600 hover:text-sky-800 font-medium"
                  >
                    View Gallery →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

