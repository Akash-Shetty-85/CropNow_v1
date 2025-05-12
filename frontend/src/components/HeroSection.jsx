import React from 'react'
import HSV from '@/assets/hHs.mp4'

const HeroSection = () => {
  return (
    <div className='md:h-screen w-full overflow-hidden sm:absolute sm:top-0 sm:left-0'>
      <video 
        src={HSV} 
        autoPlay 
        muted 
        playsInline 
        className="w-full h-full object-fill md:object-cover "
      />
    </div>
  )
}

export default HeroSection
