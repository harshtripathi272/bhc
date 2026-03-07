"use client"

import { Star } from "lucide-react"
import Reveal from "@/components/animations/reveal"
import StaggerContainer, { StaggerItem } from "@/components/animations/stagger"
import { testimonials } from "@/lib/site-data"

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Reveal direction="up">
            <p className="text-xs uppercase tracking-[0.2em] text-[#0284C7] font-medium mb-3">
              Testimonials
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              What Our Clients Say
            </h2>
          </Reveal>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" stagger={0.1}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="bg-slate-50 rounded-xl border border-slate-100 p-6 h-full flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-sm text-slate-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
