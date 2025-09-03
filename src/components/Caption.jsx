import React from "react";

const Caption = ({ number, text, className }) => {
  return (
    <p className={`space-x-6 ${className || ""}`}>
      <span
        className={`font-barlow-condensed font-bold text-white tracking-0.15 opacity-25 text-base md:text-[1.25rem] lg:text-[1.75rem] text-center md:text-left `}
      >
        {number}
      </span>
      <span className={`text-5 text-white uppercase`}>{text}</span>
    </p>
  );
};
export default Caption;
