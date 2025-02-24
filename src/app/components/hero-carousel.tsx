"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Button } from "@/app/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    title: "Empowering Communities",
    subtitle: "Building a Better Future Together",
    description:
      "Join us in our mission to create lasting positive change in communities worldwide through sustainable development and innovative solutions.",
    image1: "/placeholder.svg",
    image2: "/placeholder.svg",
    video: "/placeholder.mp4",
  },
  {
    title: "Sustainable Development",
    subtitle: "Creating Lasting Impact",
    description:
      "Our innovative solutions drive sustainable development and empower local communities to thrive and prosper.",
    image1: "/placeholder.svg",
    image2: "/placeholder.svg",
    video: "/placeholder.mp4",
  },
  {
    title: "Global Partnership",
    subtitle: "Together We Can Make a Difference",
    description:
      "Partner with us to bring positive change to communities around the world. Your support makes our mission possible.",
    image1: "/placeholder.svg",
    image2: "/placeholder.svg",
    video: "/placeholder.mp4",
  },
]

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0">
              <div className="relative aspect-[2/1] w-full overflow-hidden">
                <div className="absolute inset-0 z-10 bg-black/60" />
                <Image
                  src={slide.image1 || "/placeholder.svg"}
                  alt={slide.title}
                  className="object-cover"
                  fill
                  priority={index === 0}
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                      <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-4">
                          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-7xl/none">
                            {slide.title}
                          </h1>
                          <p className="text-xl text-white/90 md:text-2xl">{slide.subtitle}</p>
                          <p className="max-w-[600px] text-white/80 md:text-xl">{slide.description}</p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            Donate Now
                          </Button>
                          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                            Learn More
                          </Button>
                        </div>
                      </div>
                      <div className="hidden lg:block">
                        <div className="grid gap-4">
                          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                            <Image
                              src={slide.image2 || "/placeholder.svg"}
                              alt=""
                              className="object-cover"
                              fill
                              priority={index === 0}
                            />
                          </div>
                          <video
                            className="aspect-video w-full rounded-lg object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                          >
                            <source src={slide.video} type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    </div>
  )
}

