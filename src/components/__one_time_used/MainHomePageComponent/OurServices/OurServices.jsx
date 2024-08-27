import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import "./OurServices.css";
import ServiceCard from "./ServiceCard";

const ourServices = [
  {
    imgUrl: "/assets/services/serv1.png",
    title: "Vinyl pool",
    desc: `Vinyl pools are the most popular.
     They are constructed using a frame made of 
     galvanized steel and concrete with a vinyl liner overtop. 
     The vinyl liner pools can be customized with different colors, 
     patterns, and shapes. `,
    url: "vinyl-pool-installation-in-toronto",
  },
  {
    imgUrl: "/assets/services/serv2.png",
    title: "Fiberglass pool",
    desc: `Fiberglass pools are the quickest and easiest to install. 
    They come in a pre-formed shell with various models and features. 
    Their gel coat makes them more durable against sharp objects since
     they cannot be punctured.`,
    url: "fiberglass-pool-installation-in-toronto",
  },
  {
    imgUrl: "/assets/services/serv3.png",
    title: "Concrete pool",
    desc: `Concrete pools are the most luxurious, most durable, 
    and most customizable. They are the most expensive due to their 
    building process, however, this is outweighed by their longevity 
    and endless customization options`,
    url: "swimming-pool-installation-company-in-vaughan",
  },
  {
    imgUrl: "/assets/services/serv4.png",
    title: "ICF pool",
    desc: `Insulated Concrete Form (ICF) pools are insulated concrete pools in a nutshell. The efficiency of ICF pools is better than concrete and you have the option to use a liner, allowing you to facelift your pool in the future in the future.
    `,
    url: "/",
  },
];

const OurServices = () => {
  return (
    <div className="">
      <div className="container our__service__box">
        <div className=" !px-[35px] md:px-0  2xl:py-[65px] py-[50px] ">
          <div className="flex md:justify-normal justify-center md:items-start items-center">
            <HeadingIcon text={headingIconText.ourServices__IconTxt} />
          </div>
          <h2 className="text-lg md:text-3xl lg:text-4xl text-dark leading-normal md:text-start text-center mt-2 md:mt-4">
            Our Services
          </h2>
          <div className="mt-7 md:mt-[35px]">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 2xl:gap-[27px]">
              {ourServices.map((serv, index) => (
                <ServiceCard key={index} serv={serv} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
