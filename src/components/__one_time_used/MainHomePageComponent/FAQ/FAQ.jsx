"use client";

import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import { IoCaretDown } from "react-icons/io5";
import "./faq.css";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import { faqQuestionsNAns } from "@/utils/home.faq";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const handleOpen = (value) => setOpen(open === value ? null : value);

  return (
    <div>
      <section className="container">
        <div className="mx-auto xs:px-[35px] 3xl:py-[120px] lg:py-[100px] py-[60px]">
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex justify-center items-center">
              <Image
                alt="faq"
                src="/assets/random/faq.png"
                width={580}
                height={410}
                className=""
              />
            </div>

            <div>
              <div>
                <div className="flex flex-col">
                  <HeadingIcon text={headingIconText.faq__IconText} />

                  <div>
                    <p className="text-black text-lg md:text-3xl lg:text-4xl lg:mb-8 mb-5">
                      Pool Installation Services in Toronto
                    </p>
                  </div>
                </div>
              </div>
              <div>
                {faqQuestionsNAns?.map((ques) => (
                  <Accordion key={ques.id} open={open === ques.id}>
                    <AccordionHeader
                      onClick={() => handleOpen(ques.id)}
                      className="relative flex cursor-pointer items-center justify-between gap-1.5 bg-[#188B89] p-4 border-2"
                    >
                      <h6 className="text-white text-sm md:text-base">
                        {ques.question}
                      </h6>

                      <div className="white-icon absolute right-1">
                        <IoCaretDown
                          className={`white-icon transition-transform ${
                            open === ques.id ? "rotate-180" : ""
                          }`}
                          fill="white"
                        />
                      </div>
                    </AccordionHeader>
                    <AccordionBody className="pt-3 px-4 leading-relaxed border-2 text-gray-700 text-xs md:text-sm">
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

export default FAQ;
