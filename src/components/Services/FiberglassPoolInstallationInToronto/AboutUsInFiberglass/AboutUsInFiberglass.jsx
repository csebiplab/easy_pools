import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const AboutUsInFiberglass = () => {
  return (
    <div className="bg__fiberglassPage">
      <div className="full__section_r_p pl-3 md:pl-0">
        <div className="grid md:grid-cols-6 grid-cols-1 gap-7  common__padding__top common__padding__btm">
          <div className="md:col-span-3 flex items-center md:items-start">
            <div className="">
              <Image
                src="/assets/fiberglass/aboutus.png"
                width={836}
                height={479}
                alt="project us image"
                className=""
              />
            </div>
          </div>

          <div className=" md:col-span-3 flex flex-col justify-center items-center md:items-start pt-6 md:pt-0">
            <div className="flex md:justify-normal justify-center md:items-start items-center mb-2">
              <HeadingIcon text={headingIconText.about__usInFiberglassText} />
            </div>
            <h2 className="text-black text-3xl md:text-4xl font-medium leading-normal not-italic text-center md:text-left">
              About Our Pool Company in Toronto
            </h2>

            <p className="text-black text-base leading-normal mt-4 text-center md:text-left">
              Easy Pools is a premier fiberglass pool installation company
              dedicated to transforming backyards into luxurious retreats. With
              years of experience and a commitment to excellence, we specialize
              in providing high-quality, durable fiberglass pools tailored to
              your unique vision. Our team of skilled professionals ensures a
              seamless installation process, delivering stunning results on time
              and within budget. We pride ourselves on exceptional customer
              service, innovative designs, and a passion for creating your
              perfect oasis. We believe in making the pool installation journey
              as enjoyable as possible. From initial consultation and custom
              design to excavation and finishing touches, our attentive team
              guides you through each step with transparency and
              professionalism. We also offer a variety of add-on features such
              as lighting, heating, and water features to personalize your pool
              and elevate your backyard ambiance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsInFiberglass;
