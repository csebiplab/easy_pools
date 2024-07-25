import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
        <div className="full__section_r_p padding__top pl-3 md:pl-0">
            <div className="grid md:grid-cols-6 grid-cols-1 gap-5 xl:gap-6 3xl:gap-7 5xl:gap-[30px]">
                <div className="md:col-span-3">
                    <div>
                        <Image src="/assets/poolInstallationCompanyInMarkham/About Us.png" alt='about us image' width={886} height={456}/>
                    </div>
                </div>
                <div className="md:col-span-3 flex flex-col justify-center items-center md:items-start">
                    <div>
                        <HeadingIcon text={headingIconText.aboutUs__IconText}/>
                    </div>
                    <h3 className="text-[32px] md:text-[34px] lg:text-4xl xl:text-[38px] 3xl:text-[40px] 5xl:text-[42px] font-bold text-black text-center md:text-left ">
                    About Our Markham Pool Installers
                    </h3>
                    <p className="text-lg font-normal text-center md:text-left text-black pt-[10px]">Our Markham pool installers are dedicated professionals committed to providing top-notch pool installation services in the Markham area. With over 10 years of experience and expertise in the field, our team ensures precision and quality in every project we undertake. From initial consultation to final installation, we prioritize customer satisfaction, offering personalized solutions tailored to meet individual needs and preferences. Whether you're looking to install an inground pool, an above-ground pool, or any other type of aquatic feature, you can trust Our Markham Pool Installers to deliver exceptional results that enhance your outdoor space and lifestyle.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;