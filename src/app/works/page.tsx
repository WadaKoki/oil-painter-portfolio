import Header from '@/components/layout/Header'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import Footer from '@/components/layout/Footer'
import artworks from '@/data/artworks.json'

export const metadata = { title: '作品 — 松田 啓' }

export default function WorksPage() {
  return (
    <>
      <Header />
      <GalleryGrid works={artworks} />
      <Footer />
    </>
  )
}
