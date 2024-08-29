import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const Definition = () => {
  return (
    <div className="bg_vinylPool">
      <div className="container padding__top">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-7">
          <div className="md:col-span-3 flex justify-end items-center md:items-start">
            <div className="">
              <Image
                src="/assets/VinylPool/Definition.png"
                width={836}
                height={449}
                alt="Definition image"
                className=""
              />
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col justify-center items-center md:items-start pt-6 md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center mb-4">
              <HeadingIcon text={headingIconText.definition__IconText} />
            </div>
            <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-normal text-center md:text-left">
            Definition of a Vinyl Pool
            </h2>

            <p className="text-black text-lg font-normal mt-4 text-center md:text-left">
            A vinyl pool is a type of swimming pool that uses a vinyl liner to contain the water. The liner is a flexible, waterproof membrane that lines the pool's interior, providing a smooth and durable surface. Vinyl pools are typically constructed with steel or polymer wall panels that form the shape of the pool, over which the vinyl liner is installed. The vinyl liner serves as the pool's waterproof membrane, offering a smooth and comfortable surface. We specialize in creating these pools with precision and ease of maintenance, ensuring a cost-effective solution for those seeking a versatile and visually appealing swimming experience. With a vinyl pool by our vinyl pool installer, individuals can enjoy the benefits of a well-crafted pool that seamlessly integrates into their outdoor space, combining durability and aesthetic appeal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Definition;
