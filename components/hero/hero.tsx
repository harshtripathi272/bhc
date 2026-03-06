"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import MagneticButton from "@/components/animations/magnetic-button"
import Counter from "@/components/animations/counter"
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Headset,
  Truck,
  Award,
} from "lucide-react"

const brands = ["Fresenius", "B.Braun", "Nipro", "Nikkiso"]

const trustPoints = [
  { icon: ShieldCheck, text: "OEM Certified Products" },
  { icon: Headset, text: "24/7 Technical Support" },
  { icon: Truck, text: "Pan-India Delivery" },
]

const metrics = [
  { value: 15, suffix: "+", label: "Years" },
  { value: 500, suffix: "+", label: "Machines" },
  { value: 200, suffix: "+", label: "Clients" },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
}

export default function Hero() {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Accent glow — top-right */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-cyan/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-teal/[0.04] rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[600px] pt-28 pb-16 lg:pt-32 lg:pb-20">
          {/* ─── Left: Text ─── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-semibold tracking-wide">
                <Award className="w-3.5 h-3.5" />
                Trusted Since 2008
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-[2rem] sm:text-[2.5rem] lg:text-[2.85rem] font-heading font-extrabold text-white leading-[1.15] tracking-tight"
            >
              India&apos;s Leading Wholesale{" "}
              <span className="text-cyan">Dialysis Equipment</span>{" "}
              Supplier
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-white/50 text-[15px] leading-relaxed max-w-[440px]"
            >
              Comprehensive range of haemodialysis machines, consumables &amp;
              spare parts from globally certified manufacturers — backed by
              round-the-clock service across India.
            </motion.p>

            {/* Trust points */}
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {trustPoints.map((tp) => (
                <span
                  key={tp.text}
                  className="flex items-center gap-2 text-white/40 text-[13px]"
                >
                  <tp.icon className="w-3.5 h-3.5 text-cyan/70" />
                  {tp.text}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <MagneticButton>
                <Link
                  href="/products"
                  className={buttonVariants({ variant: "primary", size: "lg" })}
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/contact"
                  className={buttonVariants({ variant: "outline-white", size: "lg" })}
                >
                  <Phone className="w-4 h-4" />
                  Get a Quote
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Brand Strip */}
            <motion.div
              variants={fadeUp}
              className="mt-10 pt-6 border-t border-white/[0.06]"
            >
              <p className="text-white/20 text-[10px] uppercase tracking-[0.15em] font-semibold mb-3">
                Authorized Distributor
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                {brands.map((b, i) => (
                  <span key={b} className="flex items-center gap-4">
                    <span className="text-white/30 font-heading font-bold text-[13px] tracking-wide">
                      {b}
                    </span>
                    {i < brands.length - 1 && (
                      <span className="w-px h-3 bg-white/10" />
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ─── Right: Visual Card ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-10 relative overflow-hidden">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/[0.06] rounded-bl-[100px]" />

                {/* Big icon area */}
                <div className="w-16 h-16 rounded-2xl bg-cyan/10 border border-cyan/20 flex items-center justify-center mb-8">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-cyan" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 2a2 2 0 0 1 2 0l7 4a2 2 0 0 1 1 1.73V16.27a2 2 0 0 1-1 1.73l-7 4a2 2 0 0 1-2 0l-7-4a2 2 0 0 1-1-1.73V7.73a2 2 0 0 1 1-1.73z" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                  </svg>
                </div>

                <h3 className="text-white font-heading font-bold text-xl mb-2">
                  Complete Dialysis Solutions
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
                  From machine procurement to installation, maintenance, and spare parts —
                  everything under one roof.
                </p>

                {/* Metric counters */}
                <div className="grid grid-cols-3 gap-4">
                  {metrics.map((m) => (
                    <div
                      key={m.label}
                      className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 text-center"
                    >
                      <div className="text-2xl font-heading font-extrabold text-white">
                        <Counter target={m.value} suffix={m.suffix} />
                      </div>
                      <p className="text-white/35 text-[11px] uppercase tracking-wider mt-1 font-medium">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Service tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Machines", "Consumables", "Spare Parts", "AMC", "Installation"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.06] text-white/40 text-[11px] font-medium"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Floating accent badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-surface rounded-2xl shadow-card px-5 py-3 flex items-center gap-3 border border-border"
              >
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-dark text-sm font-bold">ISO Certified</p>
                  <p className="text-muted text-[11px]">Quality Assured Equipment</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
    </section>
  )
}
