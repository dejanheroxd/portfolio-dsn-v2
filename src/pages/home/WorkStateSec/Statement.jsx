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
      <div className=" h-full lg:flex lg:p-32 lg:mt-[-130px] xl:mt-0 xl:p-56 xl:pl-[305px]">
        <div
          ref={description}
          className="lg:flex relative flex flex-col lg:flex-row sm:items-center xl:items-start items-start pl-5 sm:pl-0"
        >
          <p className="w-[95%] sm:w-[80%] lg:w-[80%] pt-20 sm:pt-20 lg:pt-0 text-2xl sm:text-[27px] xl:text-[41px] 2xl:w-[890px] gap-x-[4px] sm:gap-x-[9px] lg:h-[110px] xl:h-[280px] 2xl:h-[186px] flex flex-wrap lg:mr-20 2xl:mr-16">
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
            className="w-60 hidden xl:block sm:w-64 xl:w-64 sm:text-lg lg:text-base xl:text-[18px] xl:leading-7 pt-12 lg:pt-0 sm:pt-16 xl:pt-0"
            variants={opacity}
            initial="initial"
            animate={isInView ? "open" : "closed"}
          >
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world
          </motion.p>
          <motion.p
            className="w-60 lg:mt-[-95px] sm:absolute left-20 top-40 lg:top-80 lg:left-0 sm:w-64 xl:hidden lg:text-lg pt-12 sm:pt-16 xl:pt-0"
            variants={opacity}
            initial="initial"
            animate={isInView ? "open" : "closed"}
          >
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world
          </motion.p>
          <button
            data-scroll
            data-scroll-speed={0.18}
            className=" buttonClass py-[60px] px-[37px] rounded-full right-9 hover:bg-dennisBlue-100 transition-colors duration-300 bottom-[-130px] lg:bottom-[-80px] xl:bottom-[-120px] 2xl:bottom-[-135px] text-white bg-dennisDark absolute xl:py-[94px] xl:px-[71px]"
            datatype="go"
          >
            About Me
          </button>
        </div>
      </div>
    </div>
  );
}
