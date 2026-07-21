'use client'
import { useParams, useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { UMKM } from '@/lib/data'
import { FaWhatsapp } from 'react-icons/fa'
import { FiArrowLeft, FiMapPin, FiUser } from 'react-icons/fi'
import Image from 'next/image'

export default function UMKMDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = Number(params.id)
  const umkm = UMKM.find((u) => u.id === id)

  if (!umkm) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-500 text-lg mb-4">Data UMKM tidak ditemukan.</p>
            <button
              onClick={() => router.back()}
              className="px-5 py-2.5 bg-primary-500 text-white rounded-xl font-medium text-sm hover:bg-primary-600 transition-colors"
            >
              Kembali
            </button>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="pb-16">

        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-500 to-accent-600 text-white py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm mb-6 transition-colors"
            >
              <FiArrowLeft size={18} /> Kembali ke Potensi Desa
            </button>
            <div className="flex items-center gap-6">
              {/* Logo UMKM */}
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-2xl overflow-hidden flex items-center justify-center flex-shrink-0 relative">
                {/* <Image src={umkm.logo} alt={umkm.namaUsaha} fill className="object-cover" /> */}
                <span className="text-4xl">🏪</span>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-1 leading-tight">{umkm.namaUsaha}</h1>
                <p className="text-primary-100 text-sm flex items-center gap-1.5">
                  <FiUser size={13} /> {umkm.namaPemilik}
                </p>
                <p className="text-primary-100 text-sm flex items-center gap-1.5 mt-0.5">
                  <FiMapPin size={13} /> {umkm.alamat}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 mt-10 space-y-8">

          {/* Daftar Produk */}
          <div className="card">
            <h2 className="text-lg font-bold text-gray-800 mb-5">🛍️ Daftar Produk</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {umkm.produk.map((produk, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                  {/* Foto Produk */}
                  <div className="w-full aspect-video bg-primary-50 flex items-center justify-center relative overflow-hidden">
                    {/* <Image src={produk.foto} alt={produk.nama} fill className="object-cover" /> */}
                    <span className="text-5xl">📦</span>
                  </div>
                  {/* Info Produk */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 text-sm leading-snug mb-1">{produk.nama}</h3>
                    <p className="text-primary-600 font-bold text-base">{produk.harga}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tombol WhatsApp */}
          <a
            href={umkm.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-2xl py-4 font-semibold text-base transition-colors w-full"
          >
            <FaWhatsapp size={22} />
            Hubungi via WhatsApp
          </a>

        </div>
      </main>
      <Footer />
    </>
  )
}
