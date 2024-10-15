import Image from "next/image";
import React from "react";
import "./ContactUs.css";
import Link from "next/link";

const socialIcons = [
  "/assets/homePage/icons/f.png",
  "/assets/homePage/icons/t.png",
  "/assets/homePage/icons/i.png",
  "/assets/homePage/icons/l.png",
];

const ContactUs = () => {
  return (
    <div>
      {/* large device  */}
      <div className="hidden md:block full__section_r_p pl-3 md:pl-0">
        <div className="grid grid-cols-1 grid-cols-7 gap-[30px] 5xl:gap-[55px]">
          <div className="md:col-span-3">
            <Image
              src="/assets/homePage/GiveUs.png"
              alt="contact us"
              width={792}
              height={783}
              className="w-[792px] h-[683px]"
            />
          </div>
          <div className="-ml-0 md:-ml-[200px] mt-0 md:mt-[150px] md:col-span-1 contact__cart__bg h-[406px] ">
            <div className="px-[35px] 5xl:px-[54px] py-[50px] 5xl:py-[80px] flex flex-col justify-center ">
              <p className="text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-white leading-normal pb-[30px]">
                Contact Us
              </p>
              <p className="text-base font-normal text-white leading-normal flex items-center gap-[15px]">
                {" "}
                <Image
                  src="/assets/homePage/icons/map.png"
                  alt="map"
                  width={21}
                  height={21}
                />{" "}
                <Link
                  className="text-white"
                  // href="loaction: 1331 Major Mackenzie dr West, Vaughan"
                      rel="nofollow" target="_blank"
                      href="https://www.google.com/maps/place/Easy+pools/@43.8622621,-79.4823842,16z/data=!4m6!3m5!1s0x882b2968ab14ffe9:0x44b4c761886b31cb!8m2!3d43.8620107!4d-79.4818907!16s%2Fg%2F11vqsjvxpl?entry=ttu&g_ep=EgoyMDI0MDkwMi4xIKXMDSoASAFQAw%3D%3D"
                >
                  1331 Major Mackenzie dr West, Vaughan
                </Link>
              </p>
              <p className="text-base font-normal text-white leading-normal py-[20px] flex items-center gap-[15px]">
                {" "}
                <Image
                  src="/assets/homePage/icons/phone.png"
                  alt="phone"
                  width={21}
                  height={21}
                />{" "}
                <Link className="text-white" href="tel: +1(647) 449 9512">
                  +1(647)449-9512
                </Link>
              </p>
              <p className="text-base font-normal text-white leading-normal pb-[30px] flex items-center gap-[15px]">
                {" "}
                <Image
                  src="/assets/homePage/icons/mail.png"
                  alt="mail"
                  width={21}
                  height={21}
                />{" "}
                <Link
                  className="text-white"
                  // href="mail: easypools.landscaping@gmail.com"
                  href="mailto:easypools.landscaping@gmail.com"
                >
                  easypools.landscaping@gmail.com
                </Link>
              </p>
              <div className="flex items-center gap-[37px]">
                {socialIcons?.map((icon, index) => {
                  return (
                    <Image
                      key={index}
                      src={icon}
                      alt="social icon"
                      width={23}
                      height={23}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="h-full flex flex-col justify-center">
              <p className="text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-primary leading-normal pb-[30px]">
                Give Us Feedback
              </p>
              {/* <form className="">
                <div className="w-full flex justify-between items-center gap-[20px]">
                  <div className="w-1/2">
                    <label
                      className="text-base 5xl:text-lg font-normal text-primary leading-normal"
                      htmlFor="name"
                    >
                      Your Name <sup className="text-primary pt-[10px]">*</sup>
                    </label>
                    <input
                      className="w-full input_bg py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                      type="text"
                      placeholder="Robot Fox"
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      className="text-base 5xl:text-lg font-normal text-primary leading-normal"
                      htmlFor="email"
                    >
                      Your Email <sup className="text-primary pt-[10px]">*</sup>
                    </label>
                    <input
                      className="w-full input_bg py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                      type="email"
                      placeholder="info.example@gmail.com"
                    />
                  </div>
                </div>

                <div className="w-full flex items-center gap-[20px] py-[25px]">
                  <div className="w-1/2">
                    <label
                      className="text-base 5xl:text-lg font-normal text-primary leading-normal"
                      htmlFor="subject"
                    >
                      Subject <sup className="text-primary pt-[10px]">*</sup>
                    </label>
                    <input
                      className="w-full input_bg py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                      type="text"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      className="text-base 5xl:text-lg font-normal text-primary leading-normal"
                      htmlFor="phone"
                    >
                      Your Phone <sup className="text-primary pt-[10px]">*</sup>
                    </label>
                    <input
                      className="w-full input_bg py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                      type="number"
                      placeholder="+88 01764912536"
                    />
                  </div>
                </div>

                <div className="w-full pb-[35px]">
                  <label
                    className="text-base 5xl:text-lg font-normal text-primary leading-normal"
                    htmlFor="message"
                  >
                    Message <sup className="text-primary pt-[10px]">*</sup>
                  </label>
                  <textarea
                    className="w-full input_bg py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                    name="message"
                    placeholder="Write Message"
                  ></textarea>
                </div>
                <div className="flex justify-start pb-[28px] md:pb-0">
                  <button className="contact_btn text-white flex items-center gap-[5px] text-lg font-normal py-[7px] px-[33px]">
                    Submit{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="15"
                      viewBox="0 0 17 15"
                      fill="none"
                    >
                      <path
                        d="M1.614 2.76096L7.66652 5.26541L1.614 4.48763V2.76096ZM7.66652 9.54319L1.614 12.0476V10.321L7.66652 9.54319ZM0 0.404297V5.84874L12.105 7.4043L0 8.95985V14.4043L16.947 7.4043L0 0.404297Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </form> */}
              <form className="contact-form">
                <div className="contact-form__row w-full flex justify-between items-center gap-[20px]">
                  <div className="contact-form__field w-1/2">
                    <label
                      className="contact-form__label text-base 5xl:text-lg font-normal text-primary leading-normal"
                      htmlFor="name"
                    >
                      Your Name <sup className="text-primary">*</sup>
                    </label>
                    <input
                      className="contact-form__input w-full py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                      type="text"
                      id="name"
                      placeholder="Robot Fox"
                      required
                    />
                  </div>
                  <div className="contact-form__field w-1/2">
                    <label
                      className="contact-form__label text-base 5xl:text-lg font-normal text-primary leading-normal"
                      htmlFor="email"
                    >
                      Your Email <sup className="text-primary">*</sup>
                    </label>
                    <input
                      className="contact-form__input w-full py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                      type="email"
                      id="email"
                      placeholder="info.example@gmail.com"
                      required
                    />
                  </div>
                </div>

                <div className="contact-form__row w-full flex items-center gap-[20px] py-[25px]">
                  <div className="contact-form__field w-1/2">
                    <label
                      className="contact-form__label text-base 5xl:text-lg font-normal text-primary leading-normal"
                      htmlFor="subject"
                    >
                      Subject <sup className="text-primary">*</sup>
                    </label>
                    <input
                      className="contact-form__input w-full py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                      type="text"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="contact-form__field w-1/2">
                    <label
                      className="contact-form__label text-base 5xl:text-lg font-normal text-primary leading-normal"
                      htmlFor="phone"
                    >
                      Your Phone <sup className="text-primary">*</sup>
                    </label>
                    <input
                      className="contact-form__input w-full py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                      type="tel"
                      id="phone"
                      placeholder="+1(647) 449 9512"
                      pattern="^\+?\d{1,14}$"
                      required
                    />
                  </div>
                </div>

                <div className="contact-form__field w-full pb-[35px]">
                  <label
                    className="contact-form__label text-base 5xl:text-lg font-normal text-primary leading-normal"
                    htmlFor="message"
                  >
                    Message <sup className="text-primary">*</sup>
                  </label>
                  <textarea
                    className="contact-form__textarea w-full py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                    id="message"
                    name="message"
                    placeholder="Write Message"
                    required
                  ></textarea>
                </div>

                <div className="contact-form__submit flex justify-start pb-[28px] md:pb-0">
                  <button className="contact-form__button flex items-center gap-[5px] text-lg font-normal py-[7px] px-[33px] bg-primary text-white">
                    Submit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="15"
                      viewBox="0 0 17 15"
                      fill="none"
                    >
                      <path
                        d="M1.614 2.76096L7.66652 5.26541L1.614 4.48763V2.76096ZM7.66652 9.54319L1.614 12.0476V10.321L7.66652 9.54319ZM0 0.404297V5.84874L12.105 7.4043L0 8.95985V14.4043L16.947 7.4043L0 0.404297Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* small device  */}
      <div className="block md:hidden px-3">
        <div className="contact__cart__bg">
          <div className="px-[13px] 5xl:px-[54px] py-[16px] 5xl:py-[80px] flex flex-col justify-center ">
            <p className="text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-white leading-normal pb-[30px]">
              Contact Us
            </p>
            <p className="text-base font-normal text-white leading-normal flex items-center gap-[15px]">
              {" "}
              <Image
                src="/assets/homePage/icons/map.png"
                alt="map"
                width={21}
                height={21}
              />{" "}
              <Link
                className="text-white"
                href="loaction : 1331 Major Mackenzie dr West, Vaughan"
              >
                1331 Major Mackenzie dr West, Vaughan
              </Link>
            </p>
            <p className="text-base font-normal text-white leading-normal py-[20px] flex items-center gap-[15px]">
              {" "}
              <Image
                src="/assets/homePage/icons/phone.png"
                alt="phone"
                width={21}
                height={21}
              />{" "}
              <Link className="text-white" href="tel : +1(647)449-9512">
                +1(647)449-9512
              </Link>
            </p>
            <p className="text-base font-normal text-white leading-normal pb-[30px] flex items-center gap-[15px]">
              {" "}
              <Image
                src="/assets/homePage/icons/mail.png"
                alt="mail"
                width={21}
                height={21}
              />{" "}
              <Link
                className="text-white"
                href="mail : easypools.landscaping@gmail.com"
              >
                easypools.landscaping@gmail.com
              </Link>
            </p>
            <div className="flex items-center gap-[37px]">
              {socialIcons?.map((icon, index) => {
                return (
                  <Image
                    key={index}
                    src={icon}
                    alt="social icon"
                    width={23}
                    height={23}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="pt-[20px]">
          <div className="h-full flex flex-col justify-center">
            <p className="text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-primary leading-normal pb-[10px]">
              Give Us Feedback
            </p>
            {/* <form className="">
              <div className="w-full">
                <label
                  className="text-base 5xl:text-lg font-normal text-primary leading-normal"
                  htmlFor="name"
                >
                  Your Name <sup className="text-primary pt-[10px]">*</sup>
                </label>
                <input
                  className="w-full input_bg py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                  type="text"
                  placeholder="Robot Fox"
                />
              </div>
              <div className="w-full py-[20px]">
                <label
                  className="text-base 5xl:text-lg font-normal text-primary leading-normal"
                  htmlFor="email"
                >
                  Your Email <sup className="text-primary pt-[10px]">*</sup>
                </label>
                <input
                  className="w-full input_bg py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                  type="email"
                  placeholder="info.example@gmail.com"
                />
              </div>

              <div className="w-full">
                <label
                  className="text-base 5xl:text-lg font-normal text-primary leading-normal"
                  htmlFor="subject"
                >
                  Subject <sup className="text-primary pt-[10px]">*</sup>
                </label>
                <input
                  className="w-full input_bg py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className="w-full py-[20px]">
                <label
                  className="text-base 5xl:text-lg font-normal text-primary leading-normal"
                  htmlFor="phone"
                >
                  Your Phone <sup className="text-primary pt-[10px]">*</sup>
                </label>
                <input
                  className="w-full input_bg py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                  type="number"
                  placeholder="+88 01764912536"
                />
              </div>

              <div className="w-full pb-[16px]">
                <label
                  className="text-base 5xl:text-lg font-normal text-primary leading-normal"
                  htmlFor="message"
                >
                  Message <sup className="text-primary pt-[10px]">*</sup>
                </label>
                <textarea
                  className="w-full input_bg py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                  name="message"
                  placeholder="Write Message"
                ></textarea>
              </div>
              <div className="flex justify-center pb-[28px] md:pb-0">
                <button className="contact_btn text-white flex items-center gap-[5px] text-lg font-normal py-[7px] px-[33px]">
                  Submit{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                  >
                    <path
                      d="M1.614 2.76096L7.66652 5.26541L1.614 4.48763V2.76096ZM7.66652 9.54319L1.614 12.0476V10.321L7.66652 9.54319ZM0 0.404297V5.84874L12.105 7.4043L0 8.95985V14.4043L16.947 7.4043L0 0.404297Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </form> */}
            <form className="contact-form">
              <div className="contact-form__field">
                <label
                  className="contact-form__label text-base 5xl:text-lg font-normal text-primary leading-normal"
                  htmlFor="name"
                >
                  Your Name <sup className="text-primary">*</sup>
                </label>
                <input
                  className="contact-form__input w-full py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                  type="text"
                  id="name"
                  placeholder="Robot Fox"
                  required
                />
              </div>

              <div className="contact-form__field py-[20px]">
                <label
                  className="contact-form__label text-base 5xl:text-lg font-normal text-primary leading-normal"
                  htmlFor="email"
                >
                  Your Email <sup className="text-primary">*</sup>
                </label>
                <input
                  className="contact-form__input w-full py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                  type="email"
                  id="email"
                  placeholder="info.example@gmail.com"
                  required
                />
              </div>

              <div className="contact-form__field">
                <label
                  className="contact-form__label text-base 5xl:text-lg font-normal text-primary leading-normal"
                  htmlFor="subject"
                >
                  Subject <sup className="text-primary">*</sup>
                </label>
                <input
                  className="contact-form__input w-full py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="contact-form__field py-[20px]">
                <label
                  className="contact-form__label text-base 5xl:text-lg font-normal text-primary leading-normal"
                  htmlFor="phone"
                >
                  Your Phone <sup className="text-primary">*</sup>
                </label>
                <input
                  className="contact-form__input w-full py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                  type="tel"
                  id="phone"
                  placeholder="+1(647) 449 9512"
                  pattern="^\+?\d{1,14}$"
                  required
                />
              </div>

              <div className="contact-form__field pb-[16px]">
                <label
                  className="contact-form__label text-base 5xl:text-lg font-normal text-primary leading-normal"
                  htmlFor="message"
                >
                  Message <sup className="text-primary">*</sup>
                </label>
                <textarea
                  className="contact-form__textarea w-full py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                  id="message"
                  name="message"
                  placeholder="Write Message"
                  required
                ></textarea>
              </div>

              <div className="contact-form__submit flex justify-center pb-[28px] md:pb-0">
                <button className="contact-form__button flex items-center gap-[5px] text-lg font-normal py-[7px] px-[33px] bg-primary text-white">
                  Submit
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="15"
                    viewBox="0 0 17 15"
                    fill="none"
                  >
                    <path
                      d="M1.614 2.76096L7.66652 5.26541L1.614 4.48763V2.76096ZM7.66652 9.54319L1.614 12.0476V10.321L7.66652 9.54319ZM0 0.404297V5.84874L12.105 7.4043L0 8.95985V14.4043L16.947 7.4043L0 0.404297Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
