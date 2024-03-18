import HeadingIcon from "@/app/components/ui/HeadingIcon";
import "./OurServices.css";
import { headingIconText } from "@/app/utils/heading-text";
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
  },
  {
    imgUrl: "/assets/services/serv2.png",
    title: "Fiberglass pool",
    desc: `Fiberglass pools are the quickest and easiest to install. 
    They come in a pre-formed shell with various models and features. 
    Their gel coat makes them more durable against sharp objects since
     they cannot be punctured.`,
  },
  {
    imgUrl: "/assets/services/serv3.png",
    title: "Concrete pool",
    desc: `Concrete pools are the most luxurious, most durable, 
    and most customizable. They are the most expensive due to their 
    building process, however, this is outweighed by their longevity 
    and endless customization options`,
  },
  {
    imgUrl: "/assets/services/serv4.png",
    title: "ICF pool",
    desc: `Insulated Concrete Form (ICF) pools are insulated concrete 
    pools in a nutshell. The efficiency of ICF pools is better than concrete 
    and you have the option to use a liner, allowing you to facelift your pool in the future.
    `,
  },
];

const OurServices = () => {
  return (
    <div className="px-5 md:px-10 xl:px-20 2xl:px-[120px] py-[112px] our__service__box">
      <HeadingIcon text={headingIconText.ourServices__IconTxt} />
      <h3 className="text-4xl text-dark">Our Services</h3>

      <div className="mt-[35px]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4 2xl:gap-[27px]">
          {ourServices.map((serv, index) => (
            <ServiceCard key={index} serv={serv} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
