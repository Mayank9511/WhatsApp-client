import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".03"
      className="w-full mt-10 py-10 sm:py-16 md:py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
    >
      <div className="text py-5 border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
        {Array(3).fill().map((_, index) => (
          <motion.h1
            key={index}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[4vw] leading-none font-['Neue Montreal'] uppercase font-semibold pb-[2vw] pr-10"
          >
            WhatsApp Assistant
          </motion.h1>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
