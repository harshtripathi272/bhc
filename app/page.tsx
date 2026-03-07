"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Phone,
  Award,
  Building2,
  Cog,
  Pipette,
  PackageCheck,
  ChevronRight,
} from "lucide-react"
import Reveal from "@/components/animations/reveal"
import StaggerContainer, { StaggerItem } from "@/components/animations/stagger"
import Counter from "@/components/animations/counter"
import PromoSlider from "@/components/home/promo-slider"
import Testimonials from "@/components/home/testimonials"
import BrandScroll from "@/components/home/brand-scroll"
import { products, categories, categoryImage } from "@/lib/products-data"
import { stats } from "@/lib/site-data"

const featuredCategories = categories.filter(
  (c) => c.slug !== "" && c.value !== "trending"
).slice(0, 4)

/* Brief service teasers for homepage — just icon + title, NOT full descriptions */
const serviceTeasers = [
  { icon: Building2, title: "Dialysis Unit Setup" },
  { icon: Cog, title: "Running & AMC" },
  { icon: Pipette, title: "Consultancy" },
  { icon: PackageCheck, title: "Consumables Supply" },
]

export default function HomePage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="space-y-6">
              <Reveal direction="up">
                <div className="inline-flex items-center px-3 py-1.5 bg-[#0B2B5E]/5 border border-[#0B2B5E]/10 rounded-full text-xs font-medium text-[#0B2B5E] tracking-wide">
                  <Award className="w-3.5 h-3.5 mr-1.5" />
                  TRUSTED SINCE 2008
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-slate-900 leading-[1.1] tracking-tight">
                  Dialysis Equipment
                  <br />
                  <span className="text-[#0284C7]">Delivered With Precision.</span>
                </h1>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <p className="text-lg text-slate-500 max-w-md leading-relaxed">
                  Wholesale supplier of hemodialysis machines, consumables, and
                  medical-grade RO systems — trusted by hospitals across India.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#0B2B5E] rounded-lg hover:bg-[#0B2B5E]/90 transition-colors group"
                  >
                    Browse Products
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#0B2B5E] border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Request a Quote
                  </Link>
                </div>
              </Reveal>

              {/* Stats */}
              <Reveal direction="up" delay={0.4}>
                <div className="flex gap-8 pt-6 border-t border-slate-100">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-2xl font-bold text-[#0B2B5E]">
                        <Counter target={s.value} suffix={s.suffix} duration={2.5} />
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right — Machine Image */}
            <Reveal direction="right" delay={0.2}>
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[400px] h-[400px] rounded-full bg-[#0284C7]/5 blur-3xl" />
                </div>
                <Image
                  src="/images/machine.png"
                  alt="Fresenius 5008 Hemodialysis Machine"
                  width={800}
                  height={1000}
                  className="relative z-0 w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PROMO BANNER SLIDER ── */}
      <PromoSlider />

      {/* ── FEATURED CATEGORIES ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Reveal direction="up">
              <p className="text-xs uppercase tracking-[0.2em] text-[#0284C7] font-medium mb-2">
                Product Catalogue
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Browse by Category
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.15}>
              <p className="mt-3 text-sm text-slate-500 max-w-lg mx-auto">
                Over {products.length} products across {categories.length - 2} categories — wholesale pricing on everything.
              </p>
            </Reveal>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
            {featuredCategories.map((cat) => {
              const count = products.filter((p) => p.category === cat.value).length
              return (
                <StaggerItem key={cat.slug}>
                  <Link href={`/products/${cat.slug}`} className="group block">
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-blue-50/60 to-white border border-blue-100/60 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/40 hover:-translate-y-1 ring-1 ring-blue-50">
                      <div className="h-44 overflow-hidden relative bg-slate-50">
                        <Image
                          src={categoryImage(cat.value)}
                          alt={cat.label}
                          fill
                          sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                        <div className="absolute bottom-3 right-3">
                          <span className="inline-flex items-center px-2.5 py-1 bg-white/90 text-slate-700 text-xs font-semibold rounded-full shadow-sm">
                            {count} items
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-sm text-slate-900 mb-1 group-hover:text-[#0284C7] transition-colors">
                          {cat.label}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-2">{cat.description}</p>
                        <span className="inline-flex items-center mt-3 text-xs font-medium text-[#0284C7]">
                          Browse {cat.label} <ChevronRight className="w-3 h-3 ml-0.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              )
            })}
          </StaggerContainer>

          <Reveal direction="up" delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/products"
                className="inline-flex items-center text-sm font-medium text-[#0B2B5E] border border-slate-200 px-6 py-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                View All Products
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES TEASER (brief, not full listing) ── */}
      <section className="py-14 lg:py-18 bg-[#0B2B5E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <Reveal direction="left">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-300 font-medium mb-2">
                  Our Services
                </p>
              </Reveal>
              <Reveal direction="left" delay={0.1}>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  End-to-End Dialysis Solutions
                </h2>
              </Reveal>
              <Reveal direction="left" delay={0.15}>
                <p className="text-sm text-slate-300 mt-2 max-w-md">
                  From unit setup to consumable supply — everything your dialysis center needs under one roof.
                </p>
              </Reveal>
            </div>

            <StaggerContainer className="grid grid-cols-2 gap-3 md:gap-4 shrink-0" stagger={0.08}>
              {serviceTeasers.map((s) => (
                <StaggerItem key={s.title}>
                  <div className="bg-white/[0.07] border border-white/10 rounded-xl px-5 py-4 text-center min-w-[140px]">
                    <s.icon className="w-6 h-6 text-blue-300 mx-auto mb-2" />
                    <span className="text-xs font-medium text-white">{s.title}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <Reveal direction="up" delay={0.25}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 md:justify-start">
              <Link
                href="/services"
                className="inline-flex items-center text-sm font-medium text-white border border-white/25 px-6 py-2.5 rounded-lg hover:bg-white/10 transition-colors group"
              >
                See All Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-medium text-[#0B2B5E] bg-white px-6 py-2.5 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <Testimonials />

      {/* ── BRANDS WE WORK WITH ── */}
      <BrandScroll />

      {/* ── WHATSAPP CTA ── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="bg-gradient-to-br from-[#25D366]/5 to-[#25D366]/10 border border-[#25D366]/20 rounded-2xl px-6 py-10 md:px-12 flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Chat With Us on WhatsApp
                </h3>
                <p className="text-sm text-slate-500">
                  Get instant replies on pricing, availability, and quotes — directly on WhatsApp.
                </p>
              </div>
              <a
                href="https://wa.me/919826593932?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20dialysis%20equipment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-[#25D366] rounded-lg hover:bg-[#25D366]/90 transition-colors shrink-0"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="bg-gradient-to-br from-[#0B2B5E] to-[#0B2B5E]/90 rounded-2xl px-8 py-14 md:px-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]" />
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Ready to Equip Your Dialysis Center?
                </h2>
                <p className="text-blue-200/70 max-w-md mx-auto mb-8">
                  Contact our team for competitive wholesale pricing and expert guidance.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="tel:+919826593932"
                    className="inline-flex items-center px-6 py-3 text-sm font-semibold text-[#0B2B5E] bg-white rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white border border-white/25 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Send Inquiry
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
