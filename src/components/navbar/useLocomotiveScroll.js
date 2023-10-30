import { useEffect } from "react";

export default function useLocomotiveScroll() {
  useEffect(() => {
    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      document.body.style.cursor = "default";
    };

    initLocomotiveScroll();
  }, []);
}
