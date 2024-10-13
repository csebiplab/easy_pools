import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const TrustedPartner = () => {
    return (
        <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[15px] xl:gap-[36px]'>
                <div className='md:col-span-1'>
                    <Image src="/assets/homePage/Trusted.png" alt="trusted Partner" width={857} height={632} className='w-full h-[385px] xl:w-[857px] xl:h-[700px] 5xl:w-[857px] 5xl:h-[702px]'/>
                </div>
                <div className='md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center '>
                        <HeadingIcon text={headingIconText.trustedPartner__IconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-black text-center md:text-left leading-normal pt-[5px]'>Your Trusted Swimming Pool Installation Partner</h2>
                    <p className='text-lg font-normal text-black text-center md:text-left pt-[5px] md:pt-[10px]'>At Easy Pools, we believe that we are your best-trusted partner for pool installation in Toronto. We specialize in providing top-notch swimming pool installation services tailored to meet your needs. Our team of experienced professionals is dedicated to transforming your outdoor space into a stunning retreat. We offer a wide range of pool designs, from classic inground pools to contemporary styles that enhance your home's aesthetics. Using only the highest quality materials and the latest technology, we ensure that your pool is not only beautiful but also built to last. In addition to our installation services, we also offer maintenance packages to keep your pool in pristine condition year-round. Our skilled technicians provide regular upkeep, ensuring that your water remains clean, safe, and inviting. We understand that investing in a pool is a significant decision, which is why we strive to provide transparent pricing and expert guidance throughout the process. Our goal is to exceed your expectations and deliver a product that you'll cherish for years to come. From the initial consultation to the final touches, our commitment to exceptional customer service sets us apart. Trust Easy Pools for your swimming pool installation in Toronto that will provide years of enjoyment in your life.</p>
                </div>
            </div>
        </div>
    );
};

export default TrustedPartner;