import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const DesignCustomization = () => {
    return (
        <div className='container padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[36px]'>
                <div className='order-2 md:col-span-1'>
                    <Image src="/assets/homePage/Design.png" alt="Design" width={857} height={632} className='w-full h-[317px] xl:w-[857px] xl:h-[710px] 5xl:w-[857px] 5xl:h-[650px]'/>
                </div>
                <div className='order-1 md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center '>
                        <HeadingIcon text={headingIconText.designAndCustomization__IconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-black text-center md:text-left leading-normal pt-[5px]'>Pool Design and Customization Options in Toronto</h2>
                    <p className='text-lg font-normal text-black text-center md:text-left pt-[10px]'>Homeowners have many choices to suit their preferences and lifestyles for swimming pool design and customization options in Toronto. From sleek, modern designs to more traditional and rustic styles, our pool designers offer various options to create your pools. At Easy Pools, we specialize in bringing your dream pool to life with personalized design and customization options tailored to your unique vision. Serving Toronto and the surrounding areas, our team of experts is dedicated to delivering top-tier craftsmanship and innovative solutions that transform your backyard into a luxurious retreat. Whether you're looking for a family-friendly pool or a sleek, modern aesthetic, we work closely with you to create a pool. We also offer unique features such as waterfalls, LED lighting, built-in seating, and energy-efficient heating systems to enhance the beauty and functionality of your pool. In addition to pool design, Easy Pools provides customized landscaping services. Our team handles every aspect of the process—from initial concept and design to construction and finishing. With our commitment to quality and customer satisfaction, Easy Pools is your trusted partner for creating the perfect custom pool in Toronto. Let our contractors turn your backyard into a personal oasis you and your family will enjoy for years.</p>
                </div>
            </div>
        </div>
    );
};

export default DesignCustomization;