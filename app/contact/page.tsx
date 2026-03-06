"use client"

import { useState } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import {
  Headset,
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  Map,
  Eye,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    interest: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Build WhatsApp message from form data
    const text = `Hello, I'm ${formData.firstName} ${formData.lastName} from ${formData.organization}.\n\nInterest: ${formData.interest}\n\n${formData.message}\n\nContact: ${formData.phone} / ${formData.email}`
    window.open(
      `https://wa.me/919826593932?text=${encodeURIComponent(text)}`,
      "_blank"
    )
  }

  return (
    <>
      <section className="py-12 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Get In Touch
            </h1>
            <p className="text-lg text-slate-600">
              Our team of experts is ready to assist you with your dialysis
              equipment needs and inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left Column — Contact info + maps */}
            <div className="space-y-12">
              {/* Direct Contact */}
              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-200 pb-4">
                  <Headset className="w-6 h-6 text-[#0B2B5E]" />
                  Direct Contact
                </h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div>
                      <h3 className="font-medium text-slate-900 text-lg">
                        Vinod Tripathi
                      </h3>
                      <p className="text-slate-500 text-sm mt-1">Sales Director</p>
                      <a
                        className="inline-flex items-center gap-2 mt-3 text-[#0B2B5E] hover:underline font-medium"
                        href="tel:+919826593932"
                      >
                        <Phone className="w-4 h-4" />
                        +91 98265 93932
                      </a>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div>
                      <h3 className="font-medium text-slate-900 text-lg">
                        Revati Raman Mishra
                      </h3>
                      <p className="text-slate-500 text-sm mt-1">
                        Technical Support
                      </p>
                      <a
                        className="inline-flex items-center gap-2 mt-3 text-[#0B2B5E] hover:underline font-medium"
                        href="tel:+919755489707"
                      >
                        <Phone className="w-4 h-4" />
                        +91 97554 89707
                      </a>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/919826593932"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </div>
              </section>

              {/* Address */}
              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-200 pb-4">
                  <MapPin className="w-6 h-6 text-[#0B2B5E]" />
                  Headquarters
                </h2>
                <address className="not-italic text-slate-600 leading-relaxed bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <strong className="text-slate-900 block mb-2 text-lg">
                    Balaji Health Care
                  </strong>
                  G-3, Mangalam Apartments, Manorama Ganj,
                  <br />
                  Opp. Barwani Plaza Residential Road,
                  <br />
                  Near Eureka Hospital, Old Palasia,
                  <br />
                  Indore, Madhya Pradesh 452018
                  <br />
                  India
                </address>
              </section>

              {/* Maps */}
              <section className="space-y-4">
                <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-slate-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.135!2d75.8649!3d22.7237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map View"
                  />
                </div>
                <div className="aspect-[16/9] w-full bg-gray-200 rounded-xl overflow-hidden border border-slate-200 flex items-center justify-center">
                  <Eye className="w-10 h-10 text-gray-400" />
                  <span className="sr-only">Street View</span>
                </div>
              </section>
            </div>

            {/* Right Column — Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-lg h-fit sticky top-28">
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                Send an Enquiry
              </h2>
              <p className="text-slate-500 mb-8 text-sm">
                Please fill out the form below and we will get back to you
                shortly.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm font-medium text-slate-700 mb-1"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="w-full bg-transparent border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#0B2B5E] focus:border-[#0B2B5E] transition-colors text-slate-900"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-slate-700 mb-1"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="w-full bg-transparent border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#0B2B5E] focus:border-[#0B2B5E] transition-colors text-slate-900"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      type="text"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm font-medium text-slate-700 mb-1"
                      htmlFor="email"
                    >
                      Work Email
                    </label>
                    <input
                      className="w-full bg-transparent border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#0B2B5E] focus:border-[#0B2B5E] transition-colors text-slate-900"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      type="email"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-slate-700 mb-1"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      className="w-full bg-transparent border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#0B2B5E] focus:border-[#0B2B5E] transition-colors text-slate-900"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-slate-700 mb-1"
                    htmlFor="organization"
                  >
                    Organization / Hospital
                  </label>
                  <input
                    className="w-full bg-transparent border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#0B2B5E] focus:border-[#0B2B5E] transition-colors text-slate-900"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-slate-700 mb-1"
                    htmlFor="interest"
                  >
                    Area of Interest
                  </label>
                  <select
                    className="w-full bg-transparent border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#0B2B5E] focus:border-[#0B2B5E] transition-colors text-slate-900"
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    <option value="Hemodialysis Machines">
                      Hemodialysis Machines
                    </option>
                    <option value="Dialysis Consumables">
                      Dialysis Consumables
                    </option>
                    <option value="Water Treatment Systems">
                      Water Treatment Systems
                    </option>
                    <option value="Maintenance & Servicing">
                      Maintenance &amp; Servicing
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-slate-700 mb-1"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full bg-transparent border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#0B2B5E] focus:border-[#0B2B5E] transition-colors text-slate-900 resize-none"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    rows={4}
                  />
                </div>
                <button
                  className="w-full bg-[#0B2B5E] hover:bg-[#061836] text-white font-semibold py-3.5 px-6 rounded-lg transition-colors shadow-md flex justify-center items-center gap-2"
                  type="submit"
                >
                  Send Enquiry
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-slate-500">
                      or reach us directly
                    </span>
                  </div>
                </div>

                <a
                  href="https://wa.me/919826593932"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold py-3.5 px-6 rounded-lg transition-colors shadow-md flex justify-center items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Open WhatsApp Chat
                </a>

                <p className="text-xs text-center text-slate-500 mt-4">
                  By submitting this form, you agree to our{" "}
                  <Link href="#" className="underline hover:text-[#0B2B5E]">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
