"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-primary-700 to-primary-500 text-white shadow-glow hover:shadow-glow-lg hover:from-primary-600 hover:to-primary-400",
  secondary:
    "bg-white text-background hover:bg-primary-100",
  ghost:
    "bg-white/[0.04] text-white border border-white/10 hover:bg-white/[0.08] hover:border-white/20",
  outline:
    "bg-transparent text-white border border-primary-500/40 hover:border-primary-400 hover:bg-primary-500/10",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", leftIcon, rightIcon, children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {leftIcon ? <span className="shrink-0">{leftIcon}</span> : null}
        <span>{children}</span>
        {rightIcon ? (
          <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
            {rightIcon}
          </span>
        ) : null}
      </button>
    );
  }
);

Button.displayName = "Button";
