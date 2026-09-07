export const SITE_URL = "https://propiedadesmaperez.cl";

export const site = {
  url: SITE_URL,
  name: "Propiedades MAPEREZ",
  legalName: "Propiedades y servicios Maperez spa",
  title: "Propiedades MAPEREZ | María Angélica Pérez",
  description:
    "Corredora de propiedades y asesoría hipotecaria en Chile. Compra, venta, arriendo, crédito mutuo y subsidio leasing habitacional con María Angélica Pérez.",
  person: "María Angélica Pérez",
  role: "Asesor Hipotecario y Corredora de Propiedades",
  phone: "+56977239283",
  displayPhone: "+56 9 7723 9283",
  locale: "es_CL",
  logo: "/logo-maperez.png",
  keywords: [
    "Propiedades MAPEREZ",
    "María Angélica Pérez",
    "corredora de propiedades Chile",
    "asesor hipotecario",
    "subsidio leasing habitacional",
    "crédito mutuo hipotecario",
    "propiedades Talagante",
    "departamento Cerrillos",
    "compra venta arriendo inmuebles",
  ],
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
