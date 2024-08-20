'use client'
import { navbarLink } from '@/data'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from '../../public/assets/logo.png'

const SecondNav = ({ showmenuIcon }) => {
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
  return (
    <>
      {
        showmenuIcon === false && (<section
          className={`w-full z-50   ${isFixed ? 'fixed top-0 bg-black py-3' : 'absolute top-32'
            }`}>
          <div className='flex  items-center w-full justify-between px-28 '>
            <div>
              <img alt='logo' className={`${isFixed ? 'w-28' : ''}`} src={'/assets/logo.png'} />
            </div>

            <div className='flex gap-10 '>
              {
                navbarLink.map((link, index) => (
                  <div key={index}>
                    <Link href={link.path} className='text-white hover:text-primary_Color_Light'>{link.name}</Link>
                  </div>
                ))
              }

            </div>
          </div>

        </section>)
      }


    </>

  )
}

export default SecondNav