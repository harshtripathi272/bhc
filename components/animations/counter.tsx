"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, animate } from "framer-motion"

interface Props {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export default function Counter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
}: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return controls.stop
  }, [inView, target, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  )
}
