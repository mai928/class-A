'use client'
import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import Link from 'next/link';

const Partner = () => {
    return (
        <section className='bg-partner' >
            <div className='mx-48 py-20 flex relative'>

                <div className=' w-[70%] border-[1px] border-light_gray p-10'>
                    <div className='w-[60%]'>
                        <h3 className='text-white text-3xl font-semibold py-5'>Helping children in Nigeria
                        </h3>
                        <p className='text-white leading-8'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        <ProgressBar completed={''} className='' barContainerClassName='bg-white' completedClassName='barCompleted' />
                        <div className='py-5'>
                            <Link href={'/'} className='border-2 px-10 py-3 text-white font-semibold text-lg hover:text-black hover:bg-white'>Contact</Link>
                        </div>
                    </div>

                </div>
                <div className='absolute start-[50%] top-[23%]'>
                    <img alt='img' className='w-[600px] ' src='/assets/boy.jpg' />
                </div>
            </div>

        </section>
    )
}

export default Partner