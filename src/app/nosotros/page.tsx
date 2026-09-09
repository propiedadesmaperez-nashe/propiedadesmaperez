import type { Metadata } from "next";
import Link from "next/link";
import {
  Handshake,
  Home,
  KeyRound,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { SITE_URL, site } from "@/lib/site";

const PHONE = "+56977239283";
const DISPLAY_PHONE = "+56 9 7723 9283";

const WHATSAPP =
  "https://wa.me/56977239283?text=" +
  encodeURIComponent(
    "Hola, quiero información sobre Propiedades MAPEREZ. ¿Me pueden orientar?"
  );

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conozca Propiedades MAPEREZ. María Angélica Pérez, asesor hipotecario y corredora de propiedades. Compra, ventas y arriendos en Chile.",
  alternates: {
    canonical: "/nosotros",
  },
  openGraph: {
    title: "Nosotros | MAPEREZ",
    description:
      "El sueño de su casa propia es una realidad hoy. Conozca a Propiedades MAPEREZ.",
    url: "/nosotros",
    images: ["/logo-maperez.png"],
  },
  twitter: {
    card: "summary",
    title: "Nosotros | MAPEREZ",
    description:
      "El sueño de su casa propia es una realidad hoy. Conozca a Propiedades MAPEREZ.",
    images: ["/logo-maperez.png"],
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Nosotros",
      item: `${SITE_URL}/nosotros`,
    },
  ],
};

const pillars = [
  {
    icon: Home,
    title: "Compra, ventas y arriendos",
    text: "Lo acompañamos en cada operación con claridad y respaldo profesional.",
  },
  {
    icon: KeyRound,
    title: "Crédito mutuo hipotecario",
    text: "Evaluamos su mejor alternativa para financiar el sueño de su casa propia.",
  },
  {
    icon: Handshake,
    title: "Subsidio leasing habitacional",
    text: "Gestionamos el proceso paso a paso, con orientación cercana y formal.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Respaldo de empresa",
    text: "Atención seria, procesos claros y un equipo que responde.",
  },
  {
    icon: Sparkles,
    title: "Acompañamiento real",
    text: "Desde la primera llamada hasta concretar su meta habitacional.",
  },
];

export default function NosotrosPage() {
  return (
    <main className="relative flex-1 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(106,125,143,0.22),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_15%,rgba(196,90,28,0.1),transparent_40%)]" />

      <SiteHeader whatsappHref={WHATSAPP} active="nosotros" />

      <section className="relative z-10 mx-auto max-w-6xl px-5 pb-10 pt-2 sm:px-8 sm:pb-14">
        <p className="text-sm text-white/45">
          <Link href="/" className="hover:text-white">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white/75">Nosotros</span>
        </p>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#d4783a]">
          {site.legalName}
        </p>
        <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-sora)] text-3xl font-bold tracking-tight text-white sm:text-5xl">
          El sueño de su casa propia es una realidad hoy
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
          Somos Propiedades MAPEREZ. Compra, ventas y arriendos, con asesoría
          hipotecaria y subsidio leasing. Lo atendemos con la seriedad de una
          empresa y la cercanía que su proyecto merece.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            className="h-12 gap-2 rounded-xl bg-[#1f9a52] px-6 text-[15px] font-semibold text-white hover:bg-[#188a48]"
          >
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="block size-5 shrink-0" />
              Contáctenos
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 gap-2 rounded-xl border-white/20 bg-white/[0.04] px-6 text-[15px] font-semibold text-white hover:bg-white/10 hover:text-white"
          >
            <a href={`tel:${PHONE}`}>
              <Phone className="size-4" />
              Llámenos
            </a>
          </Button>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/[0.08] py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4783a]">
              Quiénes somos
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-sora)] text-2xl font-bold text-white sm:text-3xl">
              {site.person}
            </h2>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-white/50">
              {site.role}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base">
              Orientamos a cada cliente de forma clara: casa propia, inversión,
              arriendo o subsidio. Nuestro compromiso es que usted avance con
              información real y un equipo que responde.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
              Llámenos. Estamos para concretar el sueño de su casa propia.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/[0.1] bg-white/[0.03] p-5"
              >
                <item.icon className="size-6 text-[#d4783a]" />
                <h3 className="mt-4 font-[family-name:var(--font-sora)] text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/[0.08] bg-[#1a1730]/40 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-white sm:text-3xl">
              Cómo lo ayudamos
            </h2>
            <p className="mt-3 text-base text-white/60">
              Tres caminos. Un mismo estándar de atención.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/[0.1] bg-[#12101f]/50 p-6"
              >
                <item.icon className="size-6 text-[#d4783a]" />
                <h3 className="mt-4 font-[family-name:var(--font-sora)] text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/[0.08] py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-white sm:text-3xl">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="mt-3 text-base text-white/60">
            Contáctenos o llámenos. Le respondemos a la brevedad.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              className="h-12 w-full gap-2 rounded-xl bg-[#1f9a52] px-6 text-[15px] font-semibold text-white hover:bg-[#188a48] sm:w-auto"
            >
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="block size-5 shrink-0" />
                Contáctenos
              </a>
            </Button>
            <Button
              asChild
              className="h-12 w-full gap-2 rounded-xl bg-white/95 px-6 text-[15px] font-semibold text-[#1a1730] hover:bg-white sm:w-auto"
            >
              <a href={`tel:${PHONE}`}>
                <Phone className="size-4" />
                Llámenos {DISPLAY_PHONE}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter whatsappHref={WHATSAPP} />
      <WhatsAppFloat href={WHATSAPP} phone={DISPLAY_PHONE} />
    </main>
  );
}
