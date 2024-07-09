import HeadingIcon from "@/components/ui/HeadingIcon";
import Image from "next/image";
import { IoCaretDown } from "react-icons/io5";
import "./FAQ.css";
import { headingIconText } from "@/utils/heading-text";

const QAPoolInstallationQuestionsNAns = [
  {
    id: 1,
    question: "What is Easy Pools?",
    answer:
      "Easy Pools is a user-friendly platform designed to simplify the process of installing and maintaining swimming pools. It offers a range of tools and services to help pool owners monitor water quality, schedule maintenance tasks, and access professional assistance when needed.",
  },
  {
    id: 2,
    question: "What services does Easy Pools offer?",
    answer:
      "Easy Pools provides a range of services including pool maintenance scheduling, water quality monitoring, equipment management, and customer support. Additionally, we offer resources and tips for pool care to ensure a safe and enjoyable swimming experience.",
  },
  {
    id: 3,
    question: "Are Easy Pools suitable for both residential and commercial pools?",
    answer:
      "Yes, Easy Pools caters to the needs of both residential and commercial pool owners. Whether you have a small backyard pool or a large commercial facility, our platform is designed to streamline pool management for any scale.",
  },
  {
    id: 4,
    question: "What are the benefits of using Easy Pools?",
    answer:
      "By using Easy Pools, users can save time and effort on pool maintenance tasks, ensure optimal water quality, prolong the lifespan of pool equipment, and ultimately enjoy a cleaner and safer swimming environment.",
  },
  {
    id: 5,
    question: "Are Easy Pools suitable for all types of pools?",
    answer:
      "Yes, Easy Pools is designed to be compatible with a wide range of pool types, including residential pools, commercial pools, and even public pools. Whether you have an in-ground or above-ground pool, Easy Pools can help simplify the maintenance process and keep your pool in top condition.",
  },
  {
    id: 6,
    question: " How can I get help or support with Easy Pools?",
    answer:
      "If you need assistance with Easy Pools or have any questions or concerns, you can contact our customer support team directly through the Easy Pools app or website",
  }
];

const FAQ = () => {
  return (
    <div className="bg_swimmingPool common__padding__top ">
      <section className="full__section_l_p">
        <div className="mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="order-2 flex justify-end items-center pr-3 md:pr-0">
              <Image
                alt="faq"
                src="/assets/swimmingPool/FAQ.png"
                width={893}
                height={618}
                className=""
              />
            </div>

            <div>
              <div>
                <div className="order-1 flex flex-col items-center md:items-start">
                  <HeadingIcon text={headingIconText.faq_IconText} />

                  <div>
                    <h3 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center md:text-left">
                    Some Questions for Choosing the Best Company
                    </h3>
                  </div>
                </div>
              </div>
              <div className="pr-3 md:pr-0 pt-6">
                {QAPoolInstallationQuestionsNAns.map((ques, idx) => (
                  <div key={idx}>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-[#188B89] py-3 px-5 5xl:py-[14px] 5xl:px-8 border-2">
                        <h6 className="text-white text-xs lg:text-sm xl:text-base 5xl:text-lg 5xl:leading-[22px] font-bold">
                          {ques.question}
                        </h6>

                        <div className="white-icon">
                          <IoCaretDown className="white-icon" fill="white" />
                        </div>
                      </summary>

                      <p className="py-3 pl-4 pr-8 lg:py-4 lg:px-6 5xl:py-5 5xl:px-7  border-2 text-black text-xs lg:text-sm 5xl:text-base font-normal 5xl:leading-[30px]">
                        {ques.answer}
                      </p>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
