"use client"

import Link from "next/link"
import {
  Building2,
  Cog,
  Pipette,
  PackageCheck,
  Hammer,
  Droplets,
  PenTool,
  Layers,
  Phone,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react"
import Reveal from "@/components/animations/reveal"
import StaggerContainer, { StaggerItem } from "@/components/animations/stagger"
import { services as serviceData } from "@/lib/site-data"

/* Map icon name strings from site-data to actual Lucide components */
const iconMap: Record<string, LucideIcon> = {
  Building2, Cog, Pipette, PackageCheck, Hammer, Droplets, PenTool, Layers,
}

export default function ServicesPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <p className="text-xs uppercase tracking-[0.2em] text-[#0284C7] font-medium mb-2">
              Our Services
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Complete Dialysis Solutions
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">
              From unit setup to running, consultancy to turnkey projects —
              everything your dialysis center needs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Grid — 2 columns for readability */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 gap-6" stagger={0.08}>
            {serviceData.map((service) => {
              const Icon = iconMap[service.icon] || Building2
              return (
                <StaggerItem key={service.title}>
                  <div className="bg-white rounded-xl border border-slate-200 p-6 h-full hover:border-slate-300 hover:shadow-md transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#0B2B5E]/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#0B2B5E]/10 transition-colors">
                        <Icon className="w-6 h-6 text-[#0B2B5E]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-slate-900 mb-1.5">
                          {service.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {service.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center text-xs text-slate-500"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-[#0284C7] shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Need a Custom Solution?
            </h2>
            <p className="text-sm text-slate-500 mb-5">
              Every dialysis center is unique. Let&apos;s discuss your
              requirements.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-[#0B2B5E] rounded-lg hover:bg-[#0B2B5E]/90 transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="tel:+919826593932"
                className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-[#0B2B5E] border border-slate-200 rounded-lg hover:bg-white transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
