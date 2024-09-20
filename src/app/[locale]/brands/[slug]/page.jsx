import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { brandImages, produscts, services } from '@/data'
import DOMPurify from 'isomorphic-dompurify'
import MainBackground from '@/components/MainBackground'

const BrandDetails = () => {

   

    return (
        <section>
           
            <MainBackground/>

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


                   


                <div className='grid grid-cols-1 lg:grid-cols-2  gap-10 mx-28 py-10'>
                    {produscts?.map((item, index) => (
                        <div key={index} className=" mt-5">
                            {/* "bg-white rounded-lg shadow-md overflow-hidden */}
                            <div className="">
                                <div className="text-center">
                                    <img className='mx-auto  w-72 h-72 lg:w-full object-cover' alt={'img'} src={item.src} />
                                    <h2 className="text-xl font-bold text-slate-800  mb-2 mt-5">{item.title}</h2>
                                    {/* <div className=" text-[15px] text-dark_gray  font-[500] " dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize((truncateText(item.desc, 20))) }} /> */}
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