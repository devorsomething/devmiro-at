import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const font = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevMiro',
  description: 'IT-LÖSUNGEN FÜR VORARLBERG',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="dark bg-[#050507] text-white overflow-x-hidden">
      <body className={`${font.className} bg-grid`}>
        <div className="absolute inset-0 z-[-1]">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00E5FF] rounded-full blur-[150px] opacity-20 hero-animation"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6] rounded-full blur-[150px] opacity-20 hero-animation" style={{ animationDelay: '3s' }}></div>
        </div>
        {children}
      </body>
    </html>
  )
}
