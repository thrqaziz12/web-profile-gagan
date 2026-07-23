'use client'
import { useParams, useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import UmkmFotoGaleri from '@/components/UmkmFotoGaleri'
import { UMKM } from '@/lib/data'
import { FaWhatsapp } from 'react-icons/fa'
import { FiArrowLeft, FiMapPin, FiUser } from 'react-icons/fi'

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
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-2xl overflow-hidden flex items-center justify-center flex-shrink-0">
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

          {/* Galeri Foto */}
          <div className="card">
            <UmkmFotoGaleri galeri={umkm.galeri} namaUsaha={umkm.namaUsaha} />
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
