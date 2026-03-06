import ScrollReveal from "@/components/animations/scroll-reveal"
import { Shield, Clock, Truck, Headphones } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Authorized Distributor",
    description:
      "Official partnerships with Fresenius, B.Braun, Nipro and Nikkiso ensure every product is genuine and OEM-certified.",
  },
  {
    icon: Headphones,
    title: "Certified Engineers",
    description:
      "Factory-trained service engineers with expertise across all major dialysis machine brands and models.",
  },
  {
    icon: Truck,
    title: "Pan-India Delivery",
    description:
      "Reliable supply chain and logistics network delivering equipment and spare parts to every corner of India.",
  },
  {
    icon: Clock,
    title: "After-Sales Support",
    description:
      "Comprehensive post-sale service including AMC plans, preventive maintenance, and 24/7 emergency technical support.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-surface-alt">
      <div className="max-w-[1400px] mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-cyan text-sm font-semibold uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-dark tracking-tight">
              Built on Trust & Expertise
            </h2>
            <p className="mt-4 text-muted max-w-xl mx-auto">
              Over 15 years of dedication to quality, reliability, and
              exceptional service.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-white rounded-2xl border border-border p-8 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-cyan/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-cyan" />
                </div>
                <h3 className="text-lg font-heading font-bold text-dark">
                  {value.title}
                </h3>
                <p className="mt-3 text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
