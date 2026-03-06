import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, Award, Stethoscope, Phone, ArrowRight } from "lucide-react"
import Reveal from "@/components/animations/reveal"
import StaggerContainer, { StaggerItem } from "@/components/animations/stagger"
import Counter from "@/components/animations/counter"

export const metadata: Metadata = {
  title: "About Us | Balaji Health Care",
  description:
    "Learn about Balaji Health Care — wholesale dialysis equipment supplier based in Indore, India, serving hospitals and clinics since 2008.",
}

const pillars = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "Every machine we deliver is tested, warrantied, and backed by responsive after-sales support. We stand behind what we sell.",
  },
  {
    icon: Award,
    title: "Genuine Supply",
    description:
      "We source only from OEM-certified channels — no grey-market parts, no shortcuts. Your patients' safety is our priority.",
  },
  {
    icon: Stethoscope,
    title: "Medical Expertise",
    description:
      "Our team of dialysis technicians and biomedical engineers brings hands-on clinical experience to every interaction.",
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <p className="text-xs uppercase tracking-[0.2em] text-[#0284C7] font-medium mb-3">
              About Us
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Your Trusted Dialysis Equipment Partner
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <p className="text-slate-500 max-w-xl mx-auto">
              Based in Indore, India — supplying hospitals and dialysis centers
              with reliable equipment, parts, and service since 2008.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image side */}
            <Reveal direction="left" delay={0.1}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSaIwNP3L-zv559t0Jk0vu8Z_5HE4suH_fjHF-3-HHcsMqE-zCuLZQygUBU5oNJl6LTooGuSoKvxW72BZN04rQBvjdzCY9X5TeNU9UandmzhLy5kQ_37DB3pgZpA9yT0BPzigE-Xk5oHEfJofP4IhUbDYp36SnUD-EV_QuoRYBmBTPOTAJvVS_uBGzKh_iEKtH69r32DK23QVlQNG7XOYAkjxhh3aTcA0QAbEWZjfN0aK7qnq-RyX37jDcdAPVEREKGeRgBCivwU0"
                    alt="Balaji Health Care Team"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Floating Stats */}
                <div className="absolute -bottom-6 -right-4 md:right-6 bg-white px-5 py-4 rounded-xl shadow-lg border border-slate-100">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-xl font-bold text-[#0B2B5E]">
                        <Counter target={2008} suffix="" duration={2} />
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        Founded
                      </div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[#0B2B5E]">
                        <Counter target={15} suffix="+" duration={2} />
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        Years
                      </div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[#0B2B5E]">
                        <Counter target={500} suffix="+" duration={2.5} />
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        Machines
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Text side */}
            <div className="space-y-6">
              <Reveal direction="right" delay={0.1}>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Our Story
                </h2>
              </Reveal>
              <Reveal direction="right" delay={0.15}>
                <p className="text-slate-500 leading-relaxed">
                  Balaji Health Care was founded in Indore, Madhya Pradesh, with
                  a clear mission: to make high-quality dialysis equipment
                  accessible and affordable for healthcare centers across India.
                </p>
              </Reveal>
              <Reveal direction="right" delay={0.2}>
                <p className="text-slate-500 leading-relaxed">
                  Starting with a small operation supplying refurbished
                  hemodialysis machines, we have since grown into a wholesale
                  partner serving hospitals, clinics, and dialysis centers with a
                  complete range of equipment, consumables, and after-sales
                  support.
                </p>
              </Reveal>
              <Reveal direction="right" delay={0.25}>
                <p className="text-slate-500 leading-relaxed">
                  Led by experienced professionals with backgrounds in biomedical
                  engineering and healthcare logistics, our team understands the
                  criticality of reliable dialysis equipment. Every product we
                  deliver is tested, warrantied, and supported.
                </p>
              </Reveal>
              <Reveal direction="right" delay={0.3}>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-medium text-[#0284C7] group"
                >
                  Get in touch
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Reveal direction="up">
              <h2 className="text-3xl font-bold text-slate-900">
                What We Stand For
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="text-slate-500 mt-3 max-w-md mx-auto">
                The principles that guide how we work with every customer.
              </p>
            </Reveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" stagger={0.12}>
            {pillars.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <div className="bg-white rounded-xl border border-slate-100 p-8 h-full text-center transition-all duration-300 hover:shadow-md hover:border-slate-200 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-[#0B2B5E]/5 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <pillar.icon className="w-7 h-7 text-[#0B2B5E]" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="bg-gradient-to-br from-[#0B2B5E] to-[#0B2B5E]/90 rounded-2xl px-8 py-14 md:px-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]" />
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Want to Partner With Us?
                </h2>
                <p className="text-blue-100/70 max-w-md mx-auto mb-8">
                  Whether you&apos;re setting up a new dialysis center or need a
                  reliable equipment supplier — we&apos;re here to help.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-[#0B2B5E] bg-white rounded hover:bg-slate-100 transition-all shadow-sm"
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <a
                    href="https://wa.me/919826593932"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-[#25D366] rounded hover:bg-[#25D366]/90 transition-all shadow-sm"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
