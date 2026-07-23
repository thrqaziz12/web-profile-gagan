import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import UmkmFotoGaleri from '@/components/UmkmFotoGaleri'
import { UMKM } from '@/lib/data'
import { FaWhatsapp } from 'react-icons/fa'

export default function UMKMPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gradient-to-br from-accent-500 to-accent-600 text-white py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">UMKM Desa</h1>
            <p className="text-accent-100">Produk unggulan pelaku usaha Dusun Gagan</p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-12">
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

                {/* Galeri Foto Slider */}
                <UmkmFotoGaleri galeri={umkm.galeri} namaUsaha={umkm.namaUsaha} />

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
      </main>
      <Footer />
    </>
  )
}
