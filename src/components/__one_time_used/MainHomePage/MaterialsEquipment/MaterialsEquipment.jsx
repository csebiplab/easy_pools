import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const MaterialsEquipment = () => {
    return (
        <div className='container padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[36px]'>
                <div className='md:col-span-1'>
                    <Image src="/assets/homePage/MaterialsAndEquipment.png" alt="MaterialsAndEquipment" width={857} height={632} className='w-full h-[317px] xl:w-[857px] xl:h-[710px] 5xl:w-[857px] 5xl:h-[650px]'/>
                </div>
                <div className='md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center '>
                        <HeadingIcon text={headingIconText.materialsAndEquipment__IconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-black text-center md:text-left leading-normal pt-[5px]'>Materials and Equipment Needed for Swimming Pool Installation</h2>
                    <p className='text-lg font-normal text-black text-center md:text-left pt-[10px]'>You'll need various materials and equipment to install a pool and ensure a smooth and efficient process. Firstly, you'll require essential construction materials such as concrete, rebar, and waterproofing for the pool structure. Additionally, pool decking materials like pavers, concrete, or wood may be needed to create the surrounding area. Equipment such as excavators, concrete mixers, and pumps are essential for digging the hole, pouring the concrete, and circulating water. Pool liners, filtration systems, and plumbing materials are also crucial components to ensure proper functioning and maintenance of the pool once installed.</p>
                    <p className='text-lg font-normal text-black text-center md:text-left'>Moreover, pool safety equipment such as fencing, pool covers, and alarms are vital to comply with regulations and ensure the safety of users, especially if children or pets are around. Additionally, specialized tools like trowels, levels, and pipe cutters will be necessary for precise construction and installation. A comprehensive list of materials, equipment, and skilled labor is essential for a high-quality swimming pool installation. Suitable materials and equipment are crucial when installing a swimming pool to ensure a smooth process and a lasting result. At Easy Pools, we use only high-quality materials and industry-standard tools to create beautiful, durable pools that meet your expectations. We bring the right blend of expertise and equipment to deliver your dream pool with precision and efficiency, ensuring your pool is built to last.</p>
                </div>
            </div>
        </div>
    );
};

export default MaterialsEquipment;