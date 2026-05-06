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
  description: '渓流に魅せられて二十余年。春の新緑、秋の紅葉、光と水が織りなす四季の渓谷を尋ね、その安らぎの美を油彩画に描き続けています。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" data-ornament="minimal" className={`${shipporiMincho.variable} ${notoSerifJP.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  )
}
