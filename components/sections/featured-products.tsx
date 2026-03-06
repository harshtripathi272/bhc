import Link from "next/link"
import ScrollReveal from "@/components/animations/scroll-reveal"
import MagneticButton from "@/components/animations/magnetic-button"
import { buttonVariants } from "@/components/ui/button"
import { Monitor, Droplets, Filter, ArrowRight } from "lucide-react"

const products = [
  {
    icon: Monitor,
    title: "Fresenius 4008S",
    category: "Dialysis Machine",
    description:
      "Industry-leading haemodialysis machine with advanced volumetric ultrafiltration control and integrated safety features.",
    color: "text-cyan",
    bg: "bg-cyan/10",
  },
  {
    icon: Monitor,
    title: "B.Braun Dialog+",
    category: "Dialysis Machine",
    description:
      "High-performance system with AutoFlow for automated dialysis dose delivery and BiCart cartridge technology.",
    color: "text-teal",
    bg: "bg-teal/10",
  },
  {
    icon: Filter,
    title: "RO Water Treatment System",
    category: "Equipment",
    description:
      "Complete reverse osmosis water purification systems designed specifically for dialysis centres.",
    color: "text-cyan",
    bg: "bg-cyan/10",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-cyan text-sm font-semibold uppercase tracking-wider">
              Our Products
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-dark tracking-tight">
              Featured Equipment
            </h2>
            <p className="mt-4 text-muted max-w-xl mx-auto">
              Genuine, OEM-certified dialysis equipment from world-leading
              manufacturers.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group bg-white rounded-2xl border border-border p-8 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div
                  className={`w-12 h-12 rounded-xl ${product.bg} flex items-center justify-center mb-6`}
                >
                  <product.icon className={`w-6 h-6 ${product.color}`} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {product.category}
                </span>
                <h3 className="mt-2 text-xl font-heading font-bold text-dark">
                  {product.title}
                </h3>
                <p className="mt-3 text-muted text-sm leading-relaxed">
                  {product.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-cyan text-sm font-semibold group-hover:gap-3 transition-all"
                >
                  Enquire Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <MagneticButton>
              <Link
                href="/products"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                View All Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
