// ===================== DATA DESA =====================

export const DESA_INFO = {
  nama: 'Dusun Gagan',
  alamat: 'Dusun Gagan, Desa [Nama Desa], Kecamatan [Kecamatan], Kabupaten [Kabupaten], DIY – 55XXX',
  tahunBerdiri: '19XX',
  whatsapp: 'https://wa.me/6281234567890',
  email: 'mailto:gagan@desa.id',
  instagram: 'https://instagram.com/dusungagan',
  youtube: 'https://youtube.com/@dusungagan',
  tiktok: 'https://tiktok.com/@dusungagan',
}

export const VISI_MISI = {
  visi: 'Terwujudnya Dusun Gagan yang maju, mandiri, dan sejahtera berlandaskan nilai-nilai gotong royong dan kearifan lokal.',
  misi: [
    'Meningkatkan kualitas sumber daya manusia melalui pendidikan dan pelatihan.',
    'Mengembangkan potensi ekonomi lokal berbasis UMKM dan pertanian.',
    'Memperkuat infrastruktur dan fasilitas pelayanan publik.',
    'Melestarikan budaya dan nilai-nilai tradisional dusun.',
    'Mendorong partisipasi aktif masyarakat dalam pembangunan dusun.',
  ],
}

export const SAMBUTAN = {
  nama: 'Bapak [Nama Kepala Dusun]',
  jabatan: 'Kepala Dusun Gagan',
  foto: '/images/kadus.jpg',
  teks: 'Selamat datang di website resmi Dusun Gagan. Melalui website ini kami berharap dapat menyampaikan informasi yang bermanfaat bagi seluruh warga dan masyarakat luas. Mari bersama-sama membangun dusun yang lebih maju dan sejahtera.',
}

export const BERITA = [
  { id: 1, judul: 'Kegiatan Gotong Royong Bersih Dusun', tanggal: '10 Juli 2026', ringkasan: 'Warga Dusun Gagan antusias mengikuti kegiatan gotong royong membersihkan lingkungan dusun.', foto: '/images/berita1.jpg' },
  { id: 2, judul: 'Pelatihan UMKM Produk Lokal', tanggal: '5 Juli 2026', ringkasan: 'KKN UPNVYK mengadakan pelatihan pengembangan produk UMKM bagi warga Dusun Gagan.', foto: '/images/berita2.jpg' },
  { id: 3, judul: 'Posyandu Rutin Bulan Juli', tanggal: '3 Juli 2026', ringkasan: 'Kegiatan posyandu rutin bulan Juli berjalan lancar dengan partisipasi ibu dan anak yang tinggi.', foto: '/images/berita3.jpg' },
]

export const SEJARAH = {
  singkat: 'Dusun Gagan merupakan salah satu dusun yang memiliki sejarah panjang dan kaya budaya. Konon dusun ini telah berdiri sejak abad ke-18, berawal dari sekelompok masyarakat yang membuka lahan pertanian di kawasan ini.',
  tokohPendiri: [
    { nama: 'Ki [Nama Tokoh]', peran: 'Pendiri dan Sesepuh Dusun Gagan' },
    { nama: 'Mbah [Nama Tokoh]', peran: 'Tokoh Agama dan Perintis Pendidikan' },
  ],
}

export const IDENTITAS_DESA = {
  nama: 'Dusun Gagan',
  alamatLengkap: 'Dusun Gagan, Desa [Nama Desa], Kec. [Kecamatan], Kab. [Kabupaten], DIY',
  kodePOS: '55XXX',
  tahunBerdiri: '19XX',
}

export const DATA_PENDUDUK = {
  total: 1250,
  jumlahKK: 340,
  lakiLaki: 630,
  perempuan: 620,
  usia: [
    { name: 'Balita (0–5)', value: 95 },
    { name: 'Anak (6–12)', value: 160 },
    { name: 'Remaja (13–17)', value: 140 },
    { name: 'Dewasa (18–59)', value: 720 },
    { name: 'Lansia (60+)', value: 135 },
  ],
  pendidikan: [
    { name: 'SD', jumlah: 320 },
    { name: 'SMP', jumlah: 280 },
    { name: 'SMA/SMK', jumlah: 390 },
    { name: 'Diploma', jumlah: 85 },
    { name: 'Sarjana', jumlah: 155 },
    { name: 'Pascasarjana', jumlah: 20 },
  ],
  pekerjaan: [
    { label: 'Pelajar/Mahasiswa', nilai: 340 },
    { label: 'Petani', nilai: 210 },
    { label: 'Pedagang', nilai: 175 },
    { label: 'Buruh', nilai: 190 },
    { label: 'Pegawai', nilai: 145 },
    { label: 'Belum Bekerja', nilai: 190 },
  ],
  agama: [
    { label: 'Islam', nilai: 1195 },
    { label: 'Kristen', nilai: 28 },
    { label: 'Katolik', nilai: 15 },
    { label: 'Hindu', nilai: 7 },
    { label: 'Buddha', nilai: 3 },
    { label: 'Konghucu', nilai: 2 },
  ],
}

