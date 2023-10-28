import React from "react";

export default function Work({ name, borderTop }) {
  return (
    <>
      <div
        className={`${
          borderTop ? "border-t" : ""
        } flex h-[70px] w-full justify-between border-b border-neutral-300 px-4 sm:h-[95px] sm:px-5 md:h-[130px] lg:h-[170px] lg:px-14 xl:h-[200px] 2xl:h-[248px] 2xl:px-32`}
      >
        <div className="interactable flex w-[890px] cursor-pointer items-center text-[26px] text-dennisDark duration-300 hover:ml-[-20px] hover:text-neutral-500/50 sm:text-[5vw]">
          <p>{name}</p>
        </div>
        <div className="flex items-center gap-x-4 text-[10px] text-dennisDark sm:text-[11px] md:text-[13px] 2xl:mr-28 2xl:text-[19px]">
          <p>Development</p>
          <button className="rounded-full border border-neutral-300 px-3 py-1  duration-300 hover:border-dennisBlue-100 hover:bg-dennisBlue-100 hover:text-white">
            Code
          </button>
        </div>
      </div>
    </>
  );
}
