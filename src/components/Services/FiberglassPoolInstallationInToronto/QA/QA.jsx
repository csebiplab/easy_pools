"use client";

import HeadingIcon from "@/components/ui/HeadingIcon";
import Image from "next/image";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IoCaretDown } from "react-icons/io5";
import "./QA.css";
import { headingIconText } from "@/utils/heading-text";
import { QAPoolInstallationQuestionsNAns } from "@/utils/fiberglassintoronto.faq";
import { useState } from "react";

const QA = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="bg__fiberglassPage common__padding__top">
      <section className="full__section_l_p ">
        <div className="">
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="order-1 md:order-2 flex justify-end items-center pr-3 md:pr-0">
              <Image
                alt="faq"
                src="/assets/fiberglass/qa.png"
                width={893}
                height={810}
                className="h-[503px] md:h-[810px]"
              />
            </div>

            <div>
              <div className="order-2 md:order-1 flex flex-col">
                <HeadingIcon text={headingIconText.qnda__inFiberglassText} />

                <div>
                  <h2 className="text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] 3xl:text-3xl 4xl:text-[33px] 5xl:text-4xl font-normal text-left text-black pt-[8px] md:pt-[16px] pb-[16px] md:pb-[36px]">
                    Questions & Answers for Pool Installation
                  </h2>
                </div>
              </div>
              <div className="pr-3 md:pr-0">
                {QAPoolInstallationQuestionsNAns.map((ques) => (
                  <Accordion key={ques?.id} open={open === ques?.id}>
                    <AccordionHeader
                      onClick={() => handleOpen(ques?.id)}
                      className="flex cursor-pointer items-center justify-between gap-1.5 bg-[#188B89] py-3 px-5 5xl:py-[14px] 5xl:px-8 border-2"
                    >
                      <p className="text-white text-sm lg:text-sm xl:text-base 5xl:text-lg 5xl:leading-[22px] font-bold">
                        {ques.question}
                      </p>

                      <div className="white-icon absolute right-1">
                        <IoCaretDown
                          className={`white-icon transition-transform ${
                            open === ques.id ? "rotate-180" : ""
                          }`}
                          fill="white"
                        />
                      </div>
                    </AccordionHeader>
                    <AccordionBody className="py-3 pl-4 pr-8 lg:py-4 lg:px-6 5xl:py-5 5xl:px-7 border-2 text-black text-sm lg:text-sm 5xl:text-base font-normal 5xl:leading-[30px]">
                      {ques.answer}
                    </AccordionBody>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QA;
