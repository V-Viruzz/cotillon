import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Footer from '@/components/Footer'
const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://cotillonsinka.vercel.app'),
  title: 'Cotillon Sinka',
  description: 'Cotillon articulos de fiesta y reposteria',
  verification: { google: 'ZRyIXeC7hED6ysySoP42-3VQ_2nwF20pXrQXPyDsp1I' },
  openGraph: {
    type: 'website',
    url: 'https://cotillonsinka.vercel.app',
    title: 'Cotillon Sinka',
    description: 'Cotillon articulos de fiesta y reposteria',
    siteName: 'Cotillon Sinka',
    images: [{
      url: 'https://wnoztglxnuskuorwudzj.supabase.co/storage/v1/object/public/products/logo-page.webp',
      width: 1800,
      height: 1600,
      alt: 'My custom alt'
    }]
  }
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
