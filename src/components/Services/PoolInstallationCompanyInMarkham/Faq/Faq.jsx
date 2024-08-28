import HeadingIcon from "@/components/ui/HeadingIcon";
import Image from "next/image";
import { IoCaretDown } from "react-icons/io5";
import "./Faq.css";
import { headingIconText } from "@/utils/heading-text";

const QAPoolInstallationQuestionsNAns = [
  {
    id: 1,
    question: "What is your experience in pool installation?",
    answer:
      "The duration of pool installation can vary depending on factors such as the size of the pool, any additional features, and the complexity of the installation site.",
  },
  {
    id: 2,
    question: "Are you licensed and insured? Can you provide documentation?",
    answer:
      "Easy Pools provides a range of services including pool maintenance scheduling, water quality monitoring, equipment management, and customer support. Additionally, we offer resources and tips for pool care to ensure a safe and enjoyable swimming experience.",
  },
  {
    id: 3,
    question:
      "What types of pools do you specialize in installing (e.g., inground, above-ground, fiberglass)?",
    answer:
      "Yes, Easy Pools caters to the needs of both residential and commercial pool owners. Whether you have a small backyard pool or a large commercial facility, our platform is designed to streamline pool management for any scale.",
  },
  {
    id: 4,
    question: "What is the timeline for completing the installation process?",
    answer:
      "By using Easy Pools, users can save time and effort on pool maintenance tasks, ensure optimal water quality, prolong the lifespan of pool equipment, and ultimately enjoy a cleaner and safer swimming environment.",
  },
  {
    id: 5,
    question:
      "Do you offer any warranties or guarantees on the pool and installation work?",
    answer:
      "Yes, Easy Pools is designed to be compatible with a wide range of pool types, including residential pools, commercial pools, and even public pools. Whether you have an in-ground or above-ground pool, Easy Pools can help simplify the maintenance process and keep your pool in top condition.",
  },
  {
    id: 6,
    question:
      "What safety measures do you implement during the installation process?",
    answer:
      "If you need assistance with Easy Pools or have any questions or concerns, you can contact our customer support team directly through the Easy Pools app or website",
  },
];

const Faq = () => {
  return (
    <div className="bg_swimmingPool common__padding__top ">
      <section className="full__section_l_p">
        <div className="mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="order-2 flex justify-end items-center pr-3 md:pr-0">
              <Image
                alt="faq"
                src="/assets/PoolInstallationCompanyInMarkham/FAQ.png"
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
                    <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center md:text-left">
                      Essential Questions to Ask Your Pool Installer Before
                      Hiring
                    </h2>
                  </div>
                </div>
              </div>
              <div className="pr-3 md:pr-0 pt-6">
                {QAPoolInstallationQuestionsNAns.map((ques, idx) => (
                  <div key={idx}>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-[#188B89] py-3 px-5 5xl:py-[14px] 5xl:px-8 border-2">
                        <p className="text-white text-sm lg:text-sm xl:text-base 5xl:text-lg 5xl:leading-[22px] font-bold">
                          {ques.question}
                        </p>

                        <div className="white-icon">
                          <IoCaretDown className="white-icon" fill="white" />
                        </div>
                      </summary>

                      <p className="py-3 pl-4 pr-8 lg:py-4 lg:px-6 5xl:py-5 5xl:px-7  border-2 text-black text-sm lg:text-sm 5xl:text-base font-normal 5xl:leading-[30px]">
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

export default Faq;
