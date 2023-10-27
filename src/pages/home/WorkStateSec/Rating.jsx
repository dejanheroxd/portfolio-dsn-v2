import React from "react";
import Stars from "./Stars";
import man1 from "../../../assets/man1.jpg";
import man2 from "../../../assets/man2.png";
import man3 from "../../../assets/man3.jpeg";

export default function Rating() {
  return (
    <div className="flex h-[620px] pb-[140px] justify-center items-center">
      <div className="flex flex-col xl:flex-row gap-y-12 xl:gap-y-0 justify-center items-center gap-x-14">
        <div className="w-[333px] sm:w-[400px] flex flex-col">
          <p className="italic order-2 xl:order-1">
            Dejan's tech skills are <b>fantastic</b>. He makes sure projects
            work and communicates clearly. A great team player who{" "}
            <b>simplifies complexity</b>.
          </p>
          <div className="flex items-center gap-x-3 pt-6 order-1">
            <Stars />
            <p className="w-40 text-[15px] sm:text-base">- Nikos Papandreou</p>
            <div className="border overflow-hidden h-10 w-10 border-gray-500 rounded-full">
              <img src={man1} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="w-[333px] sm:w-[400px] flex flex-col">
          <p className="italic order-2 xl:order-1">
            Dejan made the whole web development process easy. His{" "}
            <b>clear communication</b> and skill in explaining complicated ideas
            helped me grasp the project better.
          </p>
          <div className="flex items-center gap-x-3 pt-6 order-1">
            <Stars />
            <p className="w-40 text-[15px] sm:text-base">- Dimitris Georgiou</p>
            <div className="border overflow-hidden h-10 w-10 border-gray-500 rounded-full">
              <img src={man2} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="w-[333px] sm:w-[400px] flex flex-col">
          <p className="italic order-2 xl:order-1">
            He is excellent developer who is always <b>present</b> and willing
            to go the extra mile in explaining difficult things and thinking.
          </p>
          <div className="flex items-center gap-x-3 pt-6 order-1">
            <Stars />
            <p className="w-40 text-[15px] sm:text-base">
              - Giorgos Karagiannis
            </p>
            <div className="border overflow-hidden h-10 w-10 border-gray-500 rounded-full">
              <img src={man3} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
