"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloat({
  href,
  phone,
}: {
  href: string;
  phone: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-4 z-50 flex items-center gap-3 rounded-full bg-whatsapp py-3 pl-3 pr-5 text-white shadow-[0_12px_40px_rgba(37,211,102,0.55)] transition hover:scale-105 hover:bg-[#1ebe57] sm:bottom-6 sm:right-6 animate-wa-pulse"
      aria-label={`WhatsApp ${phone}`}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
        <MessageCircle className="size-6" />
      </span>
      <span className="hidden flex-col leading-tight sm:flex">
        <span className="text-[11px] font-medium uppercase tracking-wide text-white/85">
          Escríbenos
        </span>
        <span className="text-sm font-bold">{phone}</span>
      </span>
      <span className="text-sm font-bold sm:hidden">WhatsApp</span>
    </a>
  );
}
