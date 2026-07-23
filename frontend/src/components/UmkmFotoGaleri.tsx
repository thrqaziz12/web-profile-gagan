'use client'
import { useState } from 'react'
import Image from 'next/image'
import { FiX, FiChevronLeft, FiChevronRight, FiImage } from 'react-icons/fi'

const DEFAULT_FOTO = '/images/no-image.jpg'

interface UmkmFotoGaleriProps {
  galeri?: string[]
  namaUsaha: string
}

export default function UmkmFotoGaleri({ galeri, namaUsaha }: UmkmFotoGaleriProps) {
  const [current, setCurrent] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({})

  // Error handling: pakai galeri default jika kosong / tidak ada
  const fotoList =
    galeri && galeri.length > 0
      ? galeri
      : [DEFAULT_FOTO]

  const total = fotoList.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }
  const closeLightbox = () => setLightboxOpen(false)
  const lightboxPrev = () => setLightboxIndex((i) => (i - 1 + total) % total)
  const lightboxNext = () => setLightboxIndex((i) => (i + 1) % total)

  const getSrc = (index: number) =>
    imgErrors[index] ? DEFAULT_FOTO : fotoList[index]

  const isDefault = !galeri || galeri.length === 0

  return (
    <div className="mb-5">
      <h4 className="font-semibold text-gray-700 text-sm mb-3 flex items-center gap-1.5">
        <FiImage size={15} />
        Galeri Foto
      </h4>

      {isDefault && (
        <p className="text-xs text-gray-400 italic mb-2">Foto belum tersedia untuk usaha ini.</p>
      )}

      {/* Slider utama */}
      <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gray-100 cursor-pointer group"
        onClick={() => openLightbox(current)}
      >
        <Image
          src={getSrc(current)}
          alt={`Foto ${namaUsaha} ${current + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          onError={() => setImgErrors((prev) => ({ ...prev, [current]: true }))}
        />

        {/* Overlay hint klik */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs bg-black/50 px-2 py-1 rounded-full">
            Klik untuk perbesar
          </span>
        </div>

        {/* Arrows */}
        {total > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-7 h-7 flex items-center justify-center transition-colors"
            >
              <FiChevronLeft size={16} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-7 h-7 flex items-center justify-center transition-colors"
            >
              <FiChevronRight size={16} />
            </button>
          </>
        )}

        {/* Counter */}
        {total > 1 && (
          <span className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full">
            {current + 1}/{total}
          </span>
        )}
      </div>

      {/* Dots */}
      {total > 1 && (
        <div className="flex justify-center gap-1.5 mt-2">
          {fotoList.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all ${
                i === current ? 'bg-accent-500 w-5 h-2' : 'bg-gray-300 w-2 h-2'
              }`}
            />
          ))}
        </div>
      )}

      {/* Thumbnail strip */}
      {total > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {fotoList.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`relative flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                i === current ? 'border-accent-500' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={getSrc(i)}
                alt={`Thumb ${i + 1}`}
                fill
                className="object-cover"
                onError={() => setImgErrors((prev) => ({ ...prev, [i]: true }))}
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/30 rounded-full w-9 h-9 flex items-center justify-center transition-colors"
          >
            <FiX size={20} />
          </button>

          <div
            className="relative w-full max-w-3xl max-h-[80vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh]">
              <Image
                src={getSrc(lightboxIndex)}
                alt={`Foto ${namaUsaha} ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                onError={() => setImgErrors((prev) => ({ ...prev, [lightboxIndex]: true }))}
              />
            </div>

            {total > 1 && (
              <>
                <button
                  onClick={lightboxPrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                >
                  <FiChevronLeft size={22} />
                </button>
                <button
                  onClick={lightboxNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                >
                  <FiChevronRight size={22} />
                </button>
              </>
            )}

            <p className="text-center text-white/60 text-sm mt-3">
              {lightboxIndex + 1} / {total}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
