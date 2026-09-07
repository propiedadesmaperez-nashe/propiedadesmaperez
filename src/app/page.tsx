import Image from "next/image";
import {
  Building2,
  CircleHelp,
  Handshake,
  Home,
  KeyRound,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BusinessCard } from "@/components/business-card";
import { WhatsAppFloat } from "@/components/whatsapp-float";

const PHONE = "+56977239283";
const DISPLAY_PHONE = "+56 9 7723 9283";

function wa(text: string) {
  return `https://wa.me/56977239283?text=${encodeURIComponent(text)}`;
}

const WHATSAPP = wa(
  "Hola María Angélica, quiero información sobre propiedades y financiamiento. ¿Me puede orientar?"
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(90,123,143,0.45),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(230,126,34,0.18),transparent_35%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <div className="flex items-center gap-3 animate-rise">
          <Image
            src="/Perfil-MAPEREZ-2-300x300.webp"
            alt="MAPEREZ"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full bg-white object-contain p-1 shadow-md"
          />
          <span className="font-display text-sm font-bold tracking-[0.08em] text-white sm:text-base">
            MAPEREZ
          </span>
        </div>
        <Button
          asChild
          className="h-11 gap-2 rounded-xl bg-whatsapp px-4 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(37,211,102,0.35)] hover:bg-[#1ebe57] animate-rise"
        >
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="size-4" />
            WhatsApp
          </a>
        </Button>
      </header>

      <section className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pb-14 pt-4 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-20 lg:pt-8">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="animate-rise text-xs font-semibold uppercase tracking-[0.28em] text-brand-orange">
            Propiedades y servicios Maperez spa
          </p>
          <h2 className="animate-rise-delay-1 mt-4 font-display text-[2.35rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            ¿Quiere su
            <span className="block text-steel-light">casa propia?</span>
          </h2>
          <p className="animate-rise-delay-2 mx-auto mt-5 max-w-md text-base leading-relaxed text-white/75 lg:mx-0 sm:text-lg">
            Compra, arriendo, crédito o subsidio. María Angélica Pérez te
            orienta de forma clara y cercana para concretar tu próxima vivienda.
          </p>
          <div className="animate-rise-delay-3 mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <Button
              asChild
              className="h-14 w-full gap-2 rounded-2xl bg-whatsapp px-6 text-[15px] font-bold text-white shadow-[0_12px_32px_rgba(37,211,102,0.4)] hover:scale-[1.02] hover:bg-[#1ebe57] sm:w-auto sm:min-w-[240px]"
            >
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-5" />
                Escribir al WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 w-full rounded-2xl border-white/25 bg-white/5 px-6 text-[15px] font-semibold text-white backdrop-blur hover:bg-white/10 hover:text-white sm:w-auto"
            >
              <a href={`tel:${PHONE}`}>{DISPLAY_PHONE}</a>
            </Button>
          </div>
          <p className="animate-rise-delay-3 mt-4 text-sm text-white/50">
            Respuesta rápida · Asesoría personalizada · Sin compromiso
          </p>
        </div>
        <div className="order-1 animate-rise-delay-1 lg:order-2">
          <BusinessCard />
        </div>
      </section>

      <section
        id="preguntas"
        className="relative z-10 border-t border-white/10 bg-[#0a0c1c]/85 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <CircleHelp className="mx-auto size-8 text-brand-orange" />
            <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              ¿En qué te podemos ayudar?
            </h3>
            <p className="mt-3 text-base text-white/65">
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
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/12 bg-gradient-to-br from-white/[0.09] to-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-whatsapp/50 hover:bg-white/[0.11] hover:shadow-[0_20px_50px_rgba(37,211,102,0.12)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/15 text-brand-orange transition group-hover:bg-whatsapp/20 group-hover:text-whatsapp">
                    <item.icon className="size-6" />
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <h4 className="font-display text-xl font-bold text-white sm:text-[1.35rem]">
                      {item.q}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {item.a}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-whatsapp">
                      <MessageCircle className="size-4" />
                      Consultar por WhatsApp
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
        className="relative z-10 border-t border-white/10 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Building2 className="mx-auto size-8 text-brand-orange" />
            <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Soluciones para tu vivienda
            </h3>
            <p className="mt-3 text-base text-white/65">
              Te acompañamos desde la primera consulta hasta concretar tu meta.
            </p>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {services.map((service) => (
              <div key={service.title} className="text-center md:text-left">
                <service.icon className="mx-auto size-7 text-brand-orange md:mx-0" />
                <h4 className="mt-4 font-display text-lg font-semibold text-white">
                  {service.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#12261a] to-[#0a0c1c] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,211,102,0.18),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Image
            src="/Perfil-MAPEREZ-2-300x300.webp"
            alt="Propiedades MAPEREZ"
            width={88}
            height={88}
            className="mx-auto h-20 w-20 rounded-full bg-white object-contain p-2 shadow-lg"
          />
          <h3 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">
            ¿Todavía tienes dudas?
          </h3>
          <p className="mt-3 text-base text-white/70">
            Escríbenos y te orientamos sin costo. Casa propia, arriendo o
            subsidio: estamos para ayudarte.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              className="h-14 w-full gap-2 rounded-2xl bg-whatsapp px-8 text-base font-bold text-white shadow-[0_16px_40px_rgba(37,211,102,0.45)] hover:scale-[1.02] hover:bg-[#1ebe57] sm:w-auto"
            >
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-5" />
                WhatsApp {DISPLAY_PHONE}
              </a>
            </Button>
            <Button
              asChild
              className="h-12 w-full rounded-2xl bg-white px-7 text-[15px] font-semibold text-[#12131f] hover:bg-white/90 sm:w-auto"
            >
              <a href={`tel:${PHONE}`}>Llamar ahora</a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-center sm:flex-row sm:px-8 sm:text-left">
          <p className="text-sm font-medium text-white/80">
            Propiedades y servicios Maperez spa
          </p>
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} MAPEREZ · Todos los derechos reservados
          </p>
        </div>
      </footer>

      <WhatsAppFloat href={WHATSAPP} phone={DISPLAY_PHONE} />
    </main>
  );
}
