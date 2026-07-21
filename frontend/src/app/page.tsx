import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSlider from '@/components/HeroSlider'
import { VISI_MISI, SAMBUTAN, BERITA } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 via-primary-500 to-accent-400 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Selamat Datang di<br />
              <span className="text-accent-200">Padukuhan Gagan</span>
            </h1>
            <p className="text-primary-100 text-lg mb-8">
              Dusun yang maju, mandiri, dan penuh kearifan lokal
            </p>
            <Link href="/profil-desa" className="btn-accent inline-block">
              Jelajahi Desa
            </Link>
          </div>
        </section>

        {/* Slider Foto */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="section-title text-center">Galeri Desa</h2>
          <HeroSlider />
        </section>

        {/* Visi & Misi */}
        <section className="bg-primary-50 py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center">Visi & Misi</h2>
            <p className="section-subtitle">Arah dan Tujuan Padukuhan Gagan</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card border-l-4 border-primary-500">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🎯</span>
                  <h3 className="font-bold text-primary-700 text-xl">Visi</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{VISI_MISI.visi}</p>
              </div>
              <div className="card border-l-4 border-accent-500">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">📋</span>
                  <h3 className="font-bold text-accent-600 text-xl">Misi</h3>
                </div>
                <ul className="space-y-2">
                  {VISI_MISI.misi.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-primary-500 mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sambutan Kepala Desa */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="section-title text-center">Sambutan Ketua Dukuh</h2>
          <div className="card max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-primary-200 bg-primary-100 flex items-center justify-center">
                  <span className="text-5xl">👤</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-primary-700 text-lg">{SAMBUTAN.nama}</h3>
                <p className="text-accent-600 font-medium text-sm mb-3">{SAMBUTAN.jabatan}</p>
                <p className="text-gray-600 leading-relaxed italic">"{SAMBUTAN.teks}"</p>
              </div>
            </div>
          </div>
        </section>

        {/* Peta Desa */}
        <section className="bg-primary-50 py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center">Peta Desa</h2>
            <div className="rounded-2xl overflow-hidden shadow-md h-72 md:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0!2d110.4!3d-7.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDgnMDAuMCJTIDExMMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Dusun Gagan"
              />
            </div>
          </div>
        </section>

        {/* Berita Terkini */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="section-title text-center">Berita Terkini</h2>
          <p className="section-subtitle">Informasi terbaru dari Padukuhan Gagan</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BERITA.map((berita) => (
              <div key={berita.id} className="card hover:shadow-lg transition-shadow">
                <div className="w-full h-40 bg-gradient-to-br from-primary-200 to-primary-300 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-4xl">📰</span>
                </div>
                <span className="text-xs text-accent-600 font-medium">{berita.tanggal}</span>
                <h3 className="font-semibold text-gray-800 mt-1 mb-2 leading-snug">{berita.judul}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{berita.ringkasan}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
