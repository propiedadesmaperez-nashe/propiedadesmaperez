"use client";

import Image from "next/image";
import { Phone, Share2, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE = "+56977239283";
const DISPLAY_PHONE = "+56 9 7723 9283";
const WHATSAPP =
  "https://wa.me/56977239283?text=Hola%20Mar%C3%ADa%20Ang%C3%A9lica%2C%20me%20interesa%20conocer%20sus%20servicios%20de%20Propiedades%20MAPEREZ";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function BusinessCard() {
  const saveContact = () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:Pérez;María Angélica;;;",
      "FN:María Angélica Pérez",
      "ORG:Propiedades y servicios Maperez spa",
      "TITLE:Asesor Hipotecario / Corredora de Propiedades",
      `TEL;TYPE=CELL:${PHONE}`,
      "URL:https://kromatix.cl/id/maperez/",
      "END:VCARD",
    ].join("\n");
    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Maria-Angelica-Perez-MAPEREZ.vcf";
    a.click();
    URL.revokeObjectURL(url);
  };

  const share = async () => {
    const data = {
      title: "Propiedades MAPEREZ",
      text: `María Angélica Pérez — Asesor Hipotecario y Corredora de Propiedades. ${DISPLAY_PHONE}`,
      url: typeof window !== "undefined" ? window.location.href : "",
    };
    if (navigator.share) {
      try {
        await navigator.share(data);
        return;
      } catch {
        return;
      }
    }
    await navigator.clipboard.writeText(`${data.text}\n${data.url}`);
  };

  return (
    <div className="relative mx-auto w-full max-w-[380px] animate-float">
      <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-b from-white/25 via-steel-light/20 to-transparent blur-sm" />
      <article className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-b from-[#6d8fa3] via-[#5a7b8f] to-[#4a6a7d] px-6 pb-7 pt-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:px-7">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.18),transparent_55%)]" />
        <div className="pointer-events-none absolute -bottom-6 left-1/2 h-56 w-56 -translate-x-1/2 opacity-[0.12]">
          <Image
            src="/Perfil-MAPEREZ-2-300x300.webp"
            alt=""
            width={224}
            height={224}
            className="h-full w-full object-contain"
          />
        </div>

        <p className="relative text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
          Propiedades MAPEREZ
        </p>

        <div className="relative mx-auto mt-5 flex h-[118px] w-[118px] items-center justify-center rounded-full bg-white shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
          <Image
            src="/Perfil-MAPEREZ-2-300x300.webp"
            alt="Propiedades MAPEREZ"
            width={96}
            height={96}
            priority
            className="h-[92px] w-[92px] object-contain"
          />
          <span className="absolute bottom-2 right-2 h-4 w-4 rounded-full border-[3px] border-white bg-whatsapp animate-pulse-dot" />
        </div>

        <div className="relative mt-6 text-center">
          <h1 className="font-display text-[1.65rem] font-bold leading-tight tracking-tight text-white sm:text-[1.85rem]">
            María Angélica Pérez
          </h1>
          <p className="mt-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-white">
            Asesor Hipotecario
          </p>
          <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/80">
            Corredora de Propiedades
          </p>
        </div>

        <div className="relative mt-8 grid grid-cols-2 gap-3">
          <Button
            asChild
            className="h-12 rounded-2xl bg-[#12131f] text-[13px] font-semibold text-white shadow-md transition hover:scale-[1.02] hover:bg-black"
          >
            <a href={`tel:${PHONE}`}>
              <Phone className="size-4" />
              Llamar
            </a>
          </Button>
          <Button
            asChild
            className="h-12 rounded-2xl bg-whatsapp text-[13px] font-semibold text-white shadow-md transition hover:scale-[1.02] hover:bg-[#1ebe57]"
          >
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </a>
          </Button>
          <Button
            type="button"
            onClick={saveContact}
            className="h-12 rounded-2xl bg-[#eef2f5] text-[13px] font-semibold text-[#12131f] shadow-sm transition hover:scale-[1.02] hover:bg-white"
          >
            <UserPlus className="size-4" />
            Guardar
          </Button>
          <Button
            type="button"
            onClick={share}
            className="h-12 rounded-2xl bg-[#eef2f5] text-[13px] font-semibold text-[#12131f] shadow-sm transition hover:scale-[1.02] hover:bg-white"
          >
            <Share2 className="size-4" />
            Compartir
          </Button>
        </div>
      </article>
    </div>
  );
}
