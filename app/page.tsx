"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Wrench,
  HeadphonesIcon,
  Clock,
  Award,
  ChevronRight,
  Settings,
  BookOpen,
  Phone,
} from "lucide-react"
import Reveal from "@/components/animations/reveal"
import StaggerContainer, { StaggerItem } from "@/components/animations/stagger"
import Counter from "@/components/animations/counter"
import Magnetic from "@/components/animations/magnetic"
import Parallax from "@/components/animations/parallax"
import TextReveal from "@/components/animations/text-reveal"

const featuredProducts = [
  {
    title: "Hemodialysis Machines",
    description:
      "Refurbished and brand-new machines from Fresenius, B.Braun, and Nipro — fully tested, warrantied, and ready for clinical use.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCskD9NLOqMFXm36dmtNhUvmCJg9l_B3aj7ji1wefFsnO5tvT527ZbB7x73jSnW_Jdzywvm0DlmHs7G06mOvBFnOOFh4anUuJCJqdpsZtErdol6MYlstUF-pwlhLsPJ1q7Y3eUpntxGLDvsQiVEgpogHhtajyD7D_Fsh-7qHzCUc6cqFD3yqvDDMhFHFRzunxGuBNSEc46r4YosdMN5_hBhINEA_UI3e88UqPwHPy7g_KGbMb1OrM_57E8U9qAZZqwEUjKEdXN_vL0",
    color: "bg-[#0B2B5E]",
  },
  {
    title: "RO Water Treatment Plants",
    description:
      "Medical-grade reverse osmosis systems designed for hemodialysis applications with AAMI-standard water quality.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDuKoVmDljO73ZXbkWiNh4zK0xXjEsT-SSIXFG5cZ-jJjud8PC2AwOtchsLo_3I_eJDV-vfTfocADUaOOfCOtxr-ML7DY5kOpU8tCWv2Vxnk4bD5t_s0aV-hXs37axA4aY1t54ZQ3zRSbGyB_ykPP7zaB2eG9VayckrCiM73RLb0UDzT2OcM3OpfQ4FUpl-F1tjXkTLBAMILl2lSkq1wvVD1IoYj_rYZYB8s_4160hFQkSCGCkK8K4HtDXt5-VmnqJ9PVc2ezNhCHc",
    color: "bg-[#0ea5e9]",
  },
  {
    title: "Dialysis Consumables Kit",
    description:
      "High-flux dialyzers, bloodlines, AV fistula needles, and bicarbonate concentrates — sourced from OEM-approved manufacturers.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEJTxvyJ3j1HMZquR3CLP5xZcY_K8Oiahjmk5IK11BTB57Lk68TN3TDZ4EJdHIyjJTEdTz6irjyh0QF7VpoAMe0MEGxZEUxpST-yNLSxljedPBZFeOIM-vJ_KuKyOcSvZU6iL8nsWZv9AOhnqomVNtzOzFR3s0EAlneOqH0w0tovWPsLQ3ybi0REyicc0H5eOKlVecjZh9CRUlEhgXodX0ciWaCprn_yUk_lAGyf7rVup19xBeYAZCSLdTykASvSZolOX3wljewbw",
    color: "bg-[#10b981]",
  },
]

const stats = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Machines Delivered" },
  { value: 200, suffix: "+", label: "Active Clients" },
]

const whyChoose = [
  {
    icon: ShieldCheck,
    title: "Genuine Equipment",
    description: "Only OEM-certified dialysis machines and certified spare parts.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Machines shipped pan-India within 7–10 working days.",
  },
  {
    icon: Wrench,
    title: "On-Site Service",
    description: "We dispatch engineers for installation, repair, and AMC.",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description: "Two-hour call response with senior dialysis technicians.",
  },
]

