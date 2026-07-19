import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SEJARAH, IDENTITAS_DESA } from '@/lib/data'
import Image from 'next/image'

export default function ProfilDesaPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Profil Desa</h1>
            <p className="text-primary-200">Mengenal lebih dekat Dusun Gagan</p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
          {/* Sejarah Desa */}
          <section>
            <h2 className="section-title">Sejarah Desa</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 card">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">📜</span>
                  <h3 className="font-bold text-primary-700 text-lg">Sejarah Singkat</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{SEJARAH.singkat}</p>
              </div>
              <div className="card">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">👑</span>
                  <h3 className="font-bold text-primary-700 text-lg">Tokoh Pendiri</h3>
                </div>
                <div className="space-y-3">
                  {SEJARAH.tokohPendiri.map((tokoh, i) => (
                    <div key={i} className="p-3 bg-primary-50 rounded-xl">
                      <p className="font-semibold text-primary-700 text-sm">{tokoh.nama}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{tokoh.peran}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Identitas Desa */}
          <section>
            <h2 className="section-title">Identitas Desa</h2>
            <div className="card max-w-2xl">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-2xl">🏘️</span>
                <h3 className="font-bold text-primary-700 text-lg">Data Identitas</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { label: 'Nama Dusun', value: IDENTITAS_DESA.nama },
                  { label: 'Alamat Lengkap', value: IDENTITAS_DESA.alamatLengkap },
                  { label: 'Kode Pos', value: IDENTITAS_DESA.kodePOS },
                  { label: 'Tahun Berdiri', value: IDENTITAS_DESA.tahunBerdiri },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-500 text-sm w-36 flex-shrink-0">{item.label}</span>
                    <span className="font-medium text-gray-800 text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Struktur Organisasi */}
          <section>
            <h2 className="section-title">Struktur Organisasi</h2>
            <p className="text-gray-500 mb-4">Struktur Organisasi Pemerintahan Dusun Gagan</p>
            <div className="card">
              <h3 className="font-bold text-primary-700 text-center text-lg mb-4">
                Bagan Struktur Organisasi Dusun Gagan
              </h3>
              <div className="w-full bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl h-64 md:h-80 flex items-center justify-center border-2 border-dashed border-primary-200">
                <div className="text-center">
                  <span className="text-5xl block mb-3">🏛️</span>
                  <p className="text-gray-500 text-sm">Upload foto struktur organisasi</p>
                  <p className="text-primary-600 text-xs mt-1">/public/images/struktur-org.jpg</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
