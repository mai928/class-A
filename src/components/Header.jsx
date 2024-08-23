'use client'
import React, { useEffect, useState } from 'react'
import FirstNav from './FirstNav'
import SecondNav from './SecondNav'

const Header = () => {

  const [toggle, setToggle] = useState(false)
  const [showmenuIcon, setshowmenuIcon] = useState(false)

  const [isFixed, setIsFixed] = useState(false);

  const handleFixed = () => {

    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }


  useEffect(() => {

    if (window.scrollY >= 100) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }

    handleFixed()

  }, [])
  useEffect(() => {

    const handleSize = () => {
      if (window.innerWidth <= 1024) {
        setToggle(false)
        setshowmenuIcon(true)
      } else {
        setshowmenuIcon(false)

      }
    }


    handleSize()
    window.addEventListener('resize', handleSize)
    return () => {
      window.removeEventListener('resize', handleSize)
    }

  }, [])
  return (
    <section className=''>
      {
        showmenuIcon === true ? (
          <div className={`w-full p-2 z-50 ${isFixed ? 'fixed top-0  bg-black':'absolute top-0 '}`}>
            <div className=' flex justify-between items-center'>
              <div>
                <img alt='logo' className='w-24' src='/assets/logo.png' />
              </div>
              <div> <svg xmlns="http://www.w3.org/2000/svg" width={20} className='fill-white ' viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg></div>
            </div>
          </div>
        ) : (
          <div> <FirstNav showmenuIcon={showmenuIcon} />
            <SecondNav showmenuIcon={showmenuIcon} />
          </div>
        )
      }

    </section>
  )
}

export default Header

