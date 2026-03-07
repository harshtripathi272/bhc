"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { promoSlides as slides } from "@/lib/site-data"

export default function PromoSlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % slides.length),
    []
  )
  const prev = useCallback(
    () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length),
    []
  )

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="py-6 lg:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl h-[200px] sm:h-[240px] lg:h-[280px]">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className={`absolute inset-0 flex items-center bg-gradient-to-r ${slide.bgColor} transition-all duration-500 ease-out ${
                i === current
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="px-8 sm:px-12 lg:px-16 max-w-2xl">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
                  {slide.title}
                </h3>
                <p className="text-sm sm:text-base text-white/80 max-w-md">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          ))}

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-white w-6"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
