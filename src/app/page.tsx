import Link from "next/link";
import {
  Building2,
  CircleHelp,
  Handshake,
  Home,
  KeyRound,
} from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { BusinessCard } from "@/components/business-card";
import { PropertyHighlight } from "@/components/property-highlight";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

const PHONE = "+56977239283";
const DISPLAY_PHONE = "+56 9 7723 9283";

function wa(text: string) {
  return `https://wa.me/56977239283?text=${encodeURIComponent(text)}`;
}

const WHATSAPP = wa(
  "Hola María Angélica, quiero información sobre propiedades y financiamiento. ¿Me puede orientar?"
);

const WHATSAPP_TERRENO = wa(
  "Hola María Angélica, me interesa el terreno de 2.800 m² en Talagante Peñaflor (avenida principal). ¿Me puede dar más información sobre venta o arriendo?"
);

const WHATSAPP_CASA = wa(
  "Hola María Angélica, me interesa la casa en Talagante a 1.300 UF (3 dormitorios, 1 baño, sin hipoteca). ¿Me puede dar más información?"
);

const WHATSAPP_DEPTO = wa(
  "Hola María Angélica, me interesa el departamento en Cerrillos (Av. Departamental 4570) a $103.000.000. ¿Me puede dar más información?"
);

const questions = [
  {
    q: "¿Quiere su casa propia?",
    a: "Te ayudo a encontrar el camino: crédito, leasing o subsidio.",
    msg: "Hola María Angélica, quiero mi casa propia. ¿Me puede asesorar?",
    icon: Home,
  },
  {
    q: "¿Necesita una casa?",
    a: "Opciones reales según tu presupuesto y tu zona ideal.",
    msg: "Hola María Angélica, necesito una casa. ¿Qué opciones tiene disponibles?",
    icon: Building2,
  },
  {
    q: "¿Necesita un arriendo?",
    a: "Te conecto con propiedades disponibles y te acompaño en el proceso.",
    msg: "Hola María Angélica, necesito un arriendo. ¿Me puede ayudar?",
    icon: KeyRound,
  },
  {
    q: "¿Necesita un subsidio?",
    a: "Gestiono subsidio leasing habitacional paso a paso contigo.",
    msg: "Hola María Angélica, necesito un subsidio habitacional. ¿Me orienta?",
    icon: Handshake,
  },
];

const services = [
  {
    icon: Handshake,
    title: "Subsidio leasing habitacional",
    description:
      "Te guío en toda la gestión para acceder a tu vivienda con subsidio.",
  },
  {
    icon: KeyRound,
    title: "Crédito mutuo hipotecario",
    description:
      "Evaluamos juntos tu mejor alternativa para financiar tu casa.",
  },
  {
    icon: Home,
    title: "Compra, venta y arriendo",
    description:
      "Propiedades y servicios Maperez spa a tu lado en cada decisión.",
  },
];

