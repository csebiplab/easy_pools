import Image from "next/image";

const HeadingIcon = ({text = "empty text"}) => {
  return (
    <div className="flex items-center pb-2">
      <Image src="/assets/licensed/sectionicon.png" width={48} height={16} className="h-4 w-12 mr-2 text-dark text-base" />
      <p>{text}</p>
    </div>
  );
};

export default HeadingIcon;
