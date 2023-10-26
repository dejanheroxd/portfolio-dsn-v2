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
        } else {
          trailer.innerHTML = "";
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
      <Work />
    </div>
  );
}
