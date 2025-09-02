import React, { useRef, useEffect } from "react";
import close from "../assets/shared/icon-close.svg";
import { navLinks } from "../constants.js";
import { NavLink } from "react-router";
import { motion } from "motion/react";

const Sidebar = ({ toggle }) => {
  const sideBarRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      // check if sidebar is rendered and if the clicked element is NOT inside the sidebar
      if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
        console.log(sideBarRef.current);
        toggle();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [toggle]);
  const framerSideBar = {
    initial: { x: `100%` },
    animate: { x: `0%` },
    exit: { x: `100%` },
    transition: { duration: 0.5 },
  };
  return (
    <motion.aside
      {...framerSideBar}
      className={`fixed z-10 top-0 right-0 bottom-0 h-full w-[70vw] bg-blue-900/15 backdrop-blur-xl pl-8 flex flex-col gap-12`}
      ref={sideBarRef}
    >
      <div className={`py-8 flex items-center justify-end pr-8`}>
        <button type={`button`} onClick={toggle}>
          <img src={String(close)} alt="close" />
        </button>
      </div>
      <ul className={`space-y-8`}>
        {navLinks.map(({ id, label, number, route }) => (
          <li key={id}>
            <NavLink
              to={route}
              className={({ isActive }) =>
                `flex text-white ${isActive && "border-r-2"}`
              }
            >
              <span className={`text-8-bold pr-3 basis-1/8`}>{number}</span>
              <span className={`text-8 uppercase basis-7/8`}>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.aside>
  );
};
export default Sidebar;
