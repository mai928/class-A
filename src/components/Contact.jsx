import React from 'react'

const Contact = () => {
  return (
    <section className='contact-bg'>
        <div className='flex  gap-32 items-center mx-48 py-20'>
            <div className='w-[50%]'>
                <h3 className='text-6xl font-semibold leading-snug'>
                If you have questions,contact us
                </h3>
            </div>

            <form className='w-[50%]'>
            <input className='block  py-3 my-5 px-5 w-full' placeholder='Name'/>
            <input className='block  py-3 my-5 px-5 w-full' placeholder='Email'/>
            <input className='block  py-3 my-5 px-5 w-full' placeholder='Phone'/>
            <textarea className='block  py-3 my-5 px-5 w-full' placeholder='Message' cols={5}/>
           <div className='flex justify-end'>
                        <button className=' bg-primary_Color_Light hover:bg-primary_Color_dark text-white  text-lg py-2 px-10'>Send</button>

           </div>
            </form>

        </div>

        {/* red subscribe */}
        <div className='bg-primary_Color_Light '>
            <div className=' flex justify-between  items-center mx-48 py-10'>
                <div>
                    <h3 className='text-3xl text-white'>Subscribe for <span className='text-black font-bold '>News</span>letter</h3>
                </div>
                <form className='flex items-center gap-5'>
                <input className='block  py-4 my-5 px-5 w-full' placeholder='Email'/>
                <button className='border-2 text-white border-white py-[15px] px-6'>Subscribe</button>

                </form>

            </div>

        </div>

    </section>
  )
}

export default Contact