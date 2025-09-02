import React from "react";
import logo from "../assets/shared/logo.svg";
const Logo = () => {
  return (
    <div>
      <img src={String(logo)} alt="logo" className={`size-10 md:size-12`} />
    </div>
  );
};
export default Logo;
