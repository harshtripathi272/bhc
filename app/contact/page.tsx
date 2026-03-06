"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
} from "lucide-react"
import Reveal from "@/components/animations/reveal"
import StaggerContainer, { StaggerItem } from "@/components/animations/stagger"

const contacts = [
  {
    name: "Vinod Tripathi",
    role: "Director",
    phone: "+91 98265 93932",
    href: "tel:+919826593932",
  },
  {
    name: "Revati Raman Mishra",
    role: "Sales Manager",
    phone: "+91 97554 89707",
    href: "tel:+919755489707",
  },
]

const interestOptions = [
  "Dialysis Machines",
  "RO Systems",
  "Consumables & Parts",
  "AMC / Service",
  "Installation",
  "Other",
]

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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hi, I'm ${form.firstName} ${form.lastName} from ${form.organization || "N/A"}.\n\nInterested in: ${form.interest || "General inquiry"}\n\n${form.message}\n\nContact: ${form.phone || form.email}`
    const url = `https://wa.me/919826593932?text=${encodeURIComponent(msg)}`
    window.open(url, "_blank")
    setSubmitted(true)
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <p className="text-xs uppercase tracking-[0.2em] text-[#0284C7] font-medium mb-3">
              Contact
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Get in Touch
            </h1>
          </Reveal>
          <Reveal direction="up" delay={0.15}>
            <p className="text-slate-500 max-w-xl mx-auto">
              Have a question about our products or services? We&apos;re here to help.
              Reach out via phone, WhatsApp, or the form below.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <Reveal direction="left" delay={0.1}>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-6">
                    Contact Information
                  </h2>

                  {/* Contacts */}
                  <div className="space-y-5">
                    {contacts.map((c) => (
                      <div
                        key={c.name}
                        className="flex items-start space-x-3 group"
                      >
                        <div className="w-10 h-10 bg-[#0B2B5E]/5 rounded-lg flex items-center justify-center shrink-0">
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

              <Reveal direction="left" delay={0.15}>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-[#0B2B5E]/5 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#0B2B5E]" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 mb-0.5">
                        Email
                      </div>
                      <a
                        href="mailto:sales@balajihealthcare.com"
                        className="text-sm text-[#0284C7] hover:underline font-medium"
                      >
                        sales@balajihealthcare.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-[#0B2B5E]/5 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#0B2B5E]" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 mb-0.5">
                        Office Address
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        G-3, Mangalam Apartments, Manorama Ganj, Old Palasia,
                        Indore, Madhya Pradesh 452018
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-[#0B2B5E]/5 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-[#0B2B5E]" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 mb-0.5">
                        Hours
                      </div>
                      <p className="text-sm text-slate-600">
                        Mon – Sat, 9:00 AM – 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* WhatsApp button */}
              <Reveal direction="left" delay={0.2}>
                <a
                  href="https://wa.me/919826593932"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-[#25D366] rounded hover:bg-[#25D366]/90 transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </a>
              </Reveal>

              {/* Map */}
              <Reveal direction="left" delay={0.25}>
                <div className="rounded-xl overflow-hidden border border-slate-100 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.328!2d75.8655!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sOld+Palasia+Indore!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <Reveal direction="right" delay={0.1}>
                <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8">
                  <h2 className="text-xl font-bold text-slate-900 mb-1">
                    Send Us a Message
                  </h2>
                  <p className="text-sm text-slate-500 mb-8">
                    Fill out the form and we&apos;ll get back to you within 24 hours.
                  </p>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-sm text-slate-500 mb-6">
                        Your inquiry was sent via WhatsApp. We&apos;ll respond shortly.
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
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1.5">
                            First Name *
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            required
                            value={form.firstName}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7] outline-none transition-all"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1.5">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            required
                            value={form.lastName}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7] outline-none transition-all"
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1.5">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7] outline-none transition-all"
                            placeholder="john@hospital.com"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1.5">
                            Phone *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7] outline-none transition-all"
                            placeholder="+91 00000 00000"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1.5">
                          Organization
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={form.organization}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7] outline-none transition-all"
                          placeholder="Hospital / Clinic name"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1.5">
                          I&apos;m Interested In
                        </label>
                        <select
                          name="interest"
                          value={form.interest}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7] outline-none transition-all"
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
                        <label className="block text-xs font-medium text-slate-700 mb-1.5">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 focus:ring-2 focus:ring-[#0284C7]/20 focus:border-[#0284C7] outline-none transition-all resize-none"
                          placeholder="Tell us what you need..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white bg-[#0B2B5E] rounded-lg hover:bg-[#0B2B5E]/90 transition-colors shadow-sm"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send via WhatsApp
                      </motion.button>
                    </form>
                  )}
                </div>
              </Reveal>

              {/* Direct WhatsApp fallback */}
              <Reveal direction="up" delay={0.2}>
                <div className="mt-8 text-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-1 h-px bg-slate-200" />
                    <span className="text-xs text-slate-400 font-medium">
                      OR
                    </span>
                    <div className="flex-1 h-px bg-slate-200" />
                  </div>
                  <a
                    href="https://wa.me/919826593932?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products%20and%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-[#25D366] rounded-lg hover:bg-[#25D366]/90 transition-all shadow-sm"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 mr-2"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Message Us Directly on WhatsApp
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
