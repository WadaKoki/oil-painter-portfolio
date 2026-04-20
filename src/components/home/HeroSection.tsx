'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  function close() {
    setOpen(false)
    document.body.style.overflow = ''
  }

  function openModal() {
    setOpen(true)
    document.body.style.overflow = 'hidden'
  }

  return (
    <>
      <header className="hero">
        <div className="hero-text">
          <div className="hero-meta">Oil Painter — Since 2006</div>
          <h1 className="hero-title">
            <span className="kana">まつだ　ひろむ</span>
            松田 啓
          </h1>
          <div className="hero-latin">Matsuda Hiromu — Peintre à l&apos;huile</div>
          <p className="hero-desc">
            自然の四季がもたらす色彩の豊かさと奥深さを、油彩画を通して追求する。
            渓谷の水流と木々の色づきに宿る、光と影の響きを描き続けて二十年。
          </p>
          <div className="hero-accolade">
            <div className="hero-accolade-label">Prime Minister&apos;s Award · 2025</div>
            <div className="hero-accolade-title">第64回二元展　内閣総理大臣賞</div>
            <div className="hero-accolade-sub">受賞作『早秋の渓谷』</div>
          </div>
        </div>
        <div
          className="hero-art hero-art-clickable"
          aria-label="早秋の渓谷"
          onClick={openModal}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && openModal()}
        >
          <div className="hero-art-label">早 秋 の 渓 谷</div>
          <div className="hero-art-cap">[ 早秋の渓谷 · oil on canvas · F130号 ]</div>
        </div>
        <div className="hero-scroll">scroll</div>
      </header>

      <div
        className={`modal-back${open ? ' open' : ''}`}
        onClick={close}
      >
        {open && (
          <div className="modal">
            <button className="modal-close" onClick={close}>×</button>
            <div className="modal-art">
              <Image src="/images/sousyuu-no-keikoku.jpg" alt="早秋の渓谷" width={1200} height={1000} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="modal-info">
              <div className="modal-num">代表作</div>
              <h3 className="modal-title-text">早秋の渓谷</h3>
              <div className="modal-title-en">Ravine in Early Autumn</div>
              <div className="modal-specs">
                <dl><dt>Year</dt><dd>2025</dd></dl>
                <dl><dt>Medium</dt><dd>油彩 · キャンバス</dd></dl>
                <dl><dt>Size</dt><dd>F130号 · 162.1 × 194.0 cm</dd></dl>
                <dl><dt>Exhibition</dt><dd>第64回二元展　内閣総理大臣賞</dd></dl>
              </div>
              <p className="modal-desc">初秋の渓、岩肌を伝う清水と色づき始めた木々。朝霧が上がるわずかな時間帯の、光の粒立ちを捉えた代表作。</p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
