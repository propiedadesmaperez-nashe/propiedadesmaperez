import type { Metadata } from "next";
import Link from "next/link";
import {
  ClipboardCheck,
  Clock3,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
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
    "Hola, quiero conocer más sobre Propiedades Maperez SPA. ¿Me pueden orientar?"
  );

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conozca Propiedades Maperez SPA: misión, compromiso y por qué elegirnos para su proyecto inmobiliario y financiero.",
  alternates: { canonical: "/nosotros" },
  openGraph: {
    title: "Nosotros | MAPEREZ",
    description:
      "Empresa especializada en servicios integrales del sector inmobiliario.",
    url: "/nosotros",
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
      name: "Nosotros",
      item: `${SITE_URL}/nosotros`,
    },
  ],
};

const reasons = [
  {
    icon: Target,
    title: "Experiencia dedicada",
    text: "Conocimiento del mercado inmobiliario y financiero para orientar cada decisión.",
  },
  {
    icon: Users,
    title: "Atención personalizada",
    text: "Analizamos su situación para proponer la alternativa más conveniente.",
  },
  {
    icon: ClipboardCheck,
    title: "Acompañamiento completo",
    text: "Desde la evaluación inicial hasta el cierre y la postventa.",
  },
  {
    icon: Clock3,
    title: "Transparencia y plazos claros",
    text: "Compromiso con resultados medibles y procesos ordenados.",
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

      <section className="relative z-10 mx-auto max-w-6xl px-5 pb-12 pt-2 sm:px-8 sm:pb-16">
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
          Gestión, asesoría y soluciones hipotecarias
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
          Empresa especializada en servicios integrales del sector inmobiliario.
          Nuestra misión es facilitar y optimizar todas las etapas relacionadas
          con la vivienda, para personas y empresas, con soluciones
          profesionales, personalizadas y de alto compromiso.
        </p>
      </section>

      <section className="relative z-10 border-t border-white/[0.08] py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div>
            <div className="inline-flex items-center gap-2 text-[#d4783a]">
              <ShieldCheck className="size-5" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em]">
                Nuestra historia
              </p>
            </div>
            <h2 className="mt-4 font-[family-name:var(--font-sora)] text-2xl font-bold text-white sm:text-3xl">
              {site.person}
            </h2>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-white/45">
              {site.role}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-[15px]">
              En Propiedades Maperez SPA acompañamos cada proyecto con
              seriedad de empresa y cercanía real. Trabajamos para que el
              sueño de su casa propia sea una realidad hoy, con información
              clara y un proceso ordenado.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-[15px]">
              Coordinamos reunión, llamada o correo para entender sus
              necesidades y presentarle propuestas concretas.
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 sm:p-8">
            <div className="flex items-center gap-2 text-[#d4783a]">
              <Sparkles className="size-5" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                Compromiso
              </p>
            </div>
            <p className="mt-4 font-[family-name:var(--font-sora)] text-xl font-semibold leading-snug text-white">
              El sueño de su casa propia es una realidad hoy
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              Transparencia, plazos claros y acompañamiento hasta el cierre.
              Llámenos o contáctenos cuando quiera avanzar.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
              >
                <Mail className="size-4 text-[#d4783a]" />
                {site.email}
              </a>
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
              >
                <Phone className="size-4 text-[#d4783a]" />
                Llámenos {site.displayPhone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/[0.08] bg-[#1a1730]/35 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4783a]">
              Por qué elegirnos
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-sora)] text-2xl font-bold text-white sm:text-3xl">
              Diferencia que se nota en el proceso
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {reasons.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/[0.1] bg-[#12101f]/55 p-6"
              >
                <item.icon className="size-5 text-[#d4783a]" />
                <h3 className="mt-4 font-[family-name:var(--font-sora)] text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button
              asChild
              className="h-12 rounded-xl bg-[#c45a1c] px-7 text-[15px] font-semibold text-white hover:bg-[#d4783a]"
            >
              <Link href="/servicios">Ver nuestros servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/[0.08] py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-white sm:text-3xl">
            ¿Conversamos?
          </h2>
          <p className="mt-3 text-base text-white/60">
            Quedamos a su disposición para una reunión, llamada o correo.
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
              <a href={`mailto:${site.email}`}>
                <Mail className="size-4" />
                Escríbanos
              </a>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter whatsappHref={WHATSAPP} />
      <WhatsAppFloat href={WHATSAPP} phone={site.displayPhone} />
    </main>
  );
}
