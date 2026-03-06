"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, ArrowRight, Zap, Droplets, Armchair, Package } from "lucide-react"
import Reveal from "@/components/animations/reveal"
import StaggerContainer, { StaggerItem } from "@/components/animations/stagger"

const categories = [
  { label: "All Products", value: "all" },
  { label: "Dialysis Machines", value: "Dialysis Machines" },
  { label: "Water Treatment", value: "Water Treatment" },
  { label: "Equipment", value: "Equipment" },
  { label: "Consumables", value: "Consumables" },
  { label: "Spare Parts", value: "Spare Parts" },
]

const products = [
  {
    name: "Fresenius 4008S Classic",
    category: "Dialysis Machines",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCskD9NLOqMFXm36dmtNhUvmCJg9l_B3aj7ji1wefFsnO5tvT527ZbB7x73jSnW_Jdzywvm0DlmHs7G06mOvBFnOOFh4anUuJCJqdpsZtErdol6MYlstUF-pwlhLsPJ1q7Y3eUpntxGLDvsQiVEgpogHhtajyD7D_Fsh-7qHzCUc6cqFD3yqvDDMhFHFRzunxGuBNSEc46r4YosdMN5_hBhINEA_UI3e88UqPwHPy7g_KGbMb1OrM_57E8U9qAZZqwEUjKEdXN_vL0",
    color: "bg-[#0B2B5E]",
    specs: ["220V AC", "85 kg", "Refurbished"],
    description:
      "Industry-standard hemodialysis machine with single-needle and double-needle modes. Fully refurbished with 6-month warranty.",
  },
  {
    name: "B.Braun Dialog+",
    category: "Dialysis Machines",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1bDaeEODkPjd-Olb54JxhHpK_G-h3eqjJGp6PT2NQ3ZbyqMMqSP_GdN4ViWF4wj-DP_2G0KNs4iyHRPhJOFg9fjlIBTeqfJynAR5udk11qIltK-w8IxGx1tKuoXt97WVxIjYLdcb-4B-Ol81EYz9o-ykmajl_aMVvpeZY-p5QMIygkOZYp8tzTfA2Muhd0b3g-nLmKXTY4XVaxD4aehlf0gNxDImkKTUphpYWv5vAwuYPBy-XHK3Q1CF0-PkkjH-I1eRnlbw1gFQ",
    color: "bg-[#0B2B5E]",
    specs: ["230V AC", "Touch Screen", "Auto-Test"],
    description:
      "Advanced dialysis system with integrated touch-screen interface, auto self-test, and online clearance monitoring.",
  },
  {
    name: "Medical RO Water System",
    category: "Water Treatment",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDuKoVmDljO73ZXbkWiNh4zK0xXjEsT-SSIXFG5cZ-jJjud8PC2AwOtchsLo_3I_eJDV-vfTfocADUaOOfCOtxr-ML7DY5kOpU8tCWv2Vxnk4bD5t_s0aV-hXs37axA4aY1t54ZQ3zRSbGyB_ykPP7zaB2eG9VayckrCiM73RLb0UDzT2OcM3OpfQ4FUpl-F1tjXkTLBAMILl2lSkq1wvVD1IoYj_rYZYB8s_4160hFQkSCGCkK8K4HtDXt5-VmnqJ9PVc2ezNhCHc",
    color: "bg-[#0ea5e9]",
    specs: ["500 L/hr", "AAMI Std", "Auto Flush"],
    description:
      "Medical-grade RO system meeting AAMI water quality standards for safe hemodialysis. Includes pre-treatment and auto-flush.",
  },
  {
    name: "Motorized Dialysis Chair",
    category: "Equipment",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCjSDXV1nw3pi7yVhE3O0Cqeiz4PlSyetueOOl3-TV-_VQmQ7pMckY4ifNxcsNIPMh_lfdL5O-wJ2g57bexYTo9wE6vStFy8F4Kpz6KEiAdIiTutViTJivyPnsPF83a-0URj9NJveWWC_KpTl6BjVSjt4QiyihyJkWFyjQG47faqRqPyOGbNTqh061SfEJAT6jquw7oVz-bdYO-ykvvKs7CNdErqeIdPysjuXGUPddgGvWdax-oHHFXGUGEdDA73LPypKiCQd5myRA",
    color: "bg-[#64748b]",
    specs: ["3 Motors", "200 kg Load", "PU Leather"],
    description:
      "Electrically adjustable 3-motor dialysis chair with Trendelenburg, adjustable armrests, and easy-clean PU leather.",
  },
  {
    name: "High Flux Dialyzers",
    category: "Consumables",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEJTxvyJ3j1HMZquR3CLP5xZcY_K8Oiahjmk5IK11BTB57Lk68TN3TDZ4EJdHIyjJTEdTz6irjyh0QF7VpoAMe0MEGxZEUxpST-yNLSxljedPBZFeOIM-vJ_KuKyOcSvZU6iL8nsWZv9AOhnqomVNtzOzFR3s0EAlneOqH0w0tovWPsLQ3ybi0REyicc0H5eOKlVecjZh9CRUlEhgXodX0ciWaCprn_yUk_lAGyf7rVup19xBeYAZCSLdTykASvSZolOX3wljewbw",
    color: "bg-[#10b981]",
    specs: ["High Flux", "Box of 24", "Polysulfone"],
    description:
      "High-performance polysulfone dialyzers for single-use. Available in multiple surface areas for varied patient needs.",
  },
  {
    name: "AV Fistula Needles",
    category: "Consumables",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1fQJmuOt4eBtwmYgdtmNRsMWBSERVQKPWj8vnmkphLGXTYRMMbaJnqcuI2lwqCzrRMQpqJbkzmcwgiI9pNJyys3q7IFm9aDLaY01ohr6RL_NVeoG7HuzzVQGfJJnCsvNeilaTLiEa6bYBFIg3xCTPUmWLdRIT-Ah8LfsPyVo-3SRn5Hn6nkZIp9dygOa4JWFf_W9v29gGocLxJ6WS2VTQOjhKej-CnQ7-gnIMvkt0tkxDBAjxk_KTYqaJFVSeEreuuPH4QXdkSX0",
    color: "bg-[#10b981]",
    specs: ["16G / 17G", "Safety Type", "Box of 100"],
    description:
      "Safety-type AV fistula needles with rotating wings and back-eye design. Available in 16G and 17G gauges.",
  },
]

