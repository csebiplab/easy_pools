import React from 'react';
import "./Banner.css";
import Link from 'next/link';

const Banner = () => {
    return (
        <div>
            <div className='h-[450px] xl:h-[450px] 5xl:h-[812px] banner__bg'>
                <div className='h-full flex flex-col justify-center items-center'>
                    <h1 className='text-[30px] md:text-[33px] lg:text-[37px] xl:text-[40px] 2xl:text-[42px] 3xl:text-[47px] 4xl:text-[51px] 5xl:text-[55px] text-center font-bold text-white leading-normal'>Swimming Pool Installation in Toronto</h1>
                    <p className='text-lg 5xl:text-[25px] font-normal leading-10 text-center text-white pt-[10px] 5xl:pt-[35px] pb-[25px] 5xl:pb-[45px]'>welcome to our luxury swimming pool installation company in Toronto.</p>

                    <button className='text-base 5xl:text-lg font-bold py-[6px] px-[20px] xl:py-[12px] xl:px-[25px] 5xl:py-[18px] 5xl:px-[31px] text-white leading-normal btn_bg'><Link className='text-white' href="tel: 647 449 9512">Get an Estimate</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;