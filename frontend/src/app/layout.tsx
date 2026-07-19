import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Web Profile Dusun Gagan',
  description: 'Website resmi profil Dusun Gagan – KKN UPNVYK 84.94',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
