import React, { useRef } from "react";
import Footer from "../home/FooterSec/Footer";
import man1 from "../../assets/man1.jpg";
import { useForm, ValidationError } from "@formspree/react";
import Transition from "../../components/navbar/Transition";
import gsap from "gsap";

export default function Contact() {
  const [state, handleSubmit] = useForm("xvojzoly");
  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }
  const circle = useRef(null);

  function manageMouseEnter() {
    gsap.to(circle.current, { top: "-25%", width: "150%", duration: 0.4 });
  }

  function manageMouseLeave() {
    gsap.to(circle.current, { top: "-150%", width: "125%", duration: 0.4 });
    gsap.to(circle.current, {
      top: "100%",
      width: "100%",
      duration: 0,
      delay: 0.4,
    });
  }

  return (
    <Transition page={"Contact"}>
      <>
        <div className="h-[195vh] justify-center bg-dennisDark pt-[109px] lg:h-[155vh]">
          <div>
            <div className="sm:flex sm:justify-center">
              <div className="w-[350px] pb-28 sm:w-[500px] md:w-[550px] lg:w-[600px] xl:w-[650px] 2xl:w-[1000px]">
                <p className="pl-5 text-[48px] text-white sm:text-[70px] lg:pl-0 lg:text-[100px] xl:pb-36 xl:text-[115px] 2xl:text-[120px] 2xl:leading-[130px]">
                  Let's get in contact
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col items-center pt-10 sm:items-start"
                >
                  <div className="flex w-[315px] flex-col border-b border-t border-neutral-600 py-8 md:w-[400px] lg:w-[500px] xl:w-[450px] xl:py-14 2xl:w-[850px]">
                    <div className="flex gap-x-3 xl:gap-x-10">
                      <p className="pt-[2px] text-[12px] text-dennisGray xl:text-[16px]">
                        01
                      </p>
                      <label
                        className="pb-3 text-lg text-white xl:text-2xl"
                        htmlFor="name"
                      >
                        What's your name?
                      </label>
                    </div>
                    <input
                      className="bg-dennisDark pl-6 text-white placeholder:text-xl placeholder:text-dennisGray focus:outline-none xl:pl-[60px]"
                      id="name"
                      placeholder="John Doe *"
                      type="firstName"
                      name="firstName"
                    />
                    <ValidationError
                      prefix="firstName"
                      field="firstName"
                      errors={state.errors}
                    />
                  </div>
                  <div className="flex w-[315px]  flex-col border-b border-neutral-600 py-8 md:w-[400px]  lg:w-[500px] xl:w-[450px] xl:py-14 2xl:w-[850px]">
                    <div className="flex gap-x-3 xl:gap-x-10">
                      <p className="pt-[2px] text-[12px] text-dennisGray xl:text-[16px]">
                        02
                      </p>
                      <label
                        className="pb-3 text-lg text-white xl:text-2xl"
                        htmlFor="email"
                      >
                        What's your email?
                      </label>
                    </div>
                    <input
                      className="bg-dennisDark pl-6 text-white placeholder:text-xl placeholder:text-dennisGray focus:outline-none xl:pl-[60px]"
                      id="email"
                      placeholder="john@doe.com *"
                      type="email"
                      name="email"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                  <div className="relative flex w-[315px] flex-col border-b border-neutral-600 py-8 md:w-[400px]  lg:w-[500px] xl:w-[450px] xl:py-14 2xl:w-[850px]">
                    <div className="flex gap-x-3 xl:gap-x-10">
                      <p className="pt-[2px] text-[12px] text-dennisGray xl:text-[16px]">
                        03
                      </p>
                      <label
                        className="pb-3 text-lg text-white lg:text-2xl"
                        htmlFor="message"
                      >
                        Your message
                      </label>
                    </div>
                    <textarea
                      className="h-56 bg-dennisDark pl-6 text-white placeholder:text-xl placeholder:text-dennisGray focus:outline-none xl:pl-[60px]"
                      id="message"
                      placeholder="Hello, we... *"
                      name="message"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                    <button
                      onMouseEnter={() => manageMouseEnter()}
                      onMouseLeave={() => manageMouseLeave()}
                      className="absolute bottom-[-72px] right-4 h-36 w-36 overflow-hidden rounded-full bg-dennisBlue-100 text-white xl:bottom-[-104px]  xl:h-52 xl:w-52"
                      type="submit"
                      disabled={state.submitting}
                    >
                      <p className="relative z-10 xl:text-[18px]">Send it!</p>
                      <div
                        ref={circle}
                        className="absolute left-[-15%] top-[100%] h-[150%] w-[100%] rounded-[50%] bg-dennisBlue-200"
                      ></div>
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex flex-col justify-center gap-y-6 pl-5 xl:h-[730px] xl:gap-y-10">
                <div className="ml-0 mr-[16px] mt-3 h-12 w-12 overflow-hidden rounded-full sm:ml-[-7px] sm:mr-3 sm:mt-5 sm:h-16 sm:w-16 lg:mr-4 lg:mt-6 lg:h-24 lg:w-24 xl:mt-9 xl:h-32 xl:w-32">
                  <img
                    src={man1}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-y-2 text-white xl:pb-6">
                  <p className="text-[10px] font-semibold text-dennisGray xl:text-[12px]">
                    CONTACT DETAILS
                  </p>
                  <p className="xl:text-xl">info.tgd@gmail.com</p>
                  <p className="xl:text-xl">+20 9 29 43 75 30</p>
                </div>
                <div className="flex flex-col gap-y-2 text-white">
                  <p className="text-[10px] font-semibold text-dennisGray xl:text-[12px]">
                    SOCIALS
                  </p>
                  <a href="" className="group/socialLink xl:text-xl">
                    <p>Awwwards</p>
                    <span className="invisible absolute group-hover/socialLink:visible">
                      <span className="block h-[1px] w-[97px] bg-white"></span>
                    </span>
                  </a>
                  <a href="" className="group/socialLink xl:text-xl">
                    <p>Instagram</p>
                    <span className="invisible absolute group-hover/socialLink:visible">
                      <span className="block h-[1px] w-[90px] bg-white"></span>
                    </span>
                  </a>
                  <a href="" className="group/socialLink xl:text-xl">
                    <p>Twitter</p>
                    <span className="invisible absolute group-hover/socialLink:visible">
                      <span className="block h-[1px] w-[62px] bg-white"></span>
                    </span>
                  </a>
                  <a href="" className="group/socialLink xl:text-xl">
                    <p>LinkedIn</p>
                    <span className="invisible absolute group-hover/socialLink:visible">
                      <span className="block h-[1px] w-[75px] bg-white"></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </Transition>
  );
}
