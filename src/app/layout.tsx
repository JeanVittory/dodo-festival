import type { Metadata } from 'next'
import './globals.css'

import Header   from '@/components/header/header'
import Marquee from '@/components/marquee/marquee'
import Footer from '@/components/Footer/footer'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Festival de teatro Buga en Escena',
  description: 'El Festival Nacional de Teatro Buga en Escena, celebra su segunda edición en el marco del Día Internacional del Teatro del 18 al 23 de marzo con invitados locales, regionales y nacionales. Buga se llena de arte y cultura por toda una semana.',
  metadataBase: new URL('https://www.bugaenescena.com/') 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'rgba(2, 18, 41, 1)' }}>
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
