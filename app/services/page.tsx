import type { Metadata } from "next"
import PageHeader from "@/components/sections/page-header"
import CTABanner from "@/components/sections/cta-banner"
import ScrollReveal from "@/components/animations/scroll-reveal"
import {
  Clock,
  CalendarCheck,
  Wrench,
  Package,
  Building2,
  FileText,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive dialysis equipment services — 24/7 support, preventive maintenance, on-site repair, installation, and AMC plans from Balaji Health Care.",
}

const services = [
  {
    number: "01",
    icon: Clock,
    title: "24/7 Machine Support & Troubleshooting",
    description:
      "Round-the-clock technical support hotline for immediate troubleshooting of dialysis machine errors, alarms, and malfunctions. Our expert team provides real-time phone guidance and remote diagnostics to minimize downtime and ensure patient safety during critical situations.",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Preventive Maintenance Scheduling",
    description:
      "Proactive maintenance programs tailored to each machine's usage patterns and manufacturer recommendations. Regular inspections, calibration checks, and component replacements help prevent unexpected breakdowns and extend equipment lifespan significantly.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "On-Site Repair & Servicing",
    description:
      "Factory-trained engineers dispatched directly to your facility for comprehensive on-site diagnostics, repair, and servicing. We carry common replacement parts to ensure most repairs are completed in a single visit, minimizing disruption to your dialysis schedule.",
  },
  {
    number: "04",
    icon: Package,
    title: "Spare Parts Supply",
    description:
      "Extensive inventory of genuine OEM spare parts for all major dialysis machine brands including Fresenius, B.Braun, Nipro, and Nikkiso. Quick delivery across India ensures your facility never faces prolonged downtime due to parts unavailability.",
  },
  {
    number: "05",
    icon: Building2,
    title: "Installation & Commissioning Support",
    description:
      "Complete turn-key installation services from site survey and infrastructure planning to machine setup, testing, and staff training. We ensure your dialysis unit is operational and compliant with all regulatory standards from day one.",
  },
  {
    number: "06",
    icon: FileText,
    title: "Annual Maintenance Contracts (AMC)",
    description:
      "Flexible AMC packages offering predictable service costs, priority response times, and comprehensive coverage including preventive maintenance visits, emergency repairs, and discounted spare parts. Customized plans to fit facilities of every scale.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="End-to-end service solutions to keep your dialysis equipment running at peak performance, around the clock."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="relative bg-white rounded-2xl border border-border p-8 pl-10 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full group overflow-hidden">
                  {/* Left accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan to-teal rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Number watermark */}
                  <span className="absolute top-4 right-6 text-6xl font-heading font-extrabold text-off-white select-none pointer-events-none">
                    {service.number}
                  </span>

                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-5">
                      <service.icon className="w-6 h-6 text-cyan" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-dark pr-12">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-muted text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need Immediate Assistance?"
        description="Our technical team is available around the clock. Reach out now for urgent support or service enquiries."
        primaryLabel="Call Now"
        primaryHref="tel:+919826593932"
        secondaryLabel="WhatsApp Us"
        secondaryHref="https://wa.me/919826593932"
      />
    </>
  )
}
