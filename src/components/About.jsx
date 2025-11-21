export default function About() {
  return (
    <section id="sobre" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-white">La empresa</h2>
            <p className="mt-3 text-blue-200/80">
              Con origen en 1986, hemos crecido junto a nuestros clientes ofreciendo un servicio de transporte terrestre
              y logística enfocada en la personalización, la seguridad y el cumplimiento de plazos.
            </p>
            <p className="mt-3 text-blue-200/80">
              Operamos desde nuestra base en Viladecans/Gavà y desde la nueva oficina y almacén en El Papiol (Carrer
              Gutenberg 14-16), lo que nos permite atender con rapidez tanto a nivel nacional como internacional.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[4/3] w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center border border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
