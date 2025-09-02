import React from "react";

const Button = () => {
  return (
    <button
      type={`button`}
      className={`bg-white flex items-center justify-center  size-36 md:size-68 rounded-full relative before:opacity-0 before:absolute before:inset-0 before:bg-white/10 before:size-full before:rounded-full before:scale-180 md:before:scale-160 group hover:before:opacity-100 before:transition-opacity before:duration-500 ease-out`}
    >
      <span
        className={`text-4 text-blue-900 group-hover:opacity-50 transition-opacity duration-500 ease-out
      `}
      >
        EXPLORE
      </span>
    </button>
  );
};
export default Button;
