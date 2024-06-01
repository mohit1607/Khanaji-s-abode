import React from 'react'
import krishna from '../assets/images/krishnajioutlineimage.png'
import flute from '../assets/images/flute.png'

const Hero = () => {
  return (
    <div className='sm:h-[80vh] md:h-[100vh] w-full animate flex justify-center items-center flex-col overflow-hidden'>
      <div className='w-[30rem] h-[30rem] scale-50 sm:scale-50 md:scale-75 lg:scale-[80%]'>
        <img src={krishna} className='w-full h-full object-contain' alt="Krishna_bhagwaan" />
      </div>
      <div className='relative text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-headingfont pb-7 md:pb-0'>
        Hare ! Krishna
        <div className='absolute sm:-right-8 w-[20rem] scale-75 lg:scale-100 -bottom-20 xs:-bottom-16 sm:-bottom-12 lg:bottom-0'>
          <img className='w-full h-full object-contain scale-x-[-1] invisible xs:visible' src={flute} alt="Krishna's flute" />
        </div>
      </div>
    </div>
  )
}

export default Hero