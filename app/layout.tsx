import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import SmoothScroll from "@/components/layout/smooth-scroll"
import Chatbot from "@/components/chatbot/chatbot"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://bhcmp.in"),
  title: {
    default: "Balaji Health Care — Wholesale Dialysis Equipment Supplier",
    template: "%s — Balaji Health Care",
  },
  description:
    "India's trusted wholesale supplier of dialysis machines, consumables, RO systems, and dialysis unit services since 2008. Based in Indore, serving pan-India.",
  keywords: [
    "dialysis equipment wholesale India",
    "hemodialysis machine supplier",
    "dialysis machine India",
    "hemodialysis equipment supplier",
    "dialysis machine wholesale",
    "dialysis consumables wholesale",
    "RO plant dialysis",
    "dialysis unit setup India",
    "medical equipment supplier Indore",
    "Balaji Health Care",
    "dialysis spare parts India",
    "AV fistula needle wholesale",
    "dialyzers wholesale",
  ],
  authors: [{ name: "Balaji Health Care", url: "https://bhcmp.in" }],
  creator: "Balaji Health Care",
  publisher: "Balaji Health Care",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bhcmp.in",
    siteName: "Balaji Health Care",
    title: "Balaji Health Care — Wholesale Dialysis Equipment Supplier",
    description:
      "India's trusted wholesale supplier of dialysis machines, consumables, RO systems, and dialysis unit services since 2008. Based in Indore, serving pan-India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Balaji Health Care — Wholesale Dialysis Equipment Supplier",
    description:
      "Wholesale supplier of hemodialysis machines, consumables, and dialysis unit services. Trusted by 200+ hospitals across India since 2008.",
  },
  alternates: {
    canonical: "https://bhcmp.in",
  },
  icons: { icon: "/icon.svg" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <SmoothScroll>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
          <Chatbot />
        </SmoothScroll>
      </body>
    </html>
  )
}
