import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Marcos Hilario | Arquitectura Digital Premium",
  description: "Soberanía Digital para Marcas de Alto Rendimiento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${manrope.variable} ${plusJakartaSans.variable}`}>
      <body className="font-body bg-surface text-on-surface antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
