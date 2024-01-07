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

export default function Home() {
  window.addEventListener("scroll",reveal);
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
        <Footer />
      </div>
  )
}
