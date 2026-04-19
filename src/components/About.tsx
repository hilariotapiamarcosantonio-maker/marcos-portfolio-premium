"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 bg-surface-container-lowest">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] bg-surface-container-high overflow-hidden border border-outline-variant/20"
          >
            {/* Aquí irá tu foto profesional. Por ahora un placeholder de alta calidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10"></div>
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974')] bg-cover bg-center grayscale contrast-125"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-[10px] tracking-[0.3em] uppercase block mb-6">El Arquitecto</span>
            <h2 className="text-4xl md:text-6xl font-headline font-bold text-tertiary mb-8">Marcos Hilario.</h2>
            <p className="text-secondary text-lg font-light leading-relaxed mb-6">
              Estratega de negocios y arquitecto de infraestructuras digitales con base en Santo Domingo Este. Mi enfoque no es el diseño decorativo, sino la ingeniería de sistemas soberanos.
            </p>
            <p className="text-secondary text-lg font-light leading-relaxed mb-10">
              Especializado en transformar negocios físicos en ecosistemas automatizados que operan bajo sus propias reglas, eliminando la fricción y escalando la autoridad de marca.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-outline-variant/10 pt-10">
              <div>
                <h4 className="text-tertiary font-bold text-xs uppercase tracking-widest mb-2">Visión</h4>
                <p className="text-outline text-sm">Soberanía Tecnológica Absoluta.</p>
              </div>
              <div>
                <h4 className="text-tertiary font-bold text-xs uppercase tracking-widest mb-2">Ejecución</h4>
                <p className="text-outline text-sm">Ingeniería de Alto Rendimiento.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
