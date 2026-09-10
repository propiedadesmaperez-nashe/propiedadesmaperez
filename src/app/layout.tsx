import type { Metadata, Viewport } from "next";
import { Outfit, Sora } from "next/font/google";
import { SITE_URL, absoluteUrl, site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: site.title,
    template: "%s | MAPEREZ",
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.person, url: SITE_URL }],
  creator: site.person,
  publisher: site.legalName,
  applicationName: site.name,
  category: "real estate",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
    languages: {
      "es-CL": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: SITE_URL,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: "Departamento en venta — Propiedades MAPEREZ",
      },
      {
        url: site.logo,
        width: 900,
        height: 900,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.ogImage],
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  appleWebApp: {
    capable: true,
    title: "MAPEREZ",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#12101f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: site.name,
      description: site.description,
      inLanguage: "es-CL",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "RealEstateAgent",
      "@id": `${SITE_URL}/#organization`,
      name: site.name,
      legalName: site.legalName,
      url: SITE_URL,
      logo: absoluteUrl(site.logo),
      image: absoluteUrl(site.ogImage),
      description: site.description,
      telephone: site.phone,
      email: site.email,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressCountry: "CL",
        addressLocality: "Santiago",
      },
      areaServed: [
        { "@type": "Country", name: "Chile" },
        { "@type": "AdministrativeArea", name: "Región Metropolitana" },
        { "@type": "City", name: "Cerrillos" },
        { "@type": "City", name: "Talagante" },
        { "@type": "City", name: "Peñaflor" },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: site.phone,
          contactType: "customer service",
          availableLanguage: ["Spanish"],
          email: site.email,
        },
      ],
      employee: {
        "@type": "Person",
        name: site.person,
        jobTitle: site.role,
        telephone: site.phone,
        email: site.email,
      },
      sameAs: [`https://wa.me/${site.phone.replace("+", "")}`],
      knowsAbout: [
        "Compra de propiedades",
        "Venta de propiedades",
        "Arriendos",
        "Crédito hipotecario",
        "Leasing habitacional",
        "Subsidio habitacional",
      ],
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CL"
      className={`${outfit.variable} ${sora.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body
        className={`${outfit.className} flex min-h-full flex-col bg-[#12101f] text-[#f2f0eb]`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
