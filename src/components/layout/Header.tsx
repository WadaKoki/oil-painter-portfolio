'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAV_LINKS = [
  { href: '/', label: '作家について' },
  { href: '/works', label: '作品' },
  { href: '/exhibitions', label: '展覧会' },
  { href: '/news', label: 'お知らせ' },
  { href: '/contact', label: 'ご連絡' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  function close() {
    setOpen(false)
    document.body.style.overflow = ''
  }

  function toggle() {
    if (open) {
      close()
    } else {
      setOpen(true)
      document.body.style.overflow = 'hidden'
    }
  }

  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-brand">
          松田 啓
          <small>Matsuda Hiromu</small>
        </Link>
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
        <button className="nav-hamburger" onClick={toggle} aria-label="メニュー">
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
        </button>
      </nav>

      <div className={`nav-mobile${open ? ' open' : ''}`} onClick={close}>
        <div className="nav-mobile-inner" onClick={e => e.stopPropagation()}>
          <div className="nav-mobile-brand">松田 啓</div>
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-mobile-link${pathname === link.href ? ' active' : ''}`}
              onClick={close}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
