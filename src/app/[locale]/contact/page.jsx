'use client'
import Form from '@/components/Form'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
const Contact = () => {

    const path = usePathname()
    return (
        <section>
            <div className='relative w-full h-[55vh] lg:h-[70vh] '>
                {/* <Image
                    src='/assets/bg2-remove.jpeg'
                    alt='img'
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                    className='w-full h-full'
                    sizes="(max-width: 600px) 150vw,
               (max-width: 1200px) 50vw,
               "
                /> */}
                <div className='mainImage' />
                <div className='absolute inset-0 bg-black  bg-opacity-50' />
                <div className='absolute  w-full top-32 lg:top-64 '>
                    <div className=' border-t-[1px] mx-32  border-gray-400 bg-opacity-30' />
                    <div className='lg:flex items-center text-center lg:mx-32 justify-between'>
                        <h1 className='text-4xl text-white font-semibold py-10'>About Us</h1>
                        <div className='text-white text-[13px] flex justify-center items-center lg:block'>{path?.startsWith('/') && (<div className='flex items-center gap-2'><svg width={16} className='fill-white ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" /></svg><Link href={'/'} className='hover:text-primary_Color_Light'>Home</Link> <span>/</span><span>{path.split('/')}</span></div>)}</div>
                    </div>
                </div>
            </div>

            <div className='h-72 bg-gray-200 bg-opacity-25'></div>
            <div
                className='relative lg:mx-28 '>
                <div className='lg:flex justify-between '>
                    <div className=' py-20 lg:py-10 text-center  lg:text-start'>
                        <h3 className='text-dark_gray text-4xl'>Contact Us,</h3>
                        <p className='text-6xl py-2'>If you</p>
                        <p className='text-7xl font-extrabold '>Have</p>
                        <p className='text-6xl pt-4 pb-1'>Any</p>
                        <p className='text-6xl font-extrabold text-primary_Color_Light'>Question...</p>
                    </div>
                    <div className='absolute top-[-100px] lg:top-[-200px] left-[30%]'><img  src='/assets/contact.png' alt='img' /></div>
                    <div className='lg:py-10 text-center lg:text-end '>
                        <h3 className='text-dark_gray text-4xl'>Contact info</h3>


                        <div className='flex items-start lg:gap-5 pt-5 mx-5 lg:mx-0'>
                        <div className='w-[415px]'>
                        <p className='text-gray-700 py-2'>Call us</p>

                                <p className='font-semibold text-2xl'>800 516 3290</p>
                            </div>
                            <div className='p-2 mt-3 bg-primary_Color_Light rounded-lg'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    className="fill-white"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                                </svg>
                            </div>
                        </div>

                        <div className='flex items-start lg:gap-5 pt-5 mx-5 lg:mx-0'>
                        <div className='w-[415px]'>
                        <p className='text-gray-700 py-2'>Email</p>

                                <p className='font-semibold text-2xl'>info@giving.com</p>
                            </div>
                            <div className='p-2 mt-3 bg-primary_Color_Light rounded-lg'>
                                <svg width={20} className="fill-white"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>

                            </div>
                        </div>

                        <div className='flex items-start lg:gap-5 pt-5 mx-5 lg:mx-0'>
                            <div className='w-full lg:w-[415px]'>
                                <div>
                                <p className='text-gray-700 py-2'>Branches</p>

                                    <p className='font-semibold text-2xl pb-3 ' >I . Cairo & Giza Region:</p>
                                    <ul>
                                        <li className='text-gray-500 text-[14px] py-1 font-semibold '>The Fifth Settlement 1st warehouse space (Head Office): 800 Sqm.</li>
                                        <li className='text-gray-500 text-[14px] py-1 font-semibold'>The Fifth Settlement 2nd warehouse space: 1200 Sqm.</li>
                                        <li className='text-gray-500 text-[14px] py-1 font-semibold'>Badr warehouse space: 2300 sqm.</li>
                                        <li className='text-gray-500 text-[14px] py-1 font-semibold'>Giza Warehouse space: 400 Sqm</li>
                                    </ul>

                                </div>
                                <div className='py-4'>
                                    <p className='font-semibold text-2xl pb-3'>IV. Alexandria & Delta Region: </p>
                                    <ul>
                                        <li className='text-gray-500 text-[14px] py-1 font-semibold'>Alex. warehouse space: 900 Sqm.</li>
                                        <li className='text-gray-500 text-[14px] py-1 font-semibold'>Mansoura warehouse space: 300 Sqm.</li>
                                    </ul>

                                </div>

                                <div>
                                    <p className='font-semibold text-2xl pb-3'>V. Upper Egypt Region: </p>
                                    <ul>
                                        <li className='text-gray-500 text-[14px] py-1 font-semibold'>Assiut warehouse space: 700 Sqm.</li>
                                        <li className='text-gray-500 text-[14px] py-1 font-semibold'>Hurghada warehouse space: 300 Sqm.</li>
                                    </ul>

                                </div>
                            </div>
                            <div className='p-2 mt-3 bg-primary_Color_Light rounded-lg'>
                                <svg width={20} className=' fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Form />

            <div>
                <div className=' px-5 lg:px-28 lg:py-20'><iframe className='w-full h-[400px] lg:h-[600px]' src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
            </div>
        </section>
    )
}

export default Contact