import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function SiteHeader({
  whatsappHref,
  active = "inicio",
}: {
  whatsappHref: string;
  active?: "inicio" | "propiedades";
}) {
  return (
    <header className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-4 overflow-visible px-5 py-5 sm:flex-row sm:justify-between sm:px-8 sm:py-6">
      <Link href="/" className="shrink-0 overflow-visible">
        <BrandLogo size="lg" priority />
      </Link>
      <nav className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
        <Link
          href="/"
          className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
            active === "inicio"
              ? "text-white"
              : "text-white/50 hover:text-white"
          }`}
        >
          Inicio
        </Link>
        <Link
          href="/propiedades"
          className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
            active === "propiedades"
              ? "text-white"
              : "text-white/50 hover:text-white"
          }`}
        >
          Propiedades
        </Link>
        <Button
          asChild
          className="h-10 gap-2 rounded-lg bg-[#1f9a52] px-3 text-sm font-semibold text-white hover:bg-[#188a48] sm:px-4"
        >
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="block size-4 shrink-0" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </Button>
      </nav>
    </header>
  );
}
