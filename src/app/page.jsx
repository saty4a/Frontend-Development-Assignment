"use client"
import HeroSection from '@/Pages/heroSection'
import Header from '../Components/header'
import AnnouncementBar from '../Components/announcementBar'
import LogoSection from '@/Pages/logoSection'
import FeatureSectionFirst from '@/Pages/featureSectionFirst'
import FeatureSectionSecond from '@/Pages/featureSectionSecond'
import StatusSection from '@/Pages/statusSection'
import TestimonialSection from '@/Pages/testimonialSection'
import CallToAction from '@/Pages/callToActionSection'
import Footer from '@/Pages/footer'
import { reveal } from '@/Components/scrollAnimation'
import Subscribe from '@/Pages/subscribe'

const isBrowser = () => typeof window !== 'undefined'; 
export default function Home() {
  if (isBrowser()) { 
    window.addEventListener("scroll",reveal);
}
  
  return (
      <div className="">
        <AnnouncementBar />
        <Header />
        <HeroSection />
        <LogoSection />
        <FeatureSectionFirst />
        <FeatureSectionSecond />
        <StatusSection />
        <TestimonialSection />
        <CallToAction />
        <Subscribe />
        <Footer />
      </div>
  )
}
