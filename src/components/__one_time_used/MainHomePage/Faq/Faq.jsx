import HeadingIcon from "@/components/ui/HeadingIcon";
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
    question: "What types of pools do Easy Pools install?",
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
    question: "Do I need to obtain a permit to install a pool?",
    answer:
      "Yes, a permit is required for pool installations in Toronto. Easy Pools will guide you through the permit application process.",
  },
  {
    id: 6,
    question: "Can I customize my pool design?",
    answer:
      "Absolutely! Our contractors work with you to create a customized pool design for your outdoor space. Our contractors tailor the pool to your needs, from shape and size to special features.",
  },
  {
    id: 7,
    question: "What areas do Easy Pools serve?",
    answer:
      "Easy Pools proudly serves Toronto and the surrounding GTA areas, offering top-quality pool installation and renovation services.",
  },
  {
    id: 8,
    question: "Do you offer pool renovation or repair services?",
    answer:
      "Yes, in addition to installation, Easy Pools also offers pool renovation services. Whether you need to update an older pool or fix damaged parts, our expert team can handle everything for repair.",
  },
  {
    id: 9,
    question: "What pool features can I add during the installation period?",
    answer:
      "Easy Pools offers various custom features to enhance your pool, including waterfalls, jets, LED lighting, heating systems, automated covers, and more. You can add any of these or more to suit your pool style and requirements.",
  },
  {
    id: 10,
    question: "What will be your safety during the installation process?",
    answer:
      "At Easy Pools, safety is our top priority. Our contractors follow all necessary safety protocols during construction, ensuring the worksite is secure. After installation, we also provide safety features such as fencing, pool covers, and alarms to ensure the safety of your family and pets.",
  },
  {
    id: 11,
    question: "Are your installation technicians licensed and insured?",
    answer:
      "Yes, our installation technicians are highly trained, licensed, and insured professionals with extensive pool installation experience.",
  },
  {
    id: 12,
    question: "What sets your company apart from others offering pool installation services?",
    answer:
      "Easy Pools takes pride in our commitment to customer satisfaction, attention to detail, and industry expertise. Focusing on quality craftsmanship and personalized service, we strive to exceed our clients's expectations at every step.",
  },
  {
    id: 13,
    question: "Does Easy Pools offer eco-friendly pool options?",
    answer:
      "Easy Pools provides eco-friendly pool solutions, including energy-efficient pumps, solar heating systems, and saltwater pools. We're committed to providing sustainable and environmentally conscious options for your swimming pool.",
  },
  {
    id: 14,
    question: "Can you install pools in small or uniquely shaped backyards? ",
    answer:
      "Absolutely! We specialize in custom pool designs, which means we can adapt the installation to fit small or unusually shaped spaces. Our design team works with you to maximize your space and ensure the pool complements your backyard layout.",
  },
  {
    id: 15,
    question: "Do you offer any seasonal pool services?",
    answer:
      "Yes, we provide seasonal services, including pool opening and closing, winterizing, and spring cleaning. These services help maintain your pool in excellent condition throughout the year, especially in Toronto's variable climate.",
  },
  {
    id: 16,
    question: "How can I contact Easy Pools for more information? ",
    answer:
      "You can reach us through our website, by phone, or by visiting our office in Toronto. Our team is available to answer any questions you have and schedule a free consultation to discuss your pool installation needs.",
  },
  {
    id: 17,
    question: "What kind of drainage system do I need for my pool?",
    answer:
      "Proper drainage is crucial for maintaining the integrity of your pool and surrounding area. At Easy Pools, we ensure that your pool installation includes a well-designed drainage system that prevents water buildup and protects your property from erosion and water damage.",
  },
  {
    id: 18,
    question: "Can I heat my pool in Toronto year-round?",
    answer:
      "We offer various heating options, including gas, electric, and solar-powered heaters, to keep your pool warm throughout the year. We'll help you choose the most energy-efficient solution for your needs.",
  },
  {
    id: 19,
    question: "How does your company handle landscaping around the pool area?",
    answer:
      "In addition to pool installation, we offer landscaping services to enhance your outdoor space. Whether you want lush greenery, stone walkways, or custom decking, our team can design and install landscaping features that complement your pool and backyard.",
  },
  {
    id: 20,
    question: "What should I consider before installing a pool?",
    answer:
      "Before installation, it's important to consider factors such as the size of your yard, local regulations, your budget, and long-term maintenance. Our team will help you navigate these considerations during the initial consultation to ensure a smooth process.",
  },
  {
    id: 21,
    question: "What happens if my pool needs repairs after installation?",
    answer:
      "If your pool requires repairs after installation, our team at Easy Pools offers prompt and professional repair services. Whether it's an issue with the pool structure, filtration system, or other equipment, we're here to help resolve it quickly and efficiently.",
  },
  {
    id: 22,
    question: "Is it necessary to prepare my backyard before installation?",
    answer:
      "You don't need to worry about site preparation—we handle everything from excavation to clearing the area for the pool installation. However, we will discuss any pre-installation needs during the consultation to ensure a smooth process.",
  },
  
];

const Faq = () => {
  return (
    <div className="bg_swimmingPool padding__top ">
      <section className="container">
        <div className="flex flex-col items-center">
          <HeadingIcon text={headingIconText.faq__IconText} />

          <div>
            <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center">
              Frequently Asked Questions (FAQ): Swimming Pool Installation
              Services in Toronto
            </h2>
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

                <p className="py-3 pl-2 pr-8 lg:py-4 lg:px-6 5xl:py-5 5xl:px-7 border-2 text-black text-sm lg:text-sm 5xl:text-base font-normal 5xl:leading-[30px]">
                  {ques.answer}
                </p>
              </details>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Faq;
