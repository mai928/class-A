'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation' // Ensure this is included
import "swiper/css/pagination";
import 'swiper/css/autoplay'
import { brandImages, produscts, services } from '@/data'
import DOMPurify from 'isomorphic-dompurify'

const BrandDetails = () => {

    const path = usePathname()
    const truncateText = (text, wordCount) => {
        return text?.split(' ').slice(0, wordCount).join(' ') + '...';
    };

    return (
        <section>
            <div className='relative w-full h-[55vh] lg:h-[70vh] '>
                <Image
                    src='/assets/bg2-remove.jpeg'
                    alt='img'
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                    className='w-full h-full'
                    sizes="(max-width: 600px) 150vw,
               (max-width: 1200px) 50vw,
               "
                />
                <div className='absolute inset-0 bg-black  bg-opacity-50' />
                <div className='absolute  w-full top-64 '>
                    <div className=' border-t-[1px] mx-32  border-gray-400 bg-opacity-30' />
                    <div className='flex items-center mx-32 justify-between'>
                        <h1 className='text-4xl text-white font-semibold py-10'>Brand Details</h1>
                        <div className='text-white text-[13px]'>{path?.startsWith('/') && (<div className='flex items-center gap-2'><svg width={16} className='fill-white ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" /></svg><Link href={'/'} className='hover:text-primary_Color_Light'>Home</Link> <span>/</span><span>{path.split('/')}</span></div>)}</div>
                    </div>
                </div>
            </div>

            <div className=' px-10 lg:px-28 py-20'>
                <div className='block lg:flex justify-between '>
                    <div className=' w-full lg:w-[45%]  text-center lg:text-start'>
                        <h3 className='text-xl lg:text-3xl'>Become our organization member and help people for their needs</h3>
                        <p className='pt-5 pb-10 text-meduim_gray  text-[15px] leading-8 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <div className='w-full lg:w-[45%] mt-10 lg:mt-0'>
                        <img className='object-cover' src='/assets/about.jpg' />

                    </div>

                </div>


                {/* images */}
                {/* <div className='py-10'>
                    <Swiper
                    className='overflow-auto'
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
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}

                >
                    {brandImages.map((partner, index) => (
                        <SwiperSlide key={index}>
                            <img width={'800px'}   className='bg_img' src={partner.src} alt={`Partner ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>  
                </div> */}


                <div className='grid grid-cols-1 lg:grid-cols-2  gap-10 mx-28 py-10'>
                    {produscts?.map((item, index) => (
                        <div key={index} className=" mt-5">
                            {/* "bg-white rounded-lg shadow-md overflow-hidden */}
                            <div className="">
                                <div className="text-center">
                                    <img className='mx-auto  w-72 h-72 lg:w-full object-cover' alt={'img'} src={item.src} />
                                    <h2 className="text-xl font-bold text-slate-800  mb-2 mt-5">{item.title}</h2>
                                    <div className=" text-[15px] text-dark_gray  font-[500] " dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize((truncateText(item.desc, 20))) }} />
                                    <div className='my-5'>
                                        <Link href={`/brands/${item.id}`} className={'text-white  bg-primary_Color_Light hover:bg-primary_Color_dark py-3 px-4'} >
                                            Read More
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    )
}

export default BrandDetails