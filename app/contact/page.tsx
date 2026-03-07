"use client"

import { useState } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  X,
  Loader2,
} from "lucide-react"
import Reveal from "@/components/animations/reveal"
import { company, contacts, interestOptions } from "@/lib/site-data"

const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY"

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    interest: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  /* WhatsApp inline form state */
  const [waName, setWaName] = useState("")
  const [waPhone, setWaPhone] = useState("")
  const [waNeed, setWaNeed] = useState("")
  const [waMessage, setWaMessage] = useState("")

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Inquiry from ${form.firstName} ${form.lastName}`,
          from_name: `${form.firstName} ${form.lastName}`,
          name: `${form.firstName} ${form.lastName}`,
          email: form.email || "no-email@provided.com",
          phone: form.phone,
          organization: form.organization,
          interest: form.interest,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (data.success) setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  const handleWhatsAppSend = () => {
    const parts = [`Hi, I'm ${waName}.`]
    if (waNeed) parts.push(`\nI'm interested in: ${waNeed}.`)
    if (waMessage) parts.push(`\n\n${waMessage}`)
    parts.push(`\n\nPlease contact me at: ${waPhone}`)
    window.open(
      `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(parts.join(""))}`,
      "_blank"
    )
  }

  const inputCls =
    "w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7] outline-none transition-all"

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-10 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <p className="text-xs uppercase tracking-[0.2em] text-[#0284C7] font-medium mb-2">
              Contact
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.05}>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Get in Touch
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">
              Have a question about our products or services? Reach out via
              phone, WhatsApp, or the form below.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-14">
            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <Reveal direction="left" delay={0.05}>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 mb-5">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    {contacts.map((c) => (
                      <div key={c.name} className="flex items-start space-x-3">
                        <div className="w-9 h-9 bg-[#0B2B5E]/5 rounded-lg flex items-center justify-center shrink-0">
                          <Phone className="w-4 h-4 text-[#0B2B5E]" />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-slate-900">
                            {c.name}
                          </div>
                          <div className="text-xs text-slate-400 mb-0.5">
                            {c.role}
                          </div>
                          <a
                            href={c.href}
                            className="text-sm text-[#0284C7] hover:underline font-medium"
                          >
                            {c.phone}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal direction="left" delay={0.1}>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-9 h-9 bg-[#0B2B5E]/5 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#0B2B5E]" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 mb-0.5">Email</div>
                      <a
                        href={`mailto:${company.email}`}
                        className="text-sm text-[#0284C7] hover:underline font-medium"
                      >
                        {company.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-9 h-9 bg-[#0B2B5E]/5 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#0B2B5E]" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 mb-0.5">
                        Office Address
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {company.address.full}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-9 h-9 bg-[#0B2B5E]/5 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-[#0B2B5E]" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 mb-0.5">Hours</div>
                      <p className="text-sm text-slate-600">{company.hours}</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Google Map — user-provided embed */}
              <Reveal direction="left" delay={0.15}>
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                  <iframe
                    src={company.mapEmbed}
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                    title="Balaji Health Care - Location"
                  />
                </div>
                <a
                  href={company.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-2 text-xs text-[#0284C7] hover:underline font-medium"
                >
                  <MapPin className="w-3 h-3 mr-1" />
                  Open in Google Maps
                </a>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <Reveal direction="right" delay={0.05}>
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-7">
                  <h2 className="text-lg font-bold text-slate-900 mb-1">
                    Send Us a Message
                  </h2>
                  <p className="text-xs text-slate-500 mb-6">
                    Fill out the form and we&apos;ll get back to you within 24
                    hours.
                  </p>

                  {submitted ? (
                    <div className="text-center py-10">
                      <CheckCircle2 className="w-10 h-10 text-green-500 mx-auto mb-3" />
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        Message Sent!
                      </h3>
                      <p className="text-sm text-slate-500 mb-4">
                        We&apos;ve received your inquiry and will respond within
                        24 hours.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false)
                          setForm({
                            firstName: "",
                            lastName: "",
                            email: "",
                            phone: "",
                            organization: "",
                            interest: "",
                            message: "",
                          })
                        }}
                        className="text-sm font-medium text-[#0284C7] hover:underline"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            First Name *
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            required
                            value={form.firstName}
                            onChange={handleChange}
                            className={inputCls}
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            required
                            value={form.lastName}
                            onChange={handleChange}
                            className={inputCls}
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className={inputCls}
                            placeholder="john@hospital.com"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Phone *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={form.phone}
                            onChange={handleChange}
                            className={inputCls}
                            placeholder="+91 00000 00000"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Organization
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={form.organization}
                          onChange={handleChange}
                          className={inputCls}
                          placeholder="Hospital / Clinic name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          I&apos;m Interested In
                        </label>
                        <select
                          name="interest"
                          value={form.interest}
                          onChange={handleChange}
                          className={inputCls}
                        >
                          <option value="">Select an option</option>
                          {interestOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          className={`${inputCls} resize-none`}
                          placeholder="Tell us what you need..."
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center justify-center px-7 py-2.5 text-sm font-semibold text-white bg-[#0B2B5E] rounded-lg hover:bg-[#0B2B5E]/90 transition-colors disabled:opacity-60"
                      >
                        {submitting ? (
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <Send className="w-4 h-4 mr-2" />
                        )}
                        {submitting ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHATSAPP FORM (inline, like email form) ── */}
      <section className="py-12 lg:py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal direction="up">
            <div className="bg-white rounded-2xl border border-[#25D366]/20 shadow-sm p-7">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="#25D366" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Chat on WhatsApp
                  </h2>
                  <p className="text-xs text-slate-500">
                    Fill in your details and type your message — we&apos;ll open WhatsApp with it pre-filled.
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={waName}
                      onChange={(e) => setWaName(e.target.value)}
                      className={inputCls}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={waPhone}
                      onChange={(e) => setWaPhone(e.target.value)}
                      className={inputCls}
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    What do you need?
                  </label>
                  <select
                    value={waNeed}
                    onChange={(e) => setWaNeed(e.target.value)}
                    className={inputCls}
                  >
                    <option value="">Select an option</option>
                    {interestOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    value={waMessage}
                    onChange={(e) => setWaMessage(e.target.value)}
                    rows={3}
                    className={`${inputCls} resize-none`}
                    placeholder="Type your message here — it'll be sent via WhatsApp..."
                  />
                </div>
                <button
                  onClick={handleWhatsAppSend}
                  disabled={!waName.trim() || !waPhone.trim()}
                  className="w-full inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-[#25D366] rounded-lg hover:bg-[#25D366]/90 transition-all disabled:opacity-40"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 mr-2"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send via WhatsApp
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
