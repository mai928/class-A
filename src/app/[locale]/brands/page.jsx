'use client'
import initTranslations from '@/app/i18n'
import MainBackground from '@/components/MainBackground'
import { services } from '@/data'
import DOMPurify from 'isomorphic-dompurify'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { fetchData } from '../../../../utils/api'

const Brandspage = async({params}) => {

    const truncateText = (text, wordCount) => {
        return text?.split(' ').slice(0, wordCount).join(' ') + '...';
    };


    const i18nNamespaces = ["home"];

    const { locale } = params



    const { t } = await initTranslations(locale, i18nNamespaces)
    const Data = await fetchData(`api/services`, locale)
    const services = Data?.data



  return (
   <section>
     <MainBackground/>

            <div className='grid grid-cols-1 lg:grid-cols-2  gap-10 lg:mx-28 py-10'>
            {services?.map((item, index) => (
                        <div key={index} className=" mt-5">
                            {/* "bg-white rounded-lg shadow-md overflow-hidden */}
                            <div className="">
                                <div className="text-center">
                                    <img className='mx-auto  w-72 h-72 lg:w-full object-cover' alt={'img'} src={item.photo} />
                                    <h2 className="text-xl font-bold text-slate-800  mb-2 mt-5">{t(item.title)}</h2>
                                    <div className=" text-[15px] text-dark_gray  font-[500] " dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(t(truncateText(item.details || '', 20))) }} />
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
   </section>
  )
}

export default Brandspage