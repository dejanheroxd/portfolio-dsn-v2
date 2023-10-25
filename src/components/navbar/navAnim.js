export const menuSlide = {
  initial: {
    x: "calc(100% + 100px)",
  },
  animate: {
    x: "0%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slide = {
  initial: {
    x: "80px",
  },
  animate: {
    x: "0px",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: "80px",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};
