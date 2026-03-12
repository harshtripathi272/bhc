import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Balaji Health Care — India's trusted wholesale dialysis equipment supplier since 2008. Based in Indore, we've delivered 500+ machines to hospitals across India.",
  keywords: [
    "Balaji Health Care",
    "dialysis equipment supplier Indore",
    "about us",
    "wholesale medical equipment India",
    "dialysis machine supplier since 2008",
  ],
  openGraph: {
    title: "About Balaji Health Care — Dialysis Equipment Supplier Since 2008",
    description:
      "Balaji Health Care has been India's trusted wholesale dialysis equipment supplier since 2008. 500+ machines delivered, 200+ active clients across India.",
    url: "https://bhcmp.in/about",
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
