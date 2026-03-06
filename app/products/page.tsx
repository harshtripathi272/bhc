"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import {
  Home,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Zap,
  Scale,
  ShieldCheck,
  Droplets,
  Filter,
  Package,
  Smartphone,
  Ruler,
  Shield,
  Armchair,
} from "lucide-react"

const categories = [
  "All Products",
  "Dialysis Machines",
  "Dialysis Equipment",
  "Consumables",
  "Spare Parts",
  "Water Treatment",
]

interface Product {
  name: string
  category: string
  categoryColor: string
  description: string
  specs: { icon: React.ReactNode; label: string }[]
  image: string
}

const products: Product[] = [
  {
    name: "Fresenius 4008S",
    category: "Dialysis Machines",
    categoryColor: "bg-[#0B2B5E]",
    description:
      "The 4008S classix is well known for its proven reliability and performance. It provides high quality hemodialysis treatment while ensuring patient safety and ease of use.",
    specs: [
      { icon: <Zap className="w-3.5 h-3.5 text-gray-500" />, label: "220V AC" },
      { icon: <Scale className="w-3.5 h-3.5 text-gray-500" />, label: "85 kg" },
      { icon: <ShieldCheck className="w-3.5 h-3.5 text-gray-500" />, label: "Refurbished" },
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCskD9NLOqMFXm36dmtNhUvmCJg9l_B3aj7ji1wefFsnO5tvT527ZbB7x73jSnW_Jdzywvm0DlmHs7G06mOvBFnOOFh4anUuJCJqdpsZtErdol6MYlstUF-pwlhLsPJ1q7Y3eUpntxGLDvsQiVEgpogHhtajyD7D_Fsh-7qHzCUc6cqFD3yqvDDMhFHFRzunxGuBNSEc46r4YosdMN5_hBhINEA_UI3e88UqPwHPy7g_KGbMb1OrM_57E8U9qAZZqwEUjKEdXN_vL0",
  },
  {
    name: "B.Braun Dialog+",
    category: "Dialysis Machines",
    categoryColor: "bg-[#0B2B5E]",
    description:
      "Advanced hemodialysis system offering personalized treatment options, intuitive user interface, and integrated therapy data management for optimal clinical outcomes.",
    specs: [
      { icon: <Zap className="w-3.5 h-3.5 text-gray-500" />, label: "230V AC" },
      { icon: <Smartphone className="w-3.5 h-3.5 text-gray-500" />, label: "Touch Screen" },
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1bDaeEODkPjd-Olb54JxhHpK_G-h3eqjJGp6PT2NQ3ZbyqMMqSP_GdN4ViWF4wj-DP_2G0KNs4iyHRPhJOFg9fjlIBTeqfJynAR5udk11qIltK-w8IxGx1tKuoXt97WVxIjYLdcb-4B-Ol81EYz9o-ykmajl_aMVvpeZY-p5QMIygkOZYp8tzTfA2Muhd0b3g-nLmKXTY4XVaxD4aehlf0gNxDImkKTUphpYWv5vAwuYPBy-XHK3Q1CF0-PkkjH-I1eRnlbw1gFQ",
  },
  {
    name: "Medical RO Water System",
    category: "Water Treatment",
    categoryColor: "bg-[#0ea5e9]",
    description:
      "High-capacity reverse osmosis water purification system specifically designed for hemodialysis applications, ensuring AAMI compliant water quality.",
    specs: [
      { icon: <Droplets className="w-3.5 h-3.5 text-gray-500" />, label: "500L/hr" },
      { icon: <ShieldCheck className="w-3.5 h-3.5 text-gray-500" />, label: "AAMI Std" },
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDuKoVmDljO73ZXbkWiNh4zK0xXjEsT-SSIXFG5cZ-jJjud8PC2AwOtchsLo_3I_eJDV-vfTfocADUaOOfCOtxr-ML7DY5kOpU8tCWv2Vxnk4bD5t_s0aV-hXs37axA4aY1t54ZQ3zRSbGyB_ykPP7zaB2eG9VayckrCiM73RLb0UDzT2OcM3OpfQ4FUpl-F1tjXkTLBAMILl2lSkq1wvVD1IoYj_rYZYB8s_4160hFQkSCGCkK8K4HtDXt5-VmnqJ9PVc2ezNhCHc",
  },
  {
    name: "Motorized Dialysis Chair",
    category: "Equipment",
    categoryColor: "bg-[#64748b]",
    description:
      "Ergonomic, fully motorized patient chair designed for maximum comfort during long dialysis sessions. Features CPR positioning and easy-to-clean antimicrobial upholstery.",
    specs: [
      { icon: <Armchair className="w-3.5 h-3.5 text-gray-500" />, label: "3 Motors" },
      { icon: <Scale className="w-3.5 h-3.5 text-gray-500" />, label: "200kg Load" },
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCjSDXV1nw3pi7yVhE3O0Cqeiz4PlSyetueOOl3-TV-_VQmQ7pMckY4ifNxcsNIPMh_lfdL5O-wJ2g57bexYTo9wE6vStFy8F4Kpz6KEiAdIiTutViTJivyPnsPF83a-0URj9NJveWWC_KpTl6BjVSjt4QiyihyJkWFyjQG47faqRqPyOGbNTqh061SfEJAT6jquw7oVz-bdYO-ykvvKs7CNdErqeIdPysjuXGUPddgGvWdax-oHHFXGUGEdDA73LPypKiCQd5myRA",
  },
  {
    name: "High Flux Dialyzers",
    category: "Consumables",
    categoryColor: "bg-[#10b981]",
    description:
      "Premium synthetic membrane dialyzers offering excellent clearance of middle molecules and excellent biocompatibility. Available in various surface areas.",
    specs: [
      { icon: <Filter className="w-3.5 h-3.5 text-gray-500" />, label: "High Flux" },
      { icon: <Package className="w-3.5 h-3.5 text-gray-500" />, label: "Box of 24" },
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEJTxvyJ3j1HMZquR3CLP5xZcY_K8Oiahjmk5IK11BTB57Lk68TN3TDZ4EJdHIyjJTEdTz6irjyh0QF7VpoAMe0MEGxZEUxpST-yNLSxljedPBZFeOIM-vJ_KuKyOcSvZU6iL8nsWZv9AOhnqomVNtzOzFR3s0EAlneOqH0w0tovWPsLQ3ybi0REyicc0H5eOKlVecjZh9CRUlEhgXodX0ciWaCprn_yUk_lAGyf7rVup19xBeYAZCSLdTykASvSZolOX3wljewbw",
  },
  {
    name: "AV Fistula Needles",
    category: "Consumables",
    categoryColor: "bg-[#10b981]",
    description:
      "Ultra-thin wall fistula needles with perfectly shaped back-eye for optimal blood flow and minimal tissue trauma. Features safety shields to prevent needlestick injuries.",
    specs: [
      { icon: <Ruler className="w-3.5 h-3.5 text-gray-500" />, label: "16G, 17G" },
      { icon: <Shield className="w-3.5 h-3.5 text-gray-500" />, label: "Safety Type" },
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD1fQJmuOt4eBtwmYgdtmNRsMWBSERVQKPWj8vnmkphLGXTYRMMbaJnqcuI2lwqCzrRMQpqJbkzmcwgiI9pNJyys3q7IFm9aDLaY01ohr6RL_NVeoG7HuzzVQGfJJnCsvNeilaTLiEa6bYBFIg3xCTPUmWLdRIT-Ah8LfsPyVo-3SRn5Hn6nkZIp9dygOa4JWFf_W9v29gGocLxJ6WS2VTQOjhKej-CnQ7-gnIMvkt0tkxDBAjxk_KTYqaJFVSeEreuuPH4QXdkSX0",
  },
]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All Products")

  const filtered =
    activeCategory === "All Products"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Page Header */}
      <section className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex text-sm mb-6 text-slate-600">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center hover:text-[#0B2B5E] transition-colors"
                >
                  <Home className="w-4 h-4 mr-1" />
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                  <span className="ml-1 font-medium text-slate-900">Products</span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Our Product Catalogue
          </h1>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed text-slate-600">
            Explore our comprehensive range of high-quality dialysis equipment,
            machines, and consumables designed for clinical excellence.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 z-40 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto hide-scrollbar space-x-3 pb-2 -mb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium shadow-sm transition-colors ${
                  activeCategory === cat
                    ? "bg-[#0B2B5E] text-white font-semibold"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-[#0B2B5E] hover:text-[#0B2B5E]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <div
              key={product.name}
              className="group bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-0.5"
            >
              <div className="h-60 bg-gray-50 flex items-center justify-center p-6 relative">
                <span
                  className={`absolute top-4 left-4 ${product.categoryColor} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}
                >
                  {product.category}
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                  src={product.image}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0B2B5E] transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-600 mb-4 flex-grow line-clamp-3">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-slate-600 border border-gray-200"
                    >
                      {spec.icon}
                      <span className="ml-1">{spec.label}</span>
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="w-full bg-white border-2 border-[#0B2B5E] text-[#0B2B5E] hover:bg-[#0B2B5E] hover:text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center group-hover:bg-[#0B2B5E] group-hover:text-white"
                >
                  Enquire Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
