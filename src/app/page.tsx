import About from "@/components/About";
import Audit from "@/components/Audit";
import Cases from "@/components/Cases";
import Credibility from "@/components/Credibility";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Navbar from "@/components/Navbar";
import Offers from "@/components/Offers";
import { offers, siteUrl } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Marcos Hilario",
  url: siteUrl,
  description:
    "Arquitectura digital premium para negocios que necesitan captar clientes, ordenar prospectos, automatizar procesos y operar con autoridad.",
  slogan:
    "No construyo páginas web. Construyo infraestructura digital para vender con autoridad.",
  areaServed: ["República Dominicana", "Latinoamérica"],
  brand: "Marcos Hilario",
  inLanguage: "es-DO",
  knowsAbout: [
    "Arquitectura digital",
    "CRM",
    "Automatización comercial",
    "Dashboards de negocio",
    "Landing pages de conversión",
  ],
  serviceType: [
    "Auditoría Digital Estratégica",
    "Sistema Comercial Premium",
    "Ecosistema Digital Completo",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios estratégicos",
    itemListElement: offers.map((offer, index) => ({
      "@type": "Offer",
      position: index + 1,
      itemOffered: {
        "@type": "Service",
        name: offer.name,
        description: offer.summary,
      },
    })),
  },
};

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(224,194,159,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(163,157,147,0.1),transparent_24%)]"
      />

      <Navbar />
      <Hero />
      <Credibility />
      <About />
      <Manifesto />
      <Cases />
      <Offers />
      <Audit />

      <footer className="border-t border-outline-variant/10 py-14">
        <div className="container mx-auto flex flex-col gap-4 px-6 text-center md:px-12">
          <p className="mx-auto max-w-2xl text-sm leading-7 text-secondary">
            Infraestructura digital para negocios que necesitan vender con
            control, automatizar con criterio y escalar con una presencia
            premium.
          </p>
          <a
            href={siteUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[10px] uppercase tracking-[0.35em] text-outline transition-colors hover:text-primary"
          >
            © 2026 Marcos Hilario. Arquitectura Digital de Alto Rendimiento.
          </a>
        </div>
      </footer>
    </main>
  );
}
