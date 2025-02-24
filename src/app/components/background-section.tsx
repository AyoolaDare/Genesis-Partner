import type React from "react"

interface BackgroundSectionProps {
  imageUrl: string
  children: React.ReactNode
  className?: string
}

export function BackgroundSection({ imageUrl, children, className = "" }: BackgroundSectionProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative">{children}</div>
    </section>
  )
}