"use client"

import Image from "next/image"
import { useEffect } from "react"
import { X, Phone } from "lucide-react"
import type { Product } from "@/lib/products-data"

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [product])

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  if (!product) return null

  const whatsappMsg = encodeURIComponent(
    `Hi, I'd like to get a quote for: ${product.name}\n\nCategory: ${product.category}`
  )

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="absolute inset-4 sm:inset-6 md:inset-8 lg:inset-x-auto lg:inset-y-10 lg:left-1/2 lg:-translate-x-1/2 lg:max-w-4xl lg:w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-500 hover:text-slate-900 transition-all shadow-sm"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex-1 overflow-y-auto">
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative bg-slate-100 h-64 md:h-full min-h-[280px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw,50vw"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 text-xs font-semibold bg-[#0B2B5E] text-white rounded-full">
                  {product.category}
                </span>
                {product.trending && (
                  <span className="px-3 py-1 text-xs font-semibold bg-[#0284C7] text-white rounded-full">
                    Trending
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                {product.name}
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">
                {product.longDescription}
              </p>

              {/* Specs */}
              {product.specs.length > 0 && (
                <div className="mb-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Specifications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.specs.map((spec) => (
                      <span
                        key={spec}
                        className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-lg border border-slate-200"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              {product.features.length > 0 && (
                <div className="mb-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-1.5">
                    {product.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start text-sm text-slate-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-1.5 mr-2 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTAs */}
              <div className="mt-auto flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/919826593932?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-[#25D366] rounded-lg hover:bg-[#25D366]/90 transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mr-2"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Get a Quote
                </a>
                <a
                  href="tel:+919826593932"
                  className="flex-1 inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-[#0B2B5E] bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call for Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
