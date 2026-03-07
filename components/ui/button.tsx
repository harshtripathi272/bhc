import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-lg text-sm whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-[#0284C7] text-white hover:bg-[#0284C7]/90 shadow-sm",
        "outline-white":
          "border border-white/20 text-white hover:bg-white/10",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-200",
        ghost: "text-slate-600 hover:bg-slate-100",
      },
      size: {
        sm: "px-3.5 py-2 text-xs",
        md: "px-5 py-2.5 text-sm",
        lg: "px-6 py-3 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export { cn }
