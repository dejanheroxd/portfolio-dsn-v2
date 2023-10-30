// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default function SliderText() {
//   const firstText = useRef(null);
//   const secondText = useRef(null);
//   const slider = useRef(null);

//   let xPercent = 0;
//   let direction = -1;

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     gsap.set(secondText.current, {
//       left: secondText.current.getBoundingClientRect().width,
//     });

//     requestAnimationFrame(animate);

//     gsap.to(slider.current, {
//       scrollTrigger: {
//         trigger: document.documentElement,
//         start: 0,
//         end: window.innerHeight,
//         scrub: true,
//         onUpdate: (e) => (direction = e.direction * -1),
//       },
//       x: "-=300px",
//     });
//   }, []);

//   const animate = () => {
//     if (xPercent <= -100) {
//       xPercent = 0;
//     }
//     if (xPercent > 0) {
//       xPercent = -100;
//     }
//     gsap.set(firstText.current, { xPercent: xPercent });
//     gsap.set(secondText.current, { xPercent: xPercent });
//     requestAnimationFrame(animate);
//     xPercent += 0.1 * direction;
//   };
//   return (
//     <div className="sliderContainer absolute h-20 cursor-default text-[130px] text-white sm:text-[270px]">
//       <div ref={slider} className="relative whitespace-nowrap">
//         <p ref={firstText} className="pr-[50px]">
//           Dejan Ntouskas -
//         </p>
//         <p ref={secondText} className="absolute left-full top-0 pr-[50px]">
//           Dejan Ntouskas -
//         </p>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SliderText() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = -1;
  let animationFrameId = null;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(secondText.current, {
      left: secondText.current.getBoundingClientRect().width,
    });

    // Start the animation loop
    animationFrameId = requestAnimationFrame(animate);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: true,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });

    // Cleanup logic when the component unmounts
    return () => {
      // Cancel the animation frame
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      // Disable ScrollTrigger
      if (ScrollTrigger.getAll().length) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  const animate = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    animationFrameId = requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <div className="sliderContainer absolute h-20 cursor-default text-[130px] text-white sm:text-[270px]">
      <div ref={slider} className="relative whitespace-nowrap">
        <p ref={firstText} className="pr-[50px]">
          Dejan Ntouskas -
        </p>
        <p ref={secondText} className="absolute left-full top-0 pr-[50px]">
          Dejan Ntouskas -
        </p>
      </div>
    </div>
  );
}
