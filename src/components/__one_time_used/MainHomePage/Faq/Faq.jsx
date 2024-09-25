import HeadingIcon from "@/components/ui/HeadingIcon";
import Image from "next/image";
import { IoCaretDown } from "react-icons/io5";
import "./Faq.css";
import { headingIconText } from "@/utils/heading-text";

const QAPoolInstallationQuestionsNAns = [
  {
    id: 1,
    question: "What is the best type of pool to install?",
    answer:
      "If you want a highly customizable, long-lasting pool and are willing to invest more time and money upfront, a concrete pool is the best choice. If you're looking for an affordable and flexible option, vinyl pools provide excellent value. ",
  },
  {
    id: 2,
    question: "How long does it take to install a swimming pool?",
    answer:
      "The duration of the installation process depends on a variety of factors, including the type and size of the pool, site preparation requirements, and weather conditions. On average, it takes about 6-8 weeks to install an in-ground ",
  },
  {
    id: 3,
    question:
      "What types of pools do Easy Pools install?",
    answer:
      "At Easy Pools, we specialize in installing various types of inground pools, including concrete, vinyl, ICF, and fibreglass pools. Our contractors help you choose the best option based on your needs and budget.",
  },
  {
    id: 4,
    question: "What does your pool installation service include?",
    answer:
      "Our comprehensive pool installation services include everything: design consultation, site preparation, excavation, installation, and more. We also offer lighting, heating systems, water features, and more.",
  },
  {
    id: 5,
    question:
      "Do I need to obtain a permit to install a pool?",
    answer:
      "Yes, a permit is required for pool installations in Toronto. Easy Pools will guide you through the permit application process.",
  },
  {
    id: 6,
    question:
      "Can I customize my pool design?",
    answer:
      "Absolutely! Our contractors work with you to create a customized pool design for your outdoor space. Our contractors tailor the pool to your needs, from shape and size to special features.",
  },
  {
    id: 7,
    question:
      "What areas do Easy Pools serve?",
    answer:
      "Easy Pools proudly serves Toronto and the surrounding GTA areas, offering top-quality pool installation and renovation services.",
  },
  {
    id: 8,
    question:
      "CDo you offer pool renovation or repair services?",
    answer:
      "Yes, in addition to installation, Easy Pools also offers pool renovation services. Whether you need to update an older pool or fix damaged parts, our expert team can handle everything for repair.",
  },
];

const Faq = () => {
  return (
    <div className="bg_swimmingPool padding__top ">
      <section className="full__section_r_p pl-3 md:pl-0">
        <div className="mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[27px]">
            <div className="flex justify-end items-center pr-3 md:pr-0">
              <Image
                alt="faq"
                src="/assets/homePage/FAQ.png"
                width={897}
                height={801}
                // className="w-[897px] h-[801px]"
              />
            </div>

            <div>
              <div>
                <div className="flex flex-col items-center md:items-start">
                  <HeadingIcon text={headingIconText.faq__IconText} />

                  <div>
                    <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center md:text-left">
                    Frequently Asked Questions (FAQ): Swimming Pool Installation Services in Toronto
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
