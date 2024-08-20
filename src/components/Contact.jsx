import React from 'react'

const Contact = () => {
    return (
        <section className='contact-bg'>
            <div className=' block lg:flex  gap-32 items-center lg:mx-28 py-20'>
                <div className='lg:w-[50%]'>
                    <h3 className='text-3xl text-center lg:text-start lg:text-6xl font-semibold leading-snug'>
                        If you have questions,contact us
                    </h3>
                </div>

                <form className='lg:w-[50%] mx-5 lg:mx-0'>
                    <input className='block border-[1px] text-gray-700 placeholder:text-gray-700  border-slate-200  py-3 my-5 px-5 w-full' placeholder='Name' />
                    <input className='block border-[1px] text-gray-700 placeholder:text-gray-700  border-slate-200  py-3 my-5 px-5 w-full' placeholder='Email' />
                    <input className='block border-[1px] text-gray-700 placeholder:text-gray-700  border-slate-200  py-3 my-5 px-5 w-full' placeholder='Phone' />
                    <textarea className='block border-[1px] text-gray-700 placeholder:text-gray-700  border-slate-200  py-3 my-5 px-5 w-full' placeholder='Message' cols={5} />
                    <div className='flex justify-end'>
                        <button className=' bg-primary_Color_Light hover:bg-primary_Color_dark text-white  text-lg py-2 px-10'>Send</button>

                    </div>
                </form>

            </div>

            {/* red subscribe */}
            <div className='bg-primary_Color_Light '>
                <div className='block lg:flex justify-between  items-center text-center lg:text-start lg:mx-28 py-10'>
                    <div>
                        <h3 className='text-3xl text-white'>Subscribe for <span className='text-black font-bold '>News</span>letter</h3>
                    </div>
                    <form className='block lg:flex items-center gap-5'>
                        <input className='block  m-auto  py-4 my-5 px-5 w-[90%] lg:w-full ' placeholder='Email' />
                        <button className='border-2 text-white border-white py-[15px] px-6'>Subscribe</button>

                    </form>

                </div>

            </div>

        </section>
    )
}

export default Contact