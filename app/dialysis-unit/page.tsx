"use client"

import Link from "next/link"
import {
  Building2,
  HeartPulse,
  Droplets,
  Users,
  ShieldCheck,
  Truck,
  Hammer,
  Layers,
  RefreshCcw,
  Phone,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react"
import Reveal from "@/components/animations/reveal"
import StaggerContainer, { StaggerItem } from "@/components/animations/stagger"
import Counter from "@/components/animations/counter"
import { dialysisUnit } from "@/lib/site-data"

/* Map icon name strings to actual Lucide components */
const iconMap: Record<string, LucideIcon> = {
  Building2,
  HeartPulse,
  Droplets,
  Users,
  ShieldCheck,
  Truck,
  Hammer,
  Layers,
  RefreshCcw,
}

export default function DialysisUnitPage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-b from-[#0B2B5E] to-[#0E3D7A] py-20 lg:py-28 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:32px_32px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#0284C7]/10 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Reveal direction="up">
              <div className="inline-flex items-center px-3 py-1.5 bg-white/10 border border-white/15 rounded-full text-xs font-medium text-blue-200 tracking-wide mb-6">
                <HeartPulse className="w-3.5 h-3.5 mr-1.5" />
                NEW SERVICE — NOW AVAILABLE
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight mb-6">
                {dialysisUnit.headline}
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.15}>
              <p className="text-lg text-blue-100/70 leading-relaxed mb-4">
                {dialysisUnit.tagline}
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="text-sm text-blue-200/50 leading-relaxed max-w-2xl mb-8">
                {dialysisUnit.description}
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.25}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#0B2B5E] bg-white rounded-lg hover:bg-slate-100 transition-colors group"
                >
                  Get a Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <a
                  href="tel:+919826593932"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white border border-white/25 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us Now
                </a>
              </div>
            </Reveal>
          </div>

          {/* Stats Row */}
          <Reveal direction="up" delay={0.35}>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
              {dialysisUnit.stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/[0.06] border border-white/10 rounded-xl px-5 py-5 text-center"
                >
                  <div className="text-3xl font-bold text-white">
                    <Counter target={s.value} suffix={s.suffix} duration={2.5} />
                  </div>
                  <div className="text-xs text-blue-200/60 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── KEY HIGHLIGHTS ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Reveal direction="up">
              <p className="text-xs uppercase tracking-[0.2em] text-[#0284C7] font-medium mb-2">
                Why Choose Us
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.05}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                What We Bring to Your Dialysis Unit
              </h2>
            </Reveal>
          </div>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            stagger={0.06}
          >
            {dialysisUnit.highlights.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Reveal direction="up">
              <p className="text-xs uppercase tracking-[0.2em] text-[#0284C7] font-medium mb-2">
                Our Capabilities
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.05}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                End-to-End Dialysis Unit Solutions
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="mt-3 text-sm text-slate-500 max-w-lg mx-auto">
                From setting up a brand-new dialysis center to managing daily operations — we cover every aspect.
              </p>
            </Reveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
            {dialysisUnit.features.map((feature) => {
              const Icon = iconMap[feature.icon] || Building2
              return (
                <StaggerItem key={feature.title}>
                  <div className="bg-white rounded-xl border border-slate-200 p-6 h-full hover:border-slate-300 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 h-12 bg-[#0B2B5E]/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0B2B5E]/10 transition-colors">
                      <Icon className="w-6 h-6 text-[#0B2B5E]" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ── HOW IT WORKS (Process) ── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Reveal direction="up">
              <p className="text-xs uppercase tracking-[0.2em] text-[#0284C7] font-medium mb-2">
                Our Process
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.05}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                How We Set Up Your Dialysis Unit
              </h2>
            </Reveal>
          </div>

          <div className="max-w-3xl mx-auto">
            <StaggerContainer className="space-y-0" stagger={0.1}>
              {dialysisUnit.process.map((step, idx) => (
                <StaggerItem key={step.step}>
                  <div className="flex gap-5">
                    {/* Timeline */}
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[#0B2B5E] flex items-center justify-center text-white text-sm font-bold shrink-0">
                        {step.step}
                      </div>
                      {idx < dialysisUnit.process.length - 1 && (
                        <div className="w-px flex-1 bg-slate-200 my-2" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-10">
                      <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS ── */}
      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Reveal direction="up">
              <p className="text-xs uppercase tracking-[0.2em] text-[#0284C7] font-medium mb-2">
                Flexible Models
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.05}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Choose What Works for You
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="mt-3 text-sm text-slate-500 max-w-lg mx-auto">
                Whether you want a turnkey setup, managed operations, or just need us to take over an existing unit — we have a model for you.
              </p>
            </Reveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-6" stagger={0.1}>
            {dialysisUnit.models.map((model) => {
              const Icon = iconMap[model.icon] || Building2
              return (
                <StaggerItem key={model.title}>
                  <div className="bg-white rounded-xl border border-slate-200 p-8 text-center h-full hover:border-[#0284C7]/40 hover:shadow-xl hover:shadow-blue-100/30 hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-[#0B2B5E]/5 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[#0B2B5E]/10 transition-colors">
                      <Icon className="w-7 h-7 text-[#0B2B5E]" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">
                      {model.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {model.description}
                    </p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="bg-gradient-to-br from-[#0B2B5E] to-[#0E3D7A] rounded-2xl px-8 py-14 md:px-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]" />
              <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#0284C7]/10 blur-[100px] pointer-events-none" />
              <div className="relative">
                <HeartPulse className="w-10 h-10 text-blue-300 mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Ready to Set Up Your Dialysis Unit?
                </h2>
                <p className="text-blue-200/70 max-w-md mx-auto mb-8">
                  Talk to our team for a free consultation and customized proposal for your dialysis center.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 text-sm font-semibold text-[#0B2B5E] bg-white rounded-lg hover:bg-slate-100 transition-colors group"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <a
                    href="https://wa.me/919826593932?text=Hi%2C%20I%27m%20interested%20in%20your%20Dialysis%20Unit%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white border border-white/25 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
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
