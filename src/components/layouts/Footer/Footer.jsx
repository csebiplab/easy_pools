import Image from "next/image";
import Link from "next/link";

import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

import "./footer.css";
import { brandSVG, footerIcon, footerLinks } from "./Footer.utilities";

const Footer = () => {
  return (
    <div className="">
      <div className="footer__bg px-5 lg:px-[35px] !text-white">
        <footer className="container !z-50 pt-[50px] xl:pt-[90px] 2xl:pt-[311px] pb-9 md:pb-20 text-white">
          <div className="">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-12 2xl:gap-x-[126px] justify-center">
              <div className="w-full lg:w-auto">
                <div className="mx-auto flex justify-center md:justify-normal">
                  {brandSVG.svg}
                </div>
                <p className="text-white py-6 leading-[200%] text-center md:text-start">
                  Easy reno simplifies the process and costs of renovation by
                  bringing design, sourcing and management under one roof.
                </p>
                <div className="flex justify-center gap-11">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="30"
                    viewBox="0 0 28 30"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_220_1923)">
                      <path
                        d="M13.8461 0C6.19916 0 0 6.71575 0 14.9999C0 22.0343 4.47062 27.937 10.5014 29.5582V19.5839H7.64635V14.9999H10.5014V13.0247C10.5014 7.91935 12.6343 5.55296 17.2611 5.55296C18.1383 5.55296 19.652 5.73956 20.2712 5.92556V10.0805C19.9444 10.0433 19.3767 10.0247 18.6717 10.0247C16.4015 10.0247 15.5242 10.9565 15.5242 13.3787V14.9999H20.0469L19.2698 19.5839H15.5242V29.89C22.3802 28.993 27.6927 22.669 27.6927 14.9999C27.6921 6.71575 21.493 0 13.8461 0Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_220_1923">
                        <rect width="27.6921" height="29.9998" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M22.7193 2.37988H26.7739L17.9157 12.9092L28.3367 27.2372H20.1771L13.7863 18.5473L6.47376 27.2372H2.41668L11.8914 15.9749L1.89453 2.37988H10.2612L16.0379 10.3227L22.7193 2.37988ZM21.2962 24.7132H23.5429L9.04039 4.77128H6.62943L21.2962 24.7132Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="30"
                    viewBox="0 0 28 30"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_220_1921)">
                      <path
                        d="M25.1119 0H2.49736C1.41406 0 0.538086 0.966791 0.538086 2.1621V27.8318C0.538086 29.0271 1.41406 29.9998 2.49736 29.9998H25.1119C26.1952 29.9998 27.0764 29.0272 27.0764 27.8377V2.1621C27.0764 0.966791 26.1952 0 25.1119 0ZM8.41146 25.5643H4.47218V11.2441H8.41146V25.5643ZM6.44182 9.29291C5.1771 9.29291 4.156 8.13862 4.156 6.7148C4.156 5.29098 5.1771 4.13669 6.44182 4.13669C7.70135 4.13669 8.72245 5.29098 8.72245 6.7148C8.72245 8.13276 7.70135 9.29291 6.44182 9.29291ZM23.1526 25.5643H19.2185V18.6034C19.2185 16.9452 19.1926 14.8065 17.1712 14.8065C15.1238 14.8065 14.8128 16.6171 14.8128 18.4862V25.5643H10.8839V11.2441H14.6573V13.2011H14.7091C15.2326 12.0761 16.5181 10.8866 18.4307 10.8866C22.4166 10.8866 23.1526 13.8515 23.1526 17.7069V25.5643Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_220_1921">
                        <rect
                          width="26.5383"
                          height="29.9998"
                          fill="white"
                          transform="translate(0.538086)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="30"
                    viewBox="0 0 28 30"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_220_1920)">
                      <path
                        d="M27.4925 8.99997C27.4925 8.99997 27.222 6.93162 26.3891 6.02343C25.3344 4.82812 24.1553 4.82226 23.6145 4.75195C19.7419 4.44727 13.9276 4.44727 13.9276 4.44727H13.9168C13.9168 4.44727 8.10256 4.44727 4.22999 4.75195C3.68913 4.82226 2.51005 4.82812 1.45537 6.02343C0.622442 6.93162 0.35742 8.99997 0.35742 8.99997C0.35742 8.99997 0.0761719 11.4316 0.0761719 13.8574V16.1308C0.0761719 18.5565 0.352011 20.9882 0.352011 20.9882C0.352011 20.9882 0.622442 23.0565 1.44996 23.9647C2.50464 25.16 3.88925 25.119 4.50583 25.2479C6.72336 25.4764 13.9222 25.5467 13.9222 25.5467C13.9222 25.5467 19.7419 25.535 23.6145 25.2362C24.1553 25.1659 25.3344 25.16 26.3891 23.9647C27.222 23.0565 27.4925 20.9882 27.4925 20.9882C27.4925 20.9882 27.7683 18.5624 27.7683 16.1308V13.8574C27.7683 11.4316 27.4925 8.99997 27.4925 8.99997ZM11.0611 18.8905V10.4589L18.5412 14.6894L11.0611 18.8905Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_220_1920">
                        <rect
                          width="27.6921"
                          height="29.9998"
                          fill="white"
                          transform="translate(0.0761719)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Mapping through footer links */}
              {footerLinks.map((category, index) => (
                <div
                  key={index}
                  className={`mt-5 md:mt-0 text-center md:text-start ${
                    category.cat === "News" ? "justify-self-center" : ""
                  }`}
                >
                  <h3 className="text-white !text-xl mb-5">{category.cat}</h3>
                  <ul>
                    {category.links.map((link, idx) => (
                      <li key={idx} className="mb-9">
                        <Link href={link.url}>
                          <span className="text-white !text-base !font-normal">
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="w-full lg:w-auto text-center md:text-start">
                <h3 className="text-white !text-xl mb-5">Contact Us</h3>
                <ul className="text-center md:text-start mx-auto">
                  <li>
                    <Link
                      href="/"
                      className="footer-link items-center justify-center md:justify-normal text-sm md:text-base text-white"
                    >
                      <FaMapMarkedAlt className=" lg:h-7 lg:w-7  h-4 w-4" /> 2a
                      1331 Major MacKenzie Dr W, Vaughan, ON L6A 4W4, Canada
                    </Link>
                  </li>
                  <li className="lg:py-8 xs:py-[12px]">
                    <a
                      href="tel:+1(647)449-9512"
                      className="footer-link items-center justify-center md:justify-normal text-sm md:text-base text-white"
                    >
                      <FaPhoneVolume className=" lg:h-7 lg:w-7 h-4 w-4" />{" "}
                      +1(647)449-9512
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:easypools.landscaping@gmail.com"
                      className="footer-link items-center justify-center md:justify-normal text-sm md:text-base lg:text-[12px] text-white"
                    >
                      <IoIosMail className="lg:h-7 lg:w-7 h-4 w-4" />{" "}
                      easypools.landscaping@gmail.com
                    </a>
                  </li>
                  <div className="mt-[38px]">
                    <div className="">
                      <div className="flex flex-wrap justify-center md:justify-normal gap-5">
                        {footerIcon.map((fIcon, i) => (
                          <div key={i} className="col-span-1">
                            {fIcon?.svg}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="block md:hidden">
                    <div className="h-[1px] bg-[#8E8E8E] w-full mt-9 mb-4" />

                    <div className="text-center lg:text-left">
                      <p className="text-sm lg:text-base text-white">
                        © All Copyright 2024 by Easy Pools
                      </p>
                      <ul className="text-sm lg:text-base flex justify-evenly gap-2 mt-4">
                        <li className="text-white">
                          <Link href="/" className="text-white">
                            Terms & Condition
                          </Link>
                        </li>
                        <li className="text-white">
                          <Link href="/" className="text-white">
                            Privacy Policy
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* creater company credit */}
      <div className="footer-bottom-bg">
        <div className="container flex flex-col lg:flex-row justify-between items-center py-2">
          <div className="flex justify-center items-center mb-2 lg:mb-0">
            <p className="text-sm md:text-base font-semibold text-white mr-[14px] lg:mr-4">
              WEBSITE DESIGN AND SEO BY :-
            </p>
            <Image
              src="/assets/footer/gokundu-logo.png"
              alt="Gokundo"
              width={141}
              height={36}
              className="w-[114px] h-[30px] md:w-[141px] md:h-9"
            />
          </div>
          <div className="text-center lg:text-left hidden md:block">
            <p className="text-sm lg:text-base text-white">
              © All Copyright 2024 by Easy Pools
            </p>
          </div>
          <div className="text-center lg:text-right hidden md:block">
            <ul className="text-sm lg:text-base flex justify-evenly gap-2">
              <li className="text-white">
                <Link href="/" className="text-white">
                  Terms & Condition
                </Link>
              </li>
              <li className="text-white">
                <Link href="/" className="text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
