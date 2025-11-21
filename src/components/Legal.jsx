export default function Legal() {
  return (
    <section className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 text-sm text-blue-200/80">
          <div>
            <h3 className="text-white font-semibold">Información legal</h3>
            <div className="mt-2 flex gap-4">
              <a href="#" className="hover:text-white">Condiciones de uso</a>
              <a href="#" className="hover:text-white">Aviso legal</a>
            </div>
          </div>
          <div className="md:text-right">
            © {new Date().getFullYear()} TGAgout. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </section>
  )
}
