import React from 'react'
import MusicCard from '../components/MusicCard'

const Music = () => {
  return (
    <>
      <div className='w-full pt-32 pb-10 bg-royal-blue flex justify-center items-center flex-col gap-4'>
      <h1 className='font-headingfont text-center text-white text-3xl md:text-5xl'>Search Location for Nearby Krishna Temple</h1>
      <div className='w-[50%] h-auto p-1 bg-gradient-to-r from-golden to-indigo rounded-3xl'>
        <input placeholder='Search' className='w-full text-sm md:text-lg text-center font-kaivalya py-2 px-8 rounded-3xl focus:outline-double' type="text" />
      </div>
      </div>
      <div className='w-full py-10 bg-royal-blue flex flex-wrap gap-4 justify-center'>
        <div className='flex justify-center h-full gap-4 flex-wrap mb-10 md:px-32'>
          <MusicCard></MusicCard>
          <MusicCard></MusicCard>
          <MusicCard></MusicCard>
          <MusicCard></MusicCard>
          <MusicCard></MusicCard>
          <MusicCard></MusicCard>
          <MusicCard></MusicCard>
        </div>
      </div>
    </>
  )
}

export default Music