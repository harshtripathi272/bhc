import type { Metadata } from "next"
import Link from "next/link"
import PageHeader from "@/components/sections/page-header"
import CTABanner from "@/components/sections/cta-banner"
import ScrollReveal from "@/components/animations/scroll-reveal"
import { Shield, Clock, Users, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Balaji Health Care — trusted wholesale dialysis equipment supplier based in Indore since 2008. Led by industry veteran Vinod Tripathi.",
}

const values = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "We deal exclusively in genuine, OEM-certified products from world-leading manufacturers, ensuring every piece of equipment meets the highest standards of safety and performance.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "When dialysis equipment fails, patients are at risk. Our 24/7 support infrastructure and rapid spare parts delivery network ensures your operations never face unnecessary downtime.",
  },
  {
    icon: Users,
    title: "Customer Partnership",
    description:
      "We view every client as a long-term partner. From initial consultation and equipment selection to after-sales support and maintenance, we are invested in your success.",
  },
  {
    icon: Globe,
    title: "Pan-India Reach",
    description:
      "From metros to tier-3 cities, our distribution and service network ensures that quality dialysis equipment and expert support are accessible to healthcare providers everywhere in India.",
  },
]

const quickFacts = ["Est. 2008", "Indore, MP", "15+ Years", "Pan-India"]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Balaji Health Care"
        description="Wholesale dialysis equipment supplier committed to making quality renal care accessible across India."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Content */}
            <div>
              <ScrollReveal>
                <span className="text-cyan text-sm font-semibold uppercase tracking-wider">
                  Our Story
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-dark tracking-tight">
                  Building Trust in Renal Care Since 2008
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="mt-6 text-muted leading-relaxed">
                  Balaji Health Care was established in 2008 with a singular
                  vision: to make high-quality dialysis equipment accessible and
                  affordable for healthcare providers across India. Based in the
                  heart of Indore, Madhya Pradesh, we have grown from a small
                  regional distributor into a trusted wholesale supplier serving
                  hospitals, clinics, and dialysis centres nationwide.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p className="mt-4 text-muted leading-relaxed">
                  With over 15 years of experience in the haemodialysis
                  equipment industry, we have developed deep expertise in
                  products from globally recognized manufacturers including{" "}
                  <strong className="text-dark">Fresenius Medical Care</strong>,{" "}
                  <strong className="text-dark">B.Braun</strong>,{" "}
                  <strong className="text-dark">Nipro</strong>, and{" "}
                  <strong className="text-dark">Nikkiso</strong>. Our
                  comprehensive product portfolio covers everything from dialysis
                  machines and water treatment systems to consumables and spare
                  parts.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <blockquote className="mt-8 pl-6 border-l-4 border-cyan py-2">
                  <p className="text-dark font-medium italic text-lg leading-relaxed">
                    &ldquo;Our mission is simple — ensure that every dialysis
                    centre in India has access to reliable, high-quality
                    equipment and the expert support to keep it running
                    flawlessly.&rdquo;
                  </p>
                </blockquote>
              </ScrollReveal>
            </div>

            {/* Founder Card + Quick Facts */}
            <div>
              <ScrollReveal delay={0.15} direction="right">
                <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-card">
                  {/* Placeholder photo */}
                  <div className="h-48 bg-gradient-to-br from-navy to-navy-mid flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-cyan/30 flex items-center justify-center">
                      <span className="text-cyan font-heading font-extrabold text-2xl">
                        VT
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-heading font-bold text-dark">
                      Vinod Tripathi
                    </h3>
                    <span className="text-cyan text-sm font-semibold">
                      Founder &amp; Director
                    </span>
                    <p className="mt-3 text-muted text-sm leading-relaxed">
                      Leading Balaji Health Care&apos;s mission to transform
                      dialysis equipment distribution across India with over 15
                      years of hands-on industry expertise.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <div className="flex flex-wrap gap-3 mt-6">
                  {quickFacts.map((fact, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-cyan/10 text-cyan text-sm font-semibold"
                    >
                      {fact}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-surface-alt">
        <div className="max-w-[1400px] mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-cyan text-sm font-semibold uppercase tracking-wider">
                Our Values
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-extrabold text-dark tracking-tight">
                What Drives Us
              </h2>
              <p className="mt-4 text-muted max-w-xl mx-auto">
                The principles that have guided our business for over a decade.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-border p-8 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-cyan/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-7 h-7 text-cyan" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-dark">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Let's Work Together"
        description="Whether you're setting up a new dialysis centre or expanding an existing facility, we'd love to partner with you."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        secondaryLabel="WhatsApp Us"
        secondaryHref="https://wa.me/919826593932"
      />
    </>
  )
}
