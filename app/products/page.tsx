"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import PageHeader from "@/components/sections/page-header"
import CTABanner from "@/components/sections/cta-banner"
import ScrollReveal from "@/components/animations/scroll-reveal"
import {
  Monitor,
  Droplets,
  Wrench,
  Filter,
  Armchair,
  Syringe,
  TestTubes,
  CircleDot,
  Pill,
  Droplet,
  Package,
  ArrowRight,
} from "lucide-react"

const categories = [
  "All",
  "Dialysis Machines",
  "Equipment",
  "Consumables",
  "Spare Parts",
]

const products = [
  {
    name: "Fresenius 4008S",
    category: "Dialysis Machines",
    description:
      "Industry-leading haemodialysis machine with advanced volumetric UF control and integrated safety monitoring systems.",
    icon: Monitor,
    badge: "Best Seller",
    badgeColor: "bg-cyan/10 text-cyan",
  },
  {
    name: "B.Braun Dialog+",
    category: "Dialysis Machines",
    description:
      "High-performance dialysis system featuring AutoFlow and BiCart cartridge technology for automated dose delivery.",
    icon: Monitor,
    badge: "Popular",
    badgeColor: "bg-teal/10 text-teal",
  },
  {
    name: "Nipro SURDIAL-55 Plus",
    category: "Dialysis Machines",
    description:
      "Reliable and user-friendly haemodialysis machine with Japanese precision engineering and dual-pump system.",
    icon: Monitor,
    badge: null,
    badgeColor: "",
  },
  {
    name: "Nikkiso DBB-05",
    category: "Dialysis Machines",
    description:
      "Advanced dialysis platform with intuitive touchscreen interface, auto-priming, and comprehensive alarm systems.",
    icon: Monitor,
    badge: null,
    badgeColor: "",
  },
  {
    name: "RO Water Treatment System",
    category: "Equipment",
    description:
      "Complete reverse osmosis water purification systems designed specifically for dialysis centre water quality requirements.",
    icon: Filter,
    badge: "Essential",
    badgeColor: "bg-cyan/10 text-cyan",
  },
  {
    name: "Central Concentrate Delivery System",
    category: "Equipment",
    description:
      "Automated central mixing and distribution of dialysis concentrate to multiple machines simultaneously.",
    icon: Package,
    badge: null,
    badgeColor: "",
  },
  {
    name: "Dialysis Chair",
    category: "Equipment",
    description:
      "Ergonomic, motorized patient chairs designed for extended dialysis sessions with adjustable positioning.",
    icon: Armchair,
    badge: null,
    badgeColor: "",
  },
  {
    name: "FX Series Dialyzer",
    category: "Consumables",
    description:
      "High-flux polysulfone membrane dialyzers with Helixone technology for superior toxin clearance.",
    icon: TestTubes,
    badge: "High Demand",
    badgeColor: "bg-teal/10 text-teal",
  },
  {
    name: "AV Fistula Needles",
    category: "Consumables",
    description:
      "Precision-engineered arteriovenous fistula needles with ultra-sharp tips for minimal patient discomfort.",
    icon: Syringe,
    badge: null,
    badgeColor: "",
  },
  {
    name: "Bicarbonate Cartridge",
    category: "Consumables",
    description:
      "BiCart cartridge system providing precise bicarbonate concentrate for online preparation during dialysis.",
    icon: Pill,
    badge: null,
    badgeColor: "",
  },
  {
    name: "Blood Tubing Set",
    category: "Consumables",
    description:
      "Single-use blood tubing lines manufactured under strict sterile conditions for safe haemodialysis procedures.",
    icon: CircleDot,
    badge: null,
    badgeColor: "",
  },
  {
    name: "Saline Bags",
    category: "Consumables",
    description:
      "Sterile 0.9% sodium chloride solution bags for priming, rinsing, and emergency fluid replacement.",
    icon: Droplet,
    badge: null,
    badgeColor: "",
  },
  {
    name: "Pump Segment Tubing",
    category: "Spare Parts",
    description:
      "OEM-grade silicone pump segments for blood pump and heparin pump replacements across all major machine models.",
    icon: Wrench,
    badge: null,
    badgeColor: "",
  },
  {
    name: "Pressure Transducer Protector",
    category: "Spare Parts",
    description:
      "Hydrophobic membrane protectors for arterial and venous pressure transducers ensuring accurate monitoring.",
    icon: Wrench,
    badge: null,
    badgeColor: "",
  },
]

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filtered =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter)

  return (
    <>
      <PageHeader
        title="Our Products"
        description="Comprehensive catalogue of genuine, OEM-certified dialysis equipment from world-leading manufacturers."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
      />

      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Filter Tabs */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    activeFilter === cat
                      ? "bg-cyan text-white shadow-md"
                      : "bg-surface-alt text-muted hover:bg-border hover:text-dark"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Products Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <motion.div
                  layout
                  key={product.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="group bg-white rounded-2xl border border-border p-8 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center">
                        <product.icon className="w-6 h-6 text-cyan" />
                      </div>
                      {product.badge && (
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${product.badgeColor}`}
                        >
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                      {product.category}
                    </span>
                    <h3 className="mt-1.5 text-xl font-heading font-bold text-dark">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-muted text-sm leading-relaxed flex-1">
                      {product.description}
                    </p>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-2 text-cyan text-sm font-semibold group-hover:gap-3 transition-all"
                    >
                      Enquire Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Need Something Specific?"
        description="Don't see what you need? We can source equipment and parts from our extensive manufacturer network."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="WhatsApp Us"
        secondaryHref="https://wa.me/919826593932"
      />
    </>
  )
}
