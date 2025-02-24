interface SectionHeaderProps {
    title: string
    subtitle?: string
    centered?: boolean
  }
  
  export function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
    return (
      <div className={`space-y-4 ${centered ? "text-center" : ""}`}>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
        {subtitle && (
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {subtitle}
          </p>
        )}
      </div>
    )
  }
  
  