import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/Animation.json";

export default function HeadingSec() {
  const worlRef = useRef();

  useEffect(() => {
    worlRef.current.setSpeed(0.55);
  }, []);

  return (
    <div className="relative flex w-full flex-col items-center justify-center pt-20 sm:pt-40">
      <div className="w-[310px] border-b border-neutral-300 pb-[73px] sm:w-[770px] sm:pb-32 lg:w-[910px] xl:w-[1040px] 2xl:w-[1280px]">
        <p className="w-[310px] text-[45px] leading-[50px] text-dennisDark sm:w-[600px] sm:text-[6vw] sm:leading-[75px] lg:w-[700px] lg:leading-[90px] xl:w-[940px] xl:leading-[105px] 2xl:w-[1200px] 2xl:leading-[135px]">
          Helping brands thrive in the digital world
        </p>
      </div>
      <div className="absolute bottom-[-69px] right-[55px] h-28 w-28 rounded-full bg-dennisBlue-100 sm:bottom-[-70px] sm:right-[150px] lg:bottom-[-77px] lg:right-[200px] lg:h-40 lg:w-40 xl:bottom-[-100px] xl:right-[350px] xl:h-52 xl:w-52 2xl:right-[415px]">
        <Lottie
          initialSegment={[26, 114]}
          lottieRef={worlRef}
          loop={true}
          animationData={animationData}
          className="scale-[2] sm:scale-[1.7]"
        />
        <svg
          width="20"
          height="20"
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
    </div>
  );
}
