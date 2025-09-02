import React, { useEffect, useState } from "react";
import Logo from "./Logo.jsx";
import { Link, NavLink, useLocation } from "react-router";
import hamburger from "../assets/shared/icon-hamburger.svg";
import Sidebar from "./Sidebar.jsx";

import { AnimatePresence } from "motion/react";
import { navLinks } from "../constants.js";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleSideBar = () => setOpen(!open);

  // Close sidebar on page change
  const path = useLocation().pathname;
  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <>
      <nav
        className={`flex justify-between py-6 md:py-0 md:grid md:grid-cols-[max-content_1fr] md:items-stretch md:gap-8 lg:grid-cols-2 lg:gap-x-0 lg:mt-10`}
      >
        <div
          className={`pl-6 md:pl-10 lg:pl-16 md:py-6 lg:flex lg:items-center lg:gap-16`}
        >
          <Link
            to={`/`}
            className={`${path === "/" && "pointer-events-none"} shrink-0`}
          >
            <Logo />
          </Link>
          <div
            className={` hidden bg-white opacity-25 lg:block h-[1px] w-full `}
          ></div>
        </div>

        <div
          className={` hidden bg-white/5 background-blur-xl md:grid grid-cols-[repeat(4,min-content)]  justify-end  gap-x-8 px-10 lg:-ml-16 `}
        >
          {navLinks.map(({ id, label, number, route }, index) => (
            <NavLink
              to={route}
              key={id}
              className={`text-white flex items-center gap-3 text-8 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-white before:opacity-0 before:transition-opacity before:duration-500 ease-out hover:before:opacity-50 [&.active]:before:opacity-100`}
            >
              <span
                className={`font-bold ${index === 0 && path === "/" && `hidden`}`}
              >
                {number}
              </span>
              <span className={`uppercase`}>{label}</span>
            </NavLink>
          ))}
        </div>
        <div className={`flex items-center justify-end pr-6 md:hidden`}>
          <button type={`button`} className={`cursor-pointer`}>
            <img
              src={String(hamburger)}
              alt="hamburger"
              className={`w-6 h-5.25`}
              onClick={toggleSideBar}
            />
          </button>
        </div>
      </nav>
      <AnimatePresence mode={`wait`} initial={false}>
        {open && <Sidebar toggle={toggleSideBar} />}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
