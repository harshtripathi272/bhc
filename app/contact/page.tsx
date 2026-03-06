"use client"

import { useState, type FormEvent } from "react"
import PageHeader from "@/components/sections/page-header"
import ScrollReveal from "@/components/animations/scroll-reveal"
import MagneticButton from "@/components/animations/magnetic-button"
import { buttonVariants } from "@/components/ui/button"
import { Phone, MapPin, User, Send } from "lucide-react"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")

    try {
      const data = new FormData(e.currentTarget)
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      })
      const json = await res.json()

      if (json.success) {
        setStatus("success")
        ;(e.target as HTMLFormElement).reset()
        setTimeout(() => setStatus("idle"), 6000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 6000)
      }
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 6000)
    }
  }

  return (
    <>
      <PageHeader
        title="Get in Touch"
        description="Have an enquiry about products, services, or pricing? We're here to help."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left — Contact Info + Maps */}
            <div>
              <ScrollReveal>
                <h2 className="text-2xl font-heading font-bold text-dark mb-8">
                  Contact Details
                </h2>
              </ScrollReveal>

              <div className="space-y-6">
                <ScrollReveal delay={0.05}>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                      <User className="w-5 h-5 text-cyan" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark">Vinod Tripathi</p>
                      <p className="text-muted text-sm">Founder &amp; Director</p>
                      <a
                        href="tel:+919826593932"
                        className="text-cyan text-sm font-medium hover:underline"
                      >
                        +91 98265 93932
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                      <User className="w-5 h-5 text-cyan" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark">
                        Revati Raman Mishra
                      </p>
                      <p className="text-muted text-sm">Key Contact</p>
                      <a
                        href="tel:+919755489707"
                        className="text-cyan text-sm font-medium hover:underline"
                      >
                        +91 97554 89707
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.15}>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-cyan" />
                    </div>
                    <div>
                      <p className="font-semibold text-dark">Office Address</p>
                      <p className="text-muted text-sm leading-relaxed">
                        G-3, Mangalam Apartments, Manorama Ganj,
                        <br />
                        Opp. Barwani Plaza, Old Palasia,
                        <br />
                        Indore, Madhya Pradesh 452018
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Maps */}
              <ScrollReveal delay={0.2}>
                <div className="mt-10 space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">
                      Office Location
                    </label>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.8947!2d75.8783!3d22.7177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd6c902bc3b5%3A0x5de26b38f3f9e76f!2sManorama%20Ganj%2C%20Old%20Palasia%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                      width="100%"
                      height="220"
                      style={{ border: 0, borderRadius: "16px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Balaji Health Care office location"
                      className="shadow-card"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Contact Form */}
            <div>
              <ScrollReveal delay={0.1} direction="right">
                <div className="bg-white rounded-2xl border border-border p-8 shadow-card">
                  <h2 className="text-2xl font-heading font-bold text-dark">
                    Send Us an Enquiry
                  </h2>
                  <p className="mt-2 text-muted text-sm">
                    Fill out the form and we&apos;ll get back within 24 hours.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                  >
                    {/* Replace YOUR_ACCESS_KEY with your Web3Forms key */}
                    <input
                      type="hidden"
                      name="access_key"
                      value="YOUR_ACCESS_KEY"
                    />
                    <input
                      type="hidden"
                      name="subject"
                      value="New Enquiry — Balaji Health Care Website"
                    />
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-dark mb-1.5"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-surface-alt text-dark text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan transition-all"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-dark mb-1.5"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-surface-alt text-dark text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-dark mb-1.5"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-surface-alt text-dark text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan transition-all"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="organization"
                          className="block text-sm font-medium text-dark mb-1.5"
                        >
                          Organization
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          placeholder="Hospital / Clinic name"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-surface-alt text-dark text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-dark mb-1.5"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        placeholder="Tell us about your requirements…"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-surface-alt text-dark text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan transition-all resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className={`${buttonVariants({ variant: "primary", size: "lg" })} w-full`}
                    >
                      {status === "sending" ? (
                        "Sending…"
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Enquiry
                        </>
                      )}
                    </button>

                    {status === "success" && (
                      <p className="text-center text-sm font-medium text-green-600">
                        Thank you! Your enquiry has been sent. We&apos;ll get
                        back to you soon.
                      </p>
                    )}
                    {status === "error" && (
                      <p className="text-center text-sm font-medium text-red-500">
                        Something went wrong. Please try again or contact us via
                        WhatsApp.
                      </p>
                    )}
                  </form>

                  {/* WhatsApp CTA */}
                  <div className="mt-8 pt-8 border-t border-border text-center">
                    <p className="text-muted text-sm mb-4">
                      Prefer to chat directly?
                    </p>
                    <MagneticButton className="w-full">
                      <a
                        href="https://wa.me/919826593932?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20dialysis%20equipment."
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${buttonVariants({ variant: "whatsapp", size: "lg" })} w-full`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Chat on WhatsApp
                      </a>
                    </MagneticButton>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
