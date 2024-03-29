"use client";
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import googleIcon from "../../../../../../public/assets/review/Google-Review-Logo 3.png"
import starIcon from "../../../../../../public/assets/review/ratingstar.png"
import HeadingIcon from '@/app/components/ui/HeadingIcon';
import { headingIconText } from '@/app/utils/heading-text';

const TestimonialCard = ({ text, author, location }) => (
  <div className=" rounded-lg shadow-md p-[13px] ">
    <div >
      <img src={googleIcon.src} alt="" />
    </div>
    <div className='lg:pt-2'>
      <img src={starIcon.src} alt="" />
    </div>
    <p className="text-sm text-gray-800 py-3 3xl:text-[14px] ">{text}</p>
    <h6 className="font-semibold text-gray-900 ">{author}</h6>
    <p className="text-gray-600 text-xs ">{location}</p>
  </div>
);

const TestimonialSlider = ({ testimonials }) => {
  const [focusedIndex, setFocusedIndex] = useState(1); // Initial focused index is 1

  const handlePrev = () => {
    const newIndex = focusedIndex === 0 ? testimonials.length - 1 : focusedIndex - 1;
    setFocusedIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = focusedIndex === testimonials.length - 1 ? 0 : focusedIndex + 1;
    setFocusedIndex(newIndex);
  };

  return (
    <div className="relative  ">
      <div className="  justify-center items-center mb-4">

        <div className="grid lg:grid-cols-3 grid-cols-1 grid-rows-1  items-center lg:gap-12">
          {testimonials.map((testimonial, index) => {
            const cardIndex = (focusedIndex + index) % testimonials.length;
            const isFocused = index === 1; // Check if this card is focused
            const cardStyle = {
              zIndex: testimonials.length - Math.abs(index - 1),
              transform: isFocused ? 'scale(1.2)' : 'scale(.9)', // Scale up the focused card
              backgroundColor: isFocused ? 'white' : '#D9D9D980', // White background for focused card, red for others
            };
            return (
              <div
                key={index}
                className="flex-none"
                style={cardStyle}
              >
                <TestimonialCard {...testimonials[cardIndex]} />
              </div>
            );
          })}
        </div>

      </div>

      <div className="flex gap-8 mt-10 items-center justify-center py-5">
        {/* ========= first line ======== */}
        <div className="w-[330px] h-0.5  bg-[#049E43] ">

        </div>

        <div className="flex gap-5">

          <button onClick={handlePrev} className="p-3 rounded-full border-2 border-[#049E43] hover:text-white hover:bg-[#049E43]  "><FaChevronLeft className='fill-[#049E43] hover:fill-white' /></button>

          <button onClick={handleNext} className=" hover:text-white bg-active hover:bg-[#049E43] border-2 p-3  rounded-full  border-[#049E43]  "><FaChevronRight className='fill-[#049E43] hover:fill-white' /></button>

        </div>
        {/* =============== second line ============= */}
        <div className="w-[330px] h-0.5 bg-[#049E43] ">

        </div>
      </div>

    </div>
  );
};


const Review = () => {
  const testimonials = [
    {
      text: 'I cannot express enough how delighted I am with the exceptional service provided by this company. Despite our tight budget constraints, they approached our project with ingenuity and professionalism. ',
      author: 'Lisa Silva',
      location: 'London',

    },
    {
      text: 'I would highly recommend this company. They came in, listened to our crazy budget restrictions, and came up with the most genius cost-saving suggestion that we pulled off effortlessly. Huge thanks.',
      author: 'Nuan Projip',
      location: 'North York',

    },
    {
      text: 'I would highly recommend this company. They came in, listened to our crazy budget restrictions, and came up with the most genius cost-saving suggestion that we pulled off effortlessly. Huge thanks. From start to finish working with Easy Renovation was a great experience.',
      author: 'Alex ross',
      location: 'Barling',

    },
  ];

  return (
    <div className='bg-[#188B891A]'>
      <div className="  container 3xl:py-[50px] py-[30px]">
        <div>
          <div className=" flex flex-col justify-center items-center ">

            <HeadingIcon text={headingIconText.revidw__IconText} />

            <div>
              <p className="lg:text-[36px] text-[20px] md:mb-20 mb-8 text ">
                Here’s what to expect when you hire us as your Pool Installer in Toronto.
              </p>
            </div>
          </div>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </div>
  );
};

export default Review;
