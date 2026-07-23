'use client'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { WISATA } from '@/lib/data'
import { FiChevronLeft, FiChevronRight, FiMapPin } from 'react-icons/fi'
import Image from 'next/image'

export default function WisataDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = Number(params.id)
  const wisata = WISATA.find((w) => w.id === id)

  const [currentSlide, setCurrentSlide] = useState(0)

  if (!wisata) {
    return (
      <>
        <Navbar />
        <main className="min-h-[60vh] flex flex-col items-center justify-center">
          <p className="text-gray-500 text-lg">Destinasi wisata tidak ditemukan.</p>
          <button
            onClick={() => router.push('/potensi-desa?tab=wisata')}
            className="mt-4 px-5 py-2 bg-primary-500 text-white rounded-xl font-medium hover:bg-primary-600 transition"
          >
            Kembali ke Potensi Desa
          </button>
        </main>
        <Footer />
      </>
    )
  }

  const totalSlides = wisata.galeri.length

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % totalSlides)

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="bg-gradient-to-br from-primary-500 to-accent-600 text-white py-10 px-4">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-1 text-primary-100 hover:text-white text-sm mb-4 transition"
            >
              <FiChevronLeft size={18} /> Kembali
            </button>
            <div className="flex items-center gap-4">
              <div className="text-6xl">{wisata.icon}</div>
              <div>
                <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {wisata.kategori}
                </span>
                <h1 className="text-2xl md:text-3xl font-bold">{wisata.nama}</h1>
                <p className="flex items-center gap-1 text-primary-100 text-sm mt-1">
                  <FiMapPin size={13} /> {wisata.lokasi}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">

          {/* Info Detail */}
          <section className="card">
            <h2 className="text-lg font-bold text-gray-800 mb-1">Tentang Destinasi</h2>
            <div className="w-12 h-1 bg-primary-400 rounded-full mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="bg-primary-50 rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-1">Nama Wisata</p>
                <p className="font-semibold text-gray-800">{wisata.nama}</p>
              </div>
              <div className="bg-accent-50 rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-1">Kategori Wisata</p>
                <p className="font-semibold text-accent-700">{wisata.kategori}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 sm:col-span-2">
                <p className="text-xs text-gray-500 mb-1">Lokasi</p>
                <p className="font-semibold text-gray-800 flex items-center gap-1">
                  <FiMapPin className="text-primary-500" size={14} />
                  {wisata.lokasi}
                </p>
              </div>
            </div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Deskripsi</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{wisata.deskripsi}</p>
          </section>

          {/* Galeri Slider */}
          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-1">Galeri Foto</h2>
            <div className="w-12 h-1 bg-primary-400 rounded-full mb-5" />

            {/* Slider Utama */}
            <div className="relative w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-md">
              {/* Uncomment saat gambar tersedia */}
              {/* <Image
                src={wisata.galeri[currentSlide]}
                alt={`${wisata.nama} foto ${currentSlide + 1}`}
                fill
                className="object-cover transition-opacity duration-300"
              /> */}
              {/* Placeholder saat gambar belum ada */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary-100 to-accent-100">
                <span className="text-7xl mb-2">{wisata.icon}</span>
                <span className="text-gray-400 text-sm">{wisata.galeri[currentSlide]}</span>
              </div>

              {/* Tombol Prev */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow transition"
                aria-label="Foto sebelumnya"
              >
                <FiChevronLeft size={22} />
              </button>

              {/* Tombol Next */}
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow transition"
                aria-label="Foto berikutnya"
              >
                <FiChevronRight size={22} />
              </button>

              {/* Counter */}
              <div className="absolute bottom-3 right-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
                {currentSlide + 1} / {totalSlides}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
              {wisata.galeri.map((foto, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`flex-shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                    idx === currentSlide
                      ? 'border-primary-500 scale-105 shadow-md'
                      : 'border-transparent hover:border-primary-300'
                  }`}
                >
                  {/* Uncomment saat gambar tersedia */}
                  {/* <Image src={foto} alt={`thumb-${idx}`} width={80} height={56} className="object-cover w-full h-full" /> */}
                  <div
                    className={`w-full h-full flex items-center justify-center text-2xl ${
                      idx === currentSlide ? 'bg-primary-100' : 'bg-gray-100'
                    }`}
                  >
                    {wisata.icon}
                  </div>
                </button>
              ))}
            </div>

            {/* Dot Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {wisata.galeri.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`rounded-full transition-all ${
                    idx === currentSlide
                      ? 'bg-primary-500 w-6 h-2'
                      : 'bg-gray-300 w-2 h-2 hover:bg-primary-300'
                  }`}
                  aria-label={`Foto ${idx + 1}`}
                />
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
