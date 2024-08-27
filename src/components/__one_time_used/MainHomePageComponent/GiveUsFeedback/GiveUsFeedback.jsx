import Image from "next/image";
import contactImg from "../../../../../public/assets/random/contactus.png";

import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

const GiveUsFeedback = () => {
  return (
    <div>
      <div className="md:mx-auto xs:mx-[35px]">
        <div className="grid lg:grid-cols-10 md:grid-cols-7 custom-container  lg:relative  ">
          <div
            className=" lg:absolute md:col-span-3 md:order-1 flex justify-center items-center align-middle 2xl:left-[20%] lg:left-[16%] xl:left-[20%] 2xl:top-[10%] 4xl:left-[25%]  xs:align-middle
                    lg:top-[20%]  bg-[#188B89] 2xl:my-16 my-8  2xl:py-8 py-5 border shadow-md rounded-md border-black z-20   "
          >
            <div className="">
              <div className=" 2xl:py-8 py-5 lg:px-10 px-5  ">
                <p className=" 2xl:text-[36px] text-[20px] text-white md:text-start xs:text-center  ">
                  Contact Us
                </p>
                <div className=" flex gap-1 md:gap-2 md:items-center text-center 2xl:text-[18px] text-sm lg:py-8 py-5 md:justify-start xs:justify-center ">
                  <FaMapLocationDot className=" 2xl:w-5 lg:h-5 w-auto h-auto fill-white" />
                  <p className="text-sm md:text-base text-white">
                    {" "}
                    1331 Major Mackenzie dr West, Vaughan
                  </p>
                </div>
                <div className="my-2 flex gap-1 md:gap-2  items-center md:justify-start xs:justify-center 2xl:text-[18px] text-sm  ">
                  <FaPhoneVolume className=" 2xl:w-5 lg:h-5 w-auto h-auto fill-white" />
                  <a
                    href="tel:+1(647)449-9512"
                    className="text-sm md:text-base text-white"
                  >
                    +1(647)449-9512
                  </a>
                </div>
                <div className=" flex gap-2 my-auto items-center 2xl:text-[18px] text-sm 2xl:py-8 py-5 md:justify-start xs:justify-center ">
                  <IoIosMail className=" 2xl:w-6 2xl:h-6 w-5 h-5 fill-white" />
                  <a
                    href="mailto:easypools.landscaping@gmail.com"
                    className="text-sm md:text-base text-white"
                  >
                    easypools.landscaping@gmail.com
                  </a>
                </div>
                <div className=" flex gap-8  text-white md:justify-start xs:justify-center">
                  <FaFacebook className=" 2xl:w-6 2xl:h-6 w-auto h-auto fill-white" />
                  <FaXTwitter className=" 2xl:w-6  2xl:h-6 w-auto h-auto fill-white " />
                  <FaInstagram className="2xl:w-6 2xl:h-6 w-auto h-auto fill-white" />
                  <FaLinkedin className="2xl:w-6 2xl:h-6 w-auto h-auto fill-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="xl:col-span-6  lg:col-span-6 md:col-span-4 md:order-2  lg:py-30 md:flex items-center lg:ml-32 2xl:ml-48 3xl:ml-56 4xl:ml-64">
            <div className="rounded-lg md:p-8 lg:col-span-3 lg:p-12 items-center">
              <p className="lg:mb-8 mb-5 text-[#188B89]"> Give Us Feedback </p>
              <form action="#" className=" ">
                <div>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:mb-8 mb-4">
                    <div>
                      {" "}
                      <label className="mb-2 text-[#188B89] font-bold">
                        Your name *
                      </label>
                      <input
                        className="w-full rounded-lg bg-[#188B8926] shadow-sm shadow-black p-3 lg:pr-16 pr-3 text-sm" // Added pr-12 class for padding-right
                        placeholder="Robot Fox"
                        type="text"
                        id="name"
                      />
                    </div>

                    <div>
                      <label className="mb-2 text-[#188B89] font-bold">
                        Email *
                      </label>
                      <input
                        className="w-full rounded-lg bg-[#188B8926]  shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                        placeholder="easypools.landscaping@gmail.com"
                        type="email"
                        id="email"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:mb-8 mb-4  ">
                  <div>
                    <label className="mb-2 text-[#188B89] font-bold">
                      Subjects *
                    </label>
                    <input
                      className="w-full rounded-lg bg-[#188B8926] shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                      placeholder="subjects"
                      type="text"
                      id="subjects"
                    />
                  </div>

                  <div>
                    <label className="mb-2 text-[#188B89] font-bold">
                      Your Phone *
                    </label>
                    <input
                      className="w-full rounded-lg bg-[#188B8926] shadow-sm shadow-black p-3 lg:pr-16 pr-3  text-sm"
                      placeholder="+1(647)449-9512"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 text-[#188B89] font-bold">
                    Message *
                  </label>
                  <textarea
                    className="w-full rounded-lg bg-[#188B8926] shadow-sm shadow-black p-4 lg:pr-16 pr-3  text-sm"
                    placeholder="Write Message"
                    rows="6"
                    id="message"
                  ></textarea>
                </div>

                <div className=" flex md:block xs:justify-center xs:items-center xs:mx-auto">
                  <button
                    type="submit"
                    className="  rounded-md bg-[#049E43E4] px-10 py-4 md:px-20  font-semibold  text-white items-center flex lg:mt-13 mt-8 "
                  >
                    Submit <FaLocationArrow className=" ml-2 fill-white " />
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full -z-10  xl:col-span-4 lg:col-span-4 lg:order-1 hidden lg:block">
            <Image
              src={contactImg}
              alt="Trusted general contractor"
              width={450}
              height={300}
              loading="lazy"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiveUsFeedback;
