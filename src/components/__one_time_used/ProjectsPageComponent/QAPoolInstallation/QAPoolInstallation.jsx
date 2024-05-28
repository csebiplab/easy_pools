// import QAPoolInstallationImg from "../../../../../../public/assets/random/QAPoolInstallation.png";
import HeadingIcon from "@/components/ui/HeadingIcon";
import Image from "next/image";
import { IoCaretDown } from "react-icons/io5";
import "./QAPoolInstallation.css";
import { projectsHeadingIconText } from "@/utils/projects/heading__text";

const QAPoolInstallationQuestionsNAns = [
  {
    id: 1,
    question: "What type of pool are you interested in?",
    answer:
      "Options might include an inground pool, above-ground pool, fiberglass pool, vinyl-lined pool, or concrete pool.",
  },
  {
    id: 2,
    question: "What size of the pool are you considering?",
    answer:
      "Factors to consider include available space, intended use, and budget.",
  },
  {
    id: 3,
    question: "What is your budget for the pool installation?",
    answer:
      "This will help determine what options are feasible and allow for appropriate planning.",
  },
  {
    id: 4,
    question: "What permits are required for pool installation in your area?",
    answer:
      "Local regulations may dictate the need for permits or inspections before, during, or after installation.",
  },
  {
    id: 5,
    question: "What is the timeline for the installation process?",
    answer:
      "Understanding how long the installation will take can help with planning and coordination.",
  },
  {
    id: 6,
    question: "What maintenance will be required for the pool?",
    answer:
      "Knowing the ongoing maintenance needs can help with budgeting and planning for the future.",
  },
  {
    id: 7,
    question:
      "Are there any safety features you want to include with the pool?",
    answer:
      "This might include fencing, alarms, or pool covers to enhance safety.",
  },
  {
    id: 8,
    question:
      "What landscaping or additional features do you want around the pool?",
    answer:
      "Consideration of features like decking, landscaping, lighting, or seating areas can enhance the overall pool area.",
  },
  {
    id: 9,
    question: "Can the pool accommodate any future additions or modifications?",
    answer:
      "Thinking about future needs or desires, such as adding a hot tub or upgrading equipment, can inform decisions during the installation process.",
  },
];

const QAPoolInstallation = () => {
  return (
    <div className="bg__colorQA">
      <section className="container ">
        <div className="mx-auto  xs:px-[35px] 3xl:py-[120px] lg:py-[100px] py-[60px]">
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 flex justify-center items-center ">
              <Image
                alt="faq"
                src="/assets/projects/images/qa__pool.png"
                className=" "
                width={580}
                height={410}
              />
            </div>

            <div>
              <div>
                <div className="order-1 flex flex-col  ">
                  <HeadingIcon
                    text={projectsHeadingIconText.QAPoolInstallation__IconText}
                  />

                  <div>
                    <p className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center md:text-left text-black pt-[8px] md:pt-[16px] pb-[16px] md:pb-[36px]">
                      Questions & Answers for Pool Installation
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                {QAPoolInstallationQuestionsNAns.map((ques, idx) => (
                  <div key={idx}>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-[#188B89] p-4 border-2">
                        <h6 className="text-white md:text-base xs:text-[9px] ">
                          {ques.question}
                        </h6>

                        <div className="white-icon">
                          <IoCaretDown className="white-icon" fill="white" />
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

export default QAPoolInstallation;
