"use client";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { FaMapMarkedAlt } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import { MdOutlineAddIcCall } from "react-icons/md";
import home from "../../../../../public/assets/footer/home.png"
import google from "../../../../../public/assets/footer/google.png"
import three from "../../../../../public/assets/footer/three.png"
import gaf from "../../../../../public/assets/footer/gaf.png"
import LOGO from "../../../../../public/assets/footer/easylogo.png"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import gokundo from "../../../../../public/assets/footer/Gokundu-logo(white and green) 1.png"
import Image from "next/image";

import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {

  const footerIcon = [
    {
      img: google
    },
    {
      img: three
    },
    {
      img: home
    },
    {
      img: gaf
    }
  ]

  // const pathname = usePathname();
  // if (pathname.startsWith("/admin")) return null;


  return (
    <div className=" ">
      <div className="  bg-gray-900">
        <footer className="z-50 custom-container  pt-20 text-white" style={{ backgroundImage: 'url(https://www.rhconstructionusa.com/wp-content/uploads/2022/09/footer-bg.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-5 lg:mt-36 mt:mb-20 mt-10 md:px-10 sm:px-5">

              <div className=" col-span-2 items-center">

                <Image src={LOGO} alt="" className="" />
                <p className="text-white pt-6 mb-3 ml-2 lg:text-[20px] md:text-sm ">
                  Easy reno simplifies the process and costs of renovation by bringing design, sourcing and management under one roof.
                </p>
                {/* <h5 className="text-gray-500">Customer Reviews</h5> */}

                <div className=' flex gap-8 my-8'>
                  <FaFacebook className=' lg:w-[30px] lg:h-[28px] w-auto h-auto' />
                  <FaXTwitter className=' lg:w-[30px]  lg:h-280px] w-auto h-auto' />
                  <FaInstagram className=' lg:w-[30px] lg:h-[28px] w-auto h-auto' />
                  <FaLinkedin className=' lg:w-[30px] lg:h-[28px] w-auto h-auto' />
                </div>

              </div>

              <div className=" col-span-3 flex lg:justify-around justify-between">
                <div className=" col-span-1">
                  <h3 className="font-semibold text-white  lg:text-[36px] md:text-[25px] lg:mb-10 md:mb-5 mb-3 "> News </h3>
                  <ul className=" ">
                    <li className=" ">
                      <Link href="#" className="footer-link lg:text-[20px] md:text-sm items-center text-white">
                        <MdKeyboardDoubleArrowRight />How it work
                      </Link>
                    </li>
                    <li className=" lg:py-8 md:py-4 py-2">
                      <Link href="#" className="footer-link lg:text-[20px] md:text-sm items-center text-white">
                        <MdKeyboardDoubleArrowRight />Gallery
                      </Link>
                    </li>
                    <li className=" ">
                      <Link href="#" className="footer-link lg:text-[20px] md:text-sm items-center text-white">
                        <MdKeyboardDoubleArrowRight />Testimonils
                      </Link>
                    </li>
                    <li className="lg:py-8 md:py-4 py-2 ">
                      <Link href="#" className="footer-link lg:text-[20px] md:text-sm items-center text-white ">
                        <MdKeyboardDoubleArrowRight />Carrer
                      </Link>
                    </li>
                    <li className=" ">
                      <Link href="#" className="footer-link lg:text-[20px] md:text-sm items-center text-white">
                        <MdKeyboardDoubleArrowRight />Sitmap
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className=" col-span-1">
                  <h3 className="font-semibold text-white lg:text-[36px] md:text-[25px] lg:mb-10 md:mb-5 mb-3">Ours Services</h3>
                  <ul className="">
                    <li className=" ">
                      <Link href="#" className="footer-link lg:text-[20px] md:text-sm items-center text-white">
                        <MdKeyboardDoubleArrowRight />Vinyl pool
                      </Link>
                    </li>
                    <li className="  lg:py-8 md:py-4 py-2">
                      <Link href="#" className="footer-link lg:text-[20px] md:text-sm items-center text-white">
                        <MdKeyboardDoubleArrowRight />Fiberglass pool
                      </Link>
                    </li>
                    <li className=" ">
                      <Link href="#" className="footer-link lg:text-[20px] md:text-sm items-center text-white">
                        <MdKeyboardDoubleArrowRight />Concrete pool
                      </Link>
                    </li>
                    <li className=" lg:py-8 md:py-4 py-2">
                      <Link href="#" className="footer-link lg:text-[20px] md:text-sm items-center  text-white">
                        <MdKeyboardDoubleArrowRight />ICF pool
                      </Link>
                    </li>
                    <li className=" ">
                      <Link href="#" className="footer-link lg:text-[20px] md:text-sm items-center text-white">
                        <MdKeyboardDoubleArrowRight />Pool Installations
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>


              <div className=" col-span-2 items-center">
                <h3 className="font-semibold text-white   lg:text-[36px] md:text-[25px] lg:mb-10 md:mb-5 mb-3">Contact Us</h3>
                <ul className=" ">
                  <li>
                    <a href="" className="footer-link items-center lg:text-[20px] md:text-sm text-white">
                      <FaMapMarkedAlt className=" lg:h-7 lg:w-7  h-4 w-4" /> 1331 Major Mackenzie dr West, Vaughan
                    </a>
                  </li>
                  <li className=" lg:py-8 md:py-4 py-2">
                    <a href="tel:+1 (646) 683-4612" className="footer-link items-center lg:text-[20px] md:text-sm text-white">
                      <FaPhoneVolume className=" lg:h-7 lg:w-7 h-4 w-4" /> +1(647)449-9512
                    </a>
                  </li>
                  <li>
                    <a href="mailto:rhconusa@gmail.com" className="footer-link items-center lg:text-[20px] md:text-sm text-white">
                      <IoIosMail className=" lg:h-7 lg:w-7 h-4 w-4" /> easypools.landscaping@gmail.com
                    </a>
                  </li>
                  <div>
                    <div className="grid grid-cols-3 lg:gap-8 gap-5 lg:my-12 md:my-8 my-5">
                      {
                        footerIcon.map((fIcon, i) =>
                          <div key={i} className=" col-span-1">
                            <img src={fIcon.img.src} className=" lg:h-auto lg:w-auto "></img>
                          </div>)
                      }
                    </div>
                  </div>
                </ul>
              </div>

            </div>



          </div>
        </footer>
      </div>
      <div className=" bg-[#062524] md:px-10 px-3   ">
        <div className="grid lg:grid-cols-9 md:grid-cols-2 gap-5 py-6  items-center custom-container md:mx-auto ">
          <div className=" lg:col-span-3 flex items-center gap-2 md:col-span-1">
            <p className=" lg:text-[18px] md:text-sm "> <b className="text-white" >WEBSITE DESIGN AND SEO BY:-</b> </p>
            <Image src={gokundo} alt="gokundo" className=" ml-2 " />
          </div>
          <div className=" lg:col-span-4 md:col-span-1">
            <p className=" lg:text-[18px] md:text-sm  text-white">© All Copyright 2024 by Easy Pools</p>
          </div>
          <div className=" lg:col-span-2">
            <ul className=" lg:text-[18px] md:text-sm  flex justify-between  ">
              <li className="text-white"> Terms & Condition  </li>
              <li className="text-white">  Privacy Policy </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

