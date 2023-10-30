import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../../../assets/Animation.json";

export default function LocationWork() {
  const worlRef = useRef();

  useEffect(() => {
    worlRef.current.setSpeed(0.55);
  }, []);

  return (
    <div className="left-0 right-0 top-[39%] flex h-36 items-center justify-between sm:absolute">
      <div className="flex h-[110px] w-[280px] items-center rounded-r-full pl-10 sm:bg-dennisDark">
        <div className="w-16 cursor-default text-white sm:text-xl">
          <p className="hidden leading-6 sm:block">Located in Greece</p>
        </div>
        <div className="absolute bottom-[95px] right-3 ml-[82px] h-[65px] w-[65px] rounded-full bg-white/40 sm:relative sm:bottom-0 sm:h-[77px] sm:w-[77px] sm:bg-dennisGray">
          <Lottie
            initialSegment={[26, 114]}
            lottieRef={worlRef}
            loop={true}
            animationData={animationData}
            className="scale-[3.2] sm:scale-[3]"
          />
        </div>
      </div>
      <div className="mr-52 flex items-center justify-center sm:relative">
        <div className="absolute bottom-52 left-5 sm:absolute sm:left-0 sm:top-[-140px]">
          <svg
            data-scroll
            data-scroll-speed={0.1}
            width="23"
            height="23"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.406792 0.406792C0.949181 -0.135597 1.82859 -0.135597 2.37098 0.406792L22.2222 20.258V6.94444C22.2222 6.17739 22.8441 5.55555 23.6111 5.55555C24.3781 5.55555 25 6.17739 25 6.94444V23.6111C25 24.3781 24.3781 25 23.6111 25H6.94444C6.17739 25 5.55555 24.3781 5.55555 23.6111C5.55555 22.8441 6.17739 22.2222 6.94444 22.2222H20.258L0.406792 2.37098C-0.135597 1.82859 -0.135597 0.949181 0.406792 0.406792Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="absolute bottom-[110px] left-5 text-[28px] text-white sm:relative sm:bottom-0 sm:w-[365px] sm:text-5xl">
          Web Developer
        </div>
      </div>
    </div>
  );
}
