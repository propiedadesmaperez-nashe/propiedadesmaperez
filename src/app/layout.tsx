import type { Metadata } from "next";
import { Outfit, Sora } from "next/font/google";
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
  title: "Propiedades MAPEREZ | María Angélica Pérez",
  description:
    "Asesoría hipotecaria, subsidio leasing habitacional, crédito mutuo hipotecario y corredora de propiedades. Propiedades y servicios Maperez spa.",
  openGraph: {
    title: "Propiedades MAPEREZ",
    description:
      "María Angélica Pérez — Asesor Hipotecario y Corredora de Propiedades",
    images: ["/logo-maperez.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${sora.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body
        className={`${outfit.className} flex min-h-full flex-col bg-[#12101f] text-[#f2f0eb]`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
