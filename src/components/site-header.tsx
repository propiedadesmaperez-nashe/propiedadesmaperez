import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function SiteHeader({
  whatsappHref,
  active = "inicio",
}: {
  whatsappHref: string;
  active?: "inicio" | "propiedades" | "nosotros" | "servicios";
}) {
  const link = (href: string, key: typeof active, label: string) => (
    <Link
      href={href}
      className={`rounded-lg px-2.5 py-1.5 text-[13px] font-semibold transition sm:px-3 sm:py-2 sm:text-sm ${
        active === key ? "text-white" : "text-white/50 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );

  return (
      <header className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-2.5 overflow-visible px-4 py-3 sm:flex-row sm:justify-between sm:gap-4 sm:px-8 sm:py-5">
      <Link href="/" className="shrink-0 overflow-visible">
        <BrandLogo size="lg" priority />
      </Link>
      <nav className="flex flex-nowrap items-center justify-center gap-0.5 sm:gap-1">
        {link("/", "inicio", "Inicio")}
        {link("/propiedades", "propiedades", "Propiedades")}
        {link("/servicios", "servicios", "Servicios")}
        {link("/nosotros", "nosotros", "Nosotros")}
        <Button
          asChild
          className="ml-1 size-9 shrink-0 rounded-lg bg-[#1f9a52] p-0 text-white hover:bg-[#188a48] sm:ml-2 sm:h-10 sm:w-auto sm:gap-2 sm:px-4"
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contáctenos por WhatsApp"
          >
            <WhatsAppIcon className="block size-4 shrink-0" />
            <span className="hidden sm:inline">Contáctenos</span>
          </a>
        </Button>
      </nav>
    </header>
  );
}
