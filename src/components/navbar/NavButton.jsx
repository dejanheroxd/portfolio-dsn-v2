import { motion } from "framer-motion";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function NavButton({
  navBtnCircleClicked,
  isNavActive,
  hasScrolled100vh,
  toggleNav,
  handleNavBtnCircleClicked,
}) {
  useEffect(() => {}, []);

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

  const circle = useRef(null);

  const wholeBtn = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
      transition: {
        duration: 0.12,
      },
    },
    exit: {
      scale: 0,
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
  };
  return (
    <motion.button
      onMouseEnter={() => {
        manageMouseEnter();
      }}
      onMouseLeave={() => {
        manageMouseLeave();
      }}
      variants={wholeBtn}
      initial="initial"
      animate="animate"
      exit="exit"
      onClick={() => {
        toggleNav();
        handleNavBtnCircleClicked();
      }}
      className={`${
        isNavActive ? "bg-dennisBlue-100" : "bg-dennisDark "
      } fixed right-[14px] top-[14px] z-50 flex h-[67px] w-[67px] scale-0 items-center justify-center overflow-hidden rounded-full border border-neutral-700 duration-300  sm:right-8 sm:top-8 xl:h-[95px] xl:w-[95px]`}
    >
      {(navBtnCircleClicked || isNavActive || hasScrolled100vh) && (
        <>
          <div className="relative z-20">
            <span
              className={`${
                isNavActive
                  ? "z-50 mt-[2px] -rotate-45 bg-white transition"
                  : ""
              }bg-white absolute left-[-12px] top-[-3px] block h-[1px] w-[25px] transition-all delay-100 duration-200 sm:left-[-13px] sm:w-[27px]`}
            ></span>
            <span
              className={`${
                isNavActive
                  ? "z-50 mt-[-3px] rotate-45 bg-white transition"
                  : ""
              }bg-white absolute left-[-12px] top-[2px] block h-[1px]  w-[25px] transition-all delay-100 duration-200 sm:left-[-13px] sm:w-[27px]`}
            ></span>
          </div>
          <div
            ref={circle}
            className="absolute left-[-15%] top-[100%] h-[150%] w-[100%] rounded-[50%] bg-dennisBlue-100"
          ></div>
        </>
      )}
    </motion.button>
  );
}
