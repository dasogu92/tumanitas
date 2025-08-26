import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">TU MANITAS</h1>
      <div className="space-x-4">
        <Link href="/cliente"><button className="px-6 py-2 bg-blue-600 text-white rounded-xl">Soy Cliente</button></Link>
        <Link href="/profesional"><button className="px-6 py-2 bg-green-600 text-white rounded-xl">Soy Profesional</button></Link>
      </div>
    </main>
  )
}
