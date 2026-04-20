import Header from '@/components/layout/Header'
import ContactForm from '@/components/contact/ContactForm'
import Footer from '@/components/layout/Footer'

export const metadata = { title: 'ご連絡 — 松田 啓' }

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactForm />
      <Footer />
    </>
  )
}
