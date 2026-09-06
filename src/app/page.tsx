import Image from "next/image";
import { Building2, Handshake, Home, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BusinessCard } from "@/components/business-card";

const PHONE = "+56977239283";
const WHATSAPP =
  "https://wa.me/56977239283?text=Hola%20Mar%C3%ADa%20Ang%C3%A9lica%2C%20me%20interesa%20conocer%20sus%20servicios%20de%20Propiedades%20MAPEREZ";

const services = [
  {
    icon: Handshake,
    title: "Subsidio leasing habitacional",
    description:
      "Te acompaño en la gestión completa del subsidio para acceder a tu vivienda con leasing habitacional.",
  },
  {
    icon: KeyRound,
    title: "Crédito mutuo hipotecario",
    description:
      "Asesoría clara para evaluar, tramitar y cerrar tu crédito mutuo hipotecario con las mejores condiciones.",
  },
  {
    icon: Home,
    title: "Propiedades y corretaje",
    description:
      "Compra, venta y arriendo con acompañamiento profesional de Propiedades y servicios Maperez spa.",
  },
];

export default function HomePage() {
  return (
    <main className="relative flex-1 overflow-x-hidden">
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
          className="h-10 rounded-xl bg-whatsapp px-4 text-sm font-semibold text-white hover:bg-[#1ebe57] animate-rise"
        >
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            Contactar
          </a>
        </Button>
      </header>

      <section className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pb-16 pt-4 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-24 lg:pt-8">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="animate-rise text-xs font-semibold uppercase tracking-[0.28em] text-brand-orange">
            Propiedades y servicios Maperez spa
          </p>
          <h2 className="animate-rise-delay-1 mt-4 font-display text-[2.4rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            Propiedades
            <span className="block text-steel-light">MAPEREZ</span>
          </h2>
          <p className="animate-rise-delay-2 mx-auto mt-5 max-w-md text-base leading-relaxed text-white/70 lg:mx-0 sm:text-lg">
            Asesoría hipotecaria y corretaje con acompañamiento cercano para
            concretar tu próxima vivienda.
          </p>
          <div className="animate-rise-delay-3 mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button
              asChild
              className="h-12 rounded-2xl bg-white px-6 text-[15px] font-semibold text-[#12131f] hover:bg-white/90"
            >
              <a href={`tel:${PHONE}`}>Llamar ahora</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-2xl border-white/25 bg-white/5 px-6 text-[15px] font-semibold text-white backdrop-blur hover:bg-white/10 hover:text-white"
            >
              <a href="#servicios">Ver servicios</a>
            </Button>
          </div>
        </div>
        <div className="order-1 animate-rise-delay-1 lg:order-2">
          <BusinessCard />
        </div>
      </section>

      <section
        id="servicios"
        className="relative z-10 border-t border-white/10 bg-[#0a0c1c]/80 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Building2 className="mx-auto size-8 text-brand-orange" />
            <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Servicios
            </h3>
            <p className="mt-3 text-base text-white/65">
              Soluciones habitacionales con gestión profesional y trato directo.
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

      <section className="relative z-10 overflow-hidden py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(90,123,143,0.25),transparent_65%)]" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Image
            src="/Perfil-MAPEREZ-2-300x300.webp"
            alt="Propiedades MAPEREZ"
            width={88}
            height={88}
            className="mx-auto h-20 w-20 rounded-full bg-white object-contain p-2 shadow-lg"
          />
          <h3 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">
            ¿Listo para dar el siguiente paso?
          </h3>
          <p className="mt-3 text-base text-white/65">
            Habla hoy con María Angélica Pérez y recibe orientación para tu
            subsidio, crédito o propiedad.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              className="h-12 rounded-2xl bg-whatsapp px-7 text-[15px] font-semibold text-white hover:bg-[#1ebe57]"
            >
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                Escribir por WhatsApp
              </a>
            </Button>
            <Button
              asChild
              className="h-12 rounded-2xl bg-[#12131f] px-7 text-[15px] font-semibold text-white hover:bg-black"
            >
              <a href={`tel:${PHONE}`}>+56 9 7723 9283</a>
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
    </main>
  );
}
