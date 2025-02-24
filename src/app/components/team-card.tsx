import { LinkedinIcon, TwitterIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface TeamMemberProps {
  image: string
  name: string
  role: string
  linkedin?: string
  twitter?: string
}

export function TeamCard({ image, name, role, linkedin, twitter }: TeamMemberProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-background">
      <div className="aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={400}
          height={400}
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-white/80">{role}</p>
        <div className="mt-4 flex space-x-4">
          {linkedin && (
            <Link href={linkedin} className="hover:text-primary">
              <LinkedinIcon className="h-5 w-5" />
            </Link>
          )}
          {twitter && (
            <Link href={twitter} className="hover:text-primary">
              <TwitterIcon className="h-5 w-5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

