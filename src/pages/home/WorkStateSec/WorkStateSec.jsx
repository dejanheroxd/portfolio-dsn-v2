import { useEffect, useRef } from "react";
import Statement from "./Statement";
import Work from "./Work";
import Rating from "./Rating";
import { useScroll, useTransform, motion } from "framer-motion";

export default function WorkStateSec() {
  useEffect(() => {
    const animateTrailer = (e, interacting) => {
      if (e) {
        const x = e.clientX - trailer.offsetWidth / 2;
        const y = e.clientY - trailer.offsetHeight / 2;

        const keyframes = {
          transform: `translate(${x}px, ${y}px) scale(${interacting ? 10 : 1})`,
        };

        trailer.animate(keyframes, {
          duration: 200,
          fill: "forwards",
        });

        if (interacting) {
          trailer.innerHTML = "View";
          trailer.style.backgroundColor = "#455CE9";
        } else {
          trailer.innerHTML = "";
          trailer.style.backgroundColor = "#1C1D20";
        }
      }
    };

    let interacting = false;
    const trailer = document.getElementById("trailer");

    window.onmousemove = (e) => {
      const interactable = e.target.closest(".interactable");
      interacting = interactable !== null;

      animateTrailer(e, interacting);

      trailer.dataset.type = interacting ? interactable.dataset.type : "";
    };

    return () => {
      window.onmousemove = null;
    };
  }, []);

  // const container = useRef(null);
  const { scrollYProgress } = useScroll({
    // target: container,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [-1, 0.9], [400, -12.9]);

  return (
    <>
      <div className="workSec relative h-[150vh] md:h-[180vh] 2xl:h-[200vh]">
        <motion.div
          id="trailer"
          className="flex items-center justify-center text-[2px] text-white"
        ></motion.div>
        <Statement />
        <div className="h-[800px] px-6 sm:px-16 md:px-20 2xl:px-40">
          <div>
            <p className="hidden pb-8 pl-14 text-neutral-500 sm:block sm:text-[10px] md:text-[11px] lg:text-[14px] xl:pb-12 xl:pl-[135px]">
              Recent Work
            </p>
          </div>
          <Work
            borderTop={true}
            name={"ENERGYM"}
            siteLink={"https://energym-fit.netlify.app"}
          />
          <Work
            borderTop={false}
            name={"DALFORNO"}
            siteLink={"https://dalforno.netlify.app"}
          />
          <Work borderTop={false} name={"MARCUS"} />
          <Work
            borderTop={false}
            name={"BUREAU"}
            siteLink={"https://mobileau.netlify.app/"}
          />
        </div>
      </div>
      <Rating />
      <motion.div style={{ height }} className="circleContainer">
        <div className="circle"></div>
      </motion.div>
    </>
  );
}
