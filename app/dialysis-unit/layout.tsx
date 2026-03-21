import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dialysis Unit Services",
  description:
    "Balaji Health Care offers complete Dialysis Unit services — turnkey setup, managed daily operations, and operations takeover. 50+ units set up across India. Get a free consultation.",
  keywords: [
    "dialysis unit setup India",
    "turnkey dialysis center setup",
    "dialysis unit management",
    "managed dialysis operations",
    "dialysis center commissioning",
    "hemodialysis unit setup Indore",
    "dialysis unit contractor India",
    "NABH dialysis unit",
  ],
  openGraph: {
    title: "Dialysis Unit Services — Turnkey Setup & Managed Operations",
    description:
      "Complete dialysis unit services: turnkey setup, managed operations, or takeover of existing units. 50+ units, 200+ machines, 3+ states covered, and 5000+ sessions/month.",
    url: "https://bhcmp.in/dialysis-unit",
  },
}

export default function DialysisUnitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
