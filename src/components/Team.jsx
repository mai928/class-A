'use client'
import { brandImages } from '@/data'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation' // Ensure this is included
import "swiper/css/pagination";
import 'swiper/css/autoplay'

const Team = () => {
    return (
        <section className='py-20 lg:px-28'>
            {/* images */}
            <h3 className='text-center text-4xl'>Our Team</h3>
            <div className='py-10'>
                <Swiper
                    className=''
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    speed={2000}
                    loop={true}
                    autoplay={{ delay: 50 }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}

                >
                    {brandImages.map((partner, index) => (
                        <SwiperSlide key={index}>
                            <img className='w-[250px] h-[250px] rounded-full m-auto' src={partner.src} alt={`Partner ${index + 1}`} />
                            <p className='text-center py-2 font-semibold text-lg'>{partner.name}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Team