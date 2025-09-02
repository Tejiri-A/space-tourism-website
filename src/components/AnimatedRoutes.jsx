import React from "react";
import { Route, Routes, useLocation } from "react-router";
import { Crew, Destination, Error, Home, Technology } from "../pages/index.js";
import { AnimatePresence } from "motion/react";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path={`destination`} element={<Destination />} />
        <Route path={`crew`} element={<Crew />} />
        <Route path={`technology`} element={<Technology />} />
        <Route path={`*`} element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
};
export default AnimatedRoutes;
