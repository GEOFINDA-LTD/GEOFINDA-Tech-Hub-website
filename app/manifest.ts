import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GEOFINDA Tech Hub",
    short_name: "GEOFINDA",
    description:
      "We build, advise, support, and extend technology capabilities with clarity and care.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0C5876",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
