import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function onClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false)
    }
    if (open) document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [open])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col items-center justify-start p-6 space-y-6 font-poppins text-brand-red">
      <header className="relative w-full max-w-md mx-auto flex justify-between items-center px-2 py-4">
        <img src="/logo-texto.svg" alt="Logo texto" className="w-40 h-auto" />
        
        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(v => !v)}
          className="w-9 h-9 p-1 rounded-lg active:scale-95 transition"
        >
          <img src="/burger.svg" alt="Menú" className="w-7 h-7" />
        </button>

        {/* Dropdown */}
        {open && (
          <div ref={menuRef} className="absolute right-2 top-14 w-56 bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <img src="/trabajador.svg" alt="Avatar" className="w-9 h-9 rounded-full ring-1 ring-gray-200" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Usuario</p>
                  <p className="text-xs text-gray-500">usuario@correo.com</p>
                </div>
              </div>
            </div>
            <nav className="py-2 text-sm text-gray-700">
              <Link href="/perfil" className="block px-4 py-2 hover:bg-gray-50">Mi perfil</Link>
              <Link href="/mis-trabajos" className="block px-4 py-2 hover:bg-gray-50">Mis trabajos</Link>
              <Link href="/ajustes" className="block px-4 py-2 hover:bg-gray-50">Ajustes</Link>
              <hr className="my-2" />
              <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50">Cerrar sesión</button>
            </nav>
          </div>
        )}
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
  )
}