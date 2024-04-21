// import faqImg from "../../../../../../public/assets/random/faq.png";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import { IoCaretDown } from "react-icons/io5";
import "./faq.css";

const faqQuestionsNAns = [
  {
    id: 1,
    question: "What types of pools do you install?",
    answer:
      "We specialize in installing a variety of pools, including in-ground, above-ground, fiberglass, and vinyl liner pools.",
  },
  {
    id: 2,
    question: "How long does the installation process take?",
    answer:
      "Our main office is located in Brooklyn NY. However, we operate in Brooklyn, Queens, Manhattan, Bronx, and Staten Island.",
  },
  {
    id: 3,
    question:
      "Do you handle all aspects of the installation, including permits and pool inspections?",
    answer:
      "Yes, RH Construction USA Inc. is a fully licensed and insured company. We adhere to all necessary regulations and standards to ensure the safety and satisfaction of our clients.",
  },
  {
    id: 4,
    question:
      "Can you customize the design of the pool to suit our preferences and backyard space?",
    answer:
      "Safety is our top priority at RH Construction USA Inc. We have strict safety protocols in place and provide regular training to our staff to ensure compliance with safety regulations and standards.",
  },
  {
    id: 5,
    question: "What maintenance services do you provide post-installation?",
    answer:
      "Yes, we can assist you with obtaining the necessary permits for your construction project. Our team is familiar with the permit process and will work closely with local authorities to ensure all requirements are met.",
  },
  {
    id: 6,
    question: "Are your installation technicians licensed and insured?",
    answer:
      "Yes, we can assist you with obtaining the necessary permits for your construction project. Our team is familiar with the permit process and will work closely with local authorities to ensure all requirements are met.",
  },
  {
    id: 7,
    question:
      "What sets your company apart from others offering pool installation services?",
    answer:
      "You can contact us by phone, by email, or through the contact form on our website. Our team is available to assist you with any further inquiries or questions you may have.",
  },
  {
    id: 8,
    question: "How can we get started with the pool installation process?",
    answer:
      "You can contact us by phone, by email, or through the contact form on our website. Our team is available to assist you with any further inquiries or questions you may have.",
  },
];

const FAQ = () => {
  return (
    <div>
      <section className="container ">
        <div className="mx-auto  xs:px-[35px] 3xl:py-[120px] lg:py-[100px] py-[60px]">
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex justify-center items-center  ">
              <Image
                alt="faq"
                src="/assets/random/faq.png"
                className=" "
                width={580}
                height={410}
              />
            </div>

            <div>
              <div>
                <div className="flex flex-col  ">
                  <HeadingIcon text={headingIconText.faq__IconText} />

                  <div>
                    <p className="text-black text-lg md:text-3xl lg:text-4xl lg:mb-8 mb-5">
                      Pool Installation Services in Toronto
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                {faqQuestionsNAns.map((ques, idx) => (
                  <div key={idx}>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-[#188B89] p-4 border-2">
                        <h6 className="text-white md:text-base xs:text-[9px] ">
                          {ques.question}
                        </h6>

                        <div className="white-icon">
                          <IoCaretDown className="white-icon" fill="white"/>
                        </div>
                      </summary>

                      <p className=" pt-3 px-4 leading-relaxed border-2 text-gray-700  md:text-base xs:text-[8px]">
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
