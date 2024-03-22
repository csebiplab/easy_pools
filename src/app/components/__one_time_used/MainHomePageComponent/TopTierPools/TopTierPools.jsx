import React from 'react';
import toptailImg from "../../../../../../public/assets/random/toptier.png"
import HeadingIcon from '@/app/components/ui/HeadingIcon';
import { headingIconText } from '@/app/utils/heading-text';

const TopTierPools = () => {
    return (
        <div className=' 
            '>
            <div className='bg-[#188B891A]'>
                <section className="overflow-hidden  container  sm:grid sm:grid-cols-2 5xl:py-[70px] 3xl:py-[50px] py-[40px] ">
                    <div className="4xl:pr-[65px] pr-[45px]">
                        <div className=" flex flex-col  ">

                            <HeadingIcon text={headingIconText.toptail__IconText} />

                            <div>
                                <p className="lg:text-[36px] text-[20px] 5xl:pb-[25px] pb-[20px] ">
                                    Toronto's Top-Tier Pools Installation Solutions
                                </p>
                            </div>
                        </div>
                        <div className="  ltr:sm:text-left rtl:sm:text-right">

                            <p className='lg:text-[20px] text-[16px]  '>
                                <b>Looking for top-tier pool installation solutions in Toronto?</b> <br />
                                Look no further. Our company specializes in providing premium pool installation services tailored to meet your specific needs and preferences. With our team of skilled professionals and years of experience in the industry, we ensure that every aspect of your pool installation project is handled with utmost care and precision, from design to completion. <br />
                                Quality and reliability are paramount for pool installation, and that's exactly what we deliver.
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
        </div>
    );
};

export default TopTierPools;