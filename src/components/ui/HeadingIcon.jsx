import Image from "next/image";

const HeadingIcon = ({ text = "empty text" }) => {
  return (
    <div className="flex items-center pb-2">
      <Image
        src="/assets/licensed/sectionicon.png"
        width={48}
        height={16}
        alt="section logo"
        className="h-4 w-12 mr-2 text-dark text-base"
      />
      <p className=" text-center md:text-base xs:text-[10px]">{text}</p>
    </div>
  );
};

export default HeadingIcon;
