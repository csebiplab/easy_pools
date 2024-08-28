import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const InstallationCost = () => {
  return (
    <div className="bg_swimmingPool">
      <div className="full__section_l_p pr-3 md:pr-0 padding__top">
        <div className="grid md:grid-cols-7 grid-cols-1 gap-7  common__padding__top common__padding__btm">
          <div className="order-2 md:col-span-4 flex items-center md:items-start">
            <div className="">
              <Image
                src="/assets/swimmingPool/Installation Cost.png"
                width={836}
                height={672}
                alt="Installation Cost image"
                className=""
              />
            </div>
          </div>

          <div className="order-1 md:col-span-3 flex flex-col justify-center items-center md:items-start pt-6 md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center mb-4">
              <HeadingIcon text={headingIconText.installation__IconText} />
            </div>
            <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center md:text-left">
            Installation Cost of Swimming Pool Vaughan
            </h2>

            <p className="text-black text-lg font-normal mt-4 text-center md:text-left">
            The installation cost of a swimming pool in Vaughan can vary depending on various factors such as the size, type, and features of the pool, as well as the site conditions and any additional amenities desired. Generally, the cost includes excavation, materials, labor, permits, and any necessary landscaping or decking. Homeowners in Vaughan should expect to budget a significant amount for a quality swimming pool installation, with prices typically ranging from several thousand to tens of thousands of dollars.
            </p>
            <p className="text-black text-base leading-normal mt-4 text-center md:text-left">
            Additionally, factors such as the choice of materials for the pool lining, filtration systems, lighting, and heating options can also influence the overall cost. Other considerations may include the need for fencing or safety features required by local regulations. Homeowners should carefully consider their budget and priorities when planning a swimming pool installation in Vaughan to ensure they achieve the desired result within their financial means. Working with reputable contractors and obtaining multiple quotes can help in making informed decisions and managing costs effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationCost;
