import React from 'react'
import krishna from '../assets/images/krishnajioutlineimage.png'
import flute from '../assets/images/flute.png'

const Hero = () => {
  return (
    <div className='h-[120vmin] w-full animate flex justify-center items-center flex-col'>
      <div className='w-[30rem] scale-[80%]'>
        <img src={krishna} className='w-full h-full object-contain' alt="Krishna_bhagwaan" />
      </div>
      <div className='relative text-9xl font-headingfont'>
        Hare ! Krishna
        <div className='absolute -right-8 w-[20rem] bottom-0'>
          <img className='w-full h-full object-contain scale-x-[-1]' src={flute} alt="Krishna's flute" />
        </div>
      </div>
    </div>
  )
}

export default Hero