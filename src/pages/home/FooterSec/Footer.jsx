import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  function getCurrentTime() {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZoneName: "short",
    };
    const formattedTime = new Date().toLocaleString("en-US", options);
    return formattedTime;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex w-full flex-col justify-between bg-dennisDark px-3 pb-8 sm:flex-row lg:px-14">
      <div className="flex gap-x-12 pb-3 pl-[5px] sm:pb-0 sm:pl-0">
        <div className="flex flex-col gap-y-3">
          <p className="text-[13px] font-semibold text-neutral-500">VERSION</p>
          <p className="text-white">2024 © Edition</p>
        </div>
        <div className="flex flex-col gap-y-3">
          <p className="text-[13px] font-semibold text-neutral-500">
            LOCAL TIME
          </p>
          <p className="text-white">{currentTime}</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 pl-[5px] sm:pl-0">
        <p className="text-[13px] font-semibold text-neutral-500">NUMBER</p>
        <p className="relative z-10 text-white">+30 6 94 97 373 59</p>
        {/* <div className="flex gap-x-6 xl:gap-x-7">
          <div className="group/socialLink">
            <p className="text-white hover:cursor-pointer">Awwwards</p>
            <span className="invisible absolute group-hover/socialLink:visible">
              <span className="block h-[1px] w-[78px] bg-white"></span>
            </span>
          </div>
          <div className="group/socialLink">
            <p className="text-white hover:cursor-pointer">Instagram</p>
            <span className="invisible absolute group-hover/socialLink:visible">
              <span className="block h-[1px] w-[73px] bg-white"></span>
            </span>
          </div>
          <div className="group/socialLink">
            <p className="text-white hover:cursor-pointer">Twitter</p>
            <span className="invisible absolute group-hover/socialLink:visible">
              <span className="block h-[1px] w-[51px] bg-white"></span>
            </span>
          </div>
          <div className="group/socialLink">
            <p className="text-white hover:cursor-pointer">LinkedIn</p>
            <span className="invisible absolute group-hover/socialLink:visible">
              <span className="block h-[1px] w-[60px] bg-white"></span>
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
