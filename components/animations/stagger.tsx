"use client"

import {
  useRef,
  useState,
  useEffect,
  Children,
  cloneElement,
  isValidElement,
} from "react"

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  stagger?: number
  delay?: number
}

export default function StaggerContainer({
  children,
  className,
  stagger = 0.1,
  delay = 0,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "-60px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  let index = 0
  const enhanced = Children.map(children, (child) => {
    if (!isValidElement(child)) return child
    const i = index++
    const itemDelay = delay + i * stagger
    return cloneElement(
      child as React.ReactElement<{ style?: React.CSSProperties }>,
      {
        style: {
          ...((child as React.ReactElement<{ style?: React.CSSProperties }>)
            .props.style || {}),
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: `opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${itemDelay}s, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${itemDelay}s`,
          willChange: "opacity, transform",
        },
      }
    )
  })

  return (
    <div ref={ref} className={className}>
      {enhanced}
    </div>
  )
}

export function StaggerItem({
  children,
  className,
  style,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}
