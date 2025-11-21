export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-24">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center py-16">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Nueva página web en español para tu marca
            </h1>
            <p className="mt-5 text-lg text-blue-100/90">
              Hemos preparado una versión moderna, rápida y adaptable a móviles. Comparte el texto e imágenes que quieras usar y la publicaremos al instante.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contacto" className="px-5 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors">Solicitar contenido</a>
              <a href="#servicios" className="px-5 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-colors">Ver secciones</a>
            </div>
          </div>
          <div>
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-4 shadow-2xl">
              <div className="aspect-[16/10] w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
            <p className="mt-3 text-sm text-blue-200/70">Imagen de ejemplo. Sustituiremos por tus propias fotos y logotipo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
