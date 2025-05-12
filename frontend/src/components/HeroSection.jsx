import React from 'react'
import HSV from '@/assets/hHs.mp4'

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video 
        src={HSV} 
        autoPlay 
        muted 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* Optional text content on top */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 text-white">
        <h1 className="text-4xl md:text-6xl font-bold uppercase font-[Poppins]">Cropnow.</h1>
        <h2 className="text-xl md:text-2xl mt-4">For A Better India</h2>
      </div>
    </div>
  )
}

export default HeroSection
