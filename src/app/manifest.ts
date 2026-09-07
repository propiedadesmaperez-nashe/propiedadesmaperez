import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "MAPEREZ",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#12101f",
    theme_color: "#12101f",
    lang: "es-CL",
    icons: [
      {
        src: "/icon.png",
        sizes: "900x900",
        type: "image/png",
        purpose: "any",
      },
      {
        src: site.logo,
        sizes: "900x900",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
