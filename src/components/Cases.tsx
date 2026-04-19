"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Cases() {
  return (
    <section id="cases" className="py-32 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h6 className="text-primary text-[10px] tracking-[0.25em] uppercase mb-4 block font-bold">Evidencia Técnica</h6>
            <h2 className="text-4xl md:text-6xl font-headline font-bold text-tertiary leading-tight">Bóveda de Ecosistemas.</h2>
          </div>
          <div className="text-secondary text-right font-light italic text-sm">Infraestructuras que redefinen el mercado.</div>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div variants={itemVariants} className="md:col-span-7 group relative overflow-hidden h-[500px] bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent z-10"></div>
            <div className="absolute inset-0 z-20 p-12 flex flex-col justify-end">
              <span className="text-primary text-[10px] tracking-widest uppercase mb-2">Santuario Premium</span>
              <h4 className="text-3xl font-headline font-bold text-tertiary mb-4">Kalon Estética & Spa</h4>
              <p className="text-secondary font-light max-w-md text-sm">Arquitectura digital y CRM integrado. Ecosistema diseñado para retener tickets de alto valor.</p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="md:col-span-5 group relative overflow-hidden h-[500px] bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent z-10"></div>
            <div className="absolute inset-0 z-20 p-12 flex flex-col justify-end">
              <span className="text-primary text-[10px] tracking-widest uppercase mb-2">B2B Industrial</span>
              <h4 className="text-2xl font-headline font-bold text-tertiary mb-4">Inox Soluciones</h4>
              <p className="text-secondary font-light text-sm">Optimización de ventas para manufactura e ingeniería de acero.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
