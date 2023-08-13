'use client'
import CharitySection from './components/CharitySection'
import Donation from './components/Donation'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import MediaCommunity from './components/MediaCommunity'
import Navbar from './components/Navbar'
import PrayerTime from './components/PrayerTime'
import ResearchCenter from './components/ResearchCenter'
import UpcomingEvents from './components/UpcomingEvents'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PrayerTime />
      <ResearchCenter />
      <CharitySection />
      <UpcomingEvents />
      <MediaCommunity />
      <Donation />
      <Footer />
    </main>
  )
}
