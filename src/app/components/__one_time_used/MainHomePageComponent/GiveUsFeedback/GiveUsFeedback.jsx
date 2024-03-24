import Image from 'next/image';
import React from 'react';
import contactImg from '../../../../../../public/assets/random/contactus.png'

import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";


const GiveUsFeedback = () => {
    return (
        <div>
            <div className="md:mx-auto xs:mx-[35px]">
                <div className="grid lg:grid-cols-10 md:grid-cols-7 custom-container  lg:relative  ">

                    <div className=" lg:absolute md:col-span-3 md:order-1 flex justify-center items-center align-middle 2xl:left-[20%] lg:left-[16%] xl:left-[20%] 2xl:top-[10%] 4xl:left-[25%]  xs:align-middle
                    lg:top-[20%]  bg-[#188B89] 2xl:my-16 my-8  2xl:py-8 py-5 border shadow-md rounded-md border-black z-50   ">
                        <div className=''>
                            <div className=' 2xl:py-8 py-5 lg:px-10 px-5  '>
                                <h2 className=" 2xl:text-[36px] text-[20px] text-white md:text-start xs:text-center  ">
                                    Contact Us
                                </h2>
                                <div className=' flex gap-2 md:items-center text-center 2xl:text-[18px] text-[14px] lg:py-8 py-5 md:justify-start xs:justify-center '>
                                    <FaMapLocationDot className=' 2xl:w-5 lg:h-5 w-auto h-auto fill-white' />
                                    <p className='text-white'> 1331 Major Mackenzie dr West, Vaughan</p>
                                </div>
                                <div className='my-2 flex gap-2 items-center md:justify-start xs:justify-center 2xl:text-[18px] text-[14px]  '>
                                    <FaPhoneVolume className=' 2xl:w-5 lg:h-5 w-auto h-auto fill-white' />
                                    <p className='text-white'> +1(647)449-9512</p>
                                </div>
                                <div className=' flex gap-2 my-auto items-center 2xl:text-[18px] text-[14px] 2xl:py-8 py-5 md:justify-start xs:justify-center '>
                                    <IoIosMail className=' 2xl:w-5 2xl:h-5 w-auto h-auto fill-white' />
                                    <p className='text-white'>easypools.landscaping@gmail.com</p>
                                </div>
                                <div className=' flex gap-8  text-white md:justify-start xs:justify-center'>
                                    <FaFacebook className=' 2xl:w-6 2xl:h-6 w-auto h-auto fill-white' />
                                    <FaXTwitter className=' 2xl:w-6  2xl:h-6 w-auto h-auto fill-white ' />
                                    <FaInstagram className='2xl:w-6 2xl:h-6 w-auto h-auto fill-white' />
                                    <FaLinkedin className='2xl:w-6 2xl:h-6 w-auto h-auto fill-white' />
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className='xl:col-span-6  lg:col-span-6 md:col-span-4 md:order-2  lg:py-30 md:flex items-center lg:ml-32 2xl:ml-48 3xl:ml-56 4xl:ml-64'>
                        <div className="rounded-lg md:p-8 lg:col-span-3 lg:p-12 items-center">
                            <h2 className='lg:mb-8 mb-5 text-[#188B89]'> Give Us Feedback </h2>
                            <form action="#" className=" ">

                                <div >

                                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:mb-8 mb-4">
                                        <div> <h5 className='mb-2 text-[#188B89]'>Your name *</h5>
                                            <label className="sr-only" htmlFor="email">name</label>
                                            <input
                                                className="w-full rounded-lg bg-[#188B8926] shadow-sm shadow-black p-3 lg:pr-16 pr-3 text-sm" // Added pr-12 class for padding-right
                                                placeholder="Robot Fox"
                                                type="email"
                                                id="email"
                                            />
                                        </div>

                                        <div>
                                            <h5 className='mb-2 text-[#188B89]'>Email *</h5>
                                            <label className="sr-only" htmlFor="phone">Email</label>
                                            <input
                                                className="w-full rounded-lg bg-[#188B8926]  shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                                                placeholder="info.example@gmail.com"
                                                type="tel"
                                                id="phone"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:mb-8 mb-4  ">
                                    <div>
                                        <h5 className='mb-2 text-[#188B89]'>Subjects *</h5>
                                        <label className="sr-only" htmlFor="email">Email</label>
                                        <input
                                            className="w-full rounded-lg bg-[#188B8926] shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                                            placeholder="Subjects "
                                            type="email"
                                            id="email"
                                        />
                                    </div>

                                    <div>
                                        <h5 className='mb-2 text-[#188B89]'>Your Phone *</h5>
                                        <label className="sr-only" htmlFor="phone">Phone</label>
                                        <input
                                            className="w-full rounded-lg bg-[#188B8926] shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                                            placeholder="+8801700000000"
                                            type="tel"
                                            id="phone"
                                        />
                                    </div>
                                </div>

                                <div >
                                    <label className="sr-only" htmlFor="message">Message</label>
                                    <h5 className='mb-2 text-[#188B89]'>Message *</h5>
                                    <textarea
                                        className="w-full rounded-lg bg-[#188B8926] shadow-sm shadow-black p-4 lg:pr-16 pr-3  text-sm"
                                        placeholder="Write Message"
                                        rows="6"
                                        id="message"
                                    ></textarea>
                                </div>

                                <div className=' flex md:block xs:justify-center xs:items-center xs:mx-auto'>
                                    <button
                                        type="submit"
                                        className="  rounded-md bg-[#049E43E4] px-10 py-4 md:px-20  font-semibold  text-white items-center flex lg:mt-13 mt-8 "
                                    >
                                        Submit <FaLocationArrow className=' ml-2 fill-white ' />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>


                    <div className="w-full -z-10  xl:col-span-4 lg:col-span-4 lg:order-1 lg:block xs:hidden">
                        <Image
                            src={contactImg}
                            alt="Trusted general contractor"
                            width={450}
                            height={300}
                            loading="lazy"
                            className="w-full h-full"
                        />

                    </div>

                </div>
            </div>
        </div>
    );
};

export default GiveUsFeedback;