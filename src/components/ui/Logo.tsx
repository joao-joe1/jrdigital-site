import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-2.5 transition-opacity hover:opacity-90",
        className
      )}
    >
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 shadow-glow">
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_50%)]" />
        <span className="relative font-display text-sm font-bold tracking-tight text-white">
          JR
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-sm font-bold tracking-tight text-white">
          JR Digital
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary-400">
          Agency
        </span>
      </span>
    </Link>
  );
}
