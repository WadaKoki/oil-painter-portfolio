'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

interface Work {
  id: number
  title: string
  en: string
  year: number
  size: string
  medium: string
  exhibition: string
  tags: string[]
  orient: string
  img: string
  desc: string
  hidden?: boolean
}

const FILTERS = [
  { key: 'all', label: 'すべて' },
  { key: 'valley', label: '渓谷' },
  { key: 'autumn', label: '秋景' },
  { key: 'water', label: '水流' },
]

export default function GalleryGrid({ works }: { works: Work[] }) {
  const [filter, setFilter] = useState('all')
  const [modalId, setModalId] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const visible = works.filter(w => !w.hidden)
  const filtered = filter === 'all' ? visible : visible.filter(w => w.tags.includes(filter))
  const modalWork = visible.find(w => w.id === modalId) ?? null
  const modalIdx = modalWork ? visible.indexOf(modalWork) : -1

  const openModal = (id: number) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setModalId(id)
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = useCallback(() => {
    setIsOpen(false)
    document.body.style.overflow = ''
    closeTimerRef.current = setTimeout(() => {
      setModalId(null)
      closeTimerRef.current = null
    }, 300)
  }, [])

  const navModal = useCallback((d: number) => {
    if (modalIdx < 0) return
    const next = (modalIdx + d + visible.length) % visible.length
    setModalId(visible[next].id)
  }, [modalIdx, visible])

  useEffect(() => {
    if (modalIdx < 0) return
    const preload = (idx: number) => {
      const img = new window.Image()
      img.src = visible[idx].img
    }
    preload((modalIdx + 1) % visible.length)
    preload((modalIdx - 1 + visible.length) % visible.length)
  }, [modalIdx, visible])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowLeft') navModal(-1)
      if (e.key === 'ArrowRight') navModal(1)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isOpen, closeModal, navModal])

  return (
    <section className="works" id="works">
      <div className="section-head">
        <div className="section-num">— 零弐 / 02</div>
        <h2 className="section-title">作品ギャラリー<span className="en">Selected Works</span></h2>
        <div className="section-kicker">Oil on Canvas</div>
      </div>


      <div className="works-filter">
        <button className="active">
          すべて
          <span className="count">{visible.length}</span>
        </button>
      </div>

      <div className="works-grid">
        {filtered.map((w, idx) => (
          <div
            key={w.id}
            className="work"
            data-orient={w.orient}
            onClick={() => openModal(w.id)}
          >
            <div className="work-thumb">
              <span className="work-num">No. {String(visible.indexOf(w) + 1).padStart(2, '0')}</span>
              <div className="work-thumb-art">
                <Image
                  src={w.img}
                  alt={w.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority={idx < 6}
                />
              </div>
            </div>
            <div className="work-caption">
              <div className="work-title">{w.title}</div>
              <div className="work-meta"><span>{w.en}</span></div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`modal-back${isOpen ? ' open' : ''}`}
        onClick={(e) => { if ((e.target as HTMLElement).className.includes('modal-back')) closeModal() }}
      >
        {modalWork && (
          <div className="modal">
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-art">
              <Image key={modalWork.img} src={modalWork.img} alt={modalWork.title} width={1200} height={1000} priority />
            </div>
            <div className="modal-info">
              <div className="modal-num">No. {String(modalIdx + 1).padStart(2, '0')} / {visible.length}</div>
              <h3 className="modal-title-text">{modalWork.title}</h3>
              <div className="modal-title-en">{modalWork.en}</div>
              <p className="modal-desc">{modalWork.desc}</p>
              <div className="modal-nav">
                <button onClick={() => navModal(-1)}>← 前作</button>
                <button onClick={() => navModal(1)}>次作 →</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
