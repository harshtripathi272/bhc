import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, ShieldCheck, Package, FlaskConical } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#0284C7] font-semibold tracking-wider uppercase text-sm mb-4 block">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Dedicated to advancing <br className="hidden md:block" />
              renal care excellence.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              As a premier wholesale supplier and maintenance partner, we empower
              healthcare facilities with top-tier dialysis equipment and
              unwavering support.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left — Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Portrait of Founder"
                  className="object-cover w-full h-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSaIwNP3L-zv559t0Jk0vu8Z_5HE4suH_fjHF-3-HHcsMqE-zCuLZQygUBU5oNJl6LTooGuSoKvxW72BZN04rQBvjdzCY9X5TeNU9UandmzhLy5kQ_37DB3pgZpA9yT0BPzigE-Xk5oHEfJofP4IhUbDYp36SnUD-EV_QuoRYBmBTPOTAJvVS_uBGzKh_iEKtH69r32DK23QVlQNG7XOYAkjxhh3aTcA0QAbEWZjfN0aK7qnq-RyX37jDcdAPVEREKGeRgBCivwU0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-bold text-xl">Vinod Tripathi</p>
                  <p className="text-white/80 text-sm">
                    Founder &amp; Managing Director
                  </p>
                </div>
              </div>

              {/* Stats floating card */}
              <div className="absolute -right-6 md:-right-12 -bottom-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                <div className="grid grid-cols-2 gap-4 divide-x divide-slate-200">
                  <div>
                    <p className="text-3xl font-bold text-[#0284C7] mb-1">
                      2008
                    </p>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                      Established
                    </p>
                  </div>
                  <div className="pl-4">
                    <p className="text-3xl font-bold text-[#0284C7] mb-1">
                      15+
                    </p>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                      Years Exp.
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-200 flex items-center gap-2 text-slate-600 text-sm font-medium">
                  <MapPin className="w-4 h-4" /> Based in Indore, MP
                </div>
              </div>
            </div>

            {/* Right — Story */}
            <div className="mt-12 lg:mt-0">
              <span className="text-[#0284C7] font-semibold tracking-wider uppercase text-sm mb-4 block">
                Our Story
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Serving Healthcare Since 2008
              </h2>
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  Balaji Health Care is a wholesale supplier of dialysis machines,
                  dialysis equipment, and related medical consumables. The business
                  provides hospitals, dialysis centers, and medical institutions
                  with high-quality dialysis machines and essential accessories
                  required for dialysis treatment.
                </p>
                <p>
                  In addition to supplying equipment, the company also offers
                  maintenance and service support for dialysis machines to ensure
                  reliable and uninterrupted operation in healthcare facilities.
                  Balaji Health Care focuses on delivering dependable products,
                  timely supply, and professional service to support medical
                  providers in delivering effective patient care.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center mt-8 text-[#0284C7] font-medium hover:underline"
              >
                Contact Vinod Tripathi &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Pillars */}
      <section className="py-20 lg:py-32 bg-[#E8F2FB] border-y border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Pillars</h2>
            <p className="text-lg text-slate-600">
              The principles that guide our operations and ensure unparalleled
              service delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#0284C7]/10 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-[#0284C7]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Reliability</h3>
              <p className="text-slate-600">
                Consistent, on-time delivery and rapid-response maintenance to
                ensure zero disruption in patient care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#0284C7]/10 rounded-xl flex items-center justify-center mb-6">
                <Package className="w-8 h-8 text-[#0284C7]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Genuine Supply</h3>
              <p className="text-slate-600">
                Authorized sourcing of high-grade equipment and original spare
                parts direct from trusted manufacturers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#0284C7]/10 rounded-xl flex items-center justify-center mb-6">
                <FlaskConical className="w-8 h-8 text-[#0284C7]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Medical Expertise</h3>
              <p className="text-slate-600">
                A team of highly trained technicians specializing strictly in the
                nuances of dialysis and renal care technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
