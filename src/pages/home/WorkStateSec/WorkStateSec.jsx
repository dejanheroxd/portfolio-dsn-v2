import { useEffect } from "react";
import Statement from "./Statement";
import Work from "./Work";

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

  return (
    <div className="relative workSec">
      <div
        id="trailer"
        className="text-white text-[2px] flex justify-center items-center"
      ></div>
      <Statement />
      <div className="h-[800px] px-6 sm:px-16 md:px-20 2xl:px-40">
        <div>
          <p className="text-neutral-500 text-[14px] pb-12 pl-[135px]">
            Recent Work
          </p>
        </div>
        <Work borderTop={true} name={"ENERGYM"} />
        <Work borderTop={false} name={"DALFORNO"} />
        <Work borderTop={false} name={"MARCUS"} />
        <Work borderTop={false} name={"BUREAU"} />
      </div>
    </div>
  );
}
