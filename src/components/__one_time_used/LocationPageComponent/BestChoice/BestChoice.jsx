import HeadingIcon from "@/components/ui/HeadingIcon";
import { projectsHeadingIconText } from "@/utils/projects/heading__text";
import Image from "next/image";
import "./BestChoice.css";


const BestChoice = () => {
  return (
    <div className="bg__color">
      <div className="full__section_r_p">
      <div className="relative flex flex-col lg:flex-row items-center px-7 md:px-0">
        <div className="md:mb-5 lg:mb-0 lg:mr-5 lg:w-[50%] mt-8 md:mt-0">
          <Image
            alt="Is Concrete Pumping Costly"
            src="/assets/projects/images/bestChoice.png"
            width={910}
            height={650}
            className="w-full h-auto lg:w-[910px] lg:h-[650px]"
          />
        </div>
        <div className="card__onImg py-5 px-[10px] lg:p-[13px] xl:p-[15px] 2xl:p-[20px] 3xl:p-[25px] 4xl:p-[30px] 5xl:p-[35px] w-full lg:max-w-[55%] lg:absolute lg:right-0">
          <HeadingIcon text={projectsHeadingIconText.bestChoice__IconText} />
          <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center md:text-left text-black pt-[8px] md:pt-[16px]">
            Your Best Choice for Expert Pool Installers in Barrie
          </h3>
          <p className="text-xs md:text-base font-normal text-center md:text-left text-black pt-[15px] md:pt-[25px] leading-6 lg:leading-8">
            At Easy Pools Barrie, we take pride in being your premier choice for
            expert swimming pool installation. With a dedicated team of skilled
            professionals, we are committed to transforming your backyard dreams
            into a reality. Our years of experience in the industry have
            equipped us with the knowledge and expertise needed to deliver
            top-notch pool installations that not only meet but exceed your
            expectations. Our skilled technicians use state-of-the-art equipment
            and follow industry best practices to ensure a flawless installation
            that stands the test of time. When you choose us, you're choosing a
            partner dedicated to creating a backyard oasis that brings joy,
            relaxation, and endless memories to you and your loved ones. Trust
            us to be your go-to experts for pool installation in Barrie.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BestChoice;
