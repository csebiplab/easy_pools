"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const galImgs = [
  "/assets/VinylPool/pg1.png",
  "/assets/VinylPool/pg2.png",
  "/assets/VinylPool/pg3.png",
  "/assets/VinylPool/pg4.png",
  "/assets/VinylPool/pg5.png",
  "/assets/VinylPool/pg6.png",
  "/assets/VinylPool/pg7.png",
  "/assets/VinylPool/pg8.png",
  "/assets/VinylPool/pg9.png",
  "/assets/VinylPool/pg10.png",
  "/assets/VinylPool/pg11.png",
];

const galImgs2 = [
  "/assets/VinylPool/pg11.png",
  "/assets/VinylPool/pg10.png",
  "/assets/VinylPool/pg9.png",
  "/assets/VinylPool/pg8.png",
  "/assets/VinylPool/pg7.png",
  "/assets/VinylPool/pg6.png",
  "/assets/VinylPool/pg5.png",
  "/assets/VinylPool/pg4.png",
  "/assets/VinylPool/pg3.png",
  "/assets/VinylPool/pg2.png",
  "/assets/VinylPool/pg1.png",
];

const ProjectGallery = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLoadMore = () => {
    setShowAll(true);
  };

  return (
    <div className="">
      <div className="bg_vinylPool custom-container padding__top">
        <div className="">
          <div className="flex flex-col justify-center items-center">
            <HeadingIcon text={headingIconText.gallery_IconText} />
            <div className="pb-5">
              <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-normal text-center">
                Past Projects Gallery of Our Swimming Pool Installation
              </h2>
            </div>
          </div>
        </div>

        {isMobileView ? (
          <div>
            <div className="grid grid-cols-1 gap-2">
              {galImgs
                .slice(0, showAll ? galImgs.length : 4)
                .map((imgUrl, idx) => (
                  <div key={idx} className="m-2 px-6">
                    <Image
                      width={370}
                      height={250}
                      src={imgUrl}
                      alt="gallery"
                      className="object-contain w-full h-auto mx-auto"
                    />
                  </div>
                ))}
            </div>
            {!showAll && (
              <div className="flex justify-center text-center mt-4 px-10">
                <button
                  aria-label="Load more"
                  onClick={handleLoadMore}
                  className="w-2/3 flex items-center justify-center gap-2 text-sm font-bold px-4 py-2 bg-secondary-700 text-white rounded-[20px]"
                >
                  Load More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                  >
                    <path
                      d="M0 11.3066L4.59 6.71593L0 2.12527L1.42 0.715071L7.42 6.71593L1.42 12.7168L0 11.3066Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Swiper
              className="sample-slider w-full"
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 0,
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
                reverseDirection: true,
                stopOnLastSlide: false,
              }}
              speed={4000}
              allowTouchMove={false}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            >
              {galImgs.map((imgUrl, idx) => (
                <SwiperSlide key={idx} className="m-2">
                  <Image
                    width={360}
                    height={280}
                    src={imgUrl}
                    alt="gallery"
                    className="object-contain w-full h-auto mx-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              className="sample-slider w-full"
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 0,
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
                stopOnLastSlide: false,
                reverseDirection: false,
              }}
              speed={4000}
              allowTouchMove={false}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            >
              {galImgs2.map((imgUrl, i) => (
                <SwiperSlide key={i} className="m-2">
                  <Image
                    width={360}
                    height={280}
                    src={imgUrl}
                    alt="gallery"
                    className="object-contain w-full h-auto mx-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectGallery;
