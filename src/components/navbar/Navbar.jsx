import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuSlide, slide } from "./navAnim";
import Bend from "./Bend";
import gsap from "gsap";
import NavigationLink from "./NavigationLink";
import NavButton from "./NavButton";

export default function Navbar() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [hasScrolled100vh, setHasScrolled100vh] = useState(false);
  const [navBtnCircleClicked, setNavBtnCircleClicked] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= 200) {
        setHasScrolled100vh(true);
      } else {
        setHasScrolled100vh(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleNavBtnCircleClicked() {
    setNavBtnCircleClicked((prev) => !prev);
  }

  function activateNav() {
    setIsNavActive(true);
  }

  function deactivateNav() {
    setIsNavActive(false);
  }

  function toggleNav() {
    setIsNavActive((prev) => !prev);
  }

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

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { name: "Awwwards" },
    { name: "Instagram" },
    { name: "Twitter" },
    { name: "LinkedIn" },
  ];

  return (
    <nav className="absolute left-0 right-0 top-0 z-30 flex h-24 items-center px-6 sm:h-[108px] sm:justify-between sm:px-12 sm:text-xl">
      <Link
        className={`${
          location.pathname === "/" || location.pathname === "/contact"
            ? "text-white"
            : "text-dennisDark"
        }`}
        to="/"
      >
        <span>©</span> Code by Dejan
      </Link>
      {/*------------------------- Side Navigation On Slide ------------------------ */}
      <AnimatePresence>
        {isNavActive && (
          <motion.ul
            variants={menuSlide}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed bottom-0 right-0 top-0 z-40 flex h-full w-full gap-x-9 bg-dennisDark sm:w-[645px]"
          >
            <div className="flex h-full w-full flex-col justify-between pb-10 pl-5 pr-10 pt-28 sm:p-36 ">
              <div>
                <p className="w-80 border-b border-neutral-600 pb-8 text-[11px] text-neutral-400 sm:w-full sm:text-[12px]">
                  NAVIGATION
                </p>
              </div>
              {/*------------------------- Side Navigation Links ------------------------ */}
              <motion.div
                variants={slide}
                initial="initial"
                animate="animate"
                exit="exit"
                className="h-[610px] pt-9 text-5xl  sm:text-[65px] "
              >
                <motion.div
                  initial="initial"
                  open="open"
                  className="flex flex-col gap-y-5 text-white sm:gap-y-7"
                >
                  {navLinks.map((link) => (
                    <li
                      onClick={() => deactivateNav()}
                      key={link.name}
                      className="group/item relative"
                    >
                      <span
                        className={`${
                          location.pathname === link.path
                            ? "visible"
                            : "invisible"
                        } absolute left-[-40px] top-8 group-hover/item:visible`}
                      >
                        <span
                          className="
                        block h-3 w-3 rounded-full bg-white"
                        ></span>
                      </span>
                      <Link to={link.path}> {link.name}</Link>
                    </li>
                  ))}
                </motion.div>
              </motion.div>
              <div className="w-80 border-t border-neutral-600 pt-6 text-white sm:mb-[-40px] sm:w-full lg:border-none">
                <p className="pb-3 text-[11px] text-neutral-400 sm:text-[12px]">
                  SOCIALS
                </p>
                <div className="flex gap-x-5 xl:gap-x-6">
                  {socialLinks.map((link) => (
                    <a key={link.name} href="">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <Bend />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
              exit={{ opacity: 0, transition: { duration: 1 } }}
              className="absolute left-[-1300px] top-0 h-full w-[1300px] origin-right bg-gradient-to-l from-black/30"
            ></motion.div>
          </motion.ul>
        )}
      </AnimatePresence>
      {/*------------------------- Navbar Links ------------------------ */}
      <ul className="z-30 hidden gap-x-9 sm:flex">
        <NavigationLink name={"Home"} leftMargin={"left-[26px]"} path={""} />
        <NavigationLink
          name={"About"}
          leftMargin={"left-[25px]"}
          path={"about"}
        />
        <NavigationLink
          name={"Contact"}
          leftMargin={"left-[34px]"}
          path={"contact"}
        />
      </ul>
      {/*------------------------- Button Nav ------------------------ */}
      <AnimatePresence>
        {(isNavActive || hasScrolled100vh) && (
          <NavButton
            isNavActive={isNavActive}
            hasScrolled100vh={hasScrolled100vh}
            setIsNavActive={setIsNavActive}
            toggleNav={toggleNav}
            handleNavBtnCircleClicked={handleNavBtnCircleClicked}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!isNavActive && (
          <motion.button
            initial={{ opacity: 1 }}
            animate={{ opacity: 1, transition: { duration: 0.1 } }}
            exit={{ opacity: 1 }}
            onClick={() => activateNav()}
            className="absolute right-6 z-30 sm:hidden"
          >
            <span className="absolute left-[-13px] top-[8px]">
              <span className="block h-[6px] w-[6px] rounded-full bg-white"></span>
            </span>
            <p
              className={`${
                location.pathname === "/" || location.pathname === "/contact"
                  ? "text-white"
                  : "text-dennisDark"
              }`}
            >
              Menu
            </p>
          </motion.button>
        )}
      </AnimatePresence>
    </nav>
  );
}
