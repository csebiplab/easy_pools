import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const LeadingToronto = () => {
    return (
        <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[36px]'>
                <div className='order-1 md:order-2 md:col-span-1'>
                    <Image src="/assets/homePage/LeadingToronto.png" alt="Leading Toronto" width={857} height={632} className='w-full h-[317px] xl:w-[857px] xl:h-[710px] 5xl:w-[857px] 5xl:h-[650px]'/>
                </div>
                <div className='order-2 md:order-1 md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center '>
                        <HeadingIcon text={headingIconText.leadingToronto__IconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-black text-center md:text-left leading-normal pt-[5px]'>Leading Toronto Swimming 
                    Pool Installation Company</h2>
                    <p className='text-lg font-normal text-black text-center md:text-left pt-[10px]'>Easy Pools is Toronto's leading swimming pool installation company. With a commitment to transforming ordinary spaces into havens of relaxation, our pool installation company combines expertise and innovation to create your swimming pool. We specialize in designing and installing custom in-ground pools tailored to your needs and lifestyle. When you wish for a sleek modern pool, a family-friendly space, or a backyard oasis with beautiful landscaping, Easy Pools can help you to make it a reality. Our team of skilled professionals handles design, construction, and every aspect of the pool installation process. We use the highest quality materials and the latest technology to ensure your pool is long-lasting. At Easy Pools, we believe in providing a seamless experience for our clients. From simple pool designs to intricate installations with water features, lighting, and surrounding decks, we pride ourselves on delivering excellence. In addition to pool installation, we offer maintenance services to keep your pool in good condition. We are committed to customer satisfaction and delivering results that make us a trusted name in the Greater Toronto Area. Choose Easy Pools for a reliable, professional, and hassle-free swimming pool installation.</p>
                </div>
            </div>
        </div>
    );
};

export default LeadingToronto;