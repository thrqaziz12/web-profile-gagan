'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  { src: '/images/desa1.jpg', alt: 'Pemandangan Dusun Gagan' },
  { src: '/images/desa2.jpg', alt: 'Sawah Dusun Gagan' },
  { src: '/images/desa3.jpg', alt: 'Kegiatan Warga Dusun Gagan' },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image src={slide.src} alt={slide.alt} fill className="object-cover" />
        </div>
      ))}
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? 'bg-white w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
      {/* Arrows */}
      <button
        onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-9 h-9 flex items-center justify-center"
      >‹</button>
      <button
        onClick={() => setCurrent((c) => (c + 1) % slides.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full w-9 h-9 flex items-center justify-center"
      >›</button>
    </div>
  )
}
