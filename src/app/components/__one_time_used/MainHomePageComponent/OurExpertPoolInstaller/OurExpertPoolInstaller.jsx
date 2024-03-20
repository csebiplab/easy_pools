import HeadingIcon from '@/app/components/ui/HeadingIcon';
import { headingIconText } from '@/app/utils/heading-text';
import React from 'react';
import "./ourexpert.css"
import xImg from "../../../../../../public/assets/exPool/x.png"
import rImg from "../../../../../../public/assets/exPool/r.png"
import Image from 'next/image';

const OurExpertPoolInstaller = () => {

    const usualPool = [
        {
            title: "Poor quality workmanship"
        },
        {
            title: "Unreliable timelines"
        },
        {
            title: "Hidden fees and costs"
        },
        {
            title: "Inadequate customer service"
        },
        {
            title: "Subpar materials used"
        },
        {
            title: "Lack of attention to detail"
        },
        {
            title: "Shoddy installation practices"
        },
        {
            title: "Ignored safety regulations"
        },
        {
            title: "Limited pool warranty coverage"
        },
        {
            title: "Difficulty in communication"
        }
    ]
    const easyPool = [
        {
            title: "Pool construction expertise"
        },
        {
            title: "Quality assurance & attention to detail"
        },
        {
            title: "Skilled pool design and layout"
        },
        {
            title: "Technical proficiency in pool installation"
        },
        {
            title: "Efficient project management"
        },
        {
            title: "Safety standards compliance"
        },
        {
            title: "Equipment installation & maintenance"
        },
        {
            title: "Landscaping integration"
        },
        {
            title: "Customer service excellence"
        },
        {
            title: "Troubleshooting & problem-solving skills"
        }
    ]

    return (
        <div>
            <div className=' lg:py-20 py-10 shadow-sm '>
                <div className="mx-auto   flex flex-col items-center justify-center">

                    <div>
                        <HeadingIcon text={headingIconText.expartPool__IconText} />
                    </div>

                    <div>
                        <h2 className="lg:text-[36px] text-[20px] lg:mb-8 mb-5">
                            Serving the Greater Toronto Horseshoe Area for all your pool's
                            needs.
                        </h2>
                    </div>

                    <div>
                        <p className=' lg:text-[20px] text-[16px] text-center lg:mb-8 mb-5'>Trust our professionals to deliver exceptional results that exceed expectations, transforming your backyard into a luxurious oasis. Choose our expert pool installers in Toronto for a seamless and satisfying experience from start to finish.</p>
                    </div>
                </div>

                <div className=' grid md:grid-cols-2 lg:gap-14 md:gap-5 '>
                    <div className=' border-2 shadow'>
                        <h2 className='title-bg text-center lg:py-8 py-5 text-white lg:text-[25px] text-[20px]'>Usual Pool Installers</h2>
                        <div className=' grid grid-cols-2 lg:p-6 p-3 lg:text-[20px] text-[16px] leading-[50px] '>

                            {
                                usualPool.map((usual =>
                                    <div className='flex gap-4 items-center'>
                                        <img src={xImg.src} className='lg:h-[23px] lg:w-[23px] h-[15px] w-[15px] ' ></img>
                                        <p>{usual.title}</p>
                                    </div>))
                            }
                        </div>
                    </div>

                    <div className=' border-2 shadow'>
                        <h2 className='title-bg2 text-center lg:py-8 py-5 text-white lg:text-[25px] text-[20px]'>Easy Pools Pool Installers</h2>
                        <div className=' grid grid-cols-2 lg:p-6 p-3 lg:text-[20px] text-[16px] leading-[50px] '>

                            {
                                easyPool.map((usual =>
                                    <div className='flex gap-4 items-center'>
                                        <img src={rImg.src} className='lg:h-[23px] lg:w-[23px] h-[15px] w-[15px] ' ></img>
                                        <p>{usual.title}</p>
                                    </div>))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurExpertPoolInstaller;