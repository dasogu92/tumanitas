import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col items-center justify-start p-6 space-y-6 font-poppins text-red-600">
      <header className="w-full flex justify-between items-center px-4 py-4">
        <Image src="/logo-manitas.svg" alt="Logo" width={140} height={40} />
        <Image src="/icon-hamburger.svg" alt="Menu" width={30} height={30} />
      </header>

      <main className="flex flex-col items-center space-y-6 mt-6">
        <div className="relative">
          <Image src="/user1.svg" alt="Soy un manitas" width={120} height={120} className="rounded-full" />
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow text-xs font-bold">
            ¡Soy un manitas!
          </div>
        </div>
        <div className="relative">
          <Image src="/user2.svg" alt="Necesito un manitas" width={120} height={120} className="rounded-full" />
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow text-xs font-bold">
            ¡Necesito un manitas!
          </div>
        </div>
        <button className="mt-8 px-6 py-2 bg-red-600 text-white rounded-full shadow-md">
          ¿Eres nuevo? REGÍSTRATE
        </button>
      </main>
    </div>
  )
}