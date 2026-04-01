import * as React from "react"
import Link from "next/link"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", asChild, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00b4d8] disabled:pointer-events-none disabled:opacity-50"
    
    const variantClasses = {
      default: "bg-[#10B981] hover:bg-[#059669] text-white shadow",
      ghost: "hover:bg-[#1a2a42] text-[#9CA3AF] hover:text-[#F5F5F7]",
      outline: "border border-[#2A2A2E] bg-transparent hover:bg-[#1a2a42] text-[#9CA3AF]",
      destructive: "bg-red-600 hover:bg-red-700 text-white",
    }
    
    const sizeClasses = {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9",
    }
    
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
    
    if (asChild && React.isValidElement(props.children)) {
      return React.cloneElement(props.children as React.ReactElement<{ className?: string }>, {
        className: `${classes} ${(props.children as React.ReactElement<{ className?: string }>).props.className || ""}`,
      })
    }
    
    return (
      <button className={classes} ref={ref} {...props} />
    )
  }
)
Button.displayName = "Button"

export { Button }
