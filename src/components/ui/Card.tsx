"use client";

import { type HTMLAttributes, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  hover?: boolean;
  glow?: boolean;
}

export function Card({
  children,
  className,
  hover = true,
  glow = false,
  ...props
}: CardProps) {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] via-white/[0.02] to-transparent p-6 backdrop-blur-xl transition-all duration-500",
        hover &&
          "hover:-translate-y-1 hover:border-primary-500/40 hover:shadow-glow",
        glow && "shadow-glow",
        className
      )}
      {...props}
    >
      {/* Subtle inner glow on hover */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-primary-600/30 blur-3xl" />
      </div>
      {/* Top accent line */}
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {children}
    </motion.div>
  );
}

interface SimpleCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function StaticCard({ children, className, ...props }: SimpleCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent p-6 backdrop-blur-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
