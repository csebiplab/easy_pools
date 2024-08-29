import Link from "next/link";
import "./ProjectBanner.css";

const ProjectBanner = () => {
  return (
    <div className="container project-banner py-[78px] md:py-[110px] lg:py-[135] xl:py-[160] 2xl:py-[185] 3xl:py-[210] 4xl:py-[235] 5xl:py-[260px] flex justify-center items-center bg-blend-multiply bg-dark-200">
      <div className="text-center project-content">
        <div>
          <h1 className="text-white text-[27px] lg:text-[55px] leading-normal">
          Swimming Pool Installation in Barrie
          </h1>
          <p className="mt-4 lg:mt-8 lg:leading-10 leading-normal text-white lg:text-[25px] text-sm font-normal">
          Welcome to our swimming pool installation services in Barrie, where your dream of a luxurious and refreshing pool oasis becomes a reality!
          </p>
          <div className="flex justify-center">
            <Link href={`tel:+1(647) 449 9512`}>
              <button
                aria-label="Get an estimate"
                className="flex items-center rounded-full bg-secondary py-3 md:py-4 px-8 mt-7 md:mt-8"
              >
                <span className="text-white text-sm md:text-lg">
                  Get an Estimate
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  className="ml-3"
                >
                  <path
                    d="M0 11.4267L4.59 6.83738L0 2.24811L1.42 0.838335L7.42 6.83738L1.42 12.8364L0 11.4267Z"
                    fill="white"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBanner;
