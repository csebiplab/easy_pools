import React from 'react';
import "./ConsiderationsLimitations.css";
import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';

const ConsiderationData = [
    {
        id : 1,
        title : "Space Availability",
        desc : "Ensure your yard has enough room for the pool and surrounding area."
    },
    {
        id : 2,
        title : "Soil & Ground Conditions",
        desc : "Poor soil, rocks, or high water tables can affect installation."
    },
    {
        id : 3,
        title : "Permits & Regulations",
        desc : "Local zoning laws may limit the size or placement of the pool."
    },
    {
        id : 4,
        title : "Budget",
        desc : "TAdditional features like heating, decking, or fencing should fit within your financial plan."
    },
    {
        id : 5,
        title : "Maintenance",
        desc : "Take into account long-term maintenance costs for cleaning, renovations, & energy usage."
    },
    {
        id : 6,
        title : "Weather and Climate",
        desc : "In colder regions, seasonal usage and weatherproofing may be necessary."
    },
]


const ConsiderationsLimitations = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className='flex flex-col justify-center items-center'>
                    <HeadingIcon text={headingIconText.considerationsLimitations__IconText}/>
                    <h2 className='text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-black text-center md:text-left leading-normal pt-[5px]'>Considerations & Limitations for Pool Installation</h2>
                    <p className='text-lg font-normal text-black text-center pt-[10px]'>When planning a pool installation, there are several important considerations and potential limitations: Easy Pools provides expert guidance on these factors to ensure a smooth and successful installation.</p>
                </div>
                {/* first div  */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-[25px] pt-[25px]'>
                    {
                        ConsiderationData?.map((data)=>{
                            return <div key={data.id} className="cart__bg py-[20px] 5xl:py-[34px] px-[12px]">
                                <p className='text-[25px] 5xl:text-[30px] text-center font-bold leading-normal text-black pb-[15px] 5xl:pb-[25px]'>{data.title}</p>
                                <p className='text-lg font-normal text-black text-center leading-[30px]'>{data.desc}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default ConsiderationsLimitations;