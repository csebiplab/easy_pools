import React from 'react';
import "./WorkingProcess.css";
import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';

const workingData = [
    {
        id : 1,
        img : "/assets/homePage/workingProcess/working1.png",
        title : "Consultation",
        desc : "We begin with an on-site consultation to assess your space, discuss your vision, and provide a customized quote."
    },
    {
        id : 2,
        img : "/assets/homePage/workingProcess/working2.png",
        title : "Design",
        desc : "Our team collaborates with you to create a pool design that fits your preferences, space, and budget."
    },
    {
        id : 3,
        img : "/assets/homePage/workingProcess/working3.png",
        title : "Permits",
        desc : "To comply with local regulations, we handle the necessary permits and paperwork."
    },
    {
        id : 4,
        img : "/assets/homePage/workingProcess/working4.png",
        title : "Preparation",
        desc : "The site undergoes excavation and preparation for the pool foundation."
    },
]
const workingData1 = [
    {
        id : 5,
        img : "/assets/homePage/workingProcess/working5.png",
        title : "Installation",
        desc : "Our contractors install the pool, including the plumbing, electrical systems, and other features."
    },
    {
        id : 6,
        img : "/assets/homePage/workingProcess/working6.png",
        title : "Finishing touches",
        desc : "We complete the project with decking, landscaping, and safety features."
    },
    {
        id : 7,
        img : "/assets/homePage/workingProcess/working7.png",
        title : "Inspection & Handover",
        desc : "The site undergoes excavation and preparation for the pool foundation."
    }
]

const WorkingProcess = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className='flex flex-col justify-center items-center'>
                    <HeadingIcon text={headingIconText.workingProcess__IconText}/>
                    <h2 className='text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-black text-center md:text-left leading-normal pt-[5px]'>Working Process of Our Pool Installation Contractors</h2>
                    <p className='text-lg font-normal text-black text-center pt-[10px]'>At Easy Pools, our pool installation contractors follow a clear and efficient process to ensure a seamless project:</p>
                </div>
                {/* first div  */}
                <div className='grid grid-cols-1 md:grid-cols-4 gap-[60px] 5xl:gap-[83px] pt-[25px]'>
                    {
                        workingData?.map((data)=>{
                            return <div key={data.id} className="relative">
                                <Image src={data.img} alt="working img" width={129} height={129} className='w-[129px] h-[129px] mx-auto'/>
                                <p className='text-[25px] text-center font-bold leading-9 text-black pt-[15px] pb-[10px]'>{data.title}</p>
                                <p className='text-lg font-light text-black text-center pb-[25px]'>{data.desc}</p>
                                <div className='absolute bottom-0 w-full h-[2px] bg-secondary-900'/>
                            </div>
                        })
                    }
                </div>
                {/* second div  */}
                <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center px-0 md:px-[120px] 5xl:px-[133px] gap-[60px] 5xl:gap-[83px] pt-[50px]'>
                    {
                        workingData1?.map((data)=>{
                            return <div key={data.id} className="relative">
                                <Image src={data.img} alt="working img" width={129} height={129} className='w-[129px] h-[129px] mx-auto'/>
                                <p className='text-[25px] text-center font-bold leading-9 text-black pt-[15px] pb-[10px]'>{data.title}</p>
                                <p className='text-lg font-light text-black text-center pb-[25px]'>{data.desc}</p>
                                <div className='absolute bottom-0 w-full h-[2px] bg-secondary-900'/>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default WorkingProcess;