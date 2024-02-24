import type { Metadata } from 'next'
import './globals.css'

import Header   from '@/components/header/header'
import Marquee from '@/components/marquee/marquee'
import Footer from '@/components/Footer/footer'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Festival de teatro Buga en Escena',
  description: 'El Festival Nacional de Teatro Buga en Escena, celebra su segunda edición en el marco del Día Internacional del Teatro del 18 al 23 de marzo con invitados locales, regionales y nacionales. Buga se llena de arte y cultura por toda una semana.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={` bg-dodoBlack-100`} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Marquee/>
        <div style={{ flex: '1' }}>
          <Header/>
          <Providers>
            {children}
          </Providers> 
        </div>
        <Footer/>
      </body>
    </html>
  )
}
