"use client";
import HeadingIcon from "@/app/components/ui/HeadingIcon";
import { headingIconText } from "@/app/utils/heading-text";
import React, { useState } from "react";

const OurServiceAreas = () => {
  const [activeDot, setActiveDot] = useState(1);

  const handleDotClick = (dotNumber) => {
    setActiveDot(dotNumber);
  };

  return (
    <div>
      <div className="custom-container">
        <div className="mx-auto lg:pt-28 pt-12 lg:pb-12 pb-8 flex flex-col items-center justify-center">
          {/* <div className='flex items-center pb-2'>
          <Image src={servicesIcon} className='h-5 w-10 mr-2' />
          <p>Our Service Areas</p>
        </div> */}
          <HeadingIcon text={headingIconText.map__IconTxt} />

          <div>
          <h2 className="lg:text-[36px] text-[20px]">
            Serving the Greater Toronto Horseshoe Area for all your pool's
            needs.
          </h2>
        </div>
      </div>

      {/* //   ======================= map Card ==================// */}
      <div className=" grid md:grid-cols-3 grid-cols-2 lg:gap-18 gap-10">
        <div className="col-span-1 relative">
          <div className="shadow-md p-0 rounded-sm relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d282591.6426865487!2d-74.04841253213657!3d40.68744007354902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24369470a592b%3A0x4109d18b6c5c7b05!2sQueens%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1710652963610!5m2!1sen!2sbd"
              height="325"
              style={{ border: 0, width: "100%" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <button className="bg-white py-2 px-4 rounded-lg shadow-md text-gray-800 hover:bg-gray-200 transition duration-300">
                Visit Location
              </button>
            </div>
            <h5 className="text-base py-4 px-10 bg-[#188B89] text-center lg:text-[18px] absolute bottom-0 left-0 right-0">
              Queens
            </h5>
          </div>
        </div>
        <div className="col-span-1 relative">
          <div className="shadow-md p-0 rounded-sm relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d282591.6426865487!2d-74.04841253213657!3d40.68744007354902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24369470a592b%3A0x4109d18b6c5c7b05!2sQueens%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1710652963610!5m2!1sen!2sbd"
              height="325"
              style={{ border: 0, width: "100%" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <button className="bg-white py-2 px-4 rounded-lg shadow-md text-gray-800 hover:bg-gray-200 transition duration-300">
                Visit Location
              </button>
            </div>
            <h5 className="text-base py-4 px-10 bg-[#188B89] text-center lg:text-[18px] absolute bottom-0 left-0 right-0">
              Queens
            </h5>
          </div>
        </div>
        <div className="col-span-1 relative">
          <div className="shadow-md p-0 rounded-sm relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d282591.6426865487!2d-74.04841253213657!3d40.68744007354902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24369470a592b%3A0x4109d18b6c5c7b05!2sQueens%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1710652963610!5m2!1sen!2sbd"
              height="325"
              style={{ border: 0, width: "100%" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <button className="bg-white py-2 px-4 rounded-lg shadow-md text-gray-800 hover:bg-gray-200 transition duration-300">
                Visit Location
              </button>
            </div>
            <h5 className="text-base py-4 px-10 bg-[#188B89] text-center lg:text-[18px] absolute bottom-0 left-0 right-0">
              Queens
            </h5>
          </div>
        </div>
      </div>

      {/* dot button */}
      <div className="flex justify-center mt-4">
        {[1, 2, 3].map((dotNumber) => (
          <div
            key={dotNumber}
            className={`w-4 h-4 rounded-full cursor-pointer mx-2 ${activeDot === dotNumber ? "bg-blue-500" : "bg-gray-300"
              }`}
            onClick={() => handleDotClick(dotNumber)}
          />
        ))}
      </div>
    </div>
    </ div>
  );
};

export default OurServiceAreas;
