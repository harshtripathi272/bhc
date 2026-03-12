import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our complete range of dialysis equipment — hemodialysis machines (Fresenius, B.Braun, Nipro), RO systems, dialyzers, bloodlines, AV needles, spare parts, and more. Wholesale pricing.",
  keywords: [
    "dialysis machines wholesale India",
    "Fresenius 4008S price India",
    "B.Braun dialysis machine",
    "dialysers wholesale",
    "AV fistula needles",
    "hemodialysis consumables",
    "RO plant for dialysis",
    "dialysis spare parts",
    "medical equipment wholesale Indore",
  ],
  openGraph: {
    title: "Dialysis Equipment & Supplies — Wholesale Catalogue",
    description:
      "Complete wholesale catalogue: HD machines, dialyzers, bloodlines, AV needles, concentrates, spare parts and RO systems. OEM-certified, pan-India delivery.",
    url: "https://bhcmp.in/products",
  },
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
