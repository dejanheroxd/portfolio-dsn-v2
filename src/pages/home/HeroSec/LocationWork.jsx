import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../../../assets/Animation.json";

export default function LocationWork() {
  const worlRef = useRef();

  useEffect(() => {
    worlRef.current.setSpeed(0.55);
  }, []);

  return (
    <div className="flex justify-between items-center left-0 right-0 h-36 sm:absolute top-[39%]">
      <div className="sm:bg-dennisDark w-[280px] items-center h-[110px] flex pl-10 rounded-r-full">
        <div className="text-white w-16 sm:text-xl cursor-default">
          <p className="hidden sm:block leading-6">Located in Greece</p>
        </div>
        <div className="absolute sm:relative bg-white/40 bottom-[95px] right-3 sm:bottom-0 ml-[82px] w-[65px] h-[65px] sm:w-[77px] sm:h-[77px] rounded-full sm:bg-dennisGray">
          <Lottie
            initialSegment={[26, 114]}
            lottieRef={worlRef}
            loop={true}
            animationData={animationData}
            className="scale-[3.2] sm:scale-[3]"
          />
        </div>
      </div>
      <div className="sm:relative mr-52 flex justify-center items-center">
        <div className="absolute bottom-52 left-5 sm:absolute sm:top-[-140px] sm:left-0">
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
        <div className="absolute bottom-[110px] sm:bottom-0 left-5 text-[28px] sm:relative sm:text-5xl sm:w-[365px] text-white">
          Web Developer
        </div>
      </div>
    </div>
  );
}
