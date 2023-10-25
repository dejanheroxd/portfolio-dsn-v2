import React from "react";

export default function LocationWork() {
  return (
    <div className="flex justify-between items-center left-0 right-0 h-36 absolute top-[39%]">
      <div className="bg-dennisDark w-[280px] items-center h-[110px] flex pl-10 rounded-r-full">
        <div className="text-white w-16 sm:text-xl">
          <p className="leading-6">Located in the Greece</p>
        </div>
        <div className="ml-[82px] w-[77px] h-[77px] rounded-full  bg-dennisGray">
          <img src="" alt="" />
        </div>
      </div>
      <div className="relative mr-52 flex justify-center items-center">
        <div className="absolute top-[-140px] left-0">
          <svg
            width="23"
            height="23"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.406792 0.406792C0.949181 -0.135597 1.82859 -0.135597 2.37098 0.406792L22.2222 20.258V6.94444C22.2222 6.17739 22.8441 5.55555 23.6111 5.55555C24.3781 5.55555 25 6.17739 25 6.94444V23.6111C25 24.3781 24.3781 25 23.6111 25H6.94444C6.17739 25 5.55555 24.3781 5.55555 23.6111C5.55555 22.8441 6.17739 22.2222 6.94444 22.2222H20.258L0.406792 2.37098C-0.135597 1.82859 -0.135597 0.949181 0.406792 0.406792Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="text-5xl w-[365px] text-white">Web Developer</div>
      </div>
    </div>
  );
}
