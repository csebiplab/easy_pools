import Image from "next/image";
// import joinUsImg from "../../../../../../public/assets/random/joinus.png";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Button from "./Button";

const JoinWithUs = () => {
  return (
    <div className=" ">
      <div className="bg-[#188B891A]">
        <div className=" custom-container md:px-0 xs:px-[35px] md:py-0 xs:py-10  grid grid-cols-1 md:grid-cols-8 gap-4">
          <div
            className=" md:col-span-4 md:order-1 bg-white  lg:px-8 px-4 lg:py-12 md:py-8 py-4  border-2 shadow-md md:rounded-xl xs:rounded-t-xl z-50 5xl:ml-[285px] 4xl:ml-[200px] 3xl:ml-[180px] 2xl:ml-[130px] xl:ml-[90px] lg:ml-[50px]
                    2xl:w-[770px] xl:w-[650px] lg:w-[600px] md:w-[500px] 2xl:h-[550px] xl:h-[500px] lg:h-[380px] md:h-[300px] md:my-10  3xl:my-[55px] lg:my-[25px] my-20px "
          >
            <div className=" flex flex-col ">
              <HeadingIcon text={headingIconText.joinUs__IconText} />

              <div>
                <p className="text-black text-lg md:text-3xl lg:text-4xl 3xl:mb-[20px]  ">
                  Ready to Start Your Swimming Pool Installation With Us?
                </p>
              </div>
            </div>
            <p className="mt-4 2xl:text-[16px] md:text-[14px] text-[10px] 2xl:leading-[35px] lg:leading-[25px] leading-[20px]">
              Dive into a world of seamless luxury with Easy Pools, your trusted
              partner for swimming pool installation in Toronto. Our expert team
              ensures a hassle-free experience. From concept to completion, we
              guarantee a swift and stress-free process, making your aquatic
              oasis a reality. Are you ready to transform your space and embrace
              the refreshing allure of a custom Easy Pool? Start your swimming
              pool installation with us and let our unparalleled expertise and
              dedication take your backyard to new heights of relaxation and
              enjoyment.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 2xl:mt-[50px] lg:mt-[25px] md:mt-[15px] mt-7">
              <Button title={"Get Your Estimate"} />
              <p className="mx-5 text-[#049E43] xl:text-[18px] lg:text-[16px] text-[14px] font-bold">
                {" "}
                Or{" "}
              </p>
              <a
                href="tel:+1(647) 449 9512"
                className=" xl:text-[18px] lg:text-[16px] text-[14px]  text-[#049E43] font-bold"
              >
                {" "}
                Call Us: +1(647) 449 9512
              </a>
            </div>
          </div>

          <div className="w-full  md:col-span-4 md:order-2 ">
            <Image
              src="/assets/random/joinus.png"
              alt="Trusted general contractor"
              width={450}
              height={300}
              loading="lazy"
              className="w-full h-full xs:rounded-b-xl md:rounded-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinWithUs;
