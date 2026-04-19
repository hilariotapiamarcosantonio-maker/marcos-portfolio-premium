"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Manifesto from "@/components/Manifesto";
import Cases from "@/components/Cases";
import Audit from "@/components/Audit";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <main className="relative bg-surface">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-surface"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-primary font-headline font-bold text-4xl tracking-[0.5em]"
            >
              MH
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      <Hero />
      <About />
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
