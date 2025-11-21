export default function About() {
  return (
    <section id="sobre" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-white">Sobre nosotros</h2>
            <p className="mt-3 text-blue-200/80">
              Esta sección contendrá la historia, misión y valores de la empresa. Una vez tengamos el contenido de la página original, lo traeremos aquí de forma fiel y organizada.
            </p>
            <p className="mt-3 text-blue-200/80">
              El diseño está preparado para textos largos o breves, e incluye un estilo moderno y legible tanto en ordenador como en móvil.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[4/3] w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center border border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
