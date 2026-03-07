"use client"

import { useState, use, useMemo } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Phone, ArrowRight, Zap, Search, X, MessageCircle } from "lucide-react"
import Reveal from "@/components/animations/reveal"
import StaggerContainer, { StaggerItem } from "@/components/animations/stagger"
import ProductModal from "@/components/products/product-modal"
import { products, categories, slugToValue, type Product } from "@/lib/products-data"

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [search, setSearch] = useState("")

  const categoryValue = slugToValue(slug)
  if (!categoryValue) notFound()

  const category = categories.find((c) => c.slug === slug)!

  const allFiltered =
    categoryValue === "trending"
      ? products.filter((p) => p.trending)
      : products.filter((p) => p.category === categoryValue)

  const filtered = useMemo(() => {
    if (!search.trim()) return allFiltered
    const q = search.toLowerCase()
    return allFiltered.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.hsn && p.hsn.includes(q))
    )
  }, [allFiltered, search])

  const whatsappCategoryMsg = encodeURIComponent(
    `Hi, I'd like to enquire about products in: ${category.label}`
  )

  return (
    <div>
      {/* Breadcrumb + Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-8 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Reveal direction="up">
            <Link
              href="/products"
              className="inline-flex items-center text-sm text-slate-400 hover:text-[#0284C7] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              All Categories
            </Link>
          </Reveal>

          <div className="text-center">
            <Reveal direction="up" delay={0.05}>
              <p className="text-xs uppercase tracking-[0.2em] text-[#0284C7] font-medium mb-2">
                Products
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 flex items-center justify-center gap-3">
                {categoryValue === "trending" && (
                  <Zap className="w-7 h-7 text-amber-400" />
                )}
                {category.label}
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.15}>
              <p className="text-slate-500 max-w-lg mx-auto text-sm">
                {category.description}
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="mt-3 text-xs text-slate-400">
                {allFiltered.length} {allFiltered.length === 1 ? "product" : "products"} available
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Search + Product List */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search bar */}
          {allFiltered.length > 8 && (
            <Reveal direction="up" delay={0.1}>
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder={`Search ${allFiltered.length} products...`}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-10 py-3 text-sm border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7] transition-all placeholder:text-slate-400"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full hover:bg-slate-200 text-slate-400"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </Reveal>
          )}

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-400 text-sm mb-4">
                {search
                  ? `No products matching "${search}"`
                  : "No products listed in this category yet."}
              </p>
              {search ? (
                <button
                  onClick={() => setSearch("")}
                  className="inline-flex items-center text-sm font-semibold text-[#0284C7] hover:underline"
                >
                  Clear search
                </button>
              ) : (
                <Link
                  href="/products"
                  className="inline-flex items-center text-sm font-semibold text-[#0284C7] hover:underline"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Back to all categories
                </Link>
              )}
            </div>
          ) : (
            <>
              {search && (
                <p className="text-xs text-slate-400 mb-4">
                  Showing {filtered.length} of {allFiltered.length} products
                </p>
              )}
              <StaggerContainer className="divide-y divide-slate-100" stagger={0.03}>
                {filtered.map((product) => (
                  <StaggerItem key={product.id}>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="group flex items-center justify-between w-full py-4 px-3 rounded-lg text-left hover:bg-slate-50 transition-colors -mx-3"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-medium text-slate-900 group-hover:text-[#0284C7] transition-colors text-sm sm:text-base">
                            {product.name}
                          </h3>
                          {product.trending && (
                            <span className="inline-flex items-center gap-0.5 px-2 py-0.5 bg-amber-50 text-amber-600 text-[10px] font-bold uppercase tracking-wide rounded-full">
                              <Zap className="w-2.5 h-2.5" />
                              Popular
                            </span>
                          )}
                        </div>
                        {product.hsn && (
                          <p className="text-xs text-slate-400 mt-0.5">
                            HSN: {product.hsn}
                          </p>
                        )}
                      </div>
                      <span className="text-xs font-medium text-[#0284C7] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-4">
                        View Details →
                      </span>
                    </button>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Need a bulk quote for {category.label}?
            </h2>
            <p className="text-sm text-slate-500 mb-5">
              Share your requirements and we&apos;ll get back with the best prices.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <a
                href={`https://wa.me/919826593932?text=${whatsappCategoryMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2.5 text-sm font-bold text-white bg-[#20B054] rounded-lg hover:bg-[#20B054]/90 transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Quote
              </a>
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

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  )
}
