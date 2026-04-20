'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/', label: '作家について' },
  { href: '/works', label: '作品' },
  { href: '/exhibitions', label: '展覧会' },
  { href: '/news', label: 'お知らせ' },
  { href: '/contact', label: 'ご連絡' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <nav className="nav">
      <div className="nav-brand">
        松田 啓
        <small>Matsuda Hiromu</small>
      </div>
      <div className="nav-links">
        {NAV_LINKS.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? 'active' : ''}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
