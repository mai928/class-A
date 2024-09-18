'use client'
import React, { useState } from 'react'
import Subscription from './Subscription'
import { useTranslation } from 'react-i18next';
import initTranslations from '@/app/i18n';

const Contact = ({ params }) => {
    const i18nNamespaces = ["home"];

    const { locale } = params
    // const { t, i18n } = await initTranslations(locale ,i18nNamespaces)
    const { t, i18n } = useTranslation()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [responseMessage, setResponseMessage] = useState('');

    const ResponseMessage = ({ message }) => {
        if (!message) return null;

        return (
            <div className="mt-6 text-center">
                <p className={`text-lg ${message === 'Message sent successfully!' ? 'text-green-900' : 'text-red-500'}`}>
                    {message}
                </p>
            </div>
        );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {


            const myHeaders = new Headers();
            myHeaders.append("Accept-Language", i18n.language);
            myHeaders.append("Cookie", "laravel_session=6oM3FFaszfcS2bV3nWtBQrSNpkdvu3BvQxhRc6h0");


            const formdata = new FormData();
            formdata.append("name", formData.name);
            formdata.append("phone", formData.phone);
            formdata.append("email", formData.email);
            formdata.append("message", formData.message);

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: formdata,
                redirect: "follow",
            };
            const response = await fetch('https://api.classafoods.com/api/contact-submit', requestOptions);

            const result = await response.json();
            console.log(result)

            if (response.status && result.data) {
                setResponseMessage('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                setResponseMessage('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setResponseMessage('An error occurred. Please try again.', error);
        }

        setTimeout(() => {
            setResponseMessage('')
        }, 3000)
    };
    return (
        <section className='contact-bg'>
            <div className=' block lg:flex  gap-20 items-center lg:mx-28 py-20'>
                <div className='lg:w-[50%]'>
                    <h3 className='text-3xl text-center lg:text-start lg:text-6xl font-semibold leading-snug'>
                        If you have questions,contact us
                    </h3>
                </div>

                <form onSubmit={handleSubmit} className='lg:w-[50%] mx-5 lg:mx-0'>
                    <input onChange={handleChange} type='text' name='name' id='name' value={formData.name} required className='block border-[1px] text-gray-700 placeholder:text-gray-700  border-slate-200  py-3 my-5 px-5 w-full' placeholder='Name' />
                    <input onChange={handleChange} type='email' name='email' id='email' value={formData.email} required className='block border-[1px] text-gray-700 placeholder:text-gray-700  border-slate-200  py-3 my-5 px-5 w-full' placeholder='Email' />
                    <input onChange={handleChange} type='text' name='phone' id='phone' value={formData.phone} required className='block border-[1px] text-gray-700 placeholder:text-gray-700  border-slate-200  py-3 my-5 px-5 w-full' placeholder='Phone' />
                    <textarea onChange={handleChange} name='message' id='message' value={formData.message} required className='block border-[1px] text-gray-700 placeholder:text-gray-700  border-slate-200  py-3 my-5 px-5 w-full' placeholder='Message' cols={5} />
                    <div className='flex justify-end'>
                        <button type='submit' className=' bg-primary_Color_Light hover:bg-primary_Color_dark text-white  text-lg py-2 px-10'>Send</button>

                    </div>

                    <div>
                        <ResponseMessage message={responseMessage} />
                    </div>
                </form>



            </div>


            {/* red subscribe */}
            <Subscription />

        </section>
    )
}

export default Contact