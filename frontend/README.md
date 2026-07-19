# 🏘️ Web Profile Dusun Gagan – Frontend

Website profil resmi Dusun Gagan yang dibangun menggunakan **Next.js 14** + **Tailwind CSS**.

Dibuat oleh **KKN UPNVYK 84.94**.

---

## 🚀 Cara Menjalankan

```bash
# Masuk ke folder frontend
cd frontend

# Install dependensi
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## 📁 Struktur Folder

```
frontend/
├── public/
│   └── images/          # Simpan foto desa, kepala dusun, UMKM, dsb.
├── src/
│   ├── app/
│   │   ├── page.tsx             # Halaman Home
│   │   ├── profil-desa/page.tsx # Halaman Profil Desa
│   │   ├── infografis/page.tsx  # Halaman Infografis
│   │   ├── umkm/page.tsx        # Halaman UMKM
│   │   ├── kegiatan/page.tsx    # Halaman Kegiatan
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.tsx           # Navigasi hamburger
│   │   ├── Footer.tsx           # Footer dengan sosmed
│   │   └── HeroSlider.tsx       # Slider foto otomatis
│   └── lib/
│       └── data.ts              # Data desa (edit di sini)
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

---

## 🎨 Warna Tema

| Nama | Kode |
|------|------|
| Primary (Hijau) | `#22c55e` |
| Accent (Kuning) | `#f59e0b` |

---

## ✏️ Cara Update Data

Semua data desa tersimpan di `src/lib/data.ts`. Edit file ini untuk:
- Mengubah info desa, visi misi, sambutan
- Menambah/ubah data penduduk (infografis)
- Menambah/edit UMKM dan produk
- Menambah/edit kegiatan

---

## 🖼️ Menambah Foto

Simpan foto di folder `public/images/` lalu sesuaikan path di `data.ts`:

| File | Keterangan |
|------|------------|
| `desa1.jpg`, `desa2.jpg`, `desa3.jpg` | Foto slider utama |
| `kadus.jpg` | Foto kepala dusun |
| `struktur-org.jpg` | Foto struktur organisasi |
| `berita1.jpg` ~ `berita3.jpg` | Foto berita |
| `umkm1.jpg`, `umkm2.jpg` | Logo/foto UMKM |
| `kegiatan1.jpg`, `kegiatan2.jpg` | Foto kegiatan |

---

## 📦 Teknologi

- [Next.js 14](https://nextjs.org) – App Router
- [Tailwind CSS](https://tailwindcss.com) – Styling
- [Recharts](https://recharts.org) – Grafik infografis
- [React Icons](https://react-icons.github.io) – Ikon sosmed

---

> © 2026 Dusun Gagan · KKN UPNVYK 84.94
