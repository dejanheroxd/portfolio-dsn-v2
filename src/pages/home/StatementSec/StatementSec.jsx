import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { slideUp, opacity } from "./anim";

export default function StatementSec() {
  const phrase =
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div className="h-[70vh] text-dennisDark">
      <div className=" h-full flex p-56 pl-[305px]">
        <div ref={description} className="flex relative">
          <p className="text-[45px] w-[890px] gap-x-[9px] h-48 flex flex-wrap mr-20">
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
            className=" w-64 text-lg pt-2"
            variants={opacity}
            initial="initial"
            animate={isInView ? "open" : "closed"}
          >
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world
          </motion.p>
          <button
            data-scroll
            data-scroll-speed={0.1}
            className="rounded-full right-9 bottom-[-244px] text-white bg-dennisDark absolute py-[94px] px-[71px]"
          >
            About Me
          </button>
        </div>
      </div>
    </div>
  );
}
