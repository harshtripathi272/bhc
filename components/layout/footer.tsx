import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#061836] text-slate-300 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center text-white font-bold text-sm">
                BHC
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Balaji Health Care
              </span>
            </div>
            <p className="text-sm mb-6">
              Providing high-quality dialysis equipment and supplies to healthcare
              facilities since 2008.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
              Products
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/products" className="hover:text-white transition-colors">Dialysis Machines</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">RO Plants</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">Consumables</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">Spare Parts</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 shrink-0" />
                <span>
                  G-3, Mangalam Apartments, Manorama Ganj, Old Palasia, Indore,
                  Madhya Pradesh 452018
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 shrink-0" />
                <a href="tel:+919826593932" className="hover:text-white transition-colors">
                  +91 98265 93932
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 shrink-0" />
                <span>sales@balajihealthcare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-sm text-center flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Balaji Health Care. All rights reserved.</p>
          <div className="space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
