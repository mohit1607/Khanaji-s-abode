import React from 'react'
import TempleCard from './TempleCard'
import ButtonOutline from './ButtonOutline'

const Explore = () => {
  return (
    <div className='w-full py-10 bg-gradient-to-r from-royal-blue from-30% to-golden flex flex-wrap gap-4 justify-center'>
      <h3 className='text-5xl font-bold text-indigo mb-3 font-headingfont'>Temples</h3>
      <div className='flex justify-center h-full gap-4 flex-wrap mb-10 md:px-32'>
        <TempleCard></TempleCard>
        <TempleCard></TempleCard>
        <TempleCard></TempleCard>
        <TempleCard></TempleCard>
        <TempleCard></TempleCard>
        <TempleCard></TempleCard>
      </div>
      <ButtonOutline className='justify-self-start border-indigo text-indigo'>See More...</ButtonOutline>
    </div>
  )
}

export default Explore