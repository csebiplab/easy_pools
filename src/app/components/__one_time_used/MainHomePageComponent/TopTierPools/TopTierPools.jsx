import React from 'react';
import toptailImg from "../../../../../../public/assets/random/toptier.png"
import HeadingIcon from '@/app/components/ui/HeadingIcon';
import { headingIconText } from '@/app/utils/heading-text';

const TopTierPools = () => {
    return (
        <div className=' bg-[#188B891A]
            '>
            <section className="overflow-hidden lg:py-16 py-8 sm:grid sm:grid-cols-2">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className=" flex flex-col  ">

                        <HeadingIcon text={headingIconText.toptail__IconText} />

                        <div>
                            <p className="lg:text-[36px] text-[20px] ">
                                Toronto's Top-Tier Pools Installation Solutions
                            </p>
                        </div>
                    </div>
                    <div className="  ltr:sm:text-left rtl:sm:text-right">
                        <h6 className='lg:text-[20px] text-[16px] lg:py-8 py-5'>Looking for top-tier pool installation solutions in Toronto?</h6>

                        <p className='lg:text-[20px] text-[16px] '>
                            Look no further. Our company specializes in providing premium pool installation services tailored to meet your specific needs and preferences. With our team of skilled professionals and years of experience in the industry, we ensure that every aspect of your pool installation project is handled with utmost care and precision, from design to completion.
                        </p>
                        
                        <br />

                        <p className='lg:text-[20px] text-[16px] ' >
                            Quality and reliability are paramount for pool installation, and that's exactly what we deliver. We take pride in using only the highest quality materials and state-of-the-art equipment to ensure that your pool not only looks stunning but also stands the test of time. From initial consultation to final installation, our dedicated team works closely with you every step of the way to turn your vision into reality, while ensuring the process is seamless and stress-free.
                        </p>

                    </div>
                </div>

                <img
                    alt=""
                    src={toptailImg.src}
                    className="h-56 w-full object-cover sm:h-full"
                />
            </section>
        </div>
    );
};

export default TopTierPools;