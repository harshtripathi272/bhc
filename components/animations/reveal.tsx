"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  once?: boolean
  scale?: number
}

export default function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 30,
  once = true,
  scale,
}: RevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-80px" })

  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  }

  const { x, y } = directionMap[direction]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        x,
        y,
        ...(scale !== undefined ? { scale } : {}),
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, ...(scale !== undefined ? { scale: 1 } : {}) }
          : { opacity: 0, x, y, ...(scale !== undefined ? { scale } : {}) }
      }
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
