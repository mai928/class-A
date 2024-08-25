import React from 'react'

const Form = () => {
  return (
   <section className=' px-5 lg:px-28 py-10 text-center'>
    <div  className='  lg:flex gap-4'>
    <input className='block mt-3  lg:mt-0 w-full border-gray-300 px-5 border-solid border-[1px] lg:w-1/3 py-2 placeholder:text-dark_gray' placeholder='Name'/>
    <input className='block mt-3  lg:mt-0 w-full border-gray-300 px-5 border-solid border-[1px] lg:w-1/3 py-2 placeholder:text-dark_gray' placeholder='Email'/>
    <input className='block mt-3  lg:mt-0 w-full border-gray-300 px-5 border-solid border-[1px] lg:w-1/3 py-2 placeholder:text-dark_gray' placeholder='Phone'/>
    </div>
    <textarea  className='border-gray-300 px-5 border-solid border-[1px] w-full my-5 pt-2 pb-10 placeholder:text-dark_gray'cols={5} placeholder='Message'/>
     <div>
        <button className='bg-primary_Color_Light text-white px-10 py-3 hover:bg-primary_Color_dark hover:text-lg'>Send Now</button>
     </div>
   </section>
  )
}

export default Form