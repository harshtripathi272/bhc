"use client"

import { brands } from "@/lib/site-data"

export default function BrandScroll() {
  const allBrands = [...brands, ...brands]

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-xs text-slate-400 uppercase tracking-[0.2em] font-medium">
          Trusted Brands We Work With
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex items-center gap-16 whitespace-nowrap animate-scroll-x">
          {allBrands.map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="text-xl font-bold text-slate-300 tracking-wider select-none flex-shrink-0 px-4"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
