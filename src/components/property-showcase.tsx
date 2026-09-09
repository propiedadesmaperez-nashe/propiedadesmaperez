"use client";

import Image from "next/image";
import { useState, type ComponentType, type MouseEvent } from "react";
import {
  BadgeDollarSign,
  Bath,
  BedDouble,
  Building2,
  Bus,
  ParkingCircle,
  ChevronLeft,
  ChevronRight,
  Bolt,
  Fence,
  FileCheck2,
  MapPin,
  Maximize2,
  Home,
  School,
  Shield,
  LandPlot,
  Waves,
  Dog,
  ArrowUpDown,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

type Feature = {
  icon: ComponentType<{ className?: string }>;
  label: string;
};

export type Property = {
  id: string;
  type: "Casa" | "Terreno" | "Departamento";
  badges: string[];
  location: string;
  title: string;
  description: string;
  price?: string;
  features: Feature[];
  images: { src: string; alt: string }[];
  whatsappHref: string;
};

const TERRENO_IMAGES = [
  {
    src: "/propiedades/talagante/vista-01.jpg",
    alt: "Terreno en Talagante Peñaflor junto a avenida principal",
  },
  {
    src: "/propiedades/talagante/vista-02.jpg",
    alt: "Vista del terreno en Talagante Peñaflor con cerros al fondo",
  },
];

const DEPTO_IMAGES = Array.from({ length: 14 }, (_, i) => ({
  src: `/propiedades/depto-cerrillos/foto-${String(i + 1).padStart(2, "0")}.webp`,
  alt: `Departamento Cerrillos — foto ${i + 1}`,
}));

export type PropertyLinks = {
  casaHref: string;
  terrenoHref: string;
  deptoHref: string;
};

function typeIcon(type: Property["type"]) {
  if (type === "Terreno") return LandPlot;
  if (type === "Departamento") return Building2;
  return Home;
}

export function buildProperties({
  casaHref,
  terrenoHref,
  deptoHref,
}: PropertyLinks): Property[] {
  return [
    {
      id: "depto-cerrillos",
      type: "Departamento",
      badges: ["Se vende"],
      location: "Av. Departamental 4570, Cerrillos",
      title: "Departamento en Cerrillos 3D+1B+1E",
      description:
        "Venta departamento en Cerrillos (2023). 3 dormitorios, 1 baño y 1 estacionamiento. 57 m² totales, terraza, ascensor, piscina y admite mascotas. Torre 2, unidad 407. Condominio cerrado con seguridad 24 horas. Gastos comunes desde $100.000.",
      price: "$103.000.000",
      features: [
        { icon: BadgeDollarSign, label: "$103.000.000" },
        { icon: BedDouble, label: "3 dormitorios" },
        { icon: Bath, label: "1 baño" },
        { icon: ParkingCircle, label: "1 estacionamiento" },
        { icon: Maximize2, label: "57 m²" },
        { icon: ArrowUpDown, label: "Ascensor" },
        { icon: Sun, label: "Terraza" },
        { icon: Waves, label: "Piscina" },
        { icon: Dog, label: "Admite mascotas" },
        { icon: Shield, label: "Seguridad 24h" },
        { icon: Building2, label: "Torre 2 · 407" },
        { icon: FileCheck2, label: "3 años antigüedad" },
      ],
      images: DEPTO_IMAGES,
      whatsappHref: deptoHref,
    },
    {
      id: "casa-talagante",
      type: "Casa",
      badges: ["Se vende"],
      location: "Talagante · Avenida principal",
      title: "Casa en Talagante",
      description:
        "Se vende casa en Talagante sin estacionamiento. Sin hipoteca, 3 dormitorios y 1 baño. En avenida principal con locomoción, colegios, bomberos y carabineros cerca.",
      price: "1.300 UF",
      features: [
        { icon: BadgeDollarSign, label: "1.300 UF" },
        { icon: FileCheck2, label: "Sin hipoteca" },
        { icon: BedDouble, label: "3 dormitorios" },
        { icon: Bath, label: "1 baño" },
        { icon: ParkingCircle, label: "Sin estacionamiento" },
        { icon: Bus, label: "Locomoción" },
        { icon: School, label: "Colegios cerca" },
        { icon: Shield, label: "Bomberos y Carabineros" },
      ],
      images: [
        {
          src: "/propiedades/casa-talagante/foto-02.jpg",
          alt: "Casa en Talagante, fachada con cartel Se Vende",
        },
        {
          src: "/propiedades/casa-talagante/foto-01.jpg",
          alt: "Casa en Talagante, avenida principal",
        },
      ],
      whatsappHref: casaHref,
    },
    {
      id: "terreno-talagante",
      type: "Terreno",
      badges: ["Se vende", "Se arrienda"],
      location: "Sector Talagante · Peñaflor",
      title: "Terreno 2.800 m² en avenida principal",
      description:
        "Se vende o arrienda terreno sector Talagante Peñaflor ubicado en avenida principal. Son 2.800 m² con rol propio, luz y cierre de hormigón, con casa sin terminar.",
      features: [
        { icon: Maximize2, label: "2.800 m²" },
        { icon: FileCheck2, label: "Rol propio" },
        { icon: Bolt, label: "Luz" },
        { icon: Fence, label: "Cierre de hormigón" },
        { icon: Home, label: "Casa sin terminar" },
        { icon: MapPin, label: "Av. principal" },
      ],
      images: TERRENO_IMAGES,
      whatsappHref: terrenoHref,
    },
  ];
}

export function PropertyCard({ property }: { property: Property }) {
  const [index, setIndex] = useState(0);
  const images = property.images;
  const TypeIcon = typeIcon(property.type);
  const total = images.length;

  const goPrev = (e?: MouseEvent) => {
    e?.stopPropagation();
    setIndex((i) => (i - 1 + total) % total);
  };

  const goNext = (e?: MouseEvent) => {
    e?.stopPropagation();
    setIndex((i) => (i + 1) % total);
  };

  return (
    <article
      id={property.id}
      className="w-full max-w-full overflow-hidden rounded-2xl border border-white/[0.1] bg-[#1a1730]/70 shadow-[0_20px_48px_rgba(0,0,0,0.3)]"
    >
      <div className="flex flex-wrap items-center gap-3 border-b border-white/[0.08] bg-white/[0.02] px-4 py-3.5 sm:px-6">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#c45a1c]/15 text-[#d4783a]">
          <TypeIcon className="size-4" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-white">{property.type}</p>
          <p className="truncate text-xs text-white/45">{property.location}</p>
        </div>
        {property.price ? (
          <span className="shrink-0 rounded-md bg-white px-3 py-1.5 text-sm font-bold text-[#1a1730]">
            {property.price}
          </span>
        ) : null}
      </div>

      <div className="min-w-0">
        <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10]">
          <Image
            key={images[index].src}
            src={images[index].src}
            alt={images[index].alt}
            fill
            sizes="100vw"
            className="object-cover"
            draggable={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#12101f]/75 via-transparent to-transparent" />
          <div className="absolute left-3 top-3 z-20 flex flex-wrap gap-2">
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

          {total > 1 ? (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Foto anterior"
                className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white ring-1 ring-white/25 sm:left-4 sm:h-12 sm:w-12"
              >
                <ChevronLeft className="size-6" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Foto siguiente"
                className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white ring-1 ring-white/25 sm:right-4 sm:h-12 sm:w-12"
              >
                <ChevronRight className="size-6" />
              </button>
            </>
          ) : null}

          <p className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
            {index + 1} / {total}
          </p>
        </div>

        {total > 1 ? (
          <div className="min-w-0 overflow-x-auto border-t border-white/[0.08] bg-[#12101f]/80 p-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max gap-2">
              {images.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Ver foto ${i + 1}`}
                  className={`relative h-12 w-12 overflow-hidden rounded-lg border-2 sm:h-14 sm:w-14 ${
                    i === index
                      ? "border-[#d4783a] opacity-100"
                      : "border-transparent opacity-45"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="min-w-0 p-5 sm:p-7">
        <div className="flex items-start gap-2 text-[#9aabba]">
          <MapPin className="mt-0.5 size-4 shrink-0" />
          <p className="text-sm font-medium leading-snug">{property.location}</p>
        </div>
        <h4 className="mt-3 break-words font-[family-name:var(--font-sora)] text-xl font-bold leading-snug text-white sm:text-2xl">
          {property.title}
        </h4>
        <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-[15px]">
          {property.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {property.features.map((f) => (
            <li
              key={f.label}
              className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-3 py-2"
            >
              <f.icon className="size-3.5 shrink-0 text-[#d4783a]" />
              <span className="text-xs font-semibold text-white/85">
                {f.label}
              </span>
            </li>
          ))}
        </ul>

        <Button
          asChild
          className="mt-6 h-14 w-full gap-2 rounded-xl bg-[#1f9a52] text-[15px] font-semibold text-white hover:bg-[#188a48]"
        >
          <a
            href={property.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="block size-5 shrink-0" />
            Contáctenos
          </a>
        </Button>
      </div>
    </article>
  );
}

type PropertyShowcaseProps = PropertyLinks & {
  showHeader?: boolean;
};

export function PropertyShowcase({
  terrenoHref,
  casaHref,
  deptoHref,
  showHeader = true,
}: PropertyShowcaseProps) {
  const properties = buildProperties({ casaHref, terrenoHref, deptoHref });

  return (
    <section
      id="propiedades"
      className="relative z-10 overflow-x-hidden border-t border-white/[0.08] bg-[#12101f]/70 py-12 sm:py-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_20%_0%,rgba(196,90,28,0.1),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_90%_80%,rgba(106,125,143,0.14),transparent_45%)]" />

      <div className="relative mx-auto w-full max-w-3xl px-4 sm:px-6">
        {showHeader ? (
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4783a]">
              Catálogo
            </p>
            <h3 className="mt-4 font-[family-name:var(--font-sora)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Propiedades disponibles
            </h3>
            <p className="mt-3 text-base text-white/60">
              Departamento, casa y terreno. Revise el detalle y contáctenos.
            </p>
          </div>
        ) : null}

        <div
          className={`flex flex-col gap-12 ${showHeader ? "mt-10 sm:mt-12" : ""}`}
        >
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
