import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const Specialists = () => {
    return (
        <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[36px]'>
                <div className='order-2 md:col-span-1'>
                    <Image src="/assets/homePage/Specialists.png" alt="Specialists" width={857} height={632} className='w-full h-[357px] xl:w-[857px] xl:h-[520px] 5xl:w-[857px] 5xl:h-[562px]'/>
                </div>
                <div className='order-1 md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center '>
                        <HeadingIcon text={headingIconText.specialists__IconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-black text-center md:text-left leading-normal pt-[5px]'>Toronto's Top-Tier Pools Installation Specialists</h2>
                    <p className='text-lg font-normal text-black text-center md:text-left pt-[10px]'>At Easy Pools, we are Toronto's leading premium pool installation solutions provider. We specialize in custom pool designs and bring your dreams to life with exceptional service. Our use of materials and innovative installation techniques reflects our commitment to quality, ensuring your pool is beautiful, durable, and long-lasting. At Easy Pools, customer satisfaction is our top priority. We work closely with homeowners to understand their vision and provide tailored solutions that meet their needs and budgets. From design to installation and maintenance, we ensure a hassle-free experience with outstanding results. Easy Pools is here to make it happen, whether you want to create a relaxing entertainment space. With our attention to detail, expertise, and commitment to excellence, we stand out as Toronto's top-tier pool installation specialists. Transform your backyard into a stunning paradise with Easy Pools—the trusted name in high-quality pool installation in Toronto.</p>
                </div>
            </div>
        </div>
    );
};

export default Specialists;