"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface Props {
  children: React.ReactNode
  className?: string
}

export default function MagneticButton({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 20, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 200, damping: 20, mass: 0.5 })

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current || "ontouchstart" in window) return
    const rect = ref.current.getBoundingClientRect()
    const px = e.clientX - rect.left - rect.width / 2
    const py = e.clientY - rect.top - rect.height / 2
    x.set(px * 0.25)
    y.set(py * 0.25)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={`inline-block ${className || ""}`}
    >
      {children}
    </motion.div>
  )
}
