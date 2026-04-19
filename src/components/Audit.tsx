"use client";
import { motion } from "framer-motion";

export default function Audit() {
  return (
    <section id="audit" className="py-40 bg-surface border-t border-outline-variant/10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-surface-container-high p-12 md:p-24 text-center border border-primary/10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
          
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-tertiary mb-8">
            ¿Está su negocio listo para la soberanía?
          </h2>
          <p className="text-secondary font-light text-lg mb-12 max-w-2xl mx-auto">
            Evaluamos su infraestructura actual y diseñamos una ruta crítica para la digitalización de alto nivel. Sin compromisos, solo arquitectura pura.
          </p>
          
          <div className="flex flex-col items-center">
            <button className="bg-primary text-on-primary px-12 py-6 font-bold text-kern-wide uppercase text-sm bronze-glow hover:brightness-110 active:scale-95 transition-all mb-8 shadow-[0_0_30px_rgba(224,194,159,0.2)]">
              Solicitar Auditoría de Sistema
            </button>
            <p className="text-outline text-[10px] uppercase tracking-[0.3em] font-bold">
              Cupos limitados por mes para consultoría directa
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
