"use client"

import { useEffect } from "react"
import { X, Phone, MessageCircle } from "lucide-react"
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
    `Hi, I'd like to get a quote for: ${product.name}\n\nCategory: ${product.category}${product.hsn ? `\nHSN: ${product.hsn}` : ""}`
  )

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="absolute inset-4 sm:inset-8 md:inset-y-12 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:max-w-lg md:w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-500 hover:text-slate-900 transition-all shadow-sm"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {/* Category + Name */}
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="px-3 py-1 text-xs font-semibold bg-[#0B2B5E] text-white rounded-full">
              {product.category}
            </span>
            {product.trending && (
              <span className="px-3 py-1 text-xs font-semibold bg-amber-100 text-amber-700 rounded-full">
                Popular
              </span>
            )}
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mt-3 mb-4">
            {product.name}
          </h2>

          <p className="text-sm text-slate-500 leading-relaxed mb-5 whitespace-pre-line">
            {product.longDescription}
          </p>

          {/* Specs (HSN etc.) */}
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
                Why Choose Us
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
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
            <a
              href={`https://wa.me/919826593932?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-5 py-3 text-sm font-bold text-white bg-[#20B054] rounded-lg hover:bg-[#20B054]/90 transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
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
  )
}
