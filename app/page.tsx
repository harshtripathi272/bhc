import Link from "next/link"
import {
  ShieldCheck,
  Truck,
  Wrench,
  Headset,
  HeartPulse,
  Droplets,
  Package,
  CheckCircle,
  ArrowRight,
  Cog,
  Settings,
  GraduationCap,
  Hospital,
  ShieldPlus,
  Heart,
  Stethoscope,
} from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:flex lg:items-center lg:gap-16">
            {/* Left side */}
            <div className="lg:w-[55%] mb-12 lg:mb-0">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-sm font-medium text-slate-600 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
                <span>TRUSTED SINCE 2008</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
                Dialysis Equipment Delivered With{" "}
                <span className="text-[#0B2B5E]">Precision.</span>
              </h1>

              <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                Wholesale supplier of premium dialysis machines, consumables, and
                RO plants for hospitals and clinics across India.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
                <Link
                  href="/products"
                  className="inline-flex justify-center items-center px-6 py-3 text-base font-medium rounded text-white bg-[#0B2B5E] hover:bg-[#0B2B5E]/90 shadow-sm transition-all"
                >
                  Explore Products
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center px-6 py-3 border border-slate-300 text-base font-medium rounded text-slate-700 bg-transparent hover:bg-slate-50 transition-all"
                >
                  Contact Us
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">15+</div>
                  <div className="text-sm text-slate-500">Years Exp</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">500+</div>
                  <div className="text-sm text-slate-500">Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">24/7</div>
                  <div className="text-sm text-slate-500">Support</div>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="lg:w-[45%] relative">
              <div className="bg-slate-200 rounded-xl p-8 shadow-2xl border border-slate-200 relative">
                <div className="aspect-[4/3] bg-white rounded-lg flex flex-col items-center justify-center mb-4 overflow-hidden border border-slate-100">
                  <Stethoscope className="w-16 h-16 text-slate-300 mb-4" />
                  <span className="text-sm font-medium text-slate-400">
                    Premium Dialysis Machine
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-square bg-white rounded flex flex-col items-center justify-center border border-slate-100">
                    <Droplets className="w-6 h-6 text-slate-300" />
                  </div>
                  <div className="aspect-square bg-white rounded flex flex-col items-center justify-center border border-slate-100">
                    <HeartPulse className="w-6 h-6 text-slate-300" />
                  </div>
                  <div className="aspect-square bg-white rounded flex flex-col items-center justify-center border border-slate-100">
                    <Package className="w-6 h-6 text-slate-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative circle */}
        <div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/4">
          <svg width="800" height="800" viewBox="0 0 800 800" fill="none" className="opacity-[0.03]">
            <circle cx="400" cy="400" r="400" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* ═══════ TRUST BAR ═══════ */}
      <section className="bg-slate-50 border-y border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-slate-500 mb-6 uppercase tracking-wider">
            Supplying to leading hospitals &amp; clinics
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            <div className="flex items-center space-x-2">
              <Hospital className="w-5 h-5" />
              <span className="font-bold">City Care</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldPlus className="w-5 h-5" />
              <span className="font-bold">MedTrust</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5" />
              <span className="font-bold">Global Health</span>
            </div>
            <div className="flex items-center space-x-2">
              <Stethoscope className="w-5 h-5" />
              <span className="font-bold">Apollo</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FEATURED PRODUCTS ═══════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
              Our Most Sourced Equipment
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Industry-leading dialysis machines and supplies designed for
              reliability and patient safety.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-slate-200 rounded p-6 flex flex-col group hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-slate-50 rounded mb-6 flex items-center justify-center p-4">
                <HeartPulse className="w-20 h-20 text-slate-300 group-hover:text-[#0B2B5E] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Hemodialysis Machine</h3>
              <p className="text-sm text-slate-600 mb-6 flex-grow">
                Advanced touch-screen interface, precise ultrafiltration control,
                and automated self-test capabilities.
              </p>
              <Link
                href="/contact"
                className="inline-flex justify-center items-center w-full px-4 py-2 border border-slate-300 text-sm font-medium rounded text-slate-700 bg-white hover:bg-slate-50 transition-colors"
              >
                Enquire Now
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-200 rounded p-6 flex flex-col group hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-slate-50 rounded mb-6 flex items-center justify-center p-4">
                <Droplets className="w-20 h-20 text-slate-300 group-hover:text-[#0B2B5E] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                RO Water Treatment Plant
              </h3>
              <p className="text-sm text-slate-600 mb-6 flex-grow">
                High-capacity reverse osmosis system specifically engineered for
                clinical dialysis applications.
              </p>
              <Link
                href="/contact"
                className="inline-flex justify-center items-center w-full px-4 py-2 border border-slate-300 text-sm font-medium rounded text-slate-700 bg-white hover:bg-slate-50 transition-colors"
              >
                Enquire Now
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-200 rounded p-6 flex flex-col group hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-slate-50 rounded mb-6 flex items-center justify-center p-4">
                <Package className="w-20 h-20 text-slate-300 group-hover:text-[#0B2B5E] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Dialysis Consumables Kit
              </h3>
              <p className="text-sm text-slate-600 mb-6 flex-grow">
                Complete sets including dialyzers, bloodlines, AV fistulas, and
                transducer protectors in bulk.
              </p>
              <Link
                href="/contact"
                className="inline-flex justify-center items-center w-full px-4 py-2 border border-slate-300 text-sm font-medium rounded text-slate-700 bg-white hover:bg-slate-50 transition-colors"
              >
                Enquire Now
              </Link>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center text-[#0284C7] font-medium hover:underline"
            >
              View All Products <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ WHY CHOOSE US ═══════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 mb-12 lg:mb-0">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                Why Balaji Health Care?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We don&apos;t just supply equipment; we partner with healthcare
                facilities to ensure uninterrupted, high-quality patient care.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#0B2B5E] mt-1 mr-3 shrink-0" />
                  <span className="text-slate-700">Authorized distributors for top brands</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#0B2B5E] mt-1 mr-3 shrink-0" />
                  <span className="text-slate-700">Competitive wholesale pricing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#0B2B5E] mt-1 mr-3 shrink-0" />
                  <span className="text-slate-700">Pan-regional delivery network</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 rounded flex items-center justify-center text-[#0B2B5E] mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Genuine Equipment</h4>
                <p className="text-sm text-slate-600">
                  100% authentic products sourced directly from manufacturers.
                </p>
              </div>
              <div className="bg-white p-6 rounded border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 rounded flex items-center justify-center text-[#0B2B5E] mb-4">
                  <Truck className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Fast Delivery</h4>
                <p className="text-sm text-slate-600">
                  Optimized logistics for rapid dispatch of critical supplies.
                </p>
              </div>
              <div className="bg-white p-6 rounded border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 rounded flex items-center justify-center text-[#0B2B5E] mb-4">
                  <Wrench className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">On-Site Service</h4>
                <p className="text-sm text-slate-600">
                  Trained engineers available for prompt maintenance.
                </p>
              </div>
              <div className="bg-white p-6 rounded border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 rounded flex items-center justify-center text-[#0B2B5E] mb-4">
                  <Headset className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Expert Support</h4>
                <p className="text-sm text-slate-600">
                  Technical assistance available round the clock.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES TEASER ═══════ */}
      <section className="py-24 bg-[#0B2B5E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
              Comprehensive Care Solutions
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              End-to-end services to ensure your facility operates smoothly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 border border-white/20 rounded p-8 backdrop-blur-sm">
              <Cog className="w-10 h-10 mb-4 text-white" />
              <h3 className="text-xl font-bold mb-3 text-white">Installation</h3>
              <p className="text-blue-100 mb-6">
                Professional setup and calibration of dialysis machines and RO
                plants by certified technicians.
              </p>
              <Link
                href="/services"
                className="text-sm font-semibold hover:text-blue-200 flex items-center text-white"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white/10 border border-white/20 rounded p-8 backdrop-blur-sm">
              <Settings className="w-10 h-10 mb-4 text-white" />
              <h3 className="text-xl font-bold mb-3 text-white">Maintenance</h3>
              <p className="text-blue-100 mb-6">
                Scheduled preventive maintenance and AMC packages to minimize
                equipment downtime.
              </p>
              <Link
                href="/services"
                className="text-sm font-semibold hover:text-blue-200 flex items-center text-white"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white/10 border border-white/20 rounded p-8 backdrop-blur-sm">
              <GraduationCap className="w-10 h-10 mb-4 text-white" />
              <h3 className="text-xl font-bold mb-3 text-white">Training</h3>
              <p className="text-blue-100 mb-6">
                On-site operational training for clinical staff on new equipment
                and protocols.
              </p>
              <Link
                href="/services"
                className="text-sm font-semibold hover:text-blue-200 flex items-center text-white"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 border border-white text-white font-medium rounded hover:bg-white hover:text-[#0B2B5E] transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ CTA BANNER ═══════ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            Ready to Equip Your Dialysis Centre?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Get competitive wholesale pricing on genuine dialysis equipment.
            Reach out for a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-8 py-3 rounded text-white bg-[#0B2B5E] hover:bg-[#061836] font-medium transition-colors"
            >
              Enquire Now
            </Link>
            <a
              href="https://wa.me/919826593932"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-3 rounded text-white bg-[#25D366] hover:bg-[#128C7E] font-medium transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
