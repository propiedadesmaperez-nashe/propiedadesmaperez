import type { Metadata } from "next";
import Link from "next/link";
import { PropertyShowcase } from "@/components/property-showcase";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";

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

export const metadata: Metadata = {
  title: "Propiedades disponibles | MAPEREZ",
  description:
    "Casa, departamento y terreno. Revisa propiedades en venta y arriendo con Propiedades MAPEREZ.",
};

export default function PropiedadesPage() {
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

      <SiteHeader whatsappHref={WHATSAPP} active="propiedades" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-4 pt-2 sm:px-8">
        <p className="text-sm text-white/45">
          <Link href="/" className="hover:text-white">
            Inicio
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white/75">Propiedades</span>
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Todas las propiedades
        </h1>
        <p className="mt-3 max-w-2xl text-base text-white/60">
          Explora las opciones disponibles y consulta por WhatsApp.
        </p>
      </div>

      <PropertyShowcase
        terrenoHref={WHATSAPP_TERRENO}
        casaHref={WHATSAPP_CASA}
        deptoHref={WHATSAPP_DEPTO}
        showHeader={false}
      />

      <footer className="relative z-10 border-t border-white/[0.08] py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-center sm:flex-row sm:px-8 sm:text-left">
          <p className="text-sm font-medium text-white/75">
            Propiedades y servicios Maperez spa
          </p>
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} MAPEREZ · Todos los derechos reservados
          </p>
          <a href={`tel:${PHONE}`} className="text-sm text-white/60 hover:text-white">
            {DISPLAY_PHONE}
          </a>
        </div>
      </footer>

      <WhatsAppFloat href={WHATSAPP} phone={DISPLAY_PHONE} />
    </main>
  );
}