export default function ProductsPage() {
  const [active, setActive] = useState("all")

  const filtered =
    active === "all"
      ? products
      : products.filter((p) => p.category === active)

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <p className="text-xs uppercase tracking-[0.2em] text-[#0284C7] font-medium mb-3">
              Our Products
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Dialysis Equipment & Supplies
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <p className="text-slate-500 max-w-xl mx-auto">
              Browse our complete range of hemodialysis machines, water treatment
              systems, consumables, and spare parts.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter pills */}
      <section className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                  active === cat.value
                    ? "text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {active === cat.value && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-[#0B2B5E] rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <motion.div
                  key={product.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="group"
                >
                  <div className="bg-white border border-slate-100 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-slate-200 hover:-translate-y-1 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden bg-slate-50">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={280}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className={`absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold text-white rounded-full ${product.color}`}
                      >
                        {product.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-[#0B2B5E] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                        {product.description}
                      </p>

                      {/* Specs */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {product.specs.map((spec) => (
                          <span
                            key={spec}
                            className="px-2.5 py-1 text-[11px] font-medium bg-slate-50 text-slate-600 rounded-md border border-slate-100"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="inline-flex items-center text-sm font-medium text-[#0284C7] group-hover:gap-2 transition-all"
                      >
                        Request Quote
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="bg-[#0B2B5E] rounded-2xl px-8 py-12 md:px-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]" />
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Need a Custom Quote?
                </h2>
                <p className="text-blue-100/70 max-w-md mx-auto mb-6">
                  We offer bulk pricing for hospitals and dialysis centers. Tell
                  us what you need.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="tel:+919826593932"
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-[#0B2B5E] bg-white rounded hover:bg-slate-100 transition-all"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call: +91 98265 93932
                  </a>
                  <a
                    href="https://wa.me/919826593932"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-[#25D366] rounded hover:bg-[#25D366]/90 transition-all"
                  >
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
