import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", weight: ["700", "800"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", weight: ["300", "400", "600"] });

export const metadata: Metadata = {
  title: "Marcos Hilario | Arquitectura Digital & Soberanía Comercial",
  description: "Diseño de ecosistemas premium e infraestructuras de alta conversión para negocios de alto rendimiento.",
  openGraph: {
    title: "Marcos Hilario | Arquitecto Digital",
    description: "Soberanía tecnológica y automatización industrial.",
    type: "website",
    locale: "es_DO",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className={`${jakarta.variable} ${manrope.variable} antialiased bg-surface text-on-background`}>
        {children}
      </body>
    </html>
  );
}
