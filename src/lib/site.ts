export const SITE_URL = "https://propiedadesmaperez.cl";

export const site = {
  url: SITE_URL,
  name: "Propiedades MAPEREZ",
  legalName: "Propiedades Maperez SPA",
  title: "Propiedades MAPEREZ | María Angélica Pérez",
  description:
    "Gestión inmobiliaria, asesoría en arriendos y ventas, créditos hipotecarios, mutuos y leasing habitacional. Propiedades Maperez SPA.",
  person: "María Angélica Pérez",
  role: "Asesor Hipotecario y Corredora de Propiedades",
  phone: "+56977239283",
  displayPhone: "+56 9 7723 9283",
  email: "propiedadesmape@gmail.com",
  locale: "es_CL",
  logo: "/logo-maperez.png",
  keywords: [
    "Propiedades MAPEREZ",
    "Propiedades Maperez SPA",
    "María Angélica Pérez",
    "corredora de propiedades Chile",
    "asesor hipotecario",
    "subsidio leasing habitacional",
    "crédito mutuo hipotecario",
    "gestión inmobiliaria",
    "compra venta arriendo inmuebles",
  ],
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
