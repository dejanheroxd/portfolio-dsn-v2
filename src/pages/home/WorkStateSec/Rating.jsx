import React from "react";
import Stars from "./Stars";
import man1 from "../../../assets/men1.jpg";
import man2 from "../../../assets/men2.jpg";
import man3 from "../../../assets/men3.jpg";

export default function Rating() {
  return (
    <div className="flex h-[620px] items-center justify-center pb-[140px]">
      <div className="flex flex-col items-center justify-center gap-x-14 gap-y-12 xl:flex-row xl:gap-y-0">
        <div className="flex w-[333px] flex-col sm:w-[400px]">
          <p className="order-2 italic xl:order-1">
            Dejan's tech skills are <b>fantastic</b>. He makes sure projects
            work and communicates clearly. A great team player who{" "}
            <b>simplifies complexity</b>.
          </p>
          <div className="order-1 flex items-center gap-x-3 pt-6">
            <Stars />
            <p className="w-40 text-[15px] sm:text-base">- Nikos Papandreou</p>
            <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-500">
              <img src={man1} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
        <div className="flex w-[333px] flex-col sm:w-[400px]">
          <p className="order-2 italic xl:order-1">
            Dejan made the whole web development process easy. His{" "}
            <b>clear communication</b> and skill in explaining complicated ideas
            helped me grasp the project better.
          </p>
          <div className="order-1 flex items-center gap-x-3 pt-6">
            <Stars />
            <p className="w-40 text-[15px] sm:text-base">- Dimitra Georgiou</p>
            <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-500">
              <img src={man2} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
        <div className="flex w-[333px] flex-col sm:w-[400px]">
          <p className="order-2 italic xl:order-1">
            He is excellent developer who is always <b>present</b> and willing
            to go the extra mile in explaining difficult things and thinking.
          </p>
          <div className="order-1 flex items-center gap-x-3 pt-6">
            <Stars />
            <p className="w-40 text-[15px] sm:text-base">
              - Giorgos Karagiannis
            </p>
            <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-500">
              <img src={man3} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
