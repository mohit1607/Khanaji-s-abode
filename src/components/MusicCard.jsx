import React, { useEffect, useRef, useState } from 'react'
import { BsFillStopFill } from "react-icons/bs"; 
import { AiOutlinePauseCircle } from "react-icons/ai"; 
import { AiFillPlayCircle } from "react-icons/ai"; 
import krishna from '../assets/images/krishna.png'
import thisMusic from '../assets/music/little_krishna.mp3'
import { useSound } from 'use-sound'

const MusicCard = ({
  music = thisMusic,
  name = 'AnyMusic',
  image = 'image',
  textColor = 'white'
}) => {

  const [rotating, setRotating] = useState(false) // this will be global variable in future
  const disc = useRef(null)
  const interval = useRef(null)
  const degrees = useRef(0)
  const [play, {pause, duration, sound, stop}] = useSound(thisMusic)

  const playMusic = () => {
    if(music === null) {
      alert('The music is not available')
      return
    }
    if(rotating == false) {
      setRotating(true)
      play()
      disc.current.style.transition = 'transform ease-linear'
      const rotate = (degrees) => {
        disc.current.style.transform = `rotate(${degrees.toString()}deg)`;
      }
      
      interval.current = setInterval(() => {
        degrees.current += 0.5
        rotate(degrees.current)
      }, 15)
    }
  }

  const pauseMusic = () => {
    pause()
    clearInterval(interval.current)
    setRotating(false)
  }

  const stopAndRestart = () => {
    stop()
    clearInterval(interval.current)
    setRotating(false)
    degrees.current = 0
    disc.current.style.transform = `rotate(0deg)`
  }

  return (
    <div className='w-[16rem] h-[17rem] rounded-2xl overflow-hidden'>
      <div className='h-[70%] w-full flex justify-center items-center bg-golden rounded-xl relative'>
      <div className='group flex flex-col justify-center h-full p-3 scale-75 gap-4 absolute right-0 top-0'>
          { 
          !rotating ?  <button onClick={() => playMusic()}>
            <AiFillPlayCircle size={30} />
          </button>
          :
          <button onClick={()=> pauseMusic()} >
            <AiOutlinePauseCircle size={30} />
          </button>
          }
          <button onClick={() => stopAndRestart()}>
            <BsFillStopFill size={30} />
          </button>
        </div>
       <div ref={disc} className={`overflow-hidden ease-linear rounded-full w-[8rem] h-[8rem] relative flex -left-8 justify-center items-center`}>
        <div className='p-3 bg-white rounded-full z-[5]'></div>
        <img className='w-full h-full object-cover absolute top-0 left-0' src={krishna} alt="krishna"  />
       </div>
      </div>
      <div className={`h-[30%] w-full flex justify-start items-start font-kaivalya py-2 text-${textColor}`}>
        {name}
      </div>
    </div>
  )
}

export default MusicCard