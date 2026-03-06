import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-cyan text-white hover:bg-cyan-hover shadow-md hover:shadow-lg",
        secondary: "bg-navy text-white hover:bg-navy-mid",
        outline:
          "border-2 border-cyan text-cyan hover:bg-cyan hover:text-white",
        ghost: "text-dark hover:bg-off-white",
        white: "bg-white text-navy hover:bg-off-white shadow-md",
        whatsapp: "bg-whatsapp text-white hover:brightness-110",
        "outline-white":
          "border-2 border-white/30 text-white hover:bg-white/10",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  className?: string
}

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
