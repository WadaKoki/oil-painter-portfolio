import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { getAllNewsPosts, getNewsPost } from '@/lib/news'
import Link from 'next/link'

export async function generateStaticParams() {
  return getAllNewsPosts().map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getNewsPost(params.slug)
  if (!post) return {}
  return { title: `${post.title} — 松田 啓` }
}

export default function NewsPostPage({ params }: { params: { slug: string } }) {
  const post = getNewsPost(params.slug)
  if (!post) notFound()

  return (
    <>
      <Header />
      <article className="news-post">
        <div className="news-post-head">
          <div className="news-post-meta">
            <span className="news-cat" data-cat={post.category}>{post.category}</span>
            <span className="news-post-date">{post.date}</span>
          </div>
          <h1 className="news-post-title">{post.title}</h1>
        </div>
        <div className="news-post-body">
          <MDXRemote source={post.content} />
        </div>
        <div className="news-post-back">
          <Link href="/news">← お知らせ一覧へ</Link>
        </div>
      </article>
      <Footer />
    </>
  )
}
