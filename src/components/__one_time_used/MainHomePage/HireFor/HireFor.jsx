import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const HireFor = () => {
    return (
        <div className='container padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[36px]'>
                <div className='md:col-span-1'>
                    <Image src="/assets/homePage/HireFor.png" alt="Hire for" width={857} height={632} className='w-full h-[317px] xl:w-[857px] xl:h-[500px] 5xl:w-[650px] 5xl:h-[650px]'/>
                </div>
                <div className='md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center '>
                        <HeadingIcon text={headingIconText.hireForInstallation__IconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-black text-center md:text-left leading-normal pt-[5px]'>Hire Easy Pools For Your Pool Installation Services</h2>
                    <p className='text-lg font-normal text-black text-center md:text-left pt-[10px]'>Do you want to transform your backyard into an oasis of relaxation and enjoyment? Easy Pools will be your best partner for all your pool installation needs. We dedicate our team of experienced professionals to delivering exceptional services for your swimming pool. Our skilled professionals are committed to delivering top-notch craftsmanship, ensuring your swimming pool installation is a seamless and enjoyable journey. Our contractors prioritize your vision, providing personalized solutions that match your style and preferences. With Easy Pools' services, your vision becomes a reality effortlessly. Dive into a world of leisure and luxury with our expert pool installation service company.</p>
                </div>
            </div>
        </div>
    );
};

export default HireFor;