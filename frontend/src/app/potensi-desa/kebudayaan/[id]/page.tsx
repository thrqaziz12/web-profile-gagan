'use client'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { KEBUDAYAAN } from '@/lib/data'
import { FaWhatsapp } from 'react-icons/fa'
import { FiArrowLeft, FiChevronLeft, FiChevronRight, FiUsers, FiCalendar, FiClock, FiAward } from 'react-icons/fi'

export default function KebudayaanDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = Number(params.id)
  const budaya = KEBUDAYAAN.find((b) => b.id === id)

  const [currentSlide, setCurrentSlide] = useState(0)

  if (!budaya) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-500 text-lg mb-4">Data kebudayaan tidak ditemukan.</p>
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

  const prevSlide = () => setCurrentSlide((p) => (p === 0 ? budaya.galeri.length - 1 : p - 1))
  const nextSlide = () => setCurrentSlide((p) => (p === budaya.galeri.length - 1 ? 0 : p + 1))

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
              <div className="text-7xl md:text-8xl drop-shadow-lg">{budaya.icon}</div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-1">{budaya.nama}</h1>
                <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-1">
                  {budaya.kategori}
                </span>
                <p className="text-primary-100 text-sm">Dusun Gagan</p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 mt-10 space-y-8">

          {/* Info Cepat */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="card flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 flex-shrink-0">
                <FiUsers size={22} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Anggota Aktif</p>
                <p className="text-2xl font-bold text-gray-800">{budaya.jumlahAnggota}</p>
              </div>
            </div>
            <div className="card flex items-center gap-4">
              <div className="w-12 h-12 bg-accent-100 rounded-2xl flex items-center justify-center text-accent-600 flex-shrink-0 text-xl">
                🏆
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Total Prestasi</p>
                <p className="text-2xl font-bold text-gray-800">{budaya.prestasi.length}</p>
              </div>
            </div>
            <div className="card flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 flex-shrink-0">
                <FiCalendar size={22} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Sesi Latihan</p>
                <p className="text-2xl font-bold text-gray-800">{budaya.jadwal.length}x/minggu</p>
              </div>
            </div>
          </div>

          {/* Deskripsi */}
          <div className="card">
            <h2 className="text-lg font-bold text-gray-800 mb-3">📝 Tentang {budaya.nama}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{budaya.deskripsi}</p>
          </div>

          {/* Pengurus */}
          <div className="card">
            <h2 className="text-lg font-bold text-gray-800 mb-4">👤 Pengurus</h2>
            <div className="bg-primary-50 rounded-2xl p-4">
              <p className="text-xs text-gray-400 font-medium mb-1">Ketua Kelompok</p>
              <p className="font-bold text-gray-800">{budaya.ketua}</p>
            </div>
          </div>

          {/* Jadwal Latihan */}
          <div className="card">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              <span className="flex items-center gap-2"><FiCalendar /> Jadwal Latihan</span>
            </h2>
            <div className="space-y-3">
              {budaya.jadwal.map((j, i) => (
                <div key={i} className="flex items-center gap-4 bg-primary-50 rounded-2xl p-4">
                  <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FiCalendar className="text-white" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{j.hari}</p>
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                      <FiClock size={12} /> {j.jam}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prestasi */}
          <div className="card">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              <span className="flex items-center gap-2"><FiAward /> Prestasi</span>
            </h2>
            <div className="space-y-3">
              {budaya.prestasi.map((p, i) => (
                <div key={i} className="flex items-start gap-4 bg-yellow-50 border border-yellow-100 rounded-2xl p-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {p.tahun}
                  </div>
                  <p className="text-gray-700 font-medium text-sm leading-snug pt-1.5">{p.keterangan}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Galeri Slider */}
          <div className="card">
            <h2 className="text-lg font-bold text-gray-800 mb-4">📸 Galeri Kegiatan</h2>
            <div className="relative rounded-2xl overflow-hidden bg-gray-100" style={{ aspectRatio: '16/9' }}>
              {/* Placeholder jika foto belum tersedia */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 to-accent-100">
                <div className="text-center">
                  <div className="text-6xl mb-2">{budaya.icon}</div>
                  <p className="text-gray-500 text-sm">Foto {budaya.nama} {currentSlide + 1}/{budaya.galeri.length}</p>
                  <p className="text-gray-400 text-xs mt-1">{budaya.galeri[currentSlide]}</p>
                </div>
              </div>
              {/* Uncomment ini saat foto sudah tersedia di /public/images/kebudayaan/ */}
              {/* <Image src={budaya.galeri[currentSlide]} alt={`Foto ${budaya.nama} ${currentSlide + 1}`} fill className="object-cover" /> */}

              {/* Navigasi slider */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-all"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-all"
              >
                <FiChevronRight size={20} />
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {budaya.galeri.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentSlide ? 'bg-white w-5' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Contact WhatsApp */}
          <a
            href={budaya.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-2xl py-4 font-semibold text-base transition-colors w-full"
          >
            <FaWhatsapp size={22} />
            Hubungi Contact Person via WhatsApp
          </a>

        </div>
      </main>
      <Footer />
    </>
  )
}
