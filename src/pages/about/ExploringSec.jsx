import React from "react";
import dennisExp from "../../assets/dennis-about.jpg";
import useLocomotiveScroll from "../../components/navbar/useLocomotiveScroll";

export default function ExploringSec() {
  useLocomotiveScroll();

  return (
    <div className="flex w-full justify-center pt-40 ">
      <div className="relative ml-6 flex h-[1100px] w-[1440px] overflow-hidden sm:ml-40">
        <div
          data-scroll
          data-scroll-speed={-0.3}
          className="mr-20 mt-[700px] text-[19px] sm:mt-[290px] md:w-[250px] lg:w-[340px]"
        >
          <p className="mb-5 text-dennisDark">
            I help companies from all over the world with tailor-made solutions.
            With each project, I push my work to new horizons, always putting
            quality first.
          </p>
          <p className="text-neutral-400">Always exploring...</p>
        </div>
        <div className="absolute right-[17px] top-[-300px] h-[750px] overflow-hidden sm:right-10 sm:h-[950px] sm:w-[340px] lg:right-10 lg:h-[1150px] lg:w-[540px] xl:right-10 xl:h-[1400px] xl:w-[790px] 2xl:right-[-10px] 2xl:h-[1650px] 2xl:w-[1040px]">
          <img
            data-scroll
            data-scroll-speed={-0.4}
            src={dennisExp}
            alt=""
            className="h-full w-full object-cover object-bottom"
          />
        </div>
      </div>
    </div>
  );
}
