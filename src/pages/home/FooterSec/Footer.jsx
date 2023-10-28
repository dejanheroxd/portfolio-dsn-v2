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
    // Update the current time every second
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="w-full flex justify-between px-14 bg-dennisDark pb-3">
      <div className="flex gap-x-12">
        <div className="flex flex-col gap-y-3">
          <p className="text-neutral-500 text-[13px] font-semibold">VERSION</p>
          <p className="text-white">2024 © Edition</p>
        </div>
        <div className="flex flex-col gap-y-3">
          <p className="text-neutral-500 text-[13px] font-semibold">
            LOCAL TIME
          </p>
          <p className="text-white">{currentTime}</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <p className="text-neutral-500 text-[13px] font-semibold">SOCIALS</p>
        <div className="flex gap-x-7">
          <div className="group/socialLink">
            <p className="text-white hover:cursor-pointer">Awwwards</p>
            <span className="absolute invisible group-hover/socialLink:visible">
              <span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1, transition: { duration: 2 } }}
                className="w-[78px] bg-white block h-[1px]"
              ></span>
            </span>
          </div>
          <div className="group/socialLink">
            <p className="text-white hover:cursor-pointer">Instagram</p>
            <span className="absolute invisible group-hover/socialLink:visible">
              <span className="w-[73px] bg-white block h-[1px]"></span>
            </span>
          </div>
          <div className="group/socialLink">
            <p className="text-white hover:cursor-pointer">Twitter</p>
            <span className="absolute invisible group-hover/socialLink:visible">
              <span className="w-[51px] bg-white block h-[1px]"></span>
            </span>
          </div>
          <div className="group/socialLink">
            <p className="text-white hover:cursor-pointer">LinkedIn</p>
            <span className="absolute invisible group-hover/socialLink:visible">
              <span className="w-[60px] bg-white block h-[1px]"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
