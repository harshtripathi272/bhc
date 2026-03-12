import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Dialysis services from Balaji Health Care: unit setup & design, turnkey projects, managed operations, consultancy, RO system installation, AMC contracts, and consumables supply.",
  keywords: [
    "dialysis unit setup service",
    "dialysis AMC contract India",
    "RO system installation dialysis",
    "dialysis center consultancy",
    "turnkey dialysis project",
    "dialysis unit running support",
    "dialysis equipment service India",
  ],
  openGraph: {
    title: "Dialysis Services — Setup, AMC, Consultancy & Turnkey Projects",
    description:
      "End-to-end dialysis services: unit setup, design, managed operations, RO installation, AMC contracts, and consultancy. One partner for everything your dialysis center needs.",
    url: "https://bhcmp.in/services",
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
