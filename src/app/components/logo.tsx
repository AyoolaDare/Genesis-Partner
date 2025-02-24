import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  src?: string
  fallback?: string
  width?: number
  height?: number
}

export function Logo({
  src = "/placeholder.svg",
  fallback = "Genesis Global Partners",
  width = 40,
  height = 40,
}: LogoProps) {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative overflow-hidden">
        <Image
          src={src || "/placeholder.svg"}
          alt={fallback}
          width={width}
          height={height}
          className="object-contain"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      <span className="hidden text-xl font-bold sm:inline-block">{fallback}</span>
    </Link>
  )
}

