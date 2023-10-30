import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Transition({ children, page }) {
  const [isBlack, setIsBlack] = useState(true);

  useEffect(() => {
    document.body.style.cursor = "wait";
    setTimeout(() => {
      setIsBlack(false);
      document.body.style.cursor = "default";
    }, 1400);
  }, []);

  return (
    <>
      {children}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: isBlack ? 1 : 0 }}
        exit={{ scaleY: 0, originY: 0 }}
        transition={{ duration: 0.7 }}
        className="fixed left-0 top-0 z-50 h-screen w-full origin-top bg-dennisDark"
      />
      {isBlack && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform text-white"
          >
            <div className="text-5xl lg:text-7xl">
              <p className="">{page}</p>
              <span className="absolute left-[-30px] top-4 lg:top-7">
                <span className="block h-3 w-3 rounded-full bg-white"></span>
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
