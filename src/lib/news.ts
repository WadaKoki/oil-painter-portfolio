import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'src/content/news')

export interface NewsPost {
  slug: string
  title: string
  date: string
  category: string
  content: string
}

export function getAllNewsPosts(): NewsPost[] {
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'))

  return files
    .map(filename => {
      const slug = filename.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(contentDir, filename), 'utf-8')
      const { data, content } = matter(raw)
      return {
        slug,
        title: data.title as string,
        date: new Date(data.date).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.'),
        category: data.category as string,
        content,
      }
    })
    .sort((a, b) => b.slug.localeCompare(a.slug))
}

export function getNewsPost(slug: string): NewsPost | undefined {
  const filepath = path.join(contentDir, `${slug}.mdx`)
  if (!fs.existsSync(filepath)) return undefined
  const raw = fs.readFileSync(filepath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title as string,
    date: new Date(data.date).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.'),
    category: data.category as string,
    content,
  }
}
