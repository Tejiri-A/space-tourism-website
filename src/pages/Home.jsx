import React from "react";
import { motion } from "motion/react";
import Button from "../components/Button.jsx";
import { Link } from "react-router";
import { contentTransition, pageTransition } from "../constants.js";

const Home = () => {
  // Styling constants
  const backgroundStyles =
    "absolute inset-0 w-full h-screen bg-main bg-home -z-10";
  const mainContainerStyles =
    "px-6 py-6 md:py-32 md:px-10 lg:px-0 lg:flex lg:items-end";
  const contentGridStyles =
    "max-w-6xl mx-auto grid grid-rows-2 md:grid-rows-[1fr_max-content] md:gap-12 md:px-22 lg:px-0 lg:grid-rows-none lg:grid-cols-2 lg:items-end";
  const textSectionStyles = "text-white space-y-6 text-center lg:text-left";
  const subtitleStyles = "uppercase text-5 text-blue-300";
  const headingStyles = "text-1 uppercase";
  const paragraphStyles = "text-9 text-blue-300";
  const buttonContainerStyles = "flex items-center justify-center";

  const mainHeightStyle = {
    minHeight: `calc(100vh - 136px)`,
  };

  return (
    <>
      <motion.div className={backgroundStyles} {...pageTransition} />
      <motion.main
        className={mainContainerStyles}
        style={mainHeightStyle}
        {...contentTransition}
      >
        <motion.div className={contentGridStyles}>
          <div className={textSectionStyles}>
            <p className={subtitleStyles}>so, you want to travel to</p>
            <h1 className={headingStyles}>space</h1>
            <p className={paragraphStyles}>
              Let's face it; if you want to go up to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. We'll sit back, and relax because we'll give you a truly out
              of this world experience!
            </p>
          </div>
          <div className={buttonContainerStyles}>
            <Link to="/destination">
              <Button />
            </Link>
          </div>
        </motion.div>
      </motion.main>
    </>
  );
};

export default Home;
