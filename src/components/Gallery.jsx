export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b1cb7e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <section id="galeria" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">Galería</h2>
            <p className="mt-2 text-blue-200/80">Sustituiremos estas imágenes por las originales de tu sitio.</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
              <img src={src} alt="Imagen de ejemplo" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
