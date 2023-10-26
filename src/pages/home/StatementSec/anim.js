import { delay } from "framer-motion";

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 1 },
  },
  closed: { opacity: 0, transition: { duration: 1 } },
};

export const slideUp = {
  initial: {
    y: 100,
  },
  open: (i) => ({
    y: 0,
    transition: { duration: 0.6, delay: 0.01 * i },
  }),
  closed: {
    y: 100,
    transition: { duration: 0.6 },
  },
};
