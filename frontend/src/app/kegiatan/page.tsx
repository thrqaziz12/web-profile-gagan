import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { KEGIATAN } from '@/lib/data'
import { FaWhatsapp } from 'react-icons/fa'
import { FiCalendar, FiMapPin } from 'react-icons/fi'

export default function KegiatanPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gradient-to-br from-blue-500 to-primary-600 text-white py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Kegiatan Desa</h1>
            <p className="text-blue-100">Agenda dan kegiatan Padukuhan Gagan</p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {KEGIATAN.map((kegiatan) => (
              <div key={kegiatan.id} className="card hover:shadow-xl transition-shadow">
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                    🎪
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg leading-tight">{kegiatan.namaKegiatan}</h3>
                  </div>
                </div>

                {/* Detail */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FiCalendar className="text-primary-500 flex-shrink-0" />
                    <span>{kegiatan.tanggal}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FiMapPin className="text-red-500 flex-shrink-0" />
                    <span>{kegiatan.lokasi}</span>
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-5 bg-gray-50 rounded-xl p-3">
                  {kegiatan.deskripsi}
                </p>

                <a
                  href={kegiatan.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-xl py-2.5 font-medium text-sm transition-colors"
                >
                  <FaWhatsapp size={18} />
                  Info Lebih Lanjut
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
