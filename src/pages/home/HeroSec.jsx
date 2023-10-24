import React from "react";
import dennis from "../../assets/dennis.jpg";

export default function HeroSec() {
  return (
    <div className="h-[110vh] w-screen bg-[#999D9E]">
      <div className="h-full w-full flex justify-center">
        <div className="h-full w-[995px] overflow-hidden">
          <img src={dennis} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}
