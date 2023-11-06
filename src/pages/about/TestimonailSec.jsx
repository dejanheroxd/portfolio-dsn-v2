import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import man from "../../assets/manSpeaking.jpg";
import Stars from "../home/WorkStateSec/Stars";
import man1 from "../../assets/man1.jpg";
import man2 from "../../assets/man2.png";
import man3 from "../../assets/man3.jpeg";

export default function TestimonailSec() {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [-1, 0.9], [400, -12.9]);

  return (
    <div className="w-full border bg-white pt-28 lg:h-[130vh]">
      <div className="borer flex h-[1000px] w-full items-center justify-center pl-8 sm:pl-0">
        <div className="gap-x-24 lg:mr-32 lg:flex">
          <div className="h-[450px] w-[300px] overflow-hidden lg:h-[650px] lg:w-[500px]">
            <img src={man} alt="" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="mt-14 pb-10 text-5xl text-dennisDark lg:text-6xl">
              Client Feedback
            </p>
            <div className="flex flex-col items-center justify-center gap-x-14 gap-y-12 xl:flex-col xl:gap-y-5">
              <div className="flex w-[333px] flex-col sm:w-[400px]">
                <p className="order-2 italic xl:order-2">
                  Dejan's tech skills are <b>fantastic</b>. He makes sure
                  projects work and communicates clearly. A great team player
                  who <b>simplifies complexity</b>.
                </p>
                <div className="order-1 flex items-center gap-x-3 pt-6">
                  <Stars />
                  <p className="w-40 text-[15px] sm:text-base">
                    - Nikos Papandreou
                  </p>
                  <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-500">
                    <img
                      src={man1}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-[333px] flex-col sm:w-[400px]">
                <p className="order-2 italic xl:order-2">
                  Dejan made the whole web development process easy. His{" "}
                  <b>clear communication</b> and skill in explaining complicated
                  ideas helped me grasp the project better.
                </p>
                <div className="order-1 flex items-center gap-x-3 pt-6">
                  <Stars />
                  <p className="w-40 text-[15px] sm:text-base">
                    - Dimitris Georgiou
                  </p>
                  <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-500">
                    <img
                      src={man2}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-[333px] flex-col sm:w-[400px]">
                <p className="order-2 italic xl:order-2">
                  He is excellent developer who is always <b>present</b> and
                  willing to go the extra mile in explaining difficult things
                  and thinking.
                </p>
                <div className="order-1 flex items-center gap-x-3 pt-6">
                  <Stars />
                  <p className="w-40 text-[15px] sm:text-base">
                    - Giorgos Karagiannis
                  </p>
                  <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-500">
                    <img
                      src={man3}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div style={{ height }} className="circleContainer">
        <div className="circle"></div>
      </motion.div>
    </div>
  );
}
