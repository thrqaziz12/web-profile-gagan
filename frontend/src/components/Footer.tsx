import { DESA_INFO } from '@/lib/data'
import { FaWhatsapp, FaEnvelope, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Nama */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary-700 font-bold text-2xl">G</span>
            </div>
            <p className="font-bold text-xl">Padukuhan Gagan</p>
            <p className="text-primary-200 text-sm leading-relaxed text-center md:text-left">
              {DESA_INFO.alamat}
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-3">
            <h4 className="font-semibold text-lg mb-2">Hubungi Kami</h4>
            <div className="flex gap-3 flex-wrap justify-center">
              <a href={DESA_INFO.whatsapp} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp">
                <FaWhatsapp size={20} />
              </a>
              <a href={DESA_INFO.email} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-red-500 hover:bg-red-400 rounded-full flex items-center justify-center transition-colors"
                aria-label="Email">
                <FaEnvelope size={20} />
              </a>
              <a href={DESA_INFO.instagram} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-500 hover:bg-pink-400 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href={DESA_INFO.youtube} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
              <a href={DESA_INFO.tiktok} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="TikTok">
                <FaTiktok size={20} />
              </a>
            </div>
          </div>

          {/* Credit */}
          <div className="flex flex-col items-center md:items-end justify-center">
            <p className="text-primary-200 text-sm text-center md:text-right">
              Dibuat oleh
            </p>
            <p className="font-semibold text-accent-300 text-center md:text-right mt-1">
              KKN UPNVYK 84.94
            </p>
            <p className="text-primary-300 text-xs mt-1">
              © {new Date().getFullYear()} Padukuhan Gagan
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
