"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ShieldCheck,
  Award,
  Stethoscope,
  Phone,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"
import Reveal from "@/components/animations/reveal"
import StaggerContainer, { StaggerItem } from "@/components/animations/stagger"
import Counter from "@/components/animations/counter"
import { pillars as pillarData } from "@/lib/site-data"

const iconMap: Record<string, LucideIcon> = { ShieldCheck, Award, Stethoscope }

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <p className="text-xs uppercase tracking-[0.2em] text-[#0284C7] font-medium mb-3">
              About Us
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Your Trusted Dialysis Equipment Partner
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <p className="text-slate-500 max-w-xl mx-auto">
              Based in Indore, India — supplying hospitals and dialysis centers
              with reliable equipment, parts, and service since 2008.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image side */}
            <Reveal direction="left" delay={0.1}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                  <Image
                    src="/images/Vinod.png"
                    alt="Vinod Tripathi - Director, Balaji Health Care"
                    width={600}
                    height={700}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>

                {/* Floating Stats */}
                <div className="absolute -bottom-6 -right-4 md:right-6 bg-white px-5 py-4 rounded-xl shadow-lg border border-slate-100">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-xl font-bold text-[#0B2B5E]">
                        <Counter target={2008} suffix="" duration={2} />
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        Founded
                      </div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[#0B2B5E]">
                        <Counter target={15} suffix="+" duration={2} />
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        Years
                      </div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[#0B2B5E]">
                        <Counter target={500} suffix="+" duration={2.5} />
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        Machines
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Text side */}
            <div className="space-y-6">
              <Reveal direction="right" delay={0.1}>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Our Story
                </h2>
              </Reveal>
              <Reveal direction="right" delay={0.15}>
                <p className="text-slate-500 leading-relaxed">
                  Balaji Health Care was founded in Indore, Madhya Pradesh, with
                  a clear mission: to make high-quality dialysis equipment
                  accessible and affordable for healthcare centers across India.
                </p>
              </Reveal>
              <Reveal direction="right" delay={0.2}>
                <p className="text-slate-500 leading-relaxed">
                  Starting with a small operation supplying refurbished
                  hemodialysis machines, we have since grown into a wholesale
                  partner serving hospitals, clinics, and dialysis centers with a
                  complete range of equipment, consumables, and after-sales
                  support.
                </p>
              </Reveal>
              <Reveal direction="right" delay={0.25}>
                <p className="text-slate-500 leading-relaxed">
                  Led by experienced professionals with backgrounds in biomedical
                  engineering and healthcare logistics, our team understands the
                  criticality of reliable dialysis equipment. Every product we
                  deliver is tested, warrantied, and supported.
                </p>
              </Reveal>
              <Reveal direction="right" delay={0.3}>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-medium text-[#0284C7] group"
                >
                  Get in touch
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Reveal direction="up">
              <h2 className="text-3xl font-bold text-slate-900">
                What We Stand For
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="text-slate-500 mt-3 max-w-md mx-auto">
                The principles that guide how we work with every customer.
              </p>
            </Reveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" stagger={0.12}>
            {pillarData.map((pillar) => {
              const Icon = iconMap[pillar.icon] || ShieldCheck
              return (
                <StaggerItem key={pillar.title}>
                  <div className="bg-white rounded-xl border border-slate-100 p-8 h-full text-center transition-all duration-300 hover:shadow-md hover:border-slate-200 hover:-translate-y-1">
                    <div className="w-14 h-14 bg-[#0B2B5E]/5 rounded-xl flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-7 h-7 text-[#0B2B5E]" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </StaggerItem>
              )
            })}
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
                  Want to Partner With Us?
                </h2>
                <p className="text-blue-100/70 max-w-md mx-auto mb-8">
                  Whether you&apos;re setting up a new dialysis center or need a
                  reliable equipment supplier — we&apos;re here to help.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-[#0B2B5E] bg-white rounded hover:bg-slate-100 transition-all shadow-sm"
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <a
                    href="https://wa.me/919826593932"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-[#25D366] rounded hover:bg-[#25D366]/90 transition-all shadow-sm"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
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
