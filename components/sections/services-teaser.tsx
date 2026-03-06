import Link from "next/link"
import ScrollReveal from "@/components/animations/scroll-reveal"
import MagneticButton from "@/components/animations/magnetic-button"
import { buttonVariants } from "@/components/ui/button"
import { Headphones, Wrench, FileText, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Headphones,
    title: "24/7 Technical Support",
    description:
      "Round-the-clock troubleshooting hotline for dialysis machine errors and emergencies.",
  },
  {
    icon: Wrench,
    title: "On-Site Repair",
    description:
      "Factory-trained engineers dispatched to your facility for comprehensive diagnostics and repair.",
  },
  {
    icon: FileText,
    title: "Annual Maintenance",
    description:
      "Flexible AMC plans with preventive maintenance, priority response, and discounted spare parts.",
  },
]

export default function ServicesTeaser() {
  return (
    <section className="py-24 bg-gradient-to-br from-navy via-navy-mid to-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-cyan text-sm font-semibold uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              Complete Service Solutions
            </h2>
            <p className="mt-4 text-white/60 max-w-xl mx-auto">
              Keeping your dialysis equipment running at peak performance.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-cyan/15 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-cyan" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-white/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <MagneticButton>
              <Link
                href="/services"
                className={buttonVariants({
                  variant: "outline-white",
                  size: "lg",
                })}
              >
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
