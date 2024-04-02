import React from "react";
import dennis from "../../../assets/dennis.jpg";
import LocationWork from "./LocationWork";
import SliderText from "./SliderText";
import useLocomotiveScroll from "../../../components/navbar/useLocomotiveScroll";

export default function HeroSec() {
  useLocomotiveScroll();

  return (
    <div className="relative h-[116vh] overflow-hidden bg-dennisGray">
      <div className="flex h-full  justify-center border">
        <div className="h-full w-[995px] overflow-hidden">
          <img
            src={dennis}
            alt=""
            className="h-full w-full object-cover sm:scale-[1.17]"
          />
        </div>
      </div>
      <LocationWork />
      <SliderText />
    </div>
  );
}
