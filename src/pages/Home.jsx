import React from "react";
import { motion } from "motion/react";
import Button from "../components/Button.jsx";
import { Link } from "react-router";
import { pageTransition } from "../constants.js";

const Home = () => {
  return (
    <>
      <motion.div
        className={`absolute inset-0 w-full h-full bg-main bg-home -z-10`}
        {...pageTransition}
      ></motion.div>
      <motion.main
        className={` px-6 py-6 md:py-32 md:px-10 lg:px-0  lg:flex lg:items-end`}
        style={{ height: `calc(100vh - 136px)` }}
        {...pageTransition}
      >
        <div
          className={` max-w-6xl mx-auto grid grid-rows-2 md:grid-rows-[1fr_max-content] md:gap-12 lg:grid-rows-none lg:grid-cols-2 lg:items-end`}
        >
          <div className={`text-white space-y-6 text-center lg:text-left`}>
            <p className={`uppercase text-5 text-blue-300`}>
              so, you want to travel to
            </p>
            <h1 className={`text-1 uppercase`}>space</h1>
            <p className={`text-9 text-blue-300`}>
              Let's face it; if you want to go up to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. We'll sit back, and relax because we'll give you a truly out
              of this world experience!
            </p>
          </div>
          <div className={`flex items-center justify-center`}>
            <Link to={`/destination`}>
              <Button />
            </Link>
          </div>
        </div>
      </motion.main>
    </>
  );
};
export default Home;
