import Image from 'next/image';
import React from 'react';
import joinUsImg from '../../../../../../public/assets/random/joinus.png'
import HeadingIcon from '@/app/components/ui/HeadingIcon';
import { headingIconText } from '@/app/utils/heading-text';
import Button from './Button';

const JoinWithUs = () => {
    return (
        <div>
            <div className="bg-[#188B891A]">
                <div className=" custom-container grid grid-cols-1 md:grid-cols-8 gap-4">

                    <div className="w-full md:col-span-4 md:order-1 bg-white  lg:px-8 px-4 lg:py-12 py-8  border-2 shadow-md rounded-md z-50 ml-[285px] 3xl:w-[770px] 3xl:h-[550px] 3xl:my-[55px] lg:my-[25px] my-20px ">
                        <div className=" flex flex-col ">

                            <HeadingIcon text={headingIconText.joinUs__IconText} />

                            <div>
                                <p className="lg:text-[36px] text-[20px] 3xl:mb-[20px]  ">
                                    Ready to Start Your Swimming Pool Installation With Us?
                                </p>
                            </div>
                        </div>
                        <p className="mt-4 lg:text-[16px] text-[14px] leading-[35px]">
                            Dive into a world of seamless luxury with Easy Pools, your trusted partner for swimming pool installation in Toronto. Our expert team ensures a hassle-free experience. From concept to completion, we guarantee a swift and stress-free process, making your aquatic oasis a reality. Are you ready to transform your space and embrace the refreshing allure of a custom Easy Pool? Start your swimming pool installation with us and let our unparalleled expertise and dedication take your backyard to new heights of relaxation and enjoyment.
                        </p>
                        <div className=' flex justify-center items-center lg:mt-[50px] mt-7'>
                            <Button title={"Get Your Estimate"}></Button> <p className='mx-5 text-[#049E43]'>  or </p>
                            <p className=' lg:text-[18px] text-[16px] font-medium text-[#049E43]'> Call Us: 647-931-0164 </p>
                        </div>
                    </div>

                    <div className="w-full  md:col-span-4 md:order-2">
                        <Image
                            src={joinUsImg}
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

export default JoinWithUs;