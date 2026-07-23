'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Props {
  images: { src: string; alt: string }[]
}

export default function KarangtarunaGaleriSlider({ images }: Props) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => setCurrent((c) => (c + 1) % images.length), 4000)
    return () => clearInterval(timer)
  }, [images.length])

  if (!images || images.length === 0) return null

  return (
    <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image src={img.src} alt={img.alt} fill className="object-cover" />
        </div>
      ))}

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
        <p className="text-white text-sm font-medium">{images[current].alt}</p>
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === current ? 'bg-white w-6' : 'bg-white/50 w-2.5'
            }`}
          />
        ))}
      </div>

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-9 h-9 flex items-center justify-center text-lg"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrent((c) => (c + 1) % images.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-9 h-9 flex items-center justify-center text-lg"
          >
            ›
          </button>
        </>
      )}
    </div>
  )
}
