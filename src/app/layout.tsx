import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Footer from '@/components/Footer'
const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cotillon Sinka',
  description: 'Generated by create next app'
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
