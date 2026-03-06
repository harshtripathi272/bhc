"use client"

import { useState } from "react"
import Link from "next/link"
import { MessageCircle, X } from "lucide-react"

interface ChatMessage {
  from: "bot" | "user"
  text: string
  links?: { label: string; href: string }[]
}

const initialMessage: ChatMessage = {
  from: "bot",
  text: "Hi! I'm the BHC Assistant. How can I help you today?",
}

const quickReplies = [
  {
    label: "Products & Equipment",
    response: {
      from: "bot" as const,
      text: "We supply a full range of dialysis equipment including machines from Fresenius, B.Braun, Nipro, and Nikkiso, along with RO water treatment systems, dialysis chairs, consumables like dialyzers, AV fistula needles, blood tubing sets, and spare parts.",
      links: [{ label: "View Products →", href: "/products" }],
    },
  },
  {
    label: "Services Offered",
    response: {
      from: "bot" as const,
      text: "We offer 24/7 machine support, preventive maintenance scheduling, on-site repair & servicing, spare parts supply, installation & commissioning, and Annual Maintenance Contracts (AMC).",
      links: [{ label: "View Services →", href: "/services" }],
    },
  },
  {
    label: "Contact & WhatsApp",
    response: {
      from: "bot" as const,
      text: "You can reach us directly:\n\nVinod Tripathi: +91 98265 93932\nRevati Raman Mishra: +91 97554 89707",
      links: [
        { label: "Chat on WhatsApp", href: "https://wa.me/919826593932" },
        { label: "Contact Page →", href: "/contact" },
      ],
    },
  },
  {
    label: "About the Company",
    response: {
      from: "bot" as const,
      text: "Balaji Health Care is a wholesale supplier of dialysis machines and equipment, established in 2008 in Indore. We serve hospitals and dialysis centers across India with genuine equipment and professional service support.",
      links: [{ label: "Learn More →", href: "/about" }],
    },
  },
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage])
  const [showChips, setShowChips] = useState(true)

  const handleChip = (chip: (typeof quickReplies)[number]) => {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: chip.label },
      chip.response,
    ])
    setShowChips(true)
  }

  const resetChat = () => {
    setMessages([initialMessage])
    setShowChips(true)
  }

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#0B2B5E] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#0B2B5E]/90 flex items-center justify-center transition-all"
          aria-label="Open Chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-[420px] bg-white rounded-lg shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#0B2B5E] text-white px-4 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-sm font-bold">
                BHC
              </div>
              <div>
                <div className="font-semibold text-sm">BHC Assistant</div>
                <div className="flex items-center space-x-1 text-xs text-slate-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 rounded p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`rounded-lg px-3 py-2 max-w-[85%] text-sm ${
                    msg.from === "user"
                      ? "bg-[#0B2B5E] text-white"
                      : "bg-slate-100 text-slate-800"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  {msg.links && (
                    <div className="mt-2 space-y-1">
                      {msg.links.map((link, j) => (
                        <Link
                          key={j}
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          className="block text-xs font-medium text-[#0284C7] hover:underline"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Quick reply chips */}
            {showChips && (
              <div className="flex flex-wrap gap-2 pt-2">
                {quickReplies.map((chip) => (
                  <button
                    key={chip.label}
                    onClick={() => handleChip(chip)}
                    className="text-xs px-3 py-1.5 rounded-full border border-[#0B2B5E] text-[#0B2B5E] hover:bg-[#0B2B5E] hover:text-white transition-colors"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="shrink-0 px-4 py-2 border-t border-slate-200 text-center">
            <p className="text-[10px] text-slate-400">Powered by Balaji Health Care</p>
          </div>
        </div>
      )}
    </>
  )
}
