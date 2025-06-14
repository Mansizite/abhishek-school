"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel as CarouselComponent, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

interface CarouselProps {
  images: {
    src: string
    alt: string
    caption?: string
  }[]
}

export function Carousel({ images }: CarouselProps) {
  const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  return (
    <CarouselComponent
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-0">
              <Card className="border-0 overflow-hidden">
                <CardContent className="flex aspect-[16/9] items-center justify-center p-0">
                  <div className="relative h-full w-full">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
                      <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl mb-2 drop-shadow-lg">{image.alt}</h2>
                      {image.caption && (
                        <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg">{image.caption}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </CarouselComponent>
  )
}

