"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import MagneticButton from "@/components/animations/magnetic-button"

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const transparent = isHome && !scrolled

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          transparent
            ? "bg-transparent"
            : "bg-white/90 backdrop-blur-xl shadow-nav border-b border-border"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-[10px] bg-cyan/10 border border-cyan/20 flex items-center justify-center shrink-0">
              <span className="text-cyan font-heading font-extrabold text-sm">
                BHC
              </span>
            </div>
            <span className="hidden sm:flex flex-col">
              <span
                className={`font-heading font-bold text-[15px] leading-tight transition-colors ${
                  transparent ? "text-white" : "text-dark"
                }`}
              >
                Balaji Health Care
              </span>
              <span
                className={`text-[11px] tracking-wide uppercase transition-colors ${
                  transparent ? "text-white/60" : "text-muted"
                }`}
              >
                Dialysis Equipment Supplier
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors py-1 ${
                  transparent
                    ? "text-white/80 hover:text-white"
                    : "text-dark/70 hover:text-dark"
                } ${
                  pathname === link.href
                    ? transparent
                      ? "!text-white"
                      : "!text-cyan"
                    : ""
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="navActiveTab"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-cyan rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden lg:block">
              <MagneticButton>
                <span className="px-5 py-2.5 bg-cyan text-white text-sm font-semibold rounded-xl hover:bg-cyan-hover transition-colors inline-block">
                  Enquire Now
                </span>
              </MagneticButton>
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
              aria-label="Menu"
              aria-expanded={mobileOpen}
            >
              <span
                className={`w-6 h-0.5 rounded-full transition-all duration-300 origin-center ${
                  transparent ? "bg-white" : "bg-dark"
                } ${mobileOpen ? "rotate-45 translate-y-[4px]" : ""}`}
              />
              <span
                className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
                  transparent ? "bg-white" : "bg-dark"
                } ${mobileOpen ? "opacity-0 scale-0" : ""}`}
              />
              <span
                className={`w-6 h-0.5 rounded-full transition-all duration-300 origin-center ${
                  transparent ? "bg-white" : "bg-dark"
                } ${mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 p-8 pt-24 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col gap-1">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`block py-3 text-lg font-heading font-semibold transition-colors ${
                        pathname === link.href
                          ? "text-cyan"
                          : "text-dark hover:text-cyan"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    href="/contact"
                    className="mt-6 px-6 py-3.5 bg-cyan text-white text-center font-semibold rounded-xl block hover:bg-cyan-hover transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Enquire Now
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
