import React from 'react';
import toptailImg from "../../../../../../public/assets/random/toptier.png"
import HeadingIcon from '@/app/components/ui/HeadingIcon';
import { headingIconText } from '@/app/utils/heading-text';
import Image from 'next/image';

const TopTierPools = () => {
    return (
        <div className=' bg-[#188B891A]
            '>
            <div className=' container'>
                <section className="overflow-hidden   xs:px-[35px]  grid md:grid-cols-2 5xl:py-[70px] 3xl:py-[50px] py-[40px] ">
                    <div className="4xl:pr-[65px] pr-[45px] xs:order-2 md:order-1 text-center md:text-left">
                        <div className=" flex flex-col md:justify-normal xs:justify-center md:items-start xs:items-center md:mt-0 xs:mt-[25px]  ">

                            <HeadingIcon text={headingIconText.toptail__IconText} />

                            <div>
                                <p className="2xl:text-[36px] lg:text-[25px] text-[18px] 5xl:pb-[25px] pb-[20px] ">
                                    Toronto's Top-Tier Pools Installation Solutions
                                </p>
                            </div>
                        </div>
                        <div className="  ltr:sm:text-left rtl:sm:text-right">

                            <p className='2xl:text-[20px] lg:text-[16px] md:text-[14px] xs:text-[10px]  '>
                                <b>Looking for top-tier pool installation solutions in Toronto?</b> <br />
                                Look no further. Our company specializes in providing premium pool installation services tailored to meet your specific needs and preferences. With our team of skilled professionals and years of experience in the industry, we ensure that every aspect of your pool installation project is handled with utmost care and precision, from design to completion. <br />
                                Quality and reliability are paramount for pool installation, and that's exactly what we deliver.
                            </p>

                        </div>
                    </div>

                    <div className=" flex justify-center items-center xs:order-1 md:order-2 ">
                        <Image
                            alt=""
                            src={toptailImg}
                            height={"700px"}
                            width={"425px"}

                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TopTierPools;