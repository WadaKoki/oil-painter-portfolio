import Header from '@/components/layout/Header'
import ExhibitionList from '@/components/exhibitions/ExhibitionList'
import Footer from '@/components/layout/Footer'
import exhibitions from '@/data/exhibitions.json'

export const metadata = { title: '展覧会 — 松田 啓' }

export default function ExhibitionsPage() {
  return (
    <>
      <Header />
      <ExhibitionList exhibitions={exhibitions} />
      <Footer />
    </>
  )
}
