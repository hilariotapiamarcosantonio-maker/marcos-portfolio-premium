import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Cases from "@/components/Cases";
import Audit from "@/components/Audit";

export default function Home() {
  return (
    <main className="relative bg-surface">
      <Navbar />
      <Hero />
      <Manifesto />
      <Cases />
      <Audit />
      <footer className="py-20 text-center border-t border-outline-variant/5">
        <p className="text-outline text-[10px] uppercase tracking-widest">
          © 2026 Marcos Hilario. Arquitectura Digital de Alto Rendimiento.
        </p>
      </footer>
    </main>
  );
}
