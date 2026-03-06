"use client"

import Counter from "@/components/animations/counter"
import ScrollReveal from "@/components/animations/scroll-reveal"

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Machines Supplied" },
  { value: 24, suffix: "/7", label: "Service Support" },
]

export default function Stats() {
  return (
    <section className="py-16 bg-surface-alt border-y border-border">
      <div className="max-w-[1400px] mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-border">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl sm:text-5xl font-heading font-extrabold text-dark">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-muted text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
