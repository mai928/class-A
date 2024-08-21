'use client'
import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import Link from 'next/link';

const Partner = () => {
    return (
        <section className='bg-partner ' >

            <div className='lg:mx-28 py-20 lg:flex relative z-20 '>

                <div className='m-auto lg:m-0 w-[90%] lg:w-[70%] border-[1px] border-light_gray p-10'>
                    <div className='lg:w-[60%]  text-center lg:text-start'>
                        <h3 className='text-white text-xl lg:text-3xl font-semibold py-5'>Helping children in Nigeria
                        </h3>
                        <p className='text-white leading-8'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        <ProgressBar completed={''} className='' barContainerClassName='bg-white' completedClassName='barCompleted' />
                        <div className='py-5'>
                            <Link href={'/'} className='border-2 px-10 py-3 text-white font-semibold text-lg hover:text-black hover:bg-white'>Contact</Link>
                        </div>
                    </div>

                </div>
                <div className='lg:absolute lg:start-[50%]  lg:top-[23%] p-4 lg:p-0'>
                    <img alt='img' className='w-[500px]  ' src='/assets/bg4.jpg' />
                </div>
            </div>

        </section>
    )
}

export default Partner