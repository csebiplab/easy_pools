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
        <div className="padding__all">
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="order-1 md:order-2 flex justify-center items-center ">
              <Image
                alt="faq"
                src="/assets/projects/images/qa__pool.png"
                className=" "
                width={580}
                height={410}
              />
            </div>

            <div className="order-2 md:order-1">
              <div>
                <div className=" flex flex-col  ">
                  <HeadingIcon
                    text={projectsHeadingIconText.QAPoolInstallation__IconText}
                  />

                  <div>
                    <h2 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-center md:text-left text-black pt-[8px] md:pt-[16px] pb-[16px] md:pb-[36px]">
                      Questions & Answers for Pool Installation
                    </h2>
                  </div>
                </div>
              </div>
              <div className="">
                {QAPoolInstallationQuestionsNAns.map((ques, idx) => (
                  <div key={idx}>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-primary py-3 px-5 5xl:py-[14px] 5xl:px-8 border-2">
                        <p className="text-white text-sm lg:text-sm xl:text-base 5xl:text-lg 5xl:leading-[22px] font-bold">
                          {ques.question}
                        </p>

                        <div className="white-icon">
                          <IoCaretDown className="white-icon" fill="white" />
                        </div>
                      </summary>

                      <p className="py-3 pl-4 pr-8 lg:py-4 lg:px-6 5xl:py-5 5xl:px-7  border-2 text-black text-sm lg:text-sm 5xl:text-base font-normal 5xl:leading-[30px] border-primary">
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
