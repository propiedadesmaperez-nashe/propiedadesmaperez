"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BedDouble, MapPin, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildProperties, type PropertyLinks } from "@/components/property-showcase";

export function PropertyHighlight({
  casaHref,
  terrenoHref,
  deptoHref,
}: PropertyLinks) {
  const property = buildProperties({ casaHref, terrenoHref, deptoHref })[0];
  const cover = property.images[0];

  return (
    <section
      id="destacada"
      className="relative z-10 border-t border-white/[0.08] bg-[#12101f]/80 py-14 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_20%,rgba(196,90,28,0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4783a]">
            Destacada
          </p>
          <h3 className="mt-3 font-[family-name:var(--font-sora)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Propiedad en evidencia
          </h3>
          <p className="mt-3 text-base text-white/60">
            Una selección del mes. Revise el catálogo completo cuando desee.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-[#1a1730]/90 sm:mt-12 lg:grid lg:grid-cols-2">
          <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:min-h-[420px]">
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12101f]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#12101f]/40" />
            <div className="absolute left-4 top-4 flex gap-2">
              {property.badges.map((badge, i) => (
                <span
                  key={badge}
                  className={
                    i === 0
                      ? "rounded-md bg-[#c45a1c] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white"
                      : "rounded-md bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1a1730]"
                  }
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4783a]">
              {property.type}
            </p>
            <h4 className="mt-3 font-[family-name:var(--font-sora)] text-2xl font-bold leading-snug text-white sm:text-3xl">
              {property.title}
            </h4>
            <div className="mt-3 flex items-start gap-2 text-[#9aabba]">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <p className="text-sm font-medium leading-snug">{property.location}</p>
            </div>
            {property.price ? (
              <p className="mt-5 font-[family-name:var(--font-sora)] text-2xl font-bold text-white">
                {property.price}
              </p>
            ) : null}
            <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-white/65">
              {property.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-3 text-sm text-white/80">
              <li className="inline-flex items-center gap-2">
                <BedDouble className="size-4 text-[#d4783a]" />
                3 dormitorios
              </li>
              <li className="inline-flex items-center gap-2">
                <Maximize2 className="size-4 text-[#d4783a]" />
                57 m²
              </li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-12 gap-2 rounded-xl bg-[#c45a1c] px-6 text-[15px] font-semibold text-white hover:bg-[#d4783a]"
              >
                <Link href="/propiedades">
                  Ver todas las propiedades
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-xl border-white/20 bg-white/[0.04] px-6 text-[15px] font-semibold text-white hover:bg-white/10 hover:text-white"
              >
                <Link href={`/propiedades#${property.id}`}>Ver detalle</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
