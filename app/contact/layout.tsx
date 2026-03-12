import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Balaji Health Care for dialysis equipment quotes, spare parts, RO systems, or service inquiries. Call +91 98265 93932 or WhatsApp us.",
  keywords: [
    "contact Balaji Health Care",
    "dialysis equipment inquiry",
    "dialysis equipment supplier contact Indore",
    "get quote dialysis machine",
    "medical equipment wholesale inquiry India",
  ],
  openGraph: {
    title: "Contact Balaji Health Care — Get a Quote",
    description:
      "Reach our team for pricing, availability, and enquiries on dialysis machines, consumables, RO systems, and AMC packages.",
    url: "https://bhcmp.in/contact",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
