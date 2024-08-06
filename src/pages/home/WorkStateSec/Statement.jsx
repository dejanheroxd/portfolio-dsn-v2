import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

import { slideUp, opacity } from "./anim";
import gsap from "gsap";
import { Link } from "react-router-dom";

export default function Statement() {
  useEffect(() => {}, []);

  const circle = useRef(null);

  const manageMouseEnter = () => {
    gsap.to(circle.current, { top: "-25%", width: "150%", duration: 0.4 });
  };

  const manageMouseLeave = () => {
    gsap.to(circle.current, { top: "-150%", width: "125%", duration: 0.4 });
    gsap.to(circle.current, {
      top: "100%",
      width: "100%",
      duration: 0,
      delay: 0.4,
    });
  };

  const phrase =
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <div className="h-[70vh] text-dennisDark 2xl:h-[60vh]">
      <div className=" h-full lg:mt-[-130px] lg:flex lg:pl-32 xl:mt-0 xl:p-56 xl:pl-[215px] 2xl:pl-[295px]">
        <div
          ref={description}
          className="relative flex flex-col items-start pl-5 sm:items-center sm:pl-0 lg:flex lg:flex-row xl:items-start"
        >
          <p className="flex w-[95%] flex-wrap gap-x-[4px] pt-20 text-2xl sm:w-[80%] sm:gap-x-[9px] sm:pt-20 sm:text-[27px] lg:mr-20 lg:h-[110px] lg:w-[80%] lg:pt-0 xl:h-[280px] xl:text-[41px] 2xl:mr-16 2xl:h-[186px] 2xl:w-[890px]">
            {phrase.split(" ").map((word, index) => (
              <span
                className="relative  inline-flex overflow-hidden "
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
            className="hidden w-60 pt-12 sm:w-64 sm:pt-16 sm:text-lg lg:pt-0 lg:text-base xl:block xl:w-64 xl:pt-0 xl:text-[18px] xl:leading-7 2xl:ml-10"
            variants={opacity}
            initial="initial"
            animate={isInView ? "open" : "closed"}
          >
            My high enthusiasm for design, coding, and interaction sets me apart
            in the web development industry.
          </motion.p>
          <motion.p
            className="left-20 top-40 w-60 pt-12 sm:absolute sm:w-64 sm:pt-16 lg:left-0 lg:top-80 lg:mt-[15px] lg:text-lg xl:hidden xl:pt-0 2xl:mt-[-95px]"
            variants={opacity}
            initial="initial"
            animate={isInView ? "open" : "closed"}
          >
            The combination of my passion for design, code & interaction
            positions me in a unique place in the web design world
          </motion.p>
          <Link to="/about">
            <button
              onMouseEnter={() => {
                manageMouseEnter();
              }}
              onMouseLeave={() => {
                manageMouseLeave();
              }}
              data-scroll
              data-scroll-speed={0.18}
              className="buttonClass absolute bottom-[-130px] right-9 overflow-hidden   rounded-full bg-dennisDark px-[37px] py-[60px] text-white transition-colors duration-300  lg:bottom-[-80px] xl:bottom-[-120px] xl:px-[71px] xl:py-[94px] 2xl:bottom-[-235px]"
              datatype="go"
            >
              <button className="relative z-20">About Me</button>
              <div
                ref={circle}
                className=" absolute left-[-15%] top-[100%] h-[150%] w-[100%] rounded-[50%] bg-dennisBlue-100"
              ></div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
