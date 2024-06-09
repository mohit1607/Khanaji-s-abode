import React, { useState } from 'react'
import Yantra from '../assets/images/krishnayantra.svg'
import feather2 from '../assets/images/feather2.png'
import { useNavigate, NavLink } from 'react-router-dom'
import feather from '../assets/images/peacockfeather.png'

const Nav = () => {

  const [toggle, setToggle] = useState(false) 
  const navigate = useNavigate()

  return (
    <>
    <div  className='px-[10%] py-6 bg-transparent flex justify-between items-center fixed w-full overflow-hidden'>
      <div onClick={() => navigate("/")} className='sm:w-[6rem] sm:h-[6rem] h-[3rem] w-[3rem] cursor-pointer'><img src={Yantra} className='w-full h-full object-cover' alt="Krishna_yantra" /></div>
      <div onClick={() => setToggle(prev => !prev)}  className='sm:w-[8rem] sm:h-[8rem] h-[3rem] w-[3rem] shake-feather cursor-pointer'><img src={feather2} className='w-full h-full object-contain rotate-[45deg] z-[10]' alt="Peacock feather icon" /></div>
    </div>
    <div className={`lg:h-[100vmin] h-full w-[100%] lg:w-[40%] bg-sea-green z-[20] fixed top-0 right-0 ease-in-out duration-700 ${toggle ? '-translate-x-0' : 'translate-x-[1500px]'} p-8`}>
      <div className='relative w-full h-full'>
       {/* feather */}
        <div className='fixed invisible md:visible lg:-left-[15rem] top-10 scale-75'>
          <img className='w-full h-full -rotate-[225deg] scaleX(-1)' src={feather} alt="Krishna's peacock feather" />
        </div>
      <div onClick={() => setToggle(prev => !prev)}  className='w-[5rem] h-[5rem] cursor-pointer'><img src={feather2} className='w-full h-full object-contain rotate-[45deg] z-[10]' alt="Peacock feather icon" /></div>
      <div className='w-full h-[80%] ease-in-out transition-all duration-300 py-4 overflow-auto'>
        <ul className=' flex flex-col justify-center items-center gap-[1.5rem]'>
          <li className='text-7xl font-headingfont hover:underline'>
            <NavLink to="/">Stories</NavLink>
          </li>
          <li className='text-7xl font-headingfont hover:underline'>
            <NavLink to="/temples" onClick={() => setToggle(false)}>Temples</NavLink>
          </li>
          <li className='text-7xl font-headingfont hover:underline'>
            <NavLink to="/" onClick={() => setToggle(false)}>Events</NavLink>
          </li>
          <li className='text-7xl font-headingfont hover:underline'>
            <NavLink to="/" onClick={() => setToggle(false)}>Shop</NavLink>
          </li>
          <li className='text-7xl font-headingfont hover:underline'>
            <NavLink to="/" onClick={() => setToggle(false)}>Music</NavLink>
          </li>
        </ul>
      </div>
      </div>
    </div>
    </>
  )
}

export default Nav