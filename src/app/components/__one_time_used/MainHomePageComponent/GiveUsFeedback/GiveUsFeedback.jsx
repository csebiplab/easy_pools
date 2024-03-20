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
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-10 relative  ">

                    <div className='md:col-span-5 md:order-2 lg:ml-64 lg:py-30 flex items-center'>
                        <div className="rounded-lg p-8 lg:col-span-3 lg:p-12 items-center">
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

                                <div >
                                    <button
                                        type="submit"
                                        className=" w-full rounded-md bg-[#049E43E4] px-10 py-4 lg:px-20  font-semibold  sm:w-auto text-white items-center flex lg:mt-13 mt-8 "
                                    >
                                        Submit <FaLocationArrow className=' ml-2 fill-white ' />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className=" absolute left-[37%] top-[16%] bg-[#188B89] lg:my-16 my-8  lg:py-8 py-5 border-2 shadow-md rounded-md border-black z-50    ">
                        <div className=' lg:py-8 py-5 lg:px-10 px-5'>
                            <h2 className=" lg:text-[36px] text-[20px] text-white ">
                                Contact Us
                            </h2>
                            <div className=' flex gap-2 items-center lg:text-[18px] text-[14px] lg:py-8 py-5 '>
                                <FaMapLocationDot className=' lg:w-5 lg:h-5 w-auto h-auto fill-white' />
                                <p className='text-white'> 1331 Major Mackenzie dr West, Vaughan</p>
                            </div>
                            <div className='my-2 flex gap-2 items-center lg:text-[18px] text-[14px]  '>
                                <FaPhoneVolume className=' lg:w-5 lg:h-5 w-auto h-auto fill-white' />
                                <p className='text-white'> +1(647)449-9512</p>
                            </div>
                            <div className=' flex gap-2 my-auto items-center lg:text-[18px] text-[14px] lg:py-8 py-5 '>
                                <IoIosMail className=' lg:w-5 lg:h-5 w-auto h-auto fill-white' />
                                <p className='text-white'>easypools.landscaping@gmail.com</p>
                            </div>
                            <div className=' flex gap-8  text-white'>
                                <FaFacebook className=' lg:w-6 lg:h-6 w-auto h-auto fill-white' />
                                <FaXTwitter className=' lg:w-6  lg:h-6 w-auto h-auto fill-white ' />
                                <FaInstagram className='lg:w-6 lg:h-6 w-auto h-auto fill-white' />
                                <FaLinkedin className='lg:w-6 lg:h-6 w-auto h-auto fill-white' />
                            </div>

                        </div>
                    </div>

                    <div className="w-full -z-10  md:col-span-5 md:order-1">
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