export default function HomePage() {
  return (
    <main className="relative flex-1 overflow-x-hidden pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(106,125,143,0.22),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_15%,rgba(196,90,28,0.1),transparent_40%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <SiteHeader whatsappHref={WHATSAPP} active="inicio" />

      <section className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pb-14 pt-4 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-20 lg:pt-8">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards text-xs font-semibold uppercase tracking-[0.28em] text-[#d4783a]">
            Propiedades MAPEREZ
          </p>
          <h1 className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards delay-100 mt-4 font-[family-name:var(--font-sora)] text-[2.35rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            ¿Quiere su
            <span className="block text-[#9aabba]">casa propia?</span>
          </h1>
          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards delay-200 mx-auto mt-5 max-w-md text-base leading-relaxed text-white/70 lg:mx-0 sm:text-lg">
            Compra, arriendo, crédito o subsidio. María Angélica Pérez te
            orienta de forma clara y cercana para concretar tu próxima vivienda.
          </p>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards delay-300 mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <Button
              asChild
              className="h-14 w-full gap-2 rounded-xl bg-[#1f9a52] px-6 text-[15px] font-semibold text-white hover:bg-[#188a48] sm:w-auto sm:min-w-[220px]"
            >
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="block size-5 shrink-0" />
                Escribir al WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 w-full rounded-xl border-white/20 bg-white/[0.04] px-6 text-[15px] font-semibold text-white hover:bg-white/10 hover:text-white sm:w-auto"
            >
              <Link href="/propiedades">Ver propiedades</Link>
            </Button>
          </div>
          <p className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards delay-300 mt-4 text-sm text-white/45">
            Respuesta rápida · Asesoría personalizada · Sin compromiso
          </p>
        </div>
        <div className="order-1 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards delay-100 lg:order-2">
          <BusinessCard />
        </div>
      </section>

      <PropertyHighlight
        terrenoHref={WHATSAPP_TERRENO}
        casaHref={WHATSAPP_CASA}
        deptoHref={WHATSAPP_DEPTO}
      />

      <section
        id="preguntas"
        className="relative z-10 border-t border-white/[0.08] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <CircleHelp className="mx-auto size-7 text-[#d4783a]" />
            <h3 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              ¿En qué te podemos ayudar?
            </h3>
            <p className="mt-3 text-base text-white/60">
              Elige tu consulta y escribe ahora. Te respondemos por WhatsApp.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {questions.map((item) => (
              <a
                key={item.q}
                href={wa(item.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl border border-white/[0.1] bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-0.5 hover:border-[#c45a1c]/40 hover:bg-white/[0.06]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c45a1c]/15 text-[#d4783a] transition group-hover:bg-[#c45a1c]/25">
                    <item.icon className="size-5" />
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <h4 className="font-[family-name:var(--font-sora)] text-lg font-bold text-white sm:text-xl">
                      {item.q}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {item.a}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#d4783a]">
                      <WhatsAppIcon className="block size-4 shrink-0" />
                      Consultar
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        id="servicios"
        className="relative z-10 border-t border-white/[0.08] bg-[#1a1730]/40 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Building2 className="mx-auto size-7 text-[#d4783a]" />
            <h3 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Soluciones para tu vivienda
            </h3>
            <p className="mt-3 text-base text-white/60">
              Te acompañamos desde la primera consulta hasta concretar tu meta.
            </p>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {services.map((service) => (
              <div key={service.title} className="text-center md:text-left">
                <service.icon className="mx-auto size-6 text-[#d4783a] md:mx-0" />
                <h4 className="mt-4 font-[family-name:var(--font-sora)] text-lg font-semibold text-white">
                  {service.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-x-hidden border-t border-white/[0.08] bg-gradient-to-b from-[#1a1730] to-[#12101f] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,90,28,0.1),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <div className="flex justify-center">
            <BrandLogo size="lg" />
          </div>
          <h3 className="mt-6 font-[family-name:var(--font-sora)] text-3xl font-bold text-white sm:text-4xl">
            ¿Todavía tienes dudas?
          </h3>
          <p className="mt-3 text-base text-white/65">
            Escríbenos y te orientamos sin costo. Casa propia, arriendo o
            subsidio: estamos para ayudarte.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              className="h-14 w-full gap-2 rounded-xl bg-[#1f9a52] px-8 text-base font-semibold text-white hover:bg-[#188a48] sm:w-auto"
            >
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="block size-5 shrink-0" />
                WhatsApp {DISPLAY_PHONE}
              </a>
            </Button>
            <Button
              asChild
              className="h-12 w-full rounded-xl bg-white/95 px-7 text-[15px] font-semibold text-[#1a1730] hover:bg-white sm:w-auto"
            >
              <a href={`tel:${PHONE}`}>Llamar ahora</a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/[0.08] py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-center sm:flex-row sm:px-8 sm:text-left">
          <p className="text-sm font-medium text-white/75">
            Propiedades y servicios Maperez spa
          </p>
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} MAPEREZ · Todos los derechos reservados
          </p>
        </div>
      </footer>

      <WhatsAppFloat href={WHATSAPP} phone={DISPLAY_PHONE} />
    </main>
  );
}
