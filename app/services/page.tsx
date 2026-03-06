import type { Metadata } from "next"
import Link from "next/link"
import {
  Headset,
  Wrench,
  HardHat,
  Package,
  Settings,
  ShieldCheck,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import Reveal from "@/components/animations/reveal"
import StaggerContainer, { StaggerItem } from "@/components/animations/stagger"

export const metadata: Metadata = {
  title: "Services | Balaji Health Care",
  description:
    "Comprehensive dialysis equipment services including installation, maintenance, repair, and AMC packages across India.",
}

const services = [
  {
    icon: Headset,
    title: "24/7 Machine Support",
    description:
      "Round-the-clock telephone and remote support for dialysis machine troubleshooting. Our senior technicians respond within two hours.",
    highlights: ["2-hour response", "Remote diagnostics", "Senior technicians"],
  },
  {
    icon: Wrench,
    title: "Preventive Maintenance",
    description:
      "Scheduled maintenance visits to keep your dialysis machines running at peak performance. Includes calibration, filter replacement, and safety checks.",
    highlights: ["Quarterly visits", "Calibration", "Safety certification"],
  },
  {
    icon: HardHat,
    title: "On-Site Repair",
    description:
      "We dispatch trained engineers to your facility for breakdown repairs. Most critical issues resolved within 24–48 hours.",
    highlights: ["24-48 hr resolution", "Trained engineers", "Genuine parts"],
  },
  {
    icon: Package,
    title: "Spare Parts Supply",
    description:
      "OEM and compatible spare parts for Fresenius, B.Braun, and Nipro machines. Fast dispatch with quality assurance.",
    highlights: ["OEM certified", "Wide range", "Fast dispatch"],
  },
  {
    icon: Settings,
    title: "Installation & Commissioning",
    description:
      "Complete setup of dialysis machines and RO systems, including electrical connections, plumbing, water quality testing, and operator training.",
    highlights: ["Full setup", "Water testing", "Operator training"],
  },
  {
    icon: ShieldCheck,
    title: "AMC Packages",
    description:
      "Annual Maintenance Contracts with flexible plans — Basic, Standard, and Comprehensive — to suit every facility and budget.",
    highlights: ["Flexible plans", "Priority support", "Parts included"],
  },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <p className="text-xs uppercase tracking-[0.2em] text-[#0284C7] font-medium mb-3">
              Our Services
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Complete Equipment Support
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <p className="text-slate-500 max-w-xl mx-auto">
              From installation to ongoing maintenance — we keep your dialysis
              center running smoothly with expert after-sales service.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="group h-full bg-white border border-slate-100 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-slate-200 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#0B2B5E]/5 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#0B2B5E]/10 transition-colors">
                    <service.icon className="w-6 h-6 text-[#0B2B5E]" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center text-sm text-slate-600"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0284C7] mr-2 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Reveal direction="up">
              <h2 className="text-3xl font-bold text-slate-900">
                How It Works
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="text-slate-500 mt-3 max-w-md mx-auto">
                Getting your equipment serviced is simple.
              </p>
            </Reveal>
          </div>

          <StaggerContainer className="grid sm:grid-cols-3 gap-8" stagger={0.15}>
            {[
              {
                step: "01",
                title: "Contact Us",
                desc: "Call, WhatsApp, or fill out our contact form with your requirements.",
              },
              {
                step: "02",
                title: "We Assess",
                desc: "Our team evaluates your needs and provides a detailed quote within 24 hours.",
              },
              {
                step: "03",
                title: "We Deliver",
                desc: "Equipment dispatched or engineer deployed — on schedule, every time.",
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#0B2B5E] text-white font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="bg-gradient-to-br from-[#0B2B5E] to-[#0B2B5E]/90 rounded-2xl px-8 py-14 md:px-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]" />
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Need a Service Call or AMC?
                </h2>
                <p className="text-blue-100/70 max-w-md mx-auto mb-8">
                  Our engineers are ready to help. Call us for immediate support or request an AMC package.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="tel:+919826593932"
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-[#0B2B5E] bg-white rounded hover:bg-slate-100 transition-all shadow-sm"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919826593932"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-[#25D366] rounded hover:bg-[#25D366]/90 transition-all shadow-sm"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
