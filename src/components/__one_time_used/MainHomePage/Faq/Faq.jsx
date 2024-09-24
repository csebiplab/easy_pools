import HeadingIcon from "@/components/ui/HeadingIcon";
import Image from "next/image";
import { IoCaretDown } from "react-icons/io5";
import "./Faq.css";
import { headingIconText } from "@/utils/heading-text";

const QAPoolInstallationQuestionsNAns = [
  {
    id: 1,
    question: "What types of pools do you install?",
    answer:
      "We specialize in installing a variety of pool types, including vinyl, fiberglass, and concrete pools. Easy Pools also offers custom designs to meet your specific needs.",
  },
  {
    id: 2,
    question: "How long does pool installation take?",
    answer:
      "The installation time varies based on the type of pool and the complexity of the project. Typically, vinyl and fiberglass pools take 1-2 weeks, while concrete pools may take 3-6 months.",
  },
  {
    id: 3,
    question:
      "What is the cost of a new pool?",
    answer:
      "Costs depend on factors like pool size, materials, and added features. We offer free consultations to provide an accurate estimate based on your requirements.",
  },
  {
    id: 4,
    question: "Do you offer pool maintenance services?",
    answer:
      "Yes, Easy Pools provides a range of maintenance services, including regular cleaning, chemical balancing, and equipment checks to ensure your pool stays in top condition.",
  },
  {
    id: 5,
    question:
      "Can you help with pool repairs and renovations?",
    answer:
      "Absolutely. We handle everything from minor repairs to complete pool renovations, including resurfacing, equipment upgrades, and modernizing older pools.",
  },
  {
    id: 6,
    question:
      "What maintenance is required for different types of pools?",
    answer:
      "Maintenance needs vary depending on the type of pool. Fiberglass and saltwater pools generally require less frequent maintenance compared to concrete pools. Regular cleaning, checking chemical levels, and occasional professional",
  },
];

const Faq = () => {
  return (
    <div className="bg_swimmingPool padding__top ">
      <section className="full__section_l_p">
        <div className="mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="order-1 md:order-2 flex justify-end items-center pr-3 md:pr-0">
              <Image
                alt="faq"
                src="/assets/swimming_pool_contractors/faq.png"
                width={893}
                height={618}
                className=""
              />
            </div>

            <div>
              <div>
                <div className="order-2 md:order-1 flex flex-col items-center md:items-start">
                  <HeadingIcon text={headingIconText.faq_IconText} />

                  <div>
                    <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center md:text-left">
                    Some Questions for Choosing the Best Company
                    </h2>
                  </div>
                </div>
              </div>
              <div className="pr-3 md:pr-0 pt-6">
                {QAPoolInstallationQuestionsNAns.map((ques, idx) => (
                  <div key={idx}>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-primary-800  py-3 px-5 5xl:py-[14px] 5xl:px-8 border-2">
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