const services = [
  {
    icon: Settings,
    title: "Installation & Commissioning",
    description: "End-to-end setup of dialysis machines and RO plants with water quality verification.",
  },
  {
    icon: Wrench,
    title: "Preventive Maintenance",
    description: "Scheduled servicing to keep your machines running at peak performance year-round.",
  },
  {
    icon: BookOpen,
    title: "Training & Education",
    description: "Hands-on equipment training for your dialysis technicians and nursing staff.",
  },
]

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <div className="overflow-hidden">
      {/* ───── HERO ───── */}
      <section ref={heroRef} className="relative bg-gradient-to-b from-slate-50 to-white pt-8 pb-20 lg:pt-12 lg:pb-28">
        {/* Grid bg pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left */}
            <div className="space-y-8">
              <Reveal direction="up" delay={0}>
                <div className="inline-flex items-center px-3.5 py-1.5 bg-[#0B2B5E]/5 border border-[#0B2B5E]/10 rounded-full text-xs font-medium text-[#0B2B5E] tracking-wide">
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
                  <Magnetic strength={0.15}>
                    <Link
                      href="/products"
                      className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#0B2B5E] rounded hover:bg-[#0B2B5E]/90 transition-all shadow-sm group"
                    >
                      Browse Products
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Magnetic>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#0B2B5E] bg-white border border-slate-200 rounded hover:bg-slate-50 transition-all"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Request a Quote
                  </Link>
                </div>
              </Reveal>

              {/* Stats */}
              <Reveal direction="up" delay={0.4}>
                <div className="flex gap-8 pt-4">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-bold text-[#0B2B5E]">
                        <Counter target={stat.value} suffix={stat.suffix} duration={2.5} />
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right — Machine Image */}
            <Reveal direction="right" delay={0.2}>
              <div className="relative w-full max-w-lg mx-auto">
                {/* Subtle glow circle behind machine */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[500px] h-[500px] rounded-full bg-[#0284C7]/8 blur-3xl" />
                </div>

                {/* Badge: top-right */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                  className="absolute top-4 right-0 bg-[#0B2B5E] text-white px-3 py-2 rounded-lg shadow-lg z-10"
                >
                  <div className="text-[10px] text-blue-300 uppercase tracking-wide mb-0.5">Machine</div>
                  <div className="text-sm font-bold">Fresenius 5008S</div>
                </motion.div>

                {/* Machine photo - using local high-res image */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-0"
                >
                  <Image
                    src="/images/machine.png"
                    alt="Fresenius 5008 Hemodialysis Machine"
                    width={800}
                    height={1000}
                    className="w-full h-auto object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>

                {/* Floating badge: bottom-left */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: "spring", stiffness: 200 }}
                  className="absolute bottom-4 left-0 bg-white px-4 py-3 rounded-xl shadow-lg border border-slate-100 z-10"
                >
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-[#0284C7]" />
                    <div>
                      <div className="text-sm font-bold text-slate-900">24/7</div>
                      <div className="text-[10px] text-slate-500">Service Support</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </motion.div>
      </section>

      {/* ───── TRUST BAR ───── */}
      <section className="py-10 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <p className="text-center text-xs text-slate-400 uppercase tracking-[0.2em] mb-6 font-medium">
              Trusted by Hospitals & Clinics
            </p>
          </Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-40">
            {["Fresenius", "B.Braun", "Nipro", "Baxter"].map((brand) => (
              <div
                key={brand}
                className="text-lg font-bold text-slate-400 tracking-wider"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FEATURED PRODUCTS ───── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Reveal direction="up">
              <p className="text-xs uppercase tracking-[0.2em] text-[#0284C7] font-medium mb-3">
                Our Products
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Trusted Equipment for
                <span className="text-[#0284C7]"> Every Clinic</span>
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.15}>
              <p className="text-slate-500 mt-4 max-w-lg mx-auto">
                High-quality dialysis machines, RO systems, and consumables — all sourced from certified manufacturers.
              </p>
            </Reveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" stagger={0.12}>
            {featuredProducts.map((product) => (
              <StaggerItem key={product.title}>
                <Link href="/products" className="group block">
                  <div className="relative overflow-hidden rounded-xl bg-slate-50 border border-slate-100 transition-all duration-300 group-hover:shadow-lg group-hover:border-slate-200 group-hover:-translate-y-1">
                    <div className="h-52 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={250}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-[#0B2B5E] transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-4">
                        {product.description}
                      </p>
                      <span className="inline-flex items-center text-sm font-medium text-[#0284C7] group-hover:gap-2 transition-all">
                        Learn More
                        <ChevronRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ───── WHY CHOOSE US ───── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Reveal direction="up">
              <p className="text-xs uppercase tracking-[0.2em] text-[#0284C7] font-medium mb-3">
                Why Choose Us
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Built on Reliability &
                <span className="text-[#0284C7]"> Trust</span>
              </h2>
            </Reveal>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
            {whyChoose.map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-white rounded-xl border border-slate-100 p-6 h-full transition-all duration-300 hover:shadow-md hover:border-slate-200 hover:-translate-y-1">
                  <div className="w-11 h-11 bg-[#0B2B5E]/5 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-[#0B2B5E]" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ───── SERVICES TEASER ───── */}
      <section className="py-20 lg:py-28 bg-[#0B2B5E] text-white relative overflow-hidden">
        {/* Subtle gradient dot pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:32px_32px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Reveal direction="up">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-300 font-medium mb-3">
                Our Services
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold">
                Complete After-Sales
                <span className="text-[#0284C7]"> Support</span>
              </h2>
            </Reveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" stagger={0.12}>
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                  <div className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 text-blue-300" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-blue-100/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal direction="up" delay={0.3}>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center text-sm font-medium text-white border border-white/20 px-6 py-2.5 rounded hover:bg-white/10 transition-all group"
              >
                See All Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───── CTA BANNER ───── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="bg-gradient-to-br from-[#0B2B5E] to-[#0B2B5E]/90 rounded-2xl px-8 py-14 md:px-16 md:py-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]" />

              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Equip Your Dialysis Center?
                </h2>
                <p className="text-blue-100/70 max-w-md mx-auto mb-8">
                  Contact our team for competitive wholesale pricing and expert guidance on equipment selection.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Magnetic strength={0.15}>
                    <a
                      href="tel:+919826593932"
                      className="inline-flex items-center px-6 py-3 text-sm font-medium text-[#0B2B5E] bg-white rounded hover:bg-slate-100 transition-all shadow-sm"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Magnetic>
                  <a
                    href="https://wa.me/919826593932"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-[#25D366] rounded hover:bg-[#25D366]/90 transition-all shadow-sm"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
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
