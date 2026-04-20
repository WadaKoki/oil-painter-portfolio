import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '松田 啓 — 油彩画家',
  description: '自然の四季がもたらす色彩の豊かさと奥深さを、油彩画を通して追求する。渓谷の水流と木々の色づきに宿る、光と影の響きを描き続けて二十年。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" data-ornament="minimal">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Shippori+Mincho:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
