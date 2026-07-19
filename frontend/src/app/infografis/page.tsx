'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { DATA_PENDUDUK } from '@/lib/data'
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from 'recharts'

const PIE_COLORS = ['#4ade80', '#fbbf24', '#60a5fa', '#f87171', '#a78bfa']
const BAR_COLOR = '#22c55e'

export default function InfografisPage() {
  const { total, jumlahKK, lakiLaki, perempuan, usia, pendidikan, pekerjaan, agama } = DATA_PENDUDUK

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Infografis</h1>
            <p className="text-primary-200">Data kependudukan Dusun Gagan</p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
          {/* Ringkasan Penduduk */}
          <section>
            <h2 className="section-title">Ringkasan Data Penduduk</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Total Penduduk', value: total, icon: '👥', color: 'bg-primary-500' },
                { label: 'Jumlah KK', value: jumlahKK, icon: '🏠', color: 'bg-accent-500' },
                { label: 'Laki-laki', value: lakiLaki, icon: '👨', color: 'bg-blue-500' },
                { label: 'Perempuan', value: perempuan, icon: '👩', color: 'bg-pink-500' },
              ].map((item) => (
                <div key={item.label} className="card text-center">
                  <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mx-auto mb-3 text-2xl`}>
                    {item.icon}
                  </div>
                  <p className="text-2xl font-bold text-gray-800">{item.value.toLocaleString()}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Grafik Usia */}
          <section>
            <h2 className="section-title">Distribusi Usia Penduduk</h2>
            <div className="card">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={usia} cx="50%" cy="50%" outerRadius={100} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                    {usia.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Grafik Pendidikan */}
          <section>
            <h2 className="section-title">Penduduk Berdasarkan Pendidikan</h2>
            <div className="card">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={pendidikan} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="jumlah" fill={BAR_COLOR} radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Pekerjaan */}
          <section>
            <h2 className="section-title">Penduduk Berdasarkan Pekerjaan</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {pekerjaan.map((item) => (
                <div key={item.label} className="card flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm flex-shrink-0">
                    {item.nilai}
                  </div>
                  <p className="text-gray-700 text-sm font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Agama */}
          <section>
            <h2 className="section-title">Penduduk Berdasarkan Agama</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {agama.map((item) => (
                <div key={item.label} className="card flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 font-bold text-sm flex-shrink-0">
                    {item.nilai}
                  </div>
                  <p className="text-gray-700 text-sm font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
