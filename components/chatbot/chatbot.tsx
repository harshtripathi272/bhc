"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"

interface ChatMessage {
  from: "bot" | "user"
  text: string
  links?: { label: string; href: string }[]
}

const quickReplies = [
  {
    label: "Products & Equipment",
    response: {
      from: "bot" as const,
      text: "We supply a full range of dialysis machines (Fresenius, B.Braun, Nipro), RO water treatment systems, consumables like dialyzers and bloodlines, plus spare parts. All sourced from genuine manufacturers.",
      links: [{ label: "View Products →", href: "/products" }],
    },
  },
  {
    label: "Services Offered",
    response: {
      from: "bot" as const,
      text: "We offer 24/7 machine support, preventive maintenance, on-site repair, installation & commissioning, spare parts supply, and Annual Maintenance Contracts (AMC).",
      links: [{ label: "View Services →", href: "/services" }],
    },
  },
  {
    label: "Contact & WhatsApp",
    response: {
      from: "bot" as const,
      text: "Vinod Tripathi: +91 98265 93932\nRevati Raman Mishra: +91 97554 89707\n\nWe respond within 2 hours on business days.",
      links: [
        { label: "Call Now →", href: "tel:+919826593932" },
        { label: "WhatsApp →", href: "https://wa.me/919826593932" },
      ],
    },
  },
  {
    label: "About the Company",
    response: {
      from: "bot" as const,
      text: "Balaji Health Care is a wholesale supplier of dialysis equipment, machines, and consumables based in Indore, India. Established in 2008, we serve hospitals and clinics across India with reliable products and expert after-sales service.",
      links: [{ label: "Learn More →", href: "/about" }],
    },
  },
]

const initialMessage: ChatMessage = {
  from: "bot",
  text: "Hi! I'm the BHC Assistant. How can I help you today?",
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage])
  const [showChips, setShowChips] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleChipClick = (chip: (typeof quickReplies)[number]) => {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: chip.label },
      chip.response,
    ])
    setShowChips(true)
  }

  const handleReset = () => {
    setMessages([initialMessage])
    setShowChips(true)
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#0B2B5E] text-white rounded-full shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1, boxShadow: "0 8px 30px rgba(11,43,94,0.4)" }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ping */}
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0284C7] opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#0284C7] border-2 border-[#0B2B5E]" />
          </span>
        )}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[340px] h-[460px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#0B2B5E] px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/15 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  BHC
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    BHC Assistant
                  </div>
                  <div className="flex items-center text-xs text-blue-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5" />
                    Online
                  </div>
                </div>
              </div>
              <button
                onClick={handleReset}
                className="text-white/50 hover:text-white text-xs transition-colors"
              >
                Clear
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
              data-lenis-prevent
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: msg.from === "bot" ? 0.15 : 0 }}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "bg-[#0B2B5E] text-white rounded-2xl rounded-br-md"
                        : "bg-slate-100 text-slate-700 rounded-2xl rounded-bl-md"
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                    {msg.links && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {msg.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            className="text-xs font-medium text-[#0284C7] hover:underline"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick reply chips */}
            {showChips && (
              <div className="px-4 pb-3 flex flex-wrap gap-1.5 shrink-0">
                {quickReplies.map((chip) => (
                  <motion.button
                    key={chip.label}
                    onClick={() => handleChipClick(chip)}
                    className="px-3 py-1.5 text-xs font-medium bg-slate-50 hover:bg-[#0B2B5E] hover:text-white border border-slate-200 hover:border-[#0B2B5E] rounded-full transition-all duration-200"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {chip.label}
                  </motion.button>
                ))}
              </div>
            )}

            {/* Footer */}
            <div className="px-4 py-2.5 border-t border-slate-100 text-center shrink-0">
              <span className="text-[10px] text-slate-400">
                Powered by Balaji Health Care
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
