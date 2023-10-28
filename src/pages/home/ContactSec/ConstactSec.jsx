import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import man1 from "../../../assets/man1.jpg";

export default function ContactSec() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 6.5], [-0, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div
      style={{ y }}
      ref={container}
      className="h-[999px] bg-dennisDark flex justify-center pt-40"
    >
      <div className="w-[1280px]">
        <div className="text-[120px] text-white w-[900px] flex pt-8">
          <div className="rounded-full overflow-hidden w-24 h-24 mt-10 mr-4">
            <img src={man1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="">
            <div className="">
              <p>Let's get in</p>
            </div>
            <p className="ml-[-118px] mt-[-50px]">contact</p>
          </div>
        </div>
        <div className="pt-16">
          <div className="w-full h-[1px] bg-neutral-600 relative">
            <motion.button
              style={{ x }}
              className=" buttonClass py-[60px] px-[37px] rounded-full right-52 bg-dennisBlue-100 hover:bg-dennisBlue-200 duration-300 transition-colors duration-300  2xl:bottom-[-101px] text-white  absolute xl:py-[89px] xl:px-[56px]"
              datatype="go"
            >
              <p className="text-[18px]">Get in touch</p>
            </motion.button>
            <svg
              className="absolute top-[-213px] right-0"
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
        <div className="pt-28 flex gap-x-3">
          <button className="border px-10 py-6 hover:bg-dennisBlue-100 duration-300 hover:border-dennisBlue-100 rounded-full text-white text-[19px] border-neutral-600">
            dokan.mps@gmail.com
          </button>
          <button className="border px-10 py-6 hover:bg-dennisBlue-100 duration-300 hover:border-dennisBlue-100 rounded-full text-white text-[19px] border-neutral-600">
            +39 4 92 30 84 93
          </button>
        </div>
      </div>
    </motion.div>
  );
}
