import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function AboutUs() {
  const handleScroll = () => {
    event.preventDefault();
    const section = document.getElementById("getStartedSection");
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-2 md:pt-20"
    >
      <div id="aboutUsSection" className="my-2 pt-20 px-20 md:my-30 lg:my-30">
        {["Your Personal", "WhatsApp", "Assistant"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex items-end">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] relative -top-[0.4vw] bg-cover bg-[url('assets/wa.jpg')]"
                  >
                    {" "}
                  </motion.div>
                )}
                <h1 className="uppercase text-[7.7vw] leading-[7.5vw] tracking-tighter font-medium font-['Founders Grotesk']">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-800 my-10 md:mt-10 lg:mt-10 flex flex-col md:flex-row justify-between items-center px-6 md:px-10">
        <div className="w-full mt-10 md:pt-0 md:w-3/5 px-10 md:px-10 text-sm md:text-base ">
          This application lets you create your very own personalized WhatsApp
          Assistant. As it can automatically respond to messages for you. So, if
          you're busy and can't reply, your assistant could send something like
          "I'm tied up at the moment, but I'll get back to you soon!" Also, if
          someone asks a general question like "How do I make pasta?" your
          assistant can give an AI-generated answer using up-to-date info. Plus,
          you can totally customize your assistant's personality you could make
          it funny, or make it talk like Tony Stark!
        </div>
        <div className="start py-10 mt-5 md:mt-0 flex items-center gap-3 md:gap-5">
          <div className="px-4 py-2 border-[1px] border-zinc-400 rounded-full font-light text-sm md:text-md lg:text-lg uppercase">
            Automate your WhatsApp Messages
          </div>
          <button
            onClick={handleScroll}
            className="w-8 h-8 md:w-10 md:h-10 border-[2px] border-zinc-500 rounded-full flex items-center justify-center"
          >
            <span className="rotate-[180deg]">
              <FaArrowUpLong />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
