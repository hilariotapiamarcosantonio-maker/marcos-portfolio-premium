import type { Metadata, Viewport } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { siteUrl } from "@/content/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0e0e0e",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Marcos Hilario | Arquitectura Digital Premium para Captación, Ventas y Control Comercial",
    template: "%s | Marcos Hilario",
  },
  description:
    "No construyo páginas web. Diseño infraestructura digital premium para negocios que necesitan captar clientes, controlar prospectos, automatizar procesos y escalar con autoridad.",
  keywords: [
    "arquitectura digital",
    "crm",
    "automatización",
    "dashboards comerciales",
    "landing premium",
    "ecosistema digital",
    "consultor estratégico digital",
    "Marcos Hilario",
  ],
  authors: [{ name: "Marcos Hilario", url: siteUrl }],
  creator: "Marcos Hilario",
  publisher: "Marcos Hilario",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Marcos Hilario | Arquitectura Digital Premium para Captación, Ventas y Control Comercial",
    description:
      "Infraestructura digital premium para captar clientes, ordenar prospectos, automatizar procesos, organizar ventas y operar con autoridad.",
    url: siteUrl,
    siteName: "Marcos Hilario",
    locale: "es_DO",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Marcos Hilario - Arquitectura Digital de Alto Rendimiento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Marcos Hilario | Arquitectura Digital Premium para Captación, Ventas y Control Comercial",
    description:
      "Infraestructura digital premium para negocios que venden servicios, proyectos y tickets altos.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${jakarta.variable} ${manrope.variable} bg-surface font-body text-tertiary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
