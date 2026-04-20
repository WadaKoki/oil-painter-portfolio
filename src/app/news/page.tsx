import Header from '@/components/layout/Header'
import NewsSection from '@/components/home/NewsSection'
import Footer from '@/components/layout/Footer'
import { getAllNewsPosts } from '@/lib/news'

export const metadata = { title: 'お知らせ — 松田 啓' }

export default function NewsPage() {
  const posts = getAllNewsPosts()
  return (
    <>
      <Header />
      <NewsSection items={posts} />
      <Footer />
    </>
  )
}
