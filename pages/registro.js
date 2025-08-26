export default function Registro() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6 space-y-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-sm text-gray-500 hover:text-gray-700">&larr; Volver</a>
          <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
        </div>
        <h1 className="text-2xl font-semibold text-gray-800">Crea tu cuenta</h1>
        <form className="space-y-3">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Nombre</label>
            <input type="text" className="w-full rounded-xl border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-red" placeholder="Tu nombre" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input type="email" className="w-full rounded-xl border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-red" placeholder="tucorreo@ejemplo.com" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Contraseña</label>
            <input type="password" className="w-full rounded-xl border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-red" placeholder="••••••••" />
          </div>
          <div className="flex items-center gap-2">
            <input id="tipo-prof" type="radio" name="tipo" className="accent-brand-red" defaultChecked />
            <label htmlFor="tipo-prof">Soy profesional</label>
            <input id="tipo-cliente" type="radio" name="tipo" className="accent-brand-red ml-4" />
            <label htmlFor="tipo-cliente">Soy cliente</label>
          </div>
          <button type="submit" className="w-full bg-brand-red text-white rounded-xl py-3 mt-2">Crear cuenta</button>
        </form>
        <p className="text-xs text-gray-500 text-center">Al registrarte aceptas los Términos y la Política de Privacidad.</p>
      </div>
    </div>
  );
}