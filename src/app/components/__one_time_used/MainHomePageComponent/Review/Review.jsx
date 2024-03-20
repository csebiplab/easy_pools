"use client";
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import googleIcon from "../../../../../../public/assets/review/Google-Review-Logo 3.png"
import starIcon from "../../../../../../public/assets/review/ratingstar.png"
import HeadingIcon from '@/app/components/ui/HeadingIcon';
import { headingIconText } from '@/app/utils/heading-text';

const TestimonialCard = ({ text, author, location }) => (
  <div className=" rounded-lg shadow-md lg:py-5 lg:px-9 px-4 py-3 ">
    <div >
      <img src={googleIcon.src} alt="" />
    </div>
    <div className='lg:pt-2'>
      <img src={starIcon.src} alt="" />
    </div>
    <p className="text-sm text-gray-800 lg:py-5  py-3 ">{text}</p>
    <h6 className="font-semibold text-gray-900 mt-2">{author}</h6>
    <p className="text-gray-600 text-xs mt-2">{location}</p>
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
    <div className="relative ">
      <div className="  justify-center items-center mb-4">

        <div className="grid lg:grid-cols-3 mx-10  items-center lg:gap-20">
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

      <div className="flex gap-8 mt-20 items-center justify-center py-5">
        {/* ========= first line ======== */}
        <div className="w-[330px] h-0.5  bg-[#049E43] hidden md:block">

        </div>

        <div className="flex gap-5">

          <button onClick={handlePrev} className="p-3 rounded-full border-2 border-[#049E43] hover:text-white hover:bg-[#049E43] "><FaChevronLeft /></button>

          <button onClick={handleNext} className=" hover:text-white bg-active hover:bg-[#049E43] border-2 p-3  rounded-full  border-[#049E43]  "><FaChevronRight /></button>

        </div>
        {/* =============== second line ============= */}
        <div className="w-[330px] h-0.5 bg-[#049E43] hidden md:block">

        </div>
      </div>

    </div>
  );
};


const Review = () => {
  const testimonials = [
    {
      text: 'I cannot express enough how delighted I am with the exceptional service provided by this company. Despite our tight budget constraints, they approached our project with ingenuity and professionalism. Their innovative cost-saving solutions surpassed our expectations, making the renovation process smooth and stress-free. Working with Easy Renovation was an absolute pleasure from start to finish. ',
      author: 'Lisa Silva',
      location: 'London',

    },
    {
      text: 'I would highly recommend this company. They came in, listened to our crazy budget restrictions, and came up with the most genius cost-saving suggestion that we pulled off effortlessly. Huge thanks. From start to finish working with Easy Renovation was a great experience. I was looking to get my primary bathroom updated and remodelled and reached out to the team.',
      author: 'Nuan Projip',
      location: 'North York',

    },
    {
      text: 'Easy Renovation exceeded all expectations. Despite tight budgets, they delivered innovative solutions effortlessly. Their professionalism and expertise made the entire process a breeze. Highly recommended for any renovation project! I was looking to get my primary bathroom updated and remodelled and reached out to the team.',
      author: 'Alex ross',
      location: 'Barling',

    },
  ];

  return (
    <div className=" bg-[#188B891A] lg:py-12 py-y">
      <div>
        <div className=" flex flex-col justify-center items-center ">

          <HeadingIcon text={headingIconText.revidw__IconText} />

          <div>
            <p className="lg:text-[36px] text-[20px] md:mb-20 mb-8 ">
            Here’s what to expect when you hire us as your Pool Installer in Toronto.
            </p>
          </div>
        </div>
      </div>
      <TestimonialSlider testimonials={testimonials} />
    </div>
  );
};

export default Review;
