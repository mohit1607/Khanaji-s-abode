import React from 'react'
import Music from './MusicCard'
import ButtonOutline from './ButtonOutline'

const KrishnaMusic = () => {

  

  return (
    <div className='py-12 bg-gradient-to-r from-sea-green to-royal-blue flex justify-center items-center flex-col'>
      <h2 className='text-center text-golden font-headingfont  text-7xl mb-12'>Krishna Music</h2>
       <div className='flex justify-center h-full gap-12 flex-wrap mb-10 md:px-28'> 
        <Music textColor='black'></Music>
        <Music textColor='black'></Music>
        <Music textColor='black'></Music>
        <Music textColor='black'></Music>
      </div>
      <ButtonOutline className='border-indigo text-indigo'>See More...</ButtonOutline>
    </div>
  )
}

export default KrishnaMusic