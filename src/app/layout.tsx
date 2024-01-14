import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header   from '@/components/header/header'
import Marquee from '@/components/marquee/marquee'
import Footer from '@/components/Footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=''>
      <body className={`${inter.className} bg-dodoBlack-100`}>
        <Marquee/>
        <div>
          <Header/> 
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
