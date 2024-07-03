import HeadingIcon from "@/components/ui/HeadingIcon";
import Image from "next/image";
import { IoCaretDown } from "react-icons/io5";
import "./FAQ.css";
import { headingIconText } from "@/utils/heading-text";

const QAPoolInstallationQuestionsNAns = [
  {
    id: 1,
    question: "What sets Easy Pools apart from other fiberglass pool installers?",
    answer:
      "Discover our commitment to quality, personalized service, and a seamless installation process that ensures your satisfaction.",
  },
  {
    id: 2,
    question: "How long does it take to install a fiberglass pool with Easy Pools?",
    answer:
      "Our efficient installation process typically takes 7-10 days, ensuring you can enjoy your new pool in no time.",
  },
  {
    id: 3,
    question: "Are Easy Pools' fiberglass pools customizable?",
    answer:
      "Absolutely! We offer a range of designs, sizes, and features to suit your preferences, creating a tailor-made pool for your backyard.",
  },
  {
    id: 4,
    question: "What maintenance is required for Easy Pools' fiberglass pools?",
    answer:
      "Our low-maintenance pools require minimal upkeep, and we provide clear guidelines to ensure your pool stays in pristine condition year-round.",
  },
  {
    id: 5,
    question: "Is financing available for Easy Pools' fiberglass pool installations?",
    answer:
      "Yes, we offer flexible financing options to make turning your backyard into a personal oasis even more accessible.",
  },
  {
    id: 6,
    question: "Can Easy Pools assist with landscaping around the fiberglass pool?",
    answer:
      "We offer landscaping services to complement your new pool, creating a cohesive and visually appealing outdoor space.",
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
                <div className="order-1 flex flex-col">
                  <HeadingIcon text={headingIconText.faq_IconText} />

                  <div>
                    <h3 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-left text-black pt-[8px] md:pt-[16px] pb-[16px] md:pb-[36px]">
                    Some Questions for Choosing the Best Company
                    </h3>
                  </div>
                </div>
              </div>
              <div className="pr-3 md:pr-0">
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
