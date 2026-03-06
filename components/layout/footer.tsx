"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react"
import BHCLogo from "@/components/ui/logo"
import Reveal from "@/components/animations/reveal"
import StaggerContainer, { StaggerItem } from "@/components/animations/stagger"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
]

const productLinks = [
  { label: "Dialysis Machines", href: "/products" },
  { label: "RO Plants", href: "/products" },
  { label: "Consumables", href: "/products" },
  { label: "Spare Parts", href: "/products" },
]

export default function Footer() {
  return (
    <footer className="bg-[#061836] text-slate-300 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12" stagger={0.08}>
          {/* Company */}
          <StaggerItem className="md:col-span-1">
            <div className="mb-6">
              <BHCLogo className="h-10 w-auto" inverted />
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Providing high-quality dialysis equipment and supplies to
              healthcare facilities since 2008.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://wa.me/919826593932"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#25D366] hover:border-[#25D366]/30 transition-all"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="tel:+919826593932"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:sales@balajihealthcare.com"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </StaggerItem>

          {/* Quick Links */}
          <StaggerItem>
            <h4 className="text-white font-semibold mb-5 uppercase text-xs tracking-[0.15em]">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-slate-400 hover:text-white transition-colors"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#0284C7] mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          {/* Products */}
          <StaggerItem>
            <h4 className="text-white font-semibold mb-5 uppercase text-xs tracking-[0.15em]">
              Products
            </h4>
            <ul className="space-y-3 text-sm">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-slate-400 hover:text-white transition-colors"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#0284C7] mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </StaggerItem>

          {/* Contact */}
          <StaggerItem>
            <h4 className="text-white font-semibold mb-5 uppercase text-xs tracking-[0.15em]">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start text-slate-400">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 shrink-0 text-slate-500" />
                <span>
                  G-3, Mangalam Apartments, Manorama Ganj, Old Palasia,
                  Indore, MP 452018
                </span>
              </li>
              <li className="flex items-center text-slate-400">
                <Phone className="w-4 h-4 mr-2 shrink-0 text-slate-500" />
                <a href="tel:+919826593932" className="hover:text-white transition-colors">
                  +91 98265 93932
                </a>
              </li>
              <li className="flex items-center text-slate-400">
                <Mail className="w-4 h-4 mr-2 shrink-0 text-slate-500" />
                <a
                  href="mailto:sales@balajihealthcare.com"
                  className="hover:text-white transition-colors"
                >
                  sales@balajihealthcare.com
                </a>
              </li>
            </ul>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-sm text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500">
            © 2025 Balaji Health Care. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
