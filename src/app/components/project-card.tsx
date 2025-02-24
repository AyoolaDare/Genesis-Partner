import { Button } from "@/app/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import type React from "react" // Added import for React

interface ProjectCardProps {
  title: string
  description: string
  image: string
  icon: React.ReactNode
}

export function ProjectCard({ title, description, image, icon }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border bg-background transition-all hover:border-primary">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute left-4 top-4 rounded-full bg-background/95 p-2 backdrop-blur">{icon}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <Button variant="link" className="mt-4 h-auto p-0">
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

