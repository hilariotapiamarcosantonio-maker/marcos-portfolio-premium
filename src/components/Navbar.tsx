"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 transition-all duration-500 ${scrolled ? 'bg-surface/90 border-b border-outline-variant/20 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="text-xl font-bold tracking-[0.2em] text-tertiary uppercase font-headline">MARCOS HILARIO</div>
      <div className="hidden md:flex gap-10 items-center uppercase text-[10px] tracking-widest text-secondary font-bold">
        <a href="#manifesto" className="hover:text-primary transition-colors">Manifesto</a>
        <a href="#cases" className="hover:text-primary transition-colors">Cases</a>
        <a href="#audit" className="border-l border-outline-variant/30 pl-10 hover:text-primary transition-colors">Audit</a>
      </div>
      <button className="bg-primary text-on-primary px-6 py-3 font-bold text-xs hover:scale-105 transition-transform">SOLICITAR AUDITORÍA</button>
    </nav>
  );
}
