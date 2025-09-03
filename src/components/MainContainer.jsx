import React from "react";
import { motion } from "motion/react";
import { contentTransition } from "../constants.js";

const MainContainer = ({ children, className }) => {
  return (
    <motion.main
      className={`px-6 py-6 md:px-10 md:py-10 lg:py-12 lg:px-0 space-y-6 ${className || ""}`}
      style={{ height: `calc(100vh - 136px)` }}
      {...contentTransition}
    >
      <div className={`max-w-6xl mx-auto h-full `}>{children}</div>
    </motion.main>
  );
};
export default MainContainer;
