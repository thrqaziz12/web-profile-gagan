'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { UMKM } from '@/lib/data'
import { FaWhatsapp } from 'react-icons/fa'

const tabs = [
  { id: 'umkm', label: 'UMKM', icon: '🏪' },
  { id: 'olahraga', label: 'Olahraga', icon: '⚽' },
  { id: 'wisata', label: 'Wisata', icon: '🌄' },
]

function UMKMTab() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {UMKM.map((umkm) => (
          <div key={umkm.id} className="card hover:shadow-xl transition-shadow">
            {/* Header UMKM */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                🏪
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg leading-tight">{umkm.namaUsaha}</h3>
                <p className="text-gray-500 text-sm">{umkm.namaPemilik}</p>
                <p className="text-primary-600 text-xs mt-0.5">📍 {umkm.alamat}</p>
              </div>
            </div>

            {/* Produk */}
            <div className="mb-5">
              <h4 className="font-semibold text-gray-700 text-sm mb-3">Daftar Produk</h4>
              <div className="space-y-2">
                {umkm.produk.map((produk, i) => (
                  <div key={i} className="flex items-center justify-between bg-primary-50 rounded-xl p-3">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-primary-200 rounded-lg flex items-center justify-center text-lg">📦</div>
                      <span className="text-sm font-medium text-gray-700">{produk.nama}</span>
                    </div>
                    <span className="text-primary-600 font-bold text-sm">{produk.harga}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href={umkm.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-xl py-2.5 font-medium text-sm transition-colors"
            >
              <FaWhatsapp size={18} />
              Hubungi via WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

function OlahragaTab() {
  const cabangOlahraga = [
    { nama: 'Bulu Tangkis', icon: '🏸', deskripsi: 'Aktif setiap minggu di lapangan desa', peserta: '20+ anggota' },
    { nama: 'Sepak Bola', icon: '⚽', deskripsi: 'Tim sepak bola warga Dusun Gagan', peserta: '25+ anggota' },
    { nama: 'Voli', icon: '🏐', deskripsi: 'Lapangan voli aktif tiap sore hari', peserta: '18+ anggota' },
    { nama: 'Senam', icon: '🤸', deskripsi: 'Senam rutin ibu-ibu setiap pagi', peserta: '30+ anggota' },
  ]
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {cabangOlahraga.map((cabang, i) => (
          <div key={i} className="card hover:shadow-xl transition-shadow text-center">
            <div className="text-5xl mb-3">{cabang.icon}</div>
            <h3 className="font-bold text-gray-800 text-xl mb-1">{cabang.nama}</h3>
            <p className="text-gray-500 text-sm mb-3">{cabang.deskripsi}</p>
            <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full">
              {cabang.peserta}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function WisataTab() {
  const destinasi = [
    {
      nama: 'Sawah Pemandangan Indah',
      icon: '🌾',
      deskripsi: 'Hamparan sawah hijau yang menjadi daya tarik utama wisata alam Dusun Gagan.',
      tag: 'Wisata Alam',
    },
    {
      nama: 'Sungai Jernih',
      icon: '💧',
      deskripsi: 'Aliran sungai bersih yang cocok untuk wisata edukasi dan rekreasi keluarga.',
      tag: 'Wisata Air',
    },
    {
      nama: 'Spot Foto Desa',
      icon: '📸',
      deskripsi: 'Berbagai spot foto menarik dengan latar belakang alam khas desa.',
      tag: 'Wisata Foto',
    },
    {
      nama: 'Kuliner Tradisional',
      icon: '🍱',
      deskripsi: 'Sajian kuliner khas desa yang autentik dan terjangkau untuk wisatawan.',
      tag: 'Wisata Kuliner',
    },
  ]
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {destinasi.map((d, i) => (
          <div key={i} className="card hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                {d.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg leading-tight">{d.nama}</h3>
                <span className="inline-block bg-accent-100 text-accent-700 text-xs font-semibold px-2 py-0.5 rounded-full mt-1">
                  {d.tag}
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-sm">{d.deskripsi}</p>
          </div>
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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-500 to-accent-600 text-white py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Potensi Desa</h1>
            <p className="text-primary-100">Kenali potensi unggulan Dusun Gagan — dari usaha, olahraga, hingga wisata</p>
          </div>
        </section>

        {/* Tab Navigation */}
        <div className="bg-white border-b border-gray-200 sticky top-[64px] z-40">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex gap-1 py-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
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

        {/* Tab Content */}
        {activeTab === 'umkm' && <UMKMTab />}
        {activeTab === 'olahraga' && <OlahragaTab />}
        {activeTab === 'wisata' && <WisataTab />}
      </main>
      <Footer />
    </>
  )
}
