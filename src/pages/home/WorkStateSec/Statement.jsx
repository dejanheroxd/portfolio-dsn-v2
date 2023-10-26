import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { slideUp, opacity } from "./anim";

export default function Statement() {
  const phrase =
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div className="h-[70vh] text-dennisDark">
      <div className=" h-full lg:flex lg:p-32 xl:p-56 xl:pl-[305px]">
        <div
          ref={description}
          className="lg:flex relative flex flex-col lg:flex-row sm:items-center xl:items-start items-start pl-5 sm:pl-0"
        >
          <p className="w-[95%] sm:w-[80%] lg:w-[100%] pt-20 sm:pt-20 lg:pt-0 text-2xl sm:text-[27px] xl:text-[41px] 2xl:w-[890px] gap-x-[4px] sm:gap-x-[9px] lg:h-[150px] xl:h-[180px] flex flex-wrap lg:mr-20">
            {phrase.split(" ").map((word, index) => (
              <span
                className="overflow-hidden  inline-flex relative "
                key={index}
              >
                <motion.span
                  variants={slideUp}
                  custom={index}
                  initial="initial"
                  animate={isInView ? "open" : "closed"}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </p>
          <motion.p
            className="w-60 sm:w-64 xl:w-64 sm:text-lg lg:text-base pt-12 lg:pt-0 sm:pt-16 xl:pt-0"
            variants={opacity}
            initial="initial"
            animate={isInView ? "open" : "closed"}
          >
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world
          </motion.p>
          <button
            data-scroll
            data-scroll-speed={0.22}
            className="interactable buttonClass py-[60px] px-[37px] rounded-full right-9 hover:bg-dennisBlue-100 transition-colors duration-300 bottom-[-130px] lg:bottom-[-80px] xl:bottom-[-120px] text-white bg-dennisDark absolute xl:py-[94px] xl:px-[71px]"
            datatype="go"
          >
            About Me
          </button>
        </div>
      </div>
    </div>
  );
}
