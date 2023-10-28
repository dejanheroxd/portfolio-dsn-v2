import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function PreLoader() {
  const [index, setIndex] = useState(0);
  const words = [
    "Hello",
    "Bonjour",
    "Ciao",
    "Olà",
    "你好",
    "Guten tag",
    "Përshëndetje",
    "Γεια σας",
  ];

  useEffect(() => {
    if (index == words.length - 1) return;

    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150,
    );
  }, [index]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{
        y: "-100vh",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
      }}
      className="fixed left-0 top-0 z-[99999] flex h-screen w-screen items-center justify-center bg-dennisDark text-white"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.3 } }}
        className="relative"
      >
        <p className="text-5xl lg:text-7xl">
          {words[index]}
          <span className="absolute left-[-30px] top-4 lg:top-7">
            <span className="block h-3 w-3 rounded-full bg-white"></span>
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
}
