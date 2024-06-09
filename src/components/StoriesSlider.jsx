import React from 'react'
import { useState, useRef } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Virtual, Pagination, Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import feather from '../assets/images/peacockfeather.png'
import Krishna from '../assets/images/krishna.png'

const StoriesSlider = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    // const appendNumber = useRef(500);
    // const prependNumber = useRef(1);
    // Create array with 500 slides
    const slides = [
        {
            image: Krishna,
            text: "Krishna",
            path: "/"
        },
        {
            image: Krishna,
            text: "Krishna",
            path: "/"
        },
        {
            image: Krishna,
            text: "Krishna",
            path: "/"
        },{
            image: Krishna,
            text: "Krishna",
            path: "/"
        },{
            image: Krishna,
            text: "Krishna",
            path: "/"
        },{
            image: Krishna,
            text: "Krishna",
            path: "/"
        },{
            image: Krishna,
            text: "Krishna",
            path: "/"
        },{
            image: Krishna,
            text: "Krishna",
            path: "/"
        },{
            image: Krishna,
            text: "Krishna",
            path: "/"
        },{
            image: Krishna,
            text: "Krishna",
            path: "/"
        }
    ]



  return (
    <div className='w-full h-auto bg-indigo p-16 pb-20 overflow-hidden lg:px-[12rem] hidden md:block'>
        <h2 className='text-center font-headingfont  text-7xl text-white mb-12'>Stories</h2>
        <div className='w-full md:h-[20rem] lg:h-[28rem]  overflow-hidden'>
            <Swiper
            className='w-full h-full px-10'
            modules={[Virtual, Navigation, Pagination, Autoplay]}
            onSwiper={setSwiperRef}
            slidesPerView={3}
            // need a size change event listener to assign the slides value again
            centeredSlides={true}
            spaceBetween={40}
            initialSlide={2}
            autoplay={{
                delay: 7000,
                disableOnInteraction:false
            }}
            grabCursor
            loop
            speed={2000}
            navigation={true}
            virtual>
            {slides.map((current, index) => (
            <SwiperSlide key={current} virtualIndex={index}>
                <div className='w-full h-full relative rounded-xl bg-white overflow-hidden group'>
                    <div className='w-full h-[50%] invisible group-hover:visible group-hover:bottom-0 duration-300 bg-gradient-to-b ease-in from-transparent to-black from-10% to-70% z-10 absolute -bottom-[300px] left-0 flex flex-col justify-end p-6'>
                        <p className='text-white text-3xl font-bold font-kaivalya'>Kaivalya</p>
                    </div>
                    <img src={current.image} className='w-full h-full absolute left-0 top-0 object-cover transition-all ease-in duration-[500ms] group-hover:scale-125' alt="image" />
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
     </div>
    </div>
  )
}

export default StoriesSlider