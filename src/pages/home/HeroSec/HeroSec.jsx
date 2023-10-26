import React from "react";
import dennis from "../../../assets/dennis.jpg";
import LocationWork from "./LocationWork";
import SliderText from "./SliderText";

export default function HeroSec() {
  return (
    <div className="relative h-[116vh] w-screen bg-dennisGray overflow-hidden">
      <div className="h-full w-full flex justify-center">
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
