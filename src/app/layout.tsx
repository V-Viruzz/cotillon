import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Footer from '@/components/Footer'
const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cotillon Sinka',
  description: 'Cotillon articulos de fiesta y reposteria',
  verification: { google: 'ZRyIXeC7hED6ysySoP42-3VQ_2nwF20pXrQXPyDsp1I' }
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
