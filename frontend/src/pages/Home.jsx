import React from 'react'
import HeroSection from '@/components/HeroSection'
import Carousel from '../components/Carousel'
import ServicesSection from '../components/ServiceSection'
import Mission from '../components/OurMission'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Carousel />
      <Mission />
      <ServicesSection />
    </div>
  )
}

export default Home