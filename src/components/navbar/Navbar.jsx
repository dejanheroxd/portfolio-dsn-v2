import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { menuSlide, slide } from "./navAnim";

export default function Navbar() {
  const [isNavActive, setIsNavActive] = useState(false);
  console.log(isNavActive);

  useEffect(() => {
    const isLargeScreen = window.matchMedia("(min-width: 640px");

    const handleResize = () => {
      if (isLargeScreen.matches) {
        activateNav();
      } else {
        deactivateNav();
      }
    };

    handleResize();

    isLargeScreen.addEventListener("change", handleResize);

    return () => {
      isLargeScreen.removeEventListener("change", handleResize);
    };
  }, []);

  function activateNav() {
    setIsNavActive(true);
  }

  function deactivateNav() {
    setIsNavActive(false);
  }

  const btnVars1 = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: 45,
      y: 2,
      transition: { duration: 0.4 },
    },
    exit: { rotate: 0, y: 0 },
    transition: { duration: 0.8 },
  };

  const btnVars2 = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: -45,
      y: -2,
      transition: { duration: 0.4 },
    },
    exit: { rotate: 0, y: 0 },
    transition: { duration: 0.8 },
  };

  const wholeBtn = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      scale: 0,
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <nav className="text-white  h-24 px-6 absolute top-0 left-0 right-0 flex items-center sm:justify-between sm:px-8 sm:h-20">
      <Link to="/">
        <span>©</span> Code by Dennis
      </Link>
      {/*------------------------- Navigation On Slide ------------------------ */}
      <AnimatePresence>
        {isNavActive && (
          <motion.ul
            variants={menuSlide}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex h-full w-full gap-x-9 fixed top-0 sm:w-[645px] bottom-0 right-0 z-40 bg-dennisDark"
          >
            <div className="h-full pl-5 pt-28 pb-10 pr-10 sm:p-36 w-full flex flex-col justify-between ">
              <div>
                <p className="border-b w-80 sm:w-full border-neutral-600 pb-8 text-[11px] sm:text-[12px] text-neutral-400">
                  NAVIGATION
                </p>
              </div>
              {/*------------------------- Navigation Links ------------------------ */}
              <motion.div
                variants={slide}
                initial="initial"
                animate="animate"
                exit="exit"
                className="h-[610px] text-5xl sm:text-[65px]  pt-9 "
              >
                <motion.div
                  initial="initial"
                  open="open"
                  className="gap-y-5 sm:gap-y-7 flex flex-col"
                >
                  <li className="relative group/item ">
                    <span className="absolute invisible  group-hover/item:visible left-[-40px] top-8">
                      <span className="bg-white w-3 h-3 rounded-full block"></span>
                    </span>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="relative group/item ">
                    <span className="absolute invisible group-hover/item:visible left-[-40px] top-8">
                      <span className="bg-white w-3 h-3 rounded-full block"></span>
                    </span>
                    <Link to="about">About</Link>
                  </li>
                  <li className="relative group/item ">
                    <span className="absolute invisible group-hover/item:visible left-[-40px] top-8">
                      <span className="bg-white w-3 h-3 rounded-full block"></span>
                    </span>
                    <Link to="contact">Contact</Link>
                  </li>
                </motion.div>
              </motion.div>
              <div className="sm:mb-[-40px] border-t w-80 sm:w-full border-neutral-600 lg:border-none pt-6">
                <p className="text-[11px] sm:text-[12px] text-neutral-400 pb-3">
                  SOCIALS
                </p>
                <div className="flex gap-x-5 xl:gap-x-6">
                  <a href="">
                    <p>Awwwards</p>
                  </a>
                  <a href="">
                    <p>Instagram</p>
                  </a>
                  <a href="">
                    <p>Twitter</p>
                  </a>
                  <a href="">
                    <p>LinkedIn</p>
                  </a>
                </div>
              </div>
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
      {/*------------------------- Navigation Normal ------------------------ */}
      <ul className="gap-x-9 z-30 hidden sm:flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
      {/*------------------------- Button Nav ------------------------ */}
      <AnimatePresence>
        {isNavActive && (
          <motion.button
            variants={wholeBtn}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={() => deactivateNav()}
            className={`${
              isNavActive ? "bg-dennisBlue-100" : "bg-dennisDark"
            } rounded-full fixed top-[14px] right-[14px] sm:top-8 sm:right-8 flex justify-center items-center w-[67px] h-[67px] xl:w-[95px] xl:h-[95px] z-50`}
          >
            <div className="relative">
              <motion.span
                variants={btnVars1}
                initial="initial"
                animate="animate"
                exit="exit"
                className=" bg-white h-[1px] w-[25px] sm:w-[27px] block absolute top-[-2px] left-[-13px]"
              ></motion.span>
              <motion.span
                variants={btnVars2}
                initial="initial"
                animate="animate"
                exit="exit"
                className=" bg-white h-[1px] w-[25px] sm:w-[27px] block absolute top-[2px] left-[-13px]"
              ></motion.span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
      {!isNavActive && (
        <button
          onClick={() => activateNav()}
          className="absolute right-6 z-30 sm:hidden"
        >
          Menu
        </button>
      )}
    </nav>
  );
}
