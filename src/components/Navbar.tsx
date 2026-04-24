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
          ? "border-b border-outline-variant/18 bg-surface/84 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div
        className={`content-shell flex items-center justify-between transition-[padding] duration-300 ${
          scrolled ? "py-3 md:py-3" : "py-4 md:py-[1.1rem]"
        }`}
      >
        <a
          href="#top"
          className="font-headline text-xs font-extrabold uppercase tracking-[0.32em] text-tertiary transition-colors hover:text-primary md:text-sm"
        >
          Marcos Hilario
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] font-semibold uppercase tracking-[0.26em] text-secondary transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#audit"
          className={`bronze-glow rounded-full font-bold uppercase text-on-primary shadow-[0_12px_40px_rgba(224,194,159,0.16)] transition-[transform,padding,letter-spacing,font-size] duration-300 hover:-translate-y-0.5 ${
            scrolled
              ? "px-3 py-2.5 text-[8.5px] tracking-[0.16em] sm:px-3.5 md:px-4 md:text-[9.5px] md:tracking-[0.2em]"
              : "px-3.5 py-3 text-[9px] tracking-[0.18em] sm:px-4 md:px-5 md:text-[10px] md:tracking-[0.24em]"
          }`}
        >
          {ctaLabels.navbar}
        </a>
      </div>
    </nav>
  );
}
