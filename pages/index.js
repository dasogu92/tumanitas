import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col items-center justify-start p-6 space-y-6 font-poppins text-brand-red">
      <header className="w-full max-w-md mx-auto flex justify-between items-center px-2 py-4">
        <img src="/logo-texto.svg" alt="Logo texto" className="w-40 h-auto" />
        <img src="/burger.svg" alt="Menú" className="w-7 h-7" />
      </header>

      <main className="w-full max-w-md mx-auto flex flex-col items-center space-y-14 mt-2">
        <div className="relative flex flex-col items-center">
          <img src="/trabajador.svg" alt="Soy un manitas" className="w-28 h-28 rounded-full ring-2 ring-white shadow" />
          <div className="absolute -bottom-6 bg-white px-3 py-1 rounded-full shadow text-sm font-semibold text-brand-red">
            ¡Soy un manitas!
          </div>
        </div>

        <div className="relative flex flex-col items-center mt-10">
          <img src="/cliente.svg" alt="Necesito un manitas" className="w-28 h-28 rounded-full ring-2 ring-white shadow" />
          <div className="absolute -bottom-6 bg-white px-3 py-1 rounded-full shadow text-sm font-semibold text-brand-red">
            ¡Necesito un manitas!
          </div>
        </div>

        <Link href="/registro" className="mt-16 w-full">
          <button className="w-full px-8 py-4 bg-brand-red text-white rounded-full shadow-md text-lg tracking-wide">
            ¿Eres nuevo? REGÍSTRATE
          </button>
        </Link>
      </main>
    </div>
  );
}