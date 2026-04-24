"use client";

import { useEffect, useState } from "react";
import { ctaLabels, navigationLinks } from "@/content/site";

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
          ? "border-b border-outline-variant/18 bg-surface/80 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl"
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
          className="bronze-glow rounded-full px-3 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-on-primary shadow-[0_12px_40px_rgba(224,194,159,0.18)] transition-transform hover:-translate-y-0.5 sm:px-4 sm:text-[10px] md:px-6 md:tracking-[0.26em]"
        >
          {ctaLabels.navbar}
        </a>
      </div>
    </nav>
  );
}
