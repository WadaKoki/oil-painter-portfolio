import type { Metadata } from 'next'
import { Shippori_Mincho, Noto_Serif_JP, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const shipporiMincho = Shippori_Mincho({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-shippori',
  display: 'swap',
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-serif',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '松田 啓 — 油彩画家',
  description: '自然の四季がもたらす色彩の豊かさと奥深さを、油彩画を通して追求する。渓谷の水流と木々の色づきに宿る、光と影の響きを描き続けて二十年。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" data-ornament="minimal" className={`${shipporiMincho.variable} ${notoSerifJP.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  )
}
