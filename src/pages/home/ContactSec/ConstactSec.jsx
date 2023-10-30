import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import man1 from "../../../assets/man1.jpg";
import gsap from "gsap";
import Footer from "../FooterSec/Footer";

export default function ContactSec() {
  const circle = useRef(null);
  const circle2 = useRef(null);
  const circleGetInTouch = useRef(null);
  const container = useRef(null);

  const manageMouseEnter = () => {
    gsap.to(circle.current, {
      top: "-25%",
      width: "120%",
      left: "-10%",
      duration: 0.4,
    });
  };

  const onMouseLeave = () => {
    gsap.to(circle.current, {
      top: "-150%",
      width: "140%",
      duration: 0.4,
    });
    gsap.to(circle.current, {
      top: "100%",
      widows: "100%",
      duration: 0,
      delay: 0.4,
    });
  };

  const manageMouseEnter2 = () => {
    gsap.to(circle2.current, {
      top: "-25%",
      width: "150%",
      left: "-10%",
    });
  };

  const onMouseLeave2 = () => {
    gsap.to(circle2.current, { top: "-150%", width: "100%", duration: 0.4 });
    gsap.to(circle2.current, {
      top: "100%",
      width: "100%",
      duration: 0,
      delay: 0.4,
    });
  };

  const manageMouseEnterGetInTouch = () => {
    gsap.to(circleGetInTouch.current, {
      top: "-25%",
      width: "120%",
      left: "-10%",
    });
  };

  const onMouseLeaveGetInTouch = () => {
    gsap.to(circleGetInTouch.current, {
      top: "-150%",
      width: "140%",
      duration: 0.4,
    });
    gsap.to(circleGetInTouch.current, {
      top: "100%",
      width: "100%",
      duration: 0,
      delay: 0.4,
    });
  };

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 6.5], [-0, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <>
      <motion.div
        style={{ y }}
        ref={container}
        className="flex h-[95vh] justify-center bg-dennisDark pt-40"
      >
        <div className="w-[300px] sm:w-[700px] lg:w-[800px] xl:w-[900px] 2xl:w-[1275px]">
          <div className="flex pt-8 text-[48px] text-white sm:text-[70px] lg:text-[100px] xl:w-[900px] xl:text-[115px] 2xl:text-[120px]">
            <div className="ml-0 mr-[16px] mt-3 h-12 w-12 overflow-hidden rounded-full sm:ml-[-7px] sm:mr-3 sm:mt-5 sm:h-16 sm:w-16 lg:mr-4 lg:mt-6 lg:h-24 lg:w-24 xl:mt-9">
              <img src={man1} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="">
              <div className="">
                <p>Let's get in</p>
              </div>
              <p className="ml-[-65px] mt-[-18px] sm:ml-[-73px] sm:mt-[-20px] lg:ml-[-110px] lg:mt-[-20px] xl:mt-[-35px] 2xl:mt-[-50px]">
                contact
              </p>
            </div>
          </div>
          <div className="pt-16">
            <div className="relative h-[1px] w-full bg-neutral-600">
              <motion.button
                onMouseEnter={() => {
                  manageMouseEnterGetInTouch();
                }}
                onMouseLeave={() => {
                  onMouseLeaveGetInTouch();
                }}
                style={{ x }}
                className="buttonClass absolute bottom-[-70px] right-28 overflow-hidden  rounded-full bg-dennisBlue-100 px-[23px] py-[50px] text-white transition-colors duration-300  sm:bottom-[-76px] sm:right-52 sm:px-[40px] sm:py-[66px] lg:bottom-[-101px] lg:px-[50px] lg:py-[83px] xl:px-[54px] xl:py-[89px]"
                datatype="go"
              >
                <p className="relative z-10 text-[14px] sm:text-[15px] lg:text-[18px] 2xl:text-[19px]">
                  Get in touch
                </p>
                <div
                  ref={circleGetInTouch}
                  className="absolute left-[-8%] top-[100%] h-[150%] w-[100%] rounded-[50%] bg-dennisBlue-200"
                ></div>
              </motion.button>
              <svg
                className="absolute right-0 top-[-213px]"
                width="23"
                height="23"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5_2)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M38.9456 3.59302L36.29 0.951297L4.8421 32.6871L4.77482 12.4506L0.974836 12.4632L1.06328 39.0631L27.8398 38.974L27.8842 35.1739L7.44601 35.2418L38.9456 3.59302Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_2">
                    <rect
                      width="38"
                      height="38"
                      fill="white"
                      transform="translate(39.0631 38.9367) rotate(179.809)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-x-2 gap-y-3 pt-28 sm:flex-row sm:gap-y-0">
            <button
              onMouseEnter={() => {
                manageMouseEnter();
              }}
              onMouseLeave={() => {
                onMouseLeave();
              }}
              className="relative overflow-hidden rounded-full border border-neutral-600 px-8 py-5 text-[14px] text-white duration-300  sm:py-4  sm:text-[16px] lg:px-10 lg:py-6 lg:text-[19px]"
            >
              <p className="relative z-10">dokan.mps@gmail.com</p>
              <div
                ref={circle}
                className="absolute left-[-20%]  top-[100%] h-[150%] w-[100%] rounded-[40%] bg-dennisBlue-100"
              ></div>
            </button>
            <button
              onMouseEnter={() => {
                manageMouseEnter2();
              }}
              onMouseLeave={() => {
                onMouseLeave2();
              }}
              className="relative overflow-hidden rounded-full border border-neutral-600 px-8 py-5 text-[14px] text-white duration-300  sm:py-4  sm:text-[16px] lg:px-10 lg:py-6 lg:text-[19px]"
            >
              <p className="relative z-10">+39 4 92 30 83 94</p>
              <div
                ref={circle2}
                className="absolute left-[-20%]  top-[100%] h-[150%] w-[100%] rounded-[40%] bg-dennisBlue-100"
              ></div>
            </button>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
