import { BiRightArrowAlt } from "react-icons/bi"; 
import React from 'react'
import templeImage from '../assets/images/temple.png'

const TempleCard = ({
  templeName = 'Dwarkadheesh',
  image = templeImage
}) => {
  return (
    <div className=' w-[18rem] h-[26rem] px-auto relative overflow-hidden group rounded'>
      <div className='absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-b from-transparent to-black z-[5] flex items-end justify-center'>
        <div className='w-[65%] p-5 text-white font-kaivalya'>Dwarkadheesh Mandir</div>
        <div className='w-[35%] p-4 text-white font-kaivalya'></div>
      </div>
      <img className='w-full h-full object-cover group-hover:scale-110 duration-[2000ms] z-[3] transition-transform' src={image} alt="krishna" />
      <button className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300 z-[6] rounded-[50rem] p-2 bg-white"><BiRightArrowAlt className="#212121" size={30} /></button>
    </div>
  )
}

export default TempleCard