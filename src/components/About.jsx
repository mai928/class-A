import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <section className='bg-light_gray'>
            <div className=' px-10 lg:px-28 py-20'>
                <div className='block lg:flex justify-between '>
                    <div className=' w-full lg:w-[45%]  text-center lg:text-start'>
                        <h3 className='text-xl lg:text-3xl'>Become our organization member and help people for their needs</h3>
                        <p className='pt-5 pb-10 text-meduim_gray  text-[15px] leading-8 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <Link href={'/'} className='bg-primary_Color_Light hover:bg-primary_Color_dark px-5 py-3 text-white'>Read More</Link>
                    </div>
                    <div className='w-full lg:w-[45%] mt-10 lg:mt-0'>
                        <img className='object-cover' src='/assets/about.jpg' />

                    </div>

                </div>
            </div>


        </section>
    )
}

export default About