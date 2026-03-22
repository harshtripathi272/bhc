/* ═══════════════════════════════════════════════
 * site-data.ts — Single source of truth for all
 * website content. Edit this file (or convert to
 * JSON later) to update text across the site.
 * ═══════════════════════════════════════════════ */

// ── Company ──────────────────────────────────
export const company = {
  name: "Balaji Health Care",
  tagline: "Wholesale Dialysis Equipment Supplier",
  foundedYear: 2008,
  phone: "+91 98265 93932",
  phoneFormatted: "+91 98265 93932",
  phoneAlt: "+91 97554 89707",
  email: "bajaljihealthcare1020@gmail.com",
  whatsapp: "919826593932",
  address: {
    line1: "G-3, Mangalam Apartments",
    line2: "Manorama Ganj, Old Palasia",
    city: "Indore",
    state: "Madhya Pradesh",
    pin: "452018",
    full: "G-3, Mangalam Apartments, Manorama Ganj, Old Palasia, Indore, MP 452018",
  },
  hours: "Mon – Sat, 9:00 AM – 7:00 PM",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14719.4246312732!2d75.8814505!3d22.7335872!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd6493fcbce9%3A0x67903de77136a63d!2sBalaji%20Health%20Care!5e0!3m2!1sen!2sin!4v1772872105519!5m2!1sen!2sin",
  mapsLink: "https://maps.app.goo.gl/RSBC7tL2P1Bs8axE8",
}

// ── Contacts ─────────────────────────────────
export const contacts = [
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

// ── Stats ────────────────────────────────────
export const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 2000, suffix: "+", label: "Machines Delivered" },
  { value: 300, suffix: "+", label: "Active Clients" },
]

// ── Services ─────────────────────────────────
export interface ServiceItem {
  icon: string // lucide icon name
  title: string
  description: string
  features: string[]
}

export const services: ServiceItem[] = [
  {
    icon: "Building2",
    title: "Dialysis Unit Setup",
    description:
      "Complete setup of new dialysis units including equipment procurement, plumbing, electrical, and water systems.",
    features: [
      "Site assessment & planning",
      "Equipment selection & procurement",
      "Plumbing & electrical work",
      "Water treatment installation",
    ],
  },
  {
    icon: "Cog",
    title: "Dialysis Unit Running",
    description:
      "Day-to-day management and AMC packages to keep your dialysis center running smoothly.",
    features: [
      "Daily operations support",
      "Annual maintenance contracts",
      "Equipment calibration",
      "Emergency breakdown service",
    ],
  },
  {
    icon: "Pipette",
    title: "Consultancy",
    description:
      "Expert guidance on planning, licensing, compliance, and optimizing your dialysis facility.",
    features: [
      "Regulatory compliance",
      "License assistance",
      "Workflow optimization",
      "Staff training plans",
    ],
  },
  {
    icon: "PackageCheck",
    title: "Consumables Supply",
    description:
      "Regular supply of dialyzers, bloodlines, AV fistula needles, bicarbonate concentrates, and more.",
    features: [
      "OEM-certified products",
      "Scheduled deliveries",
      "Competitive pricing",
      "Pan-India logistics",
    ],
  },
  {
    icon: "Hammer",
    title: "Spare Parts",
    description:
      "Genuine spare parts for dialysis machines and related systems.",
    features: [
      "OEM-sourced components",
      "Quick dispatch",
      "Warranty-backed parts",
      "Technical support included",
    ],
  },
  {
    icon: "Droplets",
    title: "RO System Setup",
    description:
      "Medical-grade reverse osmosis systems designed for hemodialysis with AAMI-standard water quality.",
    features: [
      "Custom capacity planning",
      "Installation & testing",
      "Water quality verification",
      "Ongoing maintenance",
    ],
  },
  {
    icon: "PenTool",
    title: "Unit Designing",
    description:
      "Complete floor plan and layout design for dialysis centers optimized for patient flow.",
    features: [
      "Space planning",
      "Equipment layout",
      "Electrical & plumbing design",
      "3D visualization",
    ],
  },
  {
    icon: "Layers",
    title: "Turnkey Projects",
    description:
      "Full-scale dialysis center projects from concept to commissioning — we handle everything.",
    features: [
      "End-to-end project management",
      "Single-point accountability",
      "Timely delivery",
      "Post-commissioning support",
    ],
  },
]

// ── Testimonials ─────────────────────────────
export interface Testimonial {
  name: string
  role: string
  text: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    name: "Dr. Rakesh Sharma",
    role: "Nephrologist, Indore",
    text: "Balaji Health Care has been our go-to supplier for dialysis machines and consumables. Their after-sales support is genuinely responsive — something rare in this industry.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Hospital Administrator, Bhopal",
    text: "We set up our 12-station dialysis unit with Balaji. From machine procurement to RO installation, they handled everything on time and within budget.",
    rating: 5,
  },
  {
    name: "Dr. Anil Verma",
    role: "Medical Director, Ujjain",
    text: "Reliable equipment, genuine spare parts, and engineers who actually know dialysis machines. We've renewed our AMC with them for the third year.",
    rating: 5,
  },
]

// ── Brands ───────────────────────────────────
export const brands = [
  "Fresenius",
  "B.Braun",
  "Nipro",
  "Baxter",
  "Nikkiso",
  "Toray",
  "Gambro",
  "Medtronic",
]

// ── Promo Slides ─────────────────────────────
export interface PromoSlide {
  id: number
  title: string
  subtitle: string
  bgColor: string
}

export const promoSlides: PromoSlide[] = [
  {
    id: 1,
    title: "Hemodialysis Machines — Now in Stock",
    subtitle:
      "New machines with warranty and pan-India delivery.",
    bgColor: "from-[#0B2B5E] to-[#0E3D7A]",
  },
  {
    id: 2,
    title: "Complete RO System Packages",
    subtitle:
      "AAMI-standard water treatment systems for your dialysis center.",
    bgColor: "from-[#0369A1] to-[#0284C7]",
  },
  {
    id: 3,
    title: "Turnkey Dialysis Unit Setup",
    subtitle:
      "Design, install, and commission — end-to-end project delivery.",
    bgColor: "from-[#065F46] to-[#059669]",
  },
]

// ── About Page: Pillars ──────────────────────
export interface Pillar {
  icon: string
  title: string
  description: string
}

export const pillars: Pillar[] = [
  {
    icon: "ShieldCheck",
    title: "Reliability",
    description:
      "Every machine we deliver is tested, warrantied, and backed by responsive after-sales support. We stand behind what we sell.",
  },
  {
    icon: "Award",
    title: "Genuine Supply",
    description:
      "We source only from OEM-certified channels — no grey-market parts, no shortcuts. Your patients' safety is our priority.",
  },
  {
    icon: "Stethoscope",
    title: "Medical Expertise",
    description:
      "Our team of dialysis technicians and biomedical engineers brings hands-on clinical experience to every interaction.",
  },
]

// ── Dialysis Unit Page Data ──────────────────
export interface DialysisFeature {
  icon: string
  title: string
  description: string
}

export interface DialysisProcess {
  step: number
  title: string
  description: string
}

export const dialysisUnit = {
  headline: "Dialysis Unit Services",
  tagline: "State-of-the-Art Hemodialysis — Delivered & Managed by Experts",
  description:
    "Balaji Health Care now offers fully operational dialysis unit services. Whether you need a complete dialysis center set up from scratch, or want us to run and manage your existing unit — we bring clinical-grade infrastructure, trained technicians, and end-to-end support so you can focus on patient care.",
  highlights: [
    "Fully equipped dialysis machines for modern clinical workflows",
    "AAMI-standard RO water treatment systems",
    "Trained dialysis technicians & biomedical engineers on-site",
    "Complete consumable supply chain — dialyzers, bloodlines, concentrates",
    "24/7 emergency technical support & breakdown service",
    "NABH-aligned SOPs and infection control protocols",
  ],
  features: [
    {
      icon: "Building2",
      title: "Turnkey Unit Setup",
      description:
        "From site assessment to commissioning — we design, build, equip, and hand over a fully functional dialysis center ready to treat patients on day one.",
    },
    {
      icon: "HeartPulse",
      title: "Managed Operations",
      description:
        "We take over day-to-day operations of your dialysis unit — staffing, machine maintenance, consumable supply, and quality assurance under one contract.",
    },
    {
      icon: "Droplets",
      title: "Water Treatment Systems",
      description:
        "Medical-grade RO systems custom-designed for your unit capacity, with AAMI-standard water quality testing and ongoing maintenance.",
    },
    {
      icon: "Users",
      title: "Trained Technicians",
      description:
        "Our certified dialysis technicians and biomedical engineers ensure every session runs safely with proper machine handling and patient monitoring protocols.",
    },
    {
      icon: "ShieldCheck",
      title: "Quality & Compliance",
      description:
        "NABH-aligned standard operating procedures, infection control protocols, and regular audits to maintain the highest standards of patient safety.",
    },
    {
      icon: "Truck",
      title: "Supply Chain Management",
      description:
        "Uninterrupted supply of OEM-certified dialyzers, bloodlines, AV fistula needles, concentrates, and all consumables — delivered on schedule.",
    },
  ] as DialysisFeature[],
  process: [
    {
      step: 1,
      title: "Consultation & Assessment",
      description:
        "We evaluate your space, patient volume, budget, and regulatory requirements to design the optimal unit configuration.",
    },
    {
      step: 2,
      title: "Design & Planning",
      description:
        "Detailed floor plans, equipment layout, electrical & plumbing schematics, and RO system capacity planning — all customized for your facility.",
    },
    {
      step: 3,
      title: "Equipment & Installation",
      description:
        "Procurement of HD machines, RO plant, furniture, and medical accessories. Professional installation, testing, and calibration.",
    },
    {
      step: 4,
      title: "Staffing & Training",
      description:
        "Deployment of trained technicians or training your existing staff on machine operation, emergency protocols, and infection control.",
    },
    {
      step: 5,
      title: "Go Live & Ongoing Support",
      description:
        "Commissioning, first patient session, and continuous operational support with AMC, consumable supply, and 24/7 technical helpline.",
    },
  ] as DialysisProcess[],
  models: [
    {
      title: "Setup Only",
      description:
        "We design, build, and equip your dialysis unit — then hand it over to your team to operate.",
      icon: "Hammer",
    },
    {
      title: "Setup + Managed Operations",
      description:
        "Complete turnkey solution: we build the unit AND run it for you with our staff, equipment, and supply chain.",
      icon: "Layers",
    },
    {
      title: "Operations Takeover",
      description:
        "Already have a unit? We take over operations — maintenance, staffing, consumables, and quality management.",
      icon: "RefreshCcw",
    },
  ],
  stats: [
    { value: 50, suffix: "+", label: "Units Set Up" },
    { value: 200, suffix: "+", label: "Machines Deployed" },
    { value: 3, suffix: "+", label: "States Covered" },
    { value: 5000, suffix: "+", label: "Sessions / Month" },
    { value: 24, suffix: "/7", label: "Technical Support" },
  ],
}

// ── Interest Options (Contact Form) ──────────
export const interestOptions = [
  "Dialysis Unit Services",
  "Dialysis Machines",
  "RO Systems",
  "Consumables & Parts",
  "AMC / Service",
  "Dialysis Unit Setup",
  "Turnkey Project",
  "Consultancy",
  "Other",
]
