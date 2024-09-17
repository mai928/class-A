'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation'; // Ensure this is included
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Link from 'next/link';
import styles from './slider.module.css'; // Import the CSS module
import CountDownTimer from '../CountDownTimer';
import { useTranslation } from 'react-i18next';
import { fetchData } from '../../../utils/api';
import DOMPurify from 'isomorphic-dompurify';

const Slider = () => {

    const [show, setShow] = useState(false)

    // const date = new Date();
    // const day = date.getDate();
    // const monthNames = [
    //     "January", "February", "March", "April", "May", "June",
    //     "July", "August", "September", "October", "November", "December"
    // ];
    // const month = monthNames[date.getMonth()]; // Get the current month as a string


    // let hour = date.getHours();
    // const ampm = hour >= 12 ? 'PM' : 'AM';
    // hour = hour % 12 || 12; // Convert to 12-hour format

    const { t, i18n } = useTranslation()

    const [sliderData, setData] = useState([])
    useEffect(() => {
        const fetchSlider = async () => {
            const data = await fetchData(`api/sliders`, i18n.language)
            setData(data?.data)
        }

        fetchSlider()
    }, [])

    return (
        <section className='relative z-0'
        // onMouseOver={() => setShow(true)}
        // onMouseOut={() => setShow(false)}
        >

            <Swiper
                className="static"
                dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
                key={i18n.language}
                loop={true}
                autoplay={{ delay: 10000 }}
                effect="fade"
                pagination={{ clickable: true }}
                modules={[Navigation, Autoplay, EffectFade]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}

            >

                <>

                    <div className={`swiper-button-next  text-white  `}></div>
                    <div className={`swiper-button-prev text-white `}></div>

                </>
                {
                    sliderData.map((slide, index) => (
                        <SwiperSlide key={index} className="swiper-slide relative">
                            <div className='relative'>
                                <img className='w-full h-[60vb] lg:h-[110vb] ' loading='eager' alt='img' src={slide?.photo} />
                                <div className='absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50'></div>

                            </div>
                            <div className='absolute inset-0 top-72 lg:top-52 flex flex-col justify-center text-center items-center animatedText'>
                                <h2 className=' text-lg lg:text-8xl text-white'>{slide?.title}</h2>


                                <div className='lg:mt-16 mb-10 text-white  text-[12px] lg:text-3xl  w-[80%]' dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(t(slide?.details))}} />
                                <Link href={'/'} className=' my-14 bg-primary_Color_Light hover:bg-primary_Color_dark text-[13px] lg:text-lg text-white ] py-3 px-4   '>Discover More</Link>
                                {/* <div className='w-[80%]'>
                                    <div className='border-t-[1px] border-dark_gray ' />
                                    <div className=' flex  justify-between items-center my-10 '>
                                        <div className=''>
                                            <h3 className='text-white text-start '>Helping children in Nigeria</h3>

                                            <div className='flex gap-10'>
                                                <p className='text-white'>NYC 21th street #43</p>
                                                <p className='text-white'>{day} {month}</p>
                                                <p className='text-white'>{hour} {ampm}</p>

                                            </div>
                                        </div>
                                        <CountDownTimer />
                                    </div>
                                </div> */}


                            </div>


                        </SwiperSlide>
                    ))
                }



            </Swiper>
        </section>
    )
}

export default Slider