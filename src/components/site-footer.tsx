import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { site } from "@/lib/site";

export function SiteFooter({
  whatsappHref,
}: {
  whatsappHref: string;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#0e0c18]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c45a1c]/50 to-transparent" />
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.9fr] lg:gap-12">
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <Link href="/" className="inline-flex">
              <BrandLogo size="sm" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              {site.legalName}. Gestión inmobiliaria, asesoría y soluciones
              hipotecarias.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4783a]">
              Navegación
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/propiedades"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  Propiedades
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4783a]">
              Contacto
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white"
                >
                  <Phone className="size-3.5 shrink-0 text-[#d4783a]" />
                  Llámenos {site.displayPhone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white"
                >
                  <Mail className="size-3.5 shrink-0 text-[#d4783a]" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-white"
                >
                  <WhatsAppIcon className="block size-3.5 shrink-0 text-[#1f9a52]" />
                  Contáctenos
                </a>
              </li>
              <li>
                <p className="text-sm text-white/45">{site.person}</p>
                <p className="mt-0.5 text-xs text-white/35">{site.role}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/40">
            © {year} {site.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/30">propiedadesmaperez.cl</p>
        </div>
      </div>
    </footer>
  );
}
