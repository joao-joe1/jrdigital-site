"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { whatsappLink } from "@/lib/utils";

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-[300px] overflow-hidden rounded-2xl border border-white/10 bg-elevated/95 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-start justify-between gap-2 border-b border-white/5 bg-gradient-to-r from-primary-700/30 to-transparent p-4">
              <div>
                <p className="text-sm font-semibold text-white">
                  JR Digital Agency
                </p>
                <p className="text-xs text-white/60">
                  Geralmente responde em minutos
                </p>
              </div>
              <button
                aria-label="Fechar"
                onClick={() => setOpen(false)}
                className="rounded-full p-1 text-white/60 hover:bg-white/5 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>
            <div className="space-y-3 p-4">
              <div className="rounded-xl rounded-tl-sm bg-white/[0.04] p-3 text-sm text-white/80">
                Olá! 👋 Quer saber como podemos automatizar seu negócio e
                aumentar suas vendas?
              </div>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-xl bg-[#25D366] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#1da851]"
              >
                Iniciar conversa no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir conversa no WhatsApp"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-10px_rgba(37,211,102,0.8)]"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
        {open ? <X size={22} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
}
