export const SITE_URL = "https://propiedadesmaperez.cl";

export const site = {
  url: SITE_URL,
  name: "Propiedades MAPEREZ",
  legalName: "Propiedades Maperez SPA",
  title: "Propiedades MAPEREZ | Compra, venta y arriendo en Chile",
  description:
    "Corredora de propiedades y asesoría hipotecaria en Chile. Departamentos, casas y terrenos en Cerrillos y Talagante. Créditos, mutuos, leasing y subsidio habitacional. Contáctenos por WhatsApp.",
  person: "María Angélica Pérez",
  role: "Asesor Hipotecario y Corredora de Propiedades",
  phone: "+56977239283",
  displayPhone: "+56 9 7723 9283",
  email: "propiedadesmape@gmail.com",
  locale: "es_CL",
  logo: "/logo-maperez.png",
  ogImage: "/propiedades/depto-cerrillos/foto-01.webp",
  keywords: [
    "Propiedades MAPEREZ",
    "Propiedades Maperez SPA",
    "María Angélica Pérez",
    "corredora de propiedades Chile",
    "corredora de propiedades Santiago",
    "asesor hipotecario Chile",
    "departamento en venta Cerrillos",
    "casa en venta Talagante",
    "terreno en venta Talagante Peñaflor",
    "propiedades en arriendo Chile",
    "crédito hipotecario",
    "crédito mutuo hipotecario",
    "leasing habitacional",
    "subsidio habitacional",
    "compra venta arriendo inmuebles",
    "gestión inmobiliaria",
  ],
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
