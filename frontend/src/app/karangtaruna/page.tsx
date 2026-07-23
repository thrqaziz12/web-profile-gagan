import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import KarangtarunaGaleriSlider from '@/components/KarangtarunaGaleriSlider'
import { KARANGTARUNA } from '@/lib/data'
import Image from 'next/image'

export default function KarangtarunaPage() {
  const {
    nama,
    logo,
    deskripsi,
    pengurus,
    jadwalKegiatan,
    galeri,
    whatsapp,
    nomorWhatsapp,
  } = KARANGTARUNA

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="bg-gradient-to-br from-primary-600 via-primary-500 to-accent-400 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white/40 bg-white/10 flex items-center justify-center shadow-lg">
                <Image
                  src={logo}
                  alt={`Logo ${nama}`}
                  width={112}
                  height={112}
                  className="object-contain"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">{nama}</h1>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">{deskripsi}</p>
          </div>
        </section>

        {/* Struktur Pengurus */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="section-title text-center">Struktur Pengurus</h2>
          <p className="section-subtitle">Susunan kepengurusan {nama} Padukuhan Gagan</p>

          {/* Ketua – tampil lebih menonjol */}
          {pengurus.filter((p) => p.peran.toLowerCase().includes('ketua')).map((ketua) => (
            <div key={ketua.nama} className="flex justify-center mb-6">
              <div className="card border-t-4 border-primary-500 text-center w-full max-w-xs shadow-md">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center border-4 border-primary-200 overflow-hidden">
                    {ketua.foto ? (
                      <Image src={ketua.foto} alt={ketua.nama} width={80} height={80} className="object-cover" />
                    ) : (
                      <span className="text-4xl">👤</span>
                    )}
                  </div>
                </div>
                <h3 className="font-bold text-primary-700 text-lg">{ketua.nama}</h3>
                <span className="inline-block mt-1 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                  {ketua.peran}
                </span>
              </div>
            </div>
          ))}

          {/* Pengurus lainnya */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {pengurus
              .filter((p) => !p.peran.toLowerCase().includes('ketua'))
              .map((p) => (
                <div key={p.nama} className="card text-center hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-3">
                    <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center border-2 border-accent-200 overflow-hidden">
                      {p.foto ? (
                        <Image src={p.foto} alt={p.nama} width={64} height={64} className="object-cover" />
                      ) : (
                        <span className="text-3xl">👤</span>
                      )}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-800">{p.nama}</h3>
                  <span className="inline-block mt-1 px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-xs font-medium">
                    {p.peran}
                  </span>
                </div>
              ))}
          </div>
        </section>

        {/* Jadwal Kegiatan */}
        <section className="bg-primary-50 py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center">Jadwal Kegiatan</h2>
            <p className="section-subtitle">Agenda rutin {nama} Padukuhan Gagan</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {jadwalKegiatan.map((jadwal, idx) => (
                <div key={idx} className="card flex items-start gap-4 hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center">
                    <span className="text-2xl">📅</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-700 text-base mb-1">{jadwal.namaKegiatan}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
                      <span className="flex items-center gap-1"><span>📆</span> {jadwal.hari}</span>
                      <span className="flex items-center gap-1"><span>🗓️</span> {jadwal.tanggal}</span>
                      <span className="flex items-center gap-1"><span>🕐</span> {jadwal.jam}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galeri Kegiatan */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="section-title text-center">Galeri Kegiatan</h2>
          <p className="section-subtitle">Dokumentasi kegiatan {nama} Padukuhan Gagan</p>
          <KarangtarunaGaleriSlider images={galeri} />
        </section>

        {/* Kontak WhatsApp */}
        <section className="bg-primary-50 py-12 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="section-title text-center">Hubungi Kami</h2>
            <p className="section-subtitle">Ada pertanyaan atau ingin bergabung? Hubungi kami via WhatsApp</p>
            <div className="card inline-block mt-4 text-left max-w-md w-full">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">💬</span>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">WhatsApp</p>
                  <p className="font-semibold text-gray-800">{nomorWhatsapp}</p>
                </div>
              </div>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                <span className="text-xl">💬</span>
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
