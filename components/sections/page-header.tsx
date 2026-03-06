import Link from "next/link"
import ScrollReveal from "@/components/animations/scroll-reveal"
import { ChevronRight } from "lucide-react"

interface Props {
  title: string
  description?: string
  breadcrumbs: { label: string; href?: string }[]
}

export default function PageHeader({ title, description, breadcrumbs }: Props) {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy via-navy-mid to-navy overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6">
        <ScrollReveal direction="none">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <ChevronRight className="w-3.5 h-3.5" />}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-white/80 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        </ScrollReveal>

        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            {title}
          </h1>
        </ScrollReveal>

        {description && (
          <ScrollReveal delay={0.1}>
            <p className="mt-4 text-white/70 max-w-xl text-lg leading-relaxed">
              {description}
            </p>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
