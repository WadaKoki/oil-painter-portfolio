import Link from 'next/link'

interface NewsItem {
  slug?: string
  date: string
  category: string
  title: string
}

export default function NewsSection({ items }: { items: NewsItem[] }) {
  return (
    <section className="news" id="news">
      <div className="section-head">
        <div className="section-num">— 零伍 / 05</div>
        <h2 className="section-title">お知らせ<span className="en">News &amp; Announcements</span></h2>
        <div className="section-kicker">Latest</div>
      </div>
      <div className="news-list">
        {items.map((item, i) => (
          item.slug ? (
            <Link href={`/news/${item.slug}`} className="news-item" key={i}>
              <div className="news-date">{item.date}</div>
              <div className="news-cat" data-cat={item.category}>{item.category}</div>
              <div className="news-title">{item.title}</div>
              <div className="news-arrow">→</div>
            </Link>
          ) : (
            <div className="news-item" key={i}>
              <div className="news-date">{item.date}</div>
              <div className="news-cat" data-cat={item.category}>{item.category}</div>
              <div className="news-title">{item.title}</div>
              <div className="news-arrow">→</div>
            </div>
          )
        ))}
      </div>
    </section>
  )
}
