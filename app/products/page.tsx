"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Zap } from "lucide-react"
import Reveal from "@/components/animations/reveal"
import StaggerContainer, { StaggerItem } from "@/components/animations/stagger"
import { categories, products, categoryImage } from "@/lib/products-data"

const displayCategories = categories.filter((c) => c.slug !== "")

export default function ProductsPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <p className="text-xs uppercase tracking-[0.2em] text-[#0284C7] font-medium mb-2">
              Our Products
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Dialysis Equipment & Supplies
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">
              Select a category below to browse our complete range of
              hemodialysis machines, RO systems, consumables, and spare parts.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            stagger={0.08}
          >
            {displayCategories.map((cat) => {
              const count =
                cat.value === "trending"
                  ? products.filter((p) => p.trending).length
                  : products.filter((p) => p.category === cat.value).length

              return (
                <StaggerItem key={cat.slug}>
                  <Link
                    href={`/products/${cat.slug}`}
                    className="group block h-full"
                  >
                    <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-slate-300 h-full flex flex-col">
                      {/* Cover image */}
                      <div className="relative h-44 overflow-hidden bg-slate-50">
                        <Image
                          src={cat.value === "trending" ? categoryImage("Machines") : categoryImage(cat.value)}
                          alt={cat.label}
                          fill
                          sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />

                        {/* Trending badge */}
                        {cat.value === "trending" && (
                          <div className="absolute top-3 left-3">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-400 text-amber-900 text-[10px] font-bold uppercase tracking-wide rounded-full">
                              <Zap className="w-3 h-3" />
                              Popular
                            </span>
                          </div>
                        )}

                        {/* Product count bubble */}
                        <div className="absolute bottom-3 right-3">
                          <span className="inline-flex items-center px-2.5 py-1 bg-white/90 text-slate-700 text-xs font-semibold rounded-full shadow-sm">
                            {count} {count === 1 ? "product" : "products"}
                          </span>
                        </div>
                      </div>

                      {/* Card body */}
                      <div className="p-5 flex flex-col flex-1">
                        <h2 className="font-semibold text-lg text-slate-900 mb-1.5 group-hover:text-[#0B2B5E] transition-colors">
                          {cat.label}
                        </h2>
                        <p className="text-sm text-slate-500 leading-relaxed flex-1">
                          {cat.description}
                        </p>
                        <div className="flex items-center mt-4 pt-3 border-t border-slate-100">
                          <span className="text-sm font-semibold text-[#0284C7] group-hover:gap-3 flex items-center gap-1.5 transition-all">
                            Browse {cat.label}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
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
              Can&apos;t find what you need?
            </h2>
            <p className="text-sm text-slate-500 mb-5">
              We source equipment on demand. Tell us your requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-[#0B2B5E] rounded-lg hover:bg-[#0B2B5E]/90 transition-colors"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
