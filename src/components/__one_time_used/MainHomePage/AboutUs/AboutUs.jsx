import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutUs = () => {
    return (
        <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[36px]'>
                <div className='md:col-span-1'>
                    <Image src="/assets/homePage/AboutUs.png" alt="about Us" width={857} height={632} className='w-full h-[317px] xl:w-[857px] xl:h-[670px] 5xl:w-[857px] 5xl:h-[530px]'/>
                </div>
                <div className='md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center '>
                        <HeadingIcon text={headingIconText.aboutUs__IconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-black text-center md:text-left leading-normal pt-[5px]'>About Our Swimming Pool Contractors in Toronto</h2>
                    <p className='text-lg font-normal text-black text-center md:text-left pt-[10px]'>With 10 years of experience in the pool construction industry, you can trust us, the team of designers and construction specialists, to create the perfect swimming pool. From start to finish, our <Link className='hover:underline ' rel='nofollow' target="_blank" href="https://www.semrush.com/analytics/keywordoverview/?q=swimming%20pool%20contractors&db=ca">swimming pool contractors</Link> do it all. We guarantee on-time completion and quality. From start to finish, Easy Pools uses quality materials and equipment to ensure a superior finished product. Our swimming pool installation company supervises all projects carefully. With our shared commitment to excellence and involvement in every construction stage, our company has a hands-on business approach. Our swimming pool contractors are dedicated to installing your swimming pool properly. Our team of skilled swimming pool contractors in Toronto specializes in designing, constructing, and maintaining pools perfectly in the industry. Whether you want to create a luxury in-ground pool, we ensure each project is built with precision and top-quality materials. At Easy Pools, customer satisfaction is our top priority. We work closely with you to ensure your vision becomes a reality. Easy Pools is your best partner for installing, maintaining, and all your swimming pool needs in Toronto.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;