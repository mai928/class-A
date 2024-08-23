'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { services } from '@/data';
import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link';

const Brands = () => {

    const truncateText = (text, wordCount) => {
        return text?.split(' ').slice(0, wordCount).join(' ') + '...';
    };

    const breakpoints = {
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,

        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,

        },
        320: {
            slidesPerView: 1,
            spaceBetween: 0,

        },
        310: {
            slidesPerView: 1,
            spaceBetween: 0,

        },
    };
    return (
        <section className='lg:px-28 py-20'>
            <h3 className='text-center text-3xl'>Our Brands</h3>
            <Swiper
                slidesPerView={3}
                breakpoints={breakpoints}
                autoplay={{ delay: 4000 }}
                speed={1000}
                loop={true}
                modules={[Navigation, Autoplay, Pagination]}

            >
                <div>
                    {services?.map((item, index) => (
                        <SwiperSlide key={index} className=" mt-5">
                            {/* "bg-white rounded-lg shadow-md overflow-hidden */}
                            <div className="p-5">
                                <div className="text-center">
                                    <img className='mx-auto rounded-full w-72 h-72 lg:w-80 lg:h-80 object-cover' alt={'img'} src={item.src} />
                                    <h2 className="text-xl font-bold text-slate-800  mb-2 mt-5">{item.title}</h2>
                                    <div className=" text-[15px] text-dark_gray  font-[500] " dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize((truncateText(item.desc, 20))) }} />
                                     <div className='my-5'>
                                        <Link href={`/`} className={'text-white  bg-primary_Color_Light hover:bg-primary_Color_dark py-3 px-4'} >
                                        Read More
                                    </Link>
                                     </div>
                                    
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>

            </Swiper>

        </section>
    )
}

export default Brands