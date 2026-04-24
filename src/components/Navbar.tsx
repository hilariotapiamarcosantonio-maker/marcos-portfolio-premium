"use client";

import { useEffect, useState } from "react";
import { navigationLinks } from "@/content/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Navegación principal"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-outline-variant/20 bg-surface/88 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-5 md:px-12">
        <a
          href="#top"
          className="font-headline text-sm font-extrabold uppercase tracking-[0.32em] text-tertiary transition-colors hover:text-primary md:text-base"
        >
          Marcos Hilario
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#audit"
          className="rounded-full border border-primary/20 bg-primary px-4 py-3 text-[10px] font-bold uppercase tracking-[0.26em] text-on-primary shadow-[0_12px_40px_rgba(224,194,159,0.18)] transition-transform hover:-translate-y-0.5 md:px-6"
        >
          Solicitar auditoría
        </a>
      </div>
    </nav>
  );
}