export const UMKM = [
  {
    id: 1,
    logo: '/images/umkm1.jpg',
    namaUsaha: 'Keripik Singkong Bu Sari',
    namaPemilik: 'Sari Wulandari',
    alamat: 'RT 02 RW 01, Dusun Gagan',
    whatsapp: 'https://wa.me/6281234567891',
    produk: [
      { nama: 'Keripik Singkong Original', harga: 'Rp 10.000', foto: '/images/produk1a.jpg' },
      { nama: 'Keripik Singkong Pedas', harga: 'Rp 12.000', foto: '/images/produk1b.jpg' },
    ],
  },
  {
    id: 2,
    logo: '/images/umkm2.jpg',
    namaUsaha: 'Batik Tulis Pak Hadi',
    namaPemilik: 'Hadi Santoso',
    alamat: 'RT 05 RW 02, Dusun Gagan',
    whatsapp: 'https://wa.me/6281234567892',
    produk: [
      { nama: 'Kain Batik Motif Parang', harga: 'Rp 150.000', foto: '/images/produk2a.jpg' },
      { nama: 'Kemeja Batik Pria', harga: 'Rp 200.000', foto: '/images/produk2b.jpg' },
    ],
  },
]

export const KEGIATAN = [
  {
    id: 1,
    logo: '/images/kegiatan1.jpg',
    namaKegiatan: 'Gotong Royong Bersih Dusun',
    tanggal: 'Minggu, 20 Juli 2026',
    lokasi: 'Seluruh Wilayah Dusun Gagan',
    deskripsi: 'Kegiatan rutin bulanan membersihkan lingkungan dusun bersama-sama seluruh warga.',
    whatsapp: 'https://wa.me/6281234567890',
  },
  {
    id: 2,
    logo: '/images/kegiatan2.jpg',
    namaKegiatan: 'Pelatihan Digital Marketing UMKM',
    tanggal: 'Sabtu, 26 Juli 2026',
    lokasi: 'Balai Dusun Gagan',
    deskripsi: 'Pelatihan pemasaran digital untuk pelaku UMKM Dusun Gagan oleh KKN UPNVYK 84.94.',
    whatsapp: 'https://wa.me/6281234567890',
  },
]

// ===================== DATA OLAHRAGA =====================

export type Olahraga = {
  id: number
  nama: string
  icon: string
  pelatih: string
  ketua: string
  jumlahAnggota: number
  whatsapp: string
  jadwal: { hari: string; jam: string }[]
  prestasi: { tahun: string; keterangan: string }[]
  galeri: string[]
}

export const OLAHRAGA: Olahraga[] = [
  {
    id: 1,
    nama: 'Bulu Tangkis',
    icon: '🏸',
    pelatih: '[Nama Pelatih Bulu Tangkis]',
    ketua: '[Nama Ketua Bulu Tangkis]',
    jumlahAnggota: 22,
    whatsapp: 'https://wa.me/6281234567893',
    jadwal: [
      { hari: 'Selasa', jam: '16.00 – 18.00 WIB' },
      { hari: 'Jumat', jam: '16.00 – 18.00 WIB' },
    ],
    prestasi: [
      { tahun: '2024', keterangan: 'Juara 2 Turnamen Bulu Tangkis Tingkat Kecamatan' },
      { tahun: '2023', keterangan: 'Juara 1 Kategori Ganda Putra HUT RI Tingkat Desa' },
    ],
    galeri: [
      '/images/olahraga/bulutangkis1.jpg',
      '/images/olahraga/bulutangkis2.jpg',
      '/images/olahraga/bulutangkis3.jpg',
    ],
  },
  {
    id: 2,
    nama: 'Sepak Bola',
    icon: '⚽',
    pelatih: '[Nama Pelatih Sepak Bola]',
    ketua: '[Nama Ketua Sepak Bola]',
    jumlahAnggota: 27,
    whatsapp: 'https://wa.me/6281234567894',
    jadwal: [
      { hari: 'Minggu', jam: '07.00 – 09.00 WIB' },
    ],
    prestasi: [
      { tahun: '2025', keterangan: 'Runner-up Turnamen Sepak Bola Antar Dusun' },
      { tahun: '2024', keterangan: 'Juara 3 Liga Mini Kecamatan' },
    ],
    galeri: [
      '/images/olahraga/sepakbola1.jpg',
      '/images/olahraga/sepakbola2.jpg',
      '/images/olahraga/sepakbola3.jpg',
    ],
  },
  {
    id: 3,
    nama: 'Voli',
    icon: '🏐',
    pelatih: '[Nama Pelatih Voli]',
    ketua: '[Nama Ketua Voli]',
    jumlahAnggota: 18,
    whatsapp: 'https://wa.me/6281234567895',
    jadwal: [
      { hari: 'Rabu', jam: '15.30 – 17.30 WIB' },
      { hari: 'Sabtu', jam: '15.30 – 17.30 WIB' },
    ],
    prestasi: [
      { tahun: '2025', keterangan: 'Juara 1 Turnamen Voli HUT RI Tingkat Desa' },
    ],
    galeri: [
      '/images/olahraga/voli1.jpg',
      '/images/olahraga/voli2.jpg',
      '/images/olahraga/voli3.jpg',
    ],
  },
  {
    id: 4,
    nama: 'Senam',
    icon: '🤸',
    pelatih: '[Nama Instruktur Senam]',
    ketua: '[Nama Ketua Kelompok Senam]',
    jumlahAnggota: 34,
    whatsapp: 'https://wa.me/6281234567896',
    jadwal: [
      { hari: 'Minggu', jam: '06.00 – 07.30 WIB' },
    ],
    prestasi: [
      { tahun: '2024', keterangan: 'Penampilan Terbaik Senam Massal HUT RI Tingkat Kecamatan' },
    ],
    galeri: [
      '/images/olahraga/senam1.jpg',
      '/images/olahraga/senam2.jpg',
      '/images/olahraga/senam3.jpg',
    ],
  },
]
