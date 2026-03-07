// ══════════════════════════════════════════════════
// Chatbot System Data — Company info & knowledge base
// ══════════════════════════════════════════════════

export const COMPANY_NAME = "Balaji Health Care"
export const COMPANY_PHONE = "+91 98265 93932"
export const COMPANY_PHONE_ALT = "+91 97554 89707"
export const COMPANY_WHATSAPP = "919826593932"
export const COMPANY_EMAIL = "sales@balajihealthcare.com"
export const COMPANY_ADDRESS =
  "G-3, Mangalam Apartments, Manorama Ganj, Old Palasia, Indore, MP 452018"
export const COMPANY_HOURS = "Mon – Sat, 9:00 AM – 7:00 PM"

export const SYSTEM_PROMPT = `You are the customer support assistant for Balaji Health Care (BHC), a wholesale dialysis equipment supplier based in Indore, India. You help potential customers learn about products, services, and how to get in touch.

COMPANY OVERVIEW:
- Balaji Health Care has been operating since 2008.
- We are a wholesale supplier of dialysis machines, consumables, spare parts, and RO water treatment systems.
- Based in Indore, Madhya Pradesh, we serve hospitals and dialysis centers across India.
- Key contacts: Vinod Tripathi (Director, ${COMPANY_PHONE}), Revati Raman Mishra (Sales Manager, ${COMPANY_PHONE_ALT}).

PRODUCTS:
1. Dialysis Machines — Fresenius 4008S Classic, B.Braun Dialog+, Nipro (new & refurbished, with warranty)
2. RO Water Treatment Systems — Medical-grade, AAMI-standard, 250–1000 L/hr capacity
3. Consumables — High-flux dialyzers, AV fistula needles, bloodline tubing sets, bicarbonate concentrate
4. Equipment — Motorized dialysis chairs, patient monitors
5. Spare Parts — Pump segment tubing, pressure transducers, filters, connectors

SERVICES:
1. Dialysis Unit Setup — Complete turnkey setup of new dialysis units
2. Dialysis Unit Running — Operational support for running dialysis units
3. Consultancy for Dialysis Unit — Expert advisory on equipment selection and unit design
4. Consumables Supply — Regular supply of all dialysis consumables
5. Spare Parts Supply — OEM and compatible spare parts with fast dispatch
6. RO System Setup — Installation and commissioning of medical-grade RO systems
7. Designing of Dialysis Unit — Architectural and equipment layout design
8. Turnkey Project for Dialysis Unit — End-to-end project execution from design to commissioning

KEY SELLING POINTS:
- 15+ years experience
- 500+ machines delivered
- 200+ active clients
- Only OEM-certified and genuine products
- Pan-India delivery within 7–10 days
- 24/7 technical support with 2-hour response time
- On-site service engineers
- Flexible AMC (Annual Maintenance Contract) packages

GUIDELINES FOR RESPONSES:
- Be helpful, concise, and professional.
- Always recommend contacting us directly for pricing (we don't share prices publicly).
- For specific technical queries, suggest speaking with our team.
- Proactively offer to connect the customer with our team via phone or WhatsApp.
- Keep responses under 100 words unless the customer needs detailed information.
- Do NOT make up information about specific prices, certifications, or technical specifications that aren't listed above.
- If unsure about something, suggest contacting us directly for accurate information.`

export const FAQ_RESPONSES: Record<
  string,
  { answer: string; links?: { label: string; href: string }[] }
> = {
  products: {
    answer:
      "We supply a complete range: dialysis machines (Fresenius, B.Braun, Nipro), medical-grade RO systems, consumables (dialyzers, bloodlines, AV needles, bicarbonate), dialysis chairs, and spare parts. All products are OEM-certified with warranty.",
    links: [{ label: "View Products", href: "/products" }],
  },
  services: {
    answer:
      "Our services include: Dialysis Unit Setup & Design, Unit Running Support, Consultancy, Consumables & Spare Parts Supply, RO System Installation, and complete Turnkey Dialysis Projects from design to commissioning.",
    links: [{ label: "View Services", href: "/services" }],
  },
  pricing: {
    answer:
      "We offer competitive wholesale pricing for hospitals and dialysis centers. Prices vary based on quantity, model, and configuration. Contact our sales team for a detailed quote.",
    links: [
      { label: "Request Quote", href: "/contact" },
      { label: "WhatsApp Us", href: "https://wa.me/919826593932" },
    ],
  },
  contact: {
    answer: `Vinod Tripathi (Director): ${COMPANY_PHONE}\nRevati Raman Mishra (Sales): ${COMPANY_PHONE_ALT}\nEmail: ${COMPANY_EMAIL}\n\nWe respond within 2 hours on business days.`,
    links: [
      { label: "Call Now", href: `tel:${COMPANY_PHONE.replace(/\s/g, "")}` },
      { label: "WhatsApp", href: `https://wa.me/${COMPANY_WHATSAPP}` },
    ],
  },
  location: {
    answer: `We're located at ${COMPANY_ADDRESS}. Business hours: ${COMPANY_HOURS}.`,
    links: [
      {
        label: "Get Directions",
        href: "https://maps.app.goo.gl/RSBC7tL2P1Bs8axE8",
      },
    ],
  },
  about: {
    answer:
      "Balaji Health Care has been India's trusted wholesale dialysis equipment supplier since 2008. Based in Indore, we've delivered 500+ machines to 200+ hospitals and clinics across India, backed by expert after-sales support.",
    links: [{ label: "About Us", href: "/about" }],
  },
}
