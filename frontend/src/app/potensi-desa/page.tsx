'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { UMKM, OLAHRAGA, KEBUDAYAAN } from '@/lib/data'
import { FiChevronRight } from 'react-icons/fi'
import Image from 'next/image'

const tabs = [
  { id: 'umkm', label: 'UMKM', icon: '🏪' },
  { id: 'olahraga', label: 'Olahraga', icon: '⚽' },
  { id: 'wisata', label: 'Wisata', icon: '🌄' },
  { id: 'kebudayaan', label: 'Kebudayaan', icon: '🎭' },
]

function UMKMTab() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {UMKM.map((umkm) => (
          <Link
            key={umkm.id}
            href={`/potensi-desa/umkm/${umkm.id}`}
            className="group card hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
          >
            {/* Logo */}
            <div className="w-full aspect-video bg-accent-50 rounded-2xl overflow-hidden mb-4 flex items-center justify-center relative">
              {/* Uncomment saat logo tersedia */}
              {/* <Image src={umkm.logo} alt={umkm.namaUsaha} fill className="object-cover" /> */}
              <span className="text-5xl">🏪</span>
            </div>
            {/* Info */}
            <h3 className="font-bold text-gray-800 text-base leading-tight mb-1">{umkm.namaUsaha}</h3>
            <p className="text-gray-500 text-sm mb-1">{umkm.namaPemilik}</p>
            <p className="text-primary-600 text-xs">📍 {umkm.alamat}</p>
            {/* Lihat detail */}
            <div className="mt-4 flex items-center gap-1 text-primary-500 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
              Lihat Detail <FiChevronRight size={14} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function OlahragaTab() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {OLAHRAGA.map((cabang) => (
          <Link
            key={cabang.id}
            href={`/potensi-desa/olahraga/${cabang.id}`}
            className="group card hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer flex flex-col items-center text-center p-6"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
              {cabang.icon}
            </div>
            <h3 className="font-bold text-gray-800 text-base leading-tight mb-1">{cabang.nama}</h3>
            <p className="text-primary-500 text-xs font-medium">{cabang.jumlahAnggota} anggota aktif</p>
            <div className="mt-4 flex items-center gap-1 text-primary-500 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
              Lihat Detail <FiChevronRight size={14} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function WisataTab() {
  const destinasi = [
    { nama: 'Sawah Pemandangan Indah', icon: '🌾', deskripsi: 'Hamparan sawah hijau yang menjadi daya tarik utama wisata alam Dusun Gagan.', tag: 'Wisata Alam' },
    { nama: 'Sungai Jernih', icon: '💧', deskripsi: 'Aliran sungai bersih yang cocok untuk wisata edukasi dan rekreasi keluarga.', tag: 'Wisata Air' },
    { nama: 'Spot Foto Desa', icon: '📸', deskripsi: 'Berbagai spot foto menarik dengan latar belakang alam khas desa.', tag: 'Wisata Foto' },
    { nama: 'Kuliner Tradisional', icon: '🍱', deskripsi: 'Sajian kuliner khas desa yang autentik dan terjangkau untuk wisatawan.', tag: 'Wisata Kuliner' },
  ]
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {destinasi.map((d, i) => (
          <div key={i} className="card hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">{d.icon}</div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg leading-tight">{d.nama}</h3>
                <span className="inline-block bg-accent-100 text-accent-700 text-xs font-semibold px-2 py-0.5 rounded-full mt-1">{d.tag}</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm">{d.deskripsi}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function KebudayaanTab() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {KEBUDAYAAN.map((budaya) => (
          <Link
            key={budaya.id}
            href={`/potensi-desa/kebudayaan/${budaya.id}`}
            className="group card hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer flex flex-col items-center text-center p-6"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
              {budaya.icon}
            </div>
            <h3 className="font-bold text-gray-800 text-base leading-tight mb-1">{budaya.nama}</h3>
            <span className="inline-block bg-accent-100 text-accent-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-1">
              {budaya.kategori}
            </span>
            <p className="text-primary-500 text-xs font-medium">{budaya.jumlahAnggota} anggota aktif</p>
            <div className="mt-4 flex items-center gap-1 text-primary-500 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
              Lihat Detail <FiChevronRight size={14} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function PotensiDesaPage() {
  const [activeTab, setActiveTab] = useState('umkm')

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gradient-to-br from-primary-500 to-accent-600 text-white py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Potensi Desa</h1>
            <p className="text-primary-100">Kenali potensi unggulan Dusun Gagan — dari usaha, olahraga, wisata, hingga kebudayaan</p>
          </div>
        </section>

        <div className="bg-white border-b border-gray-200 sticky top-[64px] z-40">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex gap-1 py-2 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-primary-500 text-white shadow-sm'
                      : 'text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {activeTab === 'umkm' && <UMKMTab />}
        {activeTab === 'olahraga' && <OlahragaTab />}
        {activeTab === 'wisata' && <WisataTab />}
        {activeTab === 'kebudayaan' && <KebudayaanTab />}
      </main>
      <Footer />
    </>
  )
}
