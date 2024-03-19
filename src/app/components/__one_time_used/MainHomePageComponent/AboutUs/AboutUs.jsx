// import Image from "next/image";
// import "./AboutUs.css";
// import HeadingIcon from "@/app/components/ui/HeadingIcon";
// import { headingIconText } from "@/app/utils/heading-text";

// const AboutUs = () => {
//   return (
//     <div className="px-[120px] pt-[132px] pb-[146px]">
//       <div className="grid grid-cols-10 gap-x-[75px]">
//         <div className="under__bg relative col-span-4">
//           <div className="absolute -left-[14px] -top-[14px] w-full">
//             <Image
//               src="/assets/images/about_us.png"
//               width={496}
//               height={490}
//               alt="canada leaf"
//               className="upper_img"
//             />
//           </div>
//         </div>
//         <div className="col-span-6">
//           <HeadingIcon text={headingIconText.aboutUs__IconText} />
//           <h3 className="mt-4 mb-[25px] text-base text-dark leading-normal">
//             About Our Pool Installation Company in Toronto
//           </h3>
//           <p className="aboutus__para">
//             Easy Pools custom designs and builds pool and spa solutions that
//             reflect your unique needs and personal aesthetic. With over 10
//             combined years of experience in the pool construction industry, you
//             can trust the team of designers and construction specialists to
//             create the perfect swimming pool, spa, and landscaped backyard. From
//             start to finish, our company does it all. We guarantee on-time
//             completion and quality.
//             <br />
//             <br />
//             From start to finish, Easy Pools uses quality materials, equipment,
//             and its in-house expert staff to ensure a superior finished product.
//             All projects are supervised by our pool installation company. With
//             their shared commitment to excellence and their involvement in every
//             stage of construction, The Easy Pools has a hands-on business
//             approach.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import Image from "next/image";
import "./AboutUs.css";
import HeadingIcon from "@/app/components/ui/HeadingIcon";
import { headingIconText } from "@/app/utils/heading-text";

const AboutUs = () => {
  return (
    <div className="px-[120px] pt-[132px] pb-[146px]">
      <div className="flex gap-x-[75px]">
        <div className="under__bg relative !w-[800px] border border-red-500">
          <div className="absolute -left-[14px] -top-[14px] w-full">
            <Image
              src="/assets/images/about_us.png"
              width={596.47}
              height={490.22}
              alt="about us image"
              className="upper_img"
            />
          </div>
        </div>
        <div className="w-full">
          <HeadingIcon text={headingIconText.aboutUs__IconText} />
          <h3 className="mt-4 mb-[25px] text-base text-dark leading-normal">
            About Our Pool Installation Company
            <br />
            in Toronto
          </h3>
          <p className="aboutus__para">
            Easy Pools custom designs and builds pool and spa solutions that
            reflect your unique needs and personal aesthetic. With over 10
            combined years of experience in the pool construction industry, you
            can trust the team of designers and construction specialists to
            create the perfect swimming pool, spa, and landscaped backyard. From
            start to finish, our company does it all. We guarantee on-time
            completion and quality.
            <br />
            <br />
            From start to finish, Easy Pools uses quality materials, equipment,
            and its in-house expert staff to ensure a superior finished product.
            All projects are supervised by our pool installation company. With
            their shared commitment to excellence and their involvement in every
            stage of construction, The Easy Pools has a hands-on business
            approach.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
