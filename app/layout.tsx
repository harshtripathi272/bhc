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
  title: {
    default: "Balaji Health Care — Wholesale Dialysis Equipment Supplier",
    template: "%s — Balaji Health Care",
  },
  description:
    "India's trusted wholesale supplier of dialysis machines, equipment, consumables and service solutions since 2008. Based in Indore, serving pan-India.",
  keywords: [
    "dialysis equipment",
    "wholesale",
    "Fresenius",
    "B.Braun",
    "Nipro",
    "Indore",
    "hemodialysis",
    "medical equipment",
  ],
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
