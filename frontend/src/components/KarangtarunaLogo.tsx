'use client'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
  src: string
  nama: string
}

export default function KarangtarunaLogo({ src, nama }: Props) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="w-28 h-28 rounded-full bg-white/20 border-4 border-white/40 flex items-center justify-center shadow-lg">
        <span className="text-5xl">🏘️</span>
      </div>
    )
  }

  return (
    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white/40 bg-white/10 flex items-center justify-center shadow-lg">
      <Image
        src={src}
        alt={`Logo ${nama}`}
        width={112}
        height={112}
        className="object-contain"
        onError={() => setError(true)}
      />
    </div>
  )
}
