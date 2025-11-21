export default function Fleet() {
  return (
    <section id="flota" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white">Nuestra flota</h2>
            <p className="mt-3 text-blue-200/80">
              Parque móvil versátil y en constante renovación para ajustarse a cada proyecto. Mantenemos un
              compromiso absoluto con la seguridad y el mantenimiento preventivo para minimizar incidencias y
              asegurar los plazos.
            </p>
            <ul className="mt-6 space-y-3 text-blue-200/80">
              <li>• Furgonetas y carrozados para entregas ágiles y urbanas</li>
              <li>• Camiones con lona y semirremolques para cargas de gran tamaño</li>
              <li>• Equipos adaptados para stands y material ferial</li>
              <li>• Elementos de sujeción y protección homologados</li>
            </ul>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-3">
              {[
                'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1200&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1516239322121-08ad3f56d129?q=80&w=1200&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop',
              ].map((src, i) => (
                <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
                  <img src={src} alt="Flota TGAgout" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm text-blue-200/70">Imágenes de referencia; sustituiremos por fotos reales de la flota.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
