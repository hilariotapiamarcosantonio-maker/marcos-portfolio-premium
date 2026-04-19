export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-10 grayscale"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h6 className="text-primary text-kern-widest uppercase mb-6 font-bold text-xs">Arquitectura Digital Premium</h6>
        <h1 className="text-5xl md:text-8xl font-headline font-extrabold text-tertiary leading-tight mb-8 max-w-5xl mx-auto">Soberanía Digital para Marcas de Alto Rendimiento.</h1>
        <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">Ecosistemas que eliminan la dependencia externa y optimizan el crecimiento escalable.</p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button className="bg-primary text-on-primary px-10 py-5 font-bold uppercase text-xs bronze-glow shadow-2xl">Iniciar Auditoría</button>
          <button className="text-tertiary px-10 py-5 font-bold uppercase text-xs border border-outline/30 hover:bg-white/5 transition-all">Ver Ecosistemas</button>
        </div>
      </div>
    </section>
  );
}
