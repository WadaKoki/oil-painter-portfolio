'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const res = await fetch('https://formspree.io/f/myklprgb', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })

    if (res.ok) {
      setSubmitted(true)
    } else {
      setError(true)
    }
  }

  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">ご 連 絡</h2>
      <div className="contact-en">Contact &amp; Inquiries</div>
      <p className="contact-lead">
        作品や制作についてのお問い合わせ、取材・展覧会のご依頼など、
        お気軽にご連絡ください。
      </p>
      {submitted ? (
        <p className="contact-submitted">お問い合わせを受け付けました。</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field">
            <label>お名前 · Name</label>
            <input type="text" name="name" required />
          </div>
          <div className="field">
            <label>ご連絡先 · Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="field">
            <label>ご用件 · Subject</label>
            <select name="subject">
              <option>作品の購入について</option>
              <option>取材・掲載依頼</option>
              <option>展覧会出品依頼</option>
              <option>アトリエ訪問</option>
              <option>その他</option>
            </select>
          </div>
          <div className="field">
            <label>ご用件詳細 · Message</label>
            <textarea name="message" rows={4} />
          </div>
          {error && <p className="contact-error">送信に失敗しました。時間をおいて再度お試しください。</p>}
          <button className="submit" type="submit">送　信</button>
        </form>
      )}
    </section>
  )
}
