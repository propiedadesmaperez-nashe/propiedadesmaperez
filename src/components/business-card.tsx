"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

const PHONE = "+56977239283";
const WHATSAPP =
  "https://wa.me/56977239283?text=" +
  encodeURIComponent(
    "Hola María Angélica, quiero información sobre propiedades y financiamiento. ¿Me puede orientar?"
  );

export function BusinessCard() {
  return (
    <div className="relative mx-auto w-full max-w-[380px]">
      <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-b from-[#c45a1c]/25 via-[#6a7d8f]/15 to-transparent blur-sm" />
      <article className="relative overflow-hidden rounded-[1.85rem] border border-white/15 bg-gradient-to-b from-[#3d4558] via-[#2e3548] to-[#232836] px-6 pb-7 pt-8 shadow-[0_28px_64px_rgba(0,0,0,0.4)] sm:px-7">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),transparent_55%)]" />
        <div className="pointer-events-none absolute -bottom-6 left-1/2 h-56 w-56 -translate-x-1/2 opacity-[0.1]">
          <Image
            src="/logo-maperez-light.png"
            alt=""
            width={224}
            height={224}
            sizes="224px"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="relative mx-auto mt-1 flex w-fit items-center justify-center overflow-visible">
          <BrandLogo size="md" priority />
          <span className="absolute right-0 top-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#1f9a52] animate-pulse" />
        </div>

        <div className="relative mt-6 text-center">
          <p className="font-[family-name:var(--font-sora)] text-[1.65rem] font-bold leading-tight tracking-tight text-white sm:text-[1.85rem]">
            María Angélica Pérez
          </p>
          <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/90">
            Asesor Hipotecario
          </p>
          <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white/65">
            Corredora de Propiedades
          </p>
        </div>

        <div className="relative mt-8 grid grid-cols-2 gap-3">
          <Button
            asChild
            className="h-12 rounded-xl bg-[#12101f] text-[13px] font-semibold text-white shadow-md transition hover:bg-[#1a1730]"
          >
            <a href={`tel:${PHONE}`}>
              <Phone className="size-4" />
              Llámenos
            </a>
          </Button>
          <Button
            asChild
            className="h-12 rounded-xl bg-[#1f9a52] text-[13px] font-semibold text-white shadow-md transition hover:bg-[#188a48]"
          >
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="block size-5 shrink-0" />
              Contáctenos
            </a>
          </Button>
        </div>
      </article>
    </div>
  );
}
