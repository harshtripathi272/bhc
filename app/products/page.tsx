"use client"

import { useState, useEffect, Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Phone, ArrowRight } from "lucide-react"
import Reveal from "@/components/animations/reveal"
import StaggerContainer, { StaggerItem } from "@/components/animations/stagger"
import ProductModal from "@/components/products/product-modal"
import { products, categories, type Product } from "@/lib/products-data"

function ProductsContent() {
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  // Open product from URL param `?open=product-id`
  useEffect(() => {
    const openId = searchParams.get("open")
    if (openId) {
      const found = products.find((p) => p.id === openId)
      if (found) setSelectedProduct(found)
    }
  }, [searchParams])

  const filtered =
    activeCategory === "all"
      ? products
      : activeCategory === "trending"
        ? products.filter((p) => p.trending)
        : products.filter((p) => p.category === activeCategory)

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
              High-quality hemodialysis machines, RO systems, consumables, and
              spare parts from certified manufacturers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Category Filters */}
      <section className="sticky top-16 z-30 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
            {categories.map((cat) => {
              const active = activeCategory === cat.value
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    active
                      ? "bg-[#0B2B5E] text-white shadow-sm"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            stagger={0.08}
          >
            {filtered.map((product) => (
              <StaggerItem key={product.id}>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="group block text-left w-full"
                >
                  <div className={`relative overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    product.trending
                      ? "bg-gradient-to-b from-blue-50/50 to-white border-blue-100/70 hover:border-blue-200 ring-1 ring-blue-50/50"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}>
                    {product.trending && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-flex items-center px-2.5 py-1 bg-[#0284C7]/10 text-[#0284C7] text-[10px] font-bold uppercase tracking-wide rounded-full">
                          Trending
                        </span>
                      </div>
                    )}
                    <div className="h-52 overflow-hidden relative bg-slate-50">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                        {product.category}
                      </span>
                      <h3 className="font-semibold text-slate-900 mt-1 mb-1.5 group-hover:text-[#0284C7] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                        <span className="text-sm font-medium text-[#0284C7]">
                          View Details &rarr;
                        </span>
                        <span className="text-xs font-medium text-slate-400">
                          Get Quote
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-400 text-sm">
                No products found in this category.
              </p>
            </div>
          )}
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
            <div className="flex items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-[#0B2B5E] rounded-lg hover:bg-[#0B2B5E]/90 transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="tel:+919826593932"
                className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-[#0B2B5E] border border-slate-200 rounded-lg hover:bg-white transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsContent />
    </Suspense>
  )
}
