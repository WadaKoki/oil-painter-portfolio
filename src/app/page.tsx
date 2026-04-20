import Header from '@/components/layout/Header'
import HeroSection from '@/components/home/HeroSection'
import ArtistIntro from '@/components/home/ArtistIntro'
import Footer from '@/components/layout/Footer'
import artist from '@/data/artist.json'

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ArtistIntro artist={artist} />
      <Footer />
    </>
  )
}
