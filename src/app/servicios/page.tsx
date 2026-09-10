import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  FileSpreadsheet,
  Handshake,
  Home,
  KeyRound,
  Landmark,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { SITE_URL, site } from "@/lib/site";

const WHATSAPP =
  "https://wa.me/56977239283?text=" +
  encodeURIComponent(
    "Hola, quiero información sobre los servicios de Propiedades Maperez SPA."
  );

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Gestión inmobiliaria, arriendos y ventas, créditos hipotecarios, mutuos y leasing habitacional con Propiedades Maperez SPA.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios | MAPEREZ",
    description:
      "Soluciones integrales para vivienda, inversión y financiamiento.",
    url: "/servicios",
    images: ["/logo-maperez.png"],
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Servicios",
      item: `${SITE_URL}/servicios`,
    },
  ],
};

const services = [
  {
    icon: Building2,
    title: "Gestión inmobiliaria",
    text: "Administración de propiedades y acompañamiento profesional en cada etapa del proceso.",
  },
  {
    icon: Home,
    title: "Arriendos y ventas",
    text: "Asesoría integral para comprar, vender o arrendar con claridad y respaldo.",
  },
  {
    icon: Landmark,
    title: "Créditos hipotecarios",
    text: "Tramitación y acompañamiento en créditos hipotecarios y mutuos hipotecarios.",
  },
  {
    icon: Handshake,
    title: "Leasing habitacional",
    text: "Soluciones de leasing y subsidio leasing habitacional, paso a paso con usted.",
  },
  {
    icon: FileSpreadsheet,
    title: "Alternativas financieras",
    text: "Evaluación y estructuración de opciones para adquirir su vivienda.",
  },
  {
    icon: KeyRound,
    title: "Casa propia",
    text: "Orientación completa para que el sueño de su casa propia sea una realidad hoy.",
  },
];

export default function ServiciosPage() {
  return (
    <main className="relative flex-1 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(106,125,143,0.22),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_15%,rgba(196,90,28,0.1),transparent_40%)]" />

      <SiteHeader whatsappHref={WHATSAPP} active="servicios" />

      <section className="relative z-10 mx-auto max-w-6xl px-5 pb-10 pt-2 sm:px-8 sm:pb-14">
        <p className="text-sm text-white/45">
          <Link href="/" className="hover:text-white">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white/75">Servicios</span>
        </p>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#d4783a]">
          Soluciones Maperez
        </p>
        <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-sora)] text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Servicios para su proyecto inmobiliario
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
          Ofrecemos gestión, asesoría y financiamiento con atención
          personalizada. Analizamos su caso y le proponemos la alternativa más
          conveniente.
        </p>
      </section>

      <section className="relative z-10 border-t border-white/[0.08] py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item, i) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-0.5 hover:border-[#c45a1c]/35 hover:bg-white/[0.05]"
              >
                <p className="text-[11px] font-semibold tracking-[0.2em] text-white/25">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <item.icon className="mt-4 size-6 text-[#d4783a]" />
                <h2 className="mt-4 font-[family-name:var(--font-sora)] text-lg font-semibold text-white">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/[0.08] bg-[#1a1730]/40 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-gradient-to-br from-[#1f1c33] to-[#12101f] p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d4783a]">
                Contáctenos
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-sora)] text-2xl font-bold text-white sm:text-3xl">
                Presentamos propuestas concretas para usted
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">
                Coordinemos una reunión, llamada o correo. Estamos para
                acompañarlo con plazos claros y resultados medibles.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 lg:mt-0 lg:min-w-[240px]">
              <Button
                asChild
                className="h-12 gap-2 rounded-xl bg-[#1f9a52] text-[15px] font-semibold text-white hover:bg-[#188a48]"
              >
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="block size-5 shrink-0" />
                  Contáctenos
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 gap-2 rounded-xl border-white/20 bg-white/[0.04] text-[15px] font-semibold text-white hover:bg-white/10 hover:text-white"
              >
                <a href={`tel:${site.phone}`}>
                  <Phone className="size-4" />
                  Llámenos
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 gap-2 rounded-xl border-white/20 bg-white/[0.04] text-[15px] font-semibold text-white hover:bg-white/10 hover:text-white"
              >
                <a href={`mailto:${site.email}`}>
                  <Mail className="size-4" />
                  {site.email}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter whatsappHref={WHATSAPP} />
      <WhatsAppFloat href={WHATSAPP} phone={site.displayPhone} />
    </main>
  );
}
