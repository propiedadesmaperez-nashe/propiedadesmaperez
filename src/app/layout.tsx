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
        url: site.logo,
        width: 900,
        height: 900,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
    images: [site.logo],
  },
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
      image: absoluteUrl(site.logo),
      description: site.description,
      telephone: site.phone,
      priceRange: "$$",
      areaServed: {
        "@type": "Country",
        name: "Chile",
      },
      employee: {
        "@type": "Person",
        name: site.person,
        jobTitle: site.role,
        telephone: site.phone,
      },
      sameAs: [`https://wa.me/${site.phone.replace("+", "")}`],
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
