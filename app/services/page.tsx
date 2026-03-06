import Link from "next/link"
import type { Metadata } from "next"
import {
  Headset,
  Wrench,
  HardHat,
  Package,
  Settings,
  ShieldCheck,
  Phone,
  MessageCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Technical Services & Support",
}

const services = [
  {
    icon: Headset,
    title: "24/7 Machine Support",
    description:
      "Round-the-clock technical assistance to troubleshoot and resolve dialysis machine errors. Minimize downtime with our dedicated on-call expert team.",
  },
  {
    icon: Wrench,
    title: "Preventive Maintenance",
    description:
      "Scheduled comprehensive checks and calibrations to ensure optimal performance, regulatory compliance, and extend the lifespan of your critical equipment.",
  },
  {
    icon: HardHat,
    title: "On-Site Repair",
    description:
      "Rapid deployment of certified biomedical engineers to your facility for complex diagnostic and repair services, ensuring swift return to service.",
  },
  {
    icon: Package,
    title: "Spare Parts Supply",
    description:
      "Extensive inventory of OEM and high-quality compatible spare parts for major dialysis machine brands, available for immediate dispatch.",
  },
  {
    icon: Settings,
    title: "Installation & Commissioning",
    description:
      "Professional setup, calibration, and clinical validation of new equipment, complete with staff training for safe and effective operation.",
  },
  {
    icon: ShieldCheck,
    title: "AMC Packages",
    description:
      "Customized Annual Maintenance Contracts offering predictable service costs, priority support, and peace of mind for your entire equipment fleet.",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <header className="pt-20 pb-16 px-6 sm:px-12 lg:px-24 border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Technical Services &amp; Support
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl leading-relaxed">
            Comprehensive maintenance and technical solutions ensuring
            uninterrupted dialysis operations with clinical precision.
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="service-card bg-white p-8 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05),0_4px_6px_-2px_rgba(0,0,0,0.02)] border border-transparent"
              >
                <div className="text-[#0B2B5E] mb-6">
                  <Icon className="w-12 h-12" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#0f172a] py-16 px-6 sm:px-12 text-center mt-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Need a Service Quote or Urgent Support?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <a
              href="tel:+919826593932"
              className="w-full sm:w-auto px-8 py-3.5 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-[#0f172a] transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/919826593932"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded transition-colors flex items-center justify-center gap-2 border-2 border-[#25D366] hover:border-[#128C7E]"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
