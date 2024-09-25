import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { brandImages, produscts, services } from '@/data'
import DOMPurify from 'isomorphic-dompurify'
import MainBackground from '@/components/MainBackground'
import initTranslations from '@/app/i18n'
import { fetchData } from '../../../../../utils/api'

const BrandDetails = async ({ params }) => {


    const i18nNamespaces = ["home"];

    const { locale } = params
    const slug = params.slug


    const { t } = await initTranslations(locale, i18nNamespaces)
    const Data = await fetchData(`api/single-category/${slug}`, locale)
    const brandsDetails = Data?.data

    const product = await fetchData(`api/services`, locale)
    const productData = product?.data



    return (
        <section>

            <MainBackground />

            <div className=' px-10 lg:px-28 py-20'>
                <div className='block lg:flex justify-between '>
                    <div className=' w-full lg:w-[45%]  text-center lg:text-start'>
                        <h3 className='text-xl lg:text-3xl'>{brandsDetails?.title}</h3>
                        <p className='pt-5 pb-10 text-meduim_gray  text-[15px] leading-8 '>{brandsDetails?.details}</p>
                    </div>
                    <div className='w-full lg:w-[45%] mt-10 lg:mt-0'>
                        <img className='object-cover' src={brandsDetails?.photo} />

                    </div>

                </div>





                <div className='grid grid-cols-1 lg:grid-cols-2  gap-10 mx-28 py-10'>
                    {productData?.map((item, index) => (
                        <div key={index} className=" mt-5">
                            {/* "bg-white rounded-lg shadow-md overflow-hidden */}
                            <div className="">
                                <div className="text-center">
                                    <img className='mx-auto  w-72 h-72 lg:w-full object-cover' alt={'img'} src={item.photo} />
                                    <h2 className="text-xl font-bold text-slate-800  mb-2 mt-5">{item.title}</h2>
                                    {/* <div className=" text-[15px] text-dark_gray  font-[500] " dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize((truncateText(item.desc, 20))) }} /> */}
                                    <div className='my-5'>
                                        <Link href={`/brands/${item.slug}`} className={'text-white  bg-primary_Color_Light hover:bg-primary_Color_dark py-3 px-4'} >
